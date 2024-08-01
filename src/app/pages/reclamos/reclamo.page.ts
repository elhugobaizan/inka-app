import { Component, OnInit } from '@angular/core';
import { Categoria, Ubicacion, Guia } from '../../utils/interfaces_precarga';
import { ESTADORECLAMO, Reclamo } from '../../utils/interfaces-app';
import { InkaService } from 'src/app/utils/inka.service';
import { IonImg, ModalController } from '@ionic/angular';
import { ThanksPageComponent } from 'src/app/components/thanks-page/thanks-page.component';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-reclamo',
  templateUrl: './reclamo.page.html',
  styleUrls: ['./reclamo.page.scss'],
})
export class ReclamoPage implements OnInit {

  public categorias: Categoria[] = [];
  public ubicaciones: Ubicacion[] = [];
  public guias: Guia[] = [];
  public reclamo: Reclamo = {
    categoriaId: 0,
    estado: ESTADORECLAMO.iniciado,
    guiaId: 0,
    id: 0,
    texto: '',
    ubicacionId: 0,
    usuarioId: 0
  };
  public reclamoEnviado: boolean = false;
  public loggedUser: any = null;
  public textos: any = null;
  public alertButtons: any = null;

  constructor(
    private servicio: InkaService,
    private modalController: ModalController
  ) {
    this.loggedUser = JSON.parse(localStorage.getItem("loggedUser") || "{undefined}");
    this.nuevoReclamo();
    this.textos = this.servicio.getI18Ntextos("reclamos", this.loggedUser.idioma);
  }

  ngOnInit() {
    this.servicio.getCategorias().subscribe({
      next: (response) => {
        this.categorias = response;
      },
      error: (e) => {
        console.log(e);
      }
    });

    this.servicio.getGuias().subscribe({
      next: (response) => {
        this.guias = response;
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  nuevoReclamo() {
    this.reclamoEnviado = false;
    this.reclamo = {
      id: 0,
      usuarioId: parseInt(this.loggedUser.token),
      categoriaId: 0,
      ubicacionId: 0,
      guiaId: 0,
      texto: "",
      estado: ESTADORECLAMO.iniciado
    };

    return this.reclamo;
  }

  enviarReclamo() {
    console.log("Enviando este reclamo: " + JSON.stringify(this.reclamo));
    //this.servicio.nuevoReclamo(this.reclamo);
    this.reclamoEnviado = true;
    this.openModal();
  }

  irA(path: string) {
    this.servicio.irA(path);
  }

  fillUbicaciones(id: number) {
    this.ubicaciones = this.categorias.find((categoria) => categoria.id === id)?.ubicaciones as Ubicacion[];
  }

  changeAcordeon(event: any) {
    if (event.detail.value === 'guias') {
      this.reclamo.categoriaId = 0;
      this.reclamo.ubicacionId = 0;
    } else if (event.detail.value === 'servicios') {
      this.reclamo.guiaId = 0;
    } else {
      console.log(this.textos.error + "Accordion onChange, " + event.detail.value);
    }
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: ThanksPageComponent
    });
    modal.present();
  }

  
  async takePicture(foto: IonImg) {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });
  
    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    var imageUrl = image.webPath;
  
    // Can be set to the src of an image now
    foto.src = imageUrl;
  };
}
