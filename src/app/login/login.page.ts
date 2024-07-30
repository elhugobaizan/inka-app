import { Component, Input, OnInit } from '@angular/core';
import { InkaService } from '../utils/inka.service';
import { IonInput, IonNote } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

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
  public usuarioVinculado: any = null;
  public token: number = 0;
  public paso: number = 1;

  constructor(
    private servicio: InkaService
  ) {
    this.textos = this.servicio.getI18Ntextos("login", this.selectedLanguage);
  }

  ngOnInit() {
  }
  ionViewWillEnter() {
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
      next: (r) => {
        //3. parsear respuesta, opciones:
        if (r.response.length == 0) {
          this.servicio.mostrarMensaje("el mail no existe", "danger");
        } else {
          this.usuarios = r.response;
          if (this.usuarios.length == 1) {
            this.usuarioVinculado = this.usuarios[0];
          }
        }
        this.paso = 2;
      },
      error: (e) => {
        console.log("Surgio un error: " + e);
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
    let resultado = this.usuarios.filter((usuario) => { return usuario.id == ev.target.value })
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
      token: this.usuarioVinculado.id,
      idioma: this.selectedLanguage
    }
    localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
    this.servicio.irA('home');
  }
  compareWith(o1: any, o2: any) {
    o1.id === o2.id;
  }

  trackItems(index: number, item: any) {
    return item.id;
  }
}
