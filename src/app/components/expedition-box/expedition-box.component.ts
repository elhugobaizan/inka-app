import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'inka-expedition',
  templateUrl: './expedition-box.component.html',
  styleUrls: ['./expedition-box.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ExpeditionBoxComponent  implements OnInit {
  @Input() accion: string = '';
  @Input() encabezado: string = '';
  @Input() titulo: string = '';
  @Input() subtitulo: string = '';
  @Input() texto: string = '';
  @Input() imagen: string = '';
  @Output() actionClicked = new EventEmitter<number>();

  constructor() { }

  onClick() {
    this.actionClicked.emit();
  }
  ngOnInit() {}

}
