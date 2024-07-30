import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, OnInit, Output } from '@angular/core';

enum COLORS {
  grey = "#A0A0A0",
  green = "red",
  yellow = "red",
  red = "red"
}

@Component({
  selector: 'rating',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule],
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit {
  @Input() rating: number = 0;
  @Output() ratingChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit() { }

  rate(index: number) {
    // function used to change the value of our rating 
    // triggered when user, clicks a star to change the rating
    this.rating = index;
    console.log(index);
    this.ratingChange.emit(this.rating);
  }

  getColor(index: number) {
    if (this.isAboveRating(index)) {
      return COLORS.grey;
    }
    switch (this.rating) {
      case 1:
      case 2:
        return COLORS.red;
      case 3:
        return COLORS.yellow;
      case 4:
      case 5:
        return COLORS.green;
      default:
        return COLORS.grey;
    }
    /* function to return the color of a star based on what
     index it is. All stars greater than the index are assigned
     a grey color , while those equal or less than the rating are
     assigned a color depending on the rating. Using the following criteria:
  
          1-2 stars: red
          3 stars  : yellow
          4-5 stars: green 
    */
  }

  isAboveRating(index: number): boolean {
    return index > this.rating;
  }
}
