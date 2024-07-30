import { Component, OnInit, ViewChild } from '@angular/core';
import { Salida } from '../../utils/interfaces_precarga';
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
    id: "0",
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

  constructor(
    private servicio: InkaService,
    private animationCtrl: AnimationController,
    private route: ActivatedRoute
  ) {
  }


  ngOnInit() {
    let id = this.route.snapshot.params["id"];
    this.salida.id = id;
    this.salida = this.servicio.getSalida(this.salida.id);
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