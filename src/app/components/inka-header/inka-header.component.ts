import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'inka-header',
  templateUrl: './inka-header.component.html',
  styleUrls: ['./inka-header.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule]
})
export class InkaHeaderComponent  implements OnInit {
  @Input() clase: string = '';
  @Input() atras: string = '';
  @Output() backClicked = new EventEmitter<number>();

  constructor(private router: Router) { }

  onBackClick() {
    this.router.navigateByUrl(this.atras);
    this.backClicked.emit();
  }

  ngOnInit() {}
}