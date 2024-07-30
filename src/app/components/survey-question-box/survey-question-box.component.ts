import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Output, Input  } from '@angular/core';
import { RatingComponent } from '../rating/rating.component';

@Component({
  selector: 'inka-survey-question',
  templateUrl: './survey-question-box.component.html',
  styleUrls: ['./survey-question-box.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [RatingComponent]
})
export class SurveyQuestionBoxComponent  implements OnInit {
  @Output() actionClicked = new EventEmitter<number>();
  respuesta: number = 0;

  constructor() { }

  onClick() {
    this.actionClicked.emit();
  }
  ngOnInit() {}

}