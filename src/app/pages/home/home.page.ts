import { Component } from '@angular/core';
import { InkaService } from '../../utils/inka.service';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from '../../utils/interfaces_precarga';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public rating: number = 0;
  public usuario: Usuario = {
    apellido: "",
    id_cliente: 0,
    id_salida: 0,
    idioma: "",
    mail: "",
    nombre: "",
    salida: ""
  };
  public textos: any = null;

  constructor(
    private servicio: InkaService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem("loggedUser") || "{undefined}");
    if (this.usuario.id_cliente != 0) {
      this.textos = this.servicio.getI18Ntextos("home", this.usuario.idioma);
    } else {
      this.servicio.irA('login');
    }
  }

  ionViewWillEnter() {
    if (this.usuario.id_cliente != 0) {
      this.textos = this.servicio.getI18Ntextos("home", this.usuario.idioma);
    } else {
      this.servicio.mostrarMensaje("Error recuperando idioma", "danger");
    }
  }


  irA(path: string) {
    this.servicio.irA(path);
  }
}
