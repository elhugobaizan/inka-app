import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Output, Input  } from '@angular/core';

@Component({
  selector: 'inka-button',
  templateUrl: './button-box.component.html',
  styleUrls: ['./button-box.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ButtonBoxComponent  implements OnInit {
  @Input() titulo: string = '';
  @Input() imagen: string = '';
  @Output() actionClicked = new EventEmitter<number>();

  constructor() { }

  onClick() {
    this.actionClicked.emit();
  }
  ngOnInit() {}

}