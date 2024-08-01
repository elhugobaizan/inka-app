import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Output, Input  } from '@angular/core';

@Component({
  selector: 'inka-card-button',
  templateUrl: './inka-card-button.component.html',
  styleUrls: ['./inka-card-button.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class InkaCardButtonComponent  implements OnInit {
  @Input() titulo: string = '';
  @Input() subtitulo: string = '';
  @Input() icono: string = '';
  @Input() imagen: string = '';
  @Output() actionClicked = new EventEmitter<number>();
  @Output() cardClicked = new EventEmitter<number>();

  constructor() { }

  onClick() {
    this.cardClicked.emit();
  }
  
  onActionClick() {
    this.actionClicked.emit();
  }
  
  ngOnInit() {}

}