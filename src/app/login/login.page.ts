import { Component, Input, OnInit } from '@angular/core';
import { InkaService } from '../utils/inka_mock.service';
import { Usuario } from '../utils/interfaces_precarga';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //i18n
  public textos: any = null;
  public selectedLanguage = 'es';

  cambiarIdioma() {
    this.selectedLanguage = this.selectedLanguage == 'es' ? 'en' : 'es';
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
  public token: number = 0;
  public paso: number = 1;

  constructor(
    private servicio: InkaService
  ) {
    this.textos = this.servicio.getI18Ntextos("login", this.selectedLanguage);
  }

  ngOnInit() {
    this.textos = this.servicio.getI18Ntextos("login", this.selectedLanguage);
  }
  ionViewWillEnter() {
    this.textos = this.servicio.getI18Ntextos("login", this.selectedLanguage);
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
          this.servicio.mostrarMensaje("el mail no existe", "danger");
        } else {
          this.usuarios = JSON.parse(r) as Usuario[];
          if (this.usuarios.length == 1) {
            this.usuarioVinculado = this.usuarios[0];
          }
        }
        this.paso = 2;
      },
      error: (e) => {
        this.servicio.mostrarMensaje("Surgio un error: "+ JSON.stringify(e, ["message", "statusText"]), "danger");
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
      this.usuarios = [];
      this.terminarProceso();
    } else {
      console.log("algo fallo");
    }
  }

  terminarProceso() {
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
