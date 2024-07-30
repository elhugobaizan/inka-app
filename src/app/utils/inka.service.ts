import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Observable, of } from 'rxjs';
import data from '../../assets/usuarios.json';
import categorias from '../../assets/categorias.json';
import ubicaciones from '../../assets/ubicaciones.json';
import guias from '../../assets/guias.json';
import { Usuario } from './interfaces_precarga';
import { TranslateService } from '@ngx-translate/core';
import salida from '../../assets/salida.json';

@Injectable({
  providedIn: 'root'
})
export class InkaService {

  //  private URL_API: string = 'http://192.168.100.4/api/';
  private URL_API: string = 'http://localhost/api/';

  constructor(
    private router: Router,
    private toast: ToastController,
    private translate: TranslateService,
    private http: HttpClient
  ) { }

  getI18Ntextos(pagina: string, idioma: string) {
    let resTextos: any = null;
    this.translate.setDefaultLang(idioma);
    this.translate.use(idioma);
    this.translate.get(pagina).subscribe((textos) => {
      resTextos = textos;
    });

    return resTextos;
  }

  irA(url: string) {
    this.router.navigateByUrl(url);
  }

  async mostrarMensaje(texto: string, tipo: string = 'success') {
    let t = await this.toast.create({
      message: texto,
      color: tipo,
      duration: 5000
    });
    t.present();
  }

  validarUsuario(email: string = '') {
    let usuarios: Usuario[] = data.Usuarios;
    return of({ response: usuarios.filter((usuario) => { return usuario.mail == email }) });
    /*      return this.http.post(this.URL_API + 'usuario', {
          email: email
        });  */
  }

  validarEmail(email: string) {
    let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    //Se muestra un texto a modo de ejemplo, luego va a ser un icono
    return (emailRegex.test(email));
  }

  getUsuario(id: number) {
    let usuarios: Usuario[] = data.Usuarios;
    return of({ data: usuarios.filter((usuario) => { return usuario.id == id }) });
  }

  getCategorias() {
    return of(categorias.Categorias);
  }

  getUbicaciones() {
    return of(ubicaciones.Ubicaciones);
  }

  getSalida(id: string) {
    return salida.Salida;
  }

  getGuias() {
    return of(guias.Guias);
  }
}
