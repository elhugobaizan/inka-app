import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { InkaService } from '../utils/inka_mock.service';
import { Usuario } from '../utils/interfaces_precarga';
import { ActivationStart, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild(RouterOutlet) outlet: RouterOutlet | undefined;

  //i18n
  public textos: any = null;
  public selectedLanguage = 'es';

  cambiarIdioma(lang: string) {
    this.selectedLanguage = lang;
    this.textos = this.servicio.getI18Ntextos("login", this.selectedLanguage);
  }

  public useremail: string = "";
  public invalidMail: boolean = false;
  public usuarios: any[] = [];
  public usuarioVinculado: Usuario = {
    apellido: "",
    id_cliente: 0,
    id_salida: 0,
    idioma: "",
    mail: "",
    nombre: "",
    salida: ""
  };
  public token: string = '';
  public paso: number = 1;

  constructor(
    private servicio: InkaService,
    private router: Router,
  ) {
    //this.textos = this.servicio.getI18Ntextos("login", this.selectedLanguage);
  }

  ngOnInit() {
    //this.textos = this.servicio.getI18Ntextos("login", this.selectedLanguage);
    this.router.events.subscribe(e => {
      if (e instanceof ActivationStart && e.snapshot.outlet === "administration" && this.outlet != undefined)
        this.outlet.deactivate();
    });
  }
  ionViewWillEnter() {
    //this.textos = this.servicio.getI18Ntextos("login", this.selectedLanguage);
  }

  enviarEmail() {
    //1. verificar que sea un email valido
    if (!this.servicio.validarEmail(this.useremail)) {
      this.invalidMail = true;
      //this.servicio.mostrarMensaje("el mail no es valido", "danger");
      return;
    }

    //2. enviar email al servidor y recibir respuesta  
    this.servicio.validarUsuario(this.useremail).subscribe({
      next: (r: any) => {
        //3. parsear respuesta, opciones:
        if (r == "") {
          this.servicio.mostrarMensaje("The e-mail doesn't exist", "danger");
        } else {
          this.usuarios = JSON.parse(r) as Usuario[];
          if (this.usuarios.length == 1) {
            this.usuarioVinculado = this.usuarios[0];
          }
        }
        this.paso = 2;
      },
      error: (e) => {
        this.servicio.mostrarMensaje("Error: "+ JSON.stringify(e, ["message", "statusText"]), "danger");
      }
    });
  }

  vincularUsuario() {
    if (this.usuarios.length > 1) {
      this.paso = 3;   //muestra los radio buttons con los usuarios
    } else {
      this.terminarProceso();
    }
  }

  //Manejo del radio group
  usuarioSeleccionado(ev: any) {
    let resultado = this.usuarios.filter((usuario) => { return usuario.id_cliente == ev.target.value })
    if (resultado.length == 1) {
      this.usuarioVinculado = resultado[0];
    } else {
      console.log("error");
    }
  }

  terminarProceso() {
      this.usuarios = [];
      let loggedUser = {
      token: this.usuarioVinculado.id_cliente,
      idioma: this.selectedLanguage
    }
    localStorage.setItem("loggedUser", JSON.stringify(this.usuarioVinculado));
    this.servicio.irA('pages/home');
  }
  compareWith(o1: any, o2: any) {
    o1.id === o2.id;
  }

  trackItems(index: number, item: any) {
    return item.id;
  }
}
