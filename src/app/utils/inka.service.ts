import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Observable, of } from 'rxjs';
import data from '../../assets/usuarios.json';
import categorias from '../../assets/categorias.json';
import ubicaciones from '../../assets/ubicaciones.json';
import guias from '../../assets/guias.json';
import { Usuario } from './interfaces_precarga';
//import { TranslateService } from '@ngx-translate/core';
import salida from '../../assets/salida.json';
import { LowerCasePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class InkaService {

  private URL_API: string = 'https://APINKA_user:APIpwd2024@inkaturismo.com/API/';

private httpHeader = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
//.set('Authorization','Basic ' + btoa("APINKA_user:APIpwd2024"));
//.set('Access-Control-Allow-Origin','http://localhost/');

  constructor(
    private router: Router,
    private toast: ToastController,
    //private translate: TranslateService,
    private http: HttpClient
  ) { }

getI18Ntextos(pagina: string, idioma: string) {
  idioma = (idioma==="Ingles") ? "en" : "es";
  let resTextos: any = null;
/*     this.translate.setDefaultLang(idioma);
    this.translate.use(idioma);
    this.translate.get(pagina).subscribe((textos) => {
      resTextos = textos;
    });
 */
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
    return this.http.get('http://localhost:3000/usuarios/', {'headers': this.httpHeader});
  }

  validarEmail(email: string) {
    let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    //Se muestra un texto a modo de ejemplo, luego va a ser un icono
    return (emailRegex.test(email));
  }

  getUsuario(id: number) {
    let usuarios: Usuario[] = data.Usuarios;
    return of({ data: usuarios.filter((usuario) => { return usuario.id_cliente == id }) });
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
