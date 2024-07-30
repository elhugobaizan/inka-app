import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, OnInit, Output } from '@angular/core';

enum COLORS {
  white = "#FFFFFF",
  green = "#fcf112",
  yellow = "#fcf112",
  red = "#fcf112",
  black = "#000000"
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

  getStroke(index: number) {
    if (this.isAboveRating(index)) {
      return COLORS.black;
    }
    switch (this.rating) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        return COLORS.white;
      default:
        return COLORS.black;
    }
  }

  getColor(index: number) {
    if (this.isAboveRating(index)) {
      return COLORS.white;
    }
    switch (this.rating) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        return COLORS.green;
      default:
        return COLORS.white;
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
