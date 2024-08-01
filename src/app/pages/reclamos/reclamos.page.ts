import { Component, OnInit } from '@angular/core';
import { Categoria, Ubicacion, Guia } from '../../utils/interfaces_precarga';
import { ESTADORECLAMO, Reclamo } from '../../utils/interfaces-app';
import { InkaService } from 'src/app/utils/inka.service';

@Component({
  selector: 'app-reclamos',
  templateUrl: './reclamos.page.html',
  styleUrls: ['./reclamos.page.scss'],
})
export class ReclamosPage implements OnInit {

  public loggedUser: any = null;
  public textos: any = null;
  public reclamos: Reclamo[] = [];

  constructor(
    private servicio: InkaService
  ) {
    this.loggedUser = JSON.parse(localStorage.getItem("loggedUser") || "{undefined}");
    this.textos = this.servicio.getI18Ntextos("reclamos", this.loggedUser.idioma);
  }

  ngOnInit() {
    this.textos = this.servicio.getI18Ntextos("reclamos", this.loggedUser.idioma);
  }


  ionViewWillEnter() {
    this.textos = this.servicio.getI18Ntextos("reclamos", this.loggedUser.idioma);
  }

  irA(path: string) {
    this.servicio.irA(path);
  }
}
