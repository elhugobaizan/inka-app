import { Component, OnInit, ViewChild } from '@angular/core';
import { Salida } from '../../utils/interfaces_precarga';

@Component({
  selector: 'app-salidas',
  templateUrl: './salidas.page.html',
  styleUrls: ['./salidas.page.scss'],
})
export class SalidasPage implements OnInit {

  public salidas: Salida[] = [];

  constructor() { }

  ngOnInit() {
  }

}
