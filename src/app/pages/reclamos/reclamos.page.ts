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
    private servicio: InkaService
  ) {
    this.loggedUser = JSON.parse(localStorage.getItem("loggedUser") || "{undefined}");
    this.nuevoReclamo();
    this.textos = this.servicio.getI18Ntextos("reclamos", this.loggedUser.idioma);
    this.generarAlert();
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

  generarAlert() {
    this.alertButtons = [
      {
        text: this.textos.alert.buttonSi,
        handler: () => {
          this.nuevoReclamo();
          this.reclamoEnviado = false;
        }
      }, {
        text: this.textos.alert.buttonNo,
        handler: () => {
          this.nuevoReclamo();
          this.irA('home');
        }
      }];
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
    this.reclamoEnviado = true;
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
}
