import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Output, Input  } from '@angular/core';

@Component({
  selector: 'inka-survey-item',
  templateUrl: './survey-box.component.html',
  styleUrls: ['./survey-box.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SurveyBoxComponent  implements OnInit {
  @Input() titulo: string = '';
  @Input() subtitulo: string = '';
  @Input() icono: string = '';
  @Input() imagen: string = '';
  @Output() actionClicked = new EventEmitter<number>();

  constructor() { }

  onClick() {
    this.actionClicked.emit();
  }
  ngOnInit() {}

}