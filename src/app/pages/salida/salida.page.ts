import { Component, OnInit, ViewChild } from '@angular/core';
import { Salida, Usuario } from '../../utils/interfaces_precarga';
import { InkaService } from 'src/app/utils/inka.service';
import { AnimationController, IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-salida',
  templateUrl: './salida.page.html',
  styleUrls: ['./salida.page.scss'],
})
export class SalidaPage implements OnInit {
  @ViewChild(IonModal) modal: IonModal | undefined

  public salida: Salida = {
    id: 0,
    descripcion: "",
    itinerario: [{
      dia: 0,
      titulo: "",
      detalle: ""
    }]
  };
  public diaElegido = {
    dia: 0,
    titulo: "",
    detalle: ""
  };
  public usuario: Usuario = {
    apellido: "",
    id_cliente: 0,
    id_salida: 0,
    idioma: "",
    mail: "",
    nombre: "",
    salida: ""
  };

  constructor(
    private servicio: InkaService,
    private animationCtrl: AnimationController,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    let usuario: Usuario = JSON.parse(localStorage.getItem("loggedUser") || "{undefined}");
    this.salida.id = usuario.id_salida;
    this.salida.descripcion = usuario.salida;
  }

  itinerario() {
    this.servicio.irA(`pages/salida/${this.salida.id}`);
  }
}