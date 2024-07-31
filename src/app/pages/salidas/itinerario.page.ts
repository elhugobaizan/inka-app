import { Component, OnInit, ViewChild } from '@angular/core';
import { Salida, Usuario } from '../../utils/interfaces_precarga';
import { InkaService } from 'src/app/utils/inka.service';
import { AnimationController, IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-itinerario',
  templateUrl: './itinerario.page.html',
  styleUrls: ['./itinerario.page.scss'],
})
export class ItinerarioPage implements OnInit {
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

  /////////////////////////////////MODAL/////////////////////////////
  name: string = "";
  message: string = "";
  isModalOpen: boolean = false;
  diaId: number = 0;

  cancelModal() {
    if (this.modal) {
      //this.modal.dismiss(null, 'cancel');
      this.isModalOpen = false;
    }
  }

  openModal(id: number) {
    if (this.modal) {
      let res = this.salida.itinerario.find((dia) => dia.dia === id);
      this.diaElegido = {
        dia: id,
        titulo: res ? res.titulo : "",
        detalle: res ? res.detalle : ""
      };
      this.isModalOpen = true;
    }
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>
    if (ev.detail.role === 'confirm') {
      this.message = 'Hello';
    }
  }

  /*enterAnimation(baseEl: HTMLElement) {
    const root: any = baseEl.shadowRoot;

    const backdropAnimation = this.animationCtrl
      .create()
      .addElement(root.querySelector('ion-backdrop')!)
      .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

    const wrapperAnimation = this.animationCtrl
      .create()
      .addElement(root.querySelector('.modal-wrapper')!)
      .keyframes([
        { offset: 0, opacity: '0', transform: 'scale(0)' },
        { offset: 1, opacity: '0.99', transform: 'scale(1)' },
      ]);

    return this.animationCtrl
      .create()
      .addElement(baseEl)
      .easing('ease-out')
      .duration(500)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  }

  leaveAnimation(baseEl: HTMLElement) {
    return this.enterAnimation(baseEl).direction('reverse');
  }*/
  /////////////////////////////////MODAL/////////////////////////////
}