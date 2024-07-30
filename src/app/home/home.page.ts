import { Component } from '@angular/core';
import { InkaService } from '../utils/inka.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public rating: number = 0;
  public usuario: any = null;
  public textos: any = null;

  constructor(
    private servicio: InkaService,
    private route: ActivatedRoute
  ) {
    let user = JSON.parse(localStorage.getItem("loggedUser") || "{undefined}");
    if (user.token != 0) {
      this.textos = this.servicio.getI18Ntextos("home", user.idioma);
      this.servicio.getUsuario(user.token).subscribe({
        next: (response) => {
          this.usuario = response.data[0];
        },
        error: (e) => {
          this.servicio.mostrarMensaje(this.textos.error + e);
        }
      });
    } else {
      this.servicio.irA('login');
    }
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
  }

  irA(path: string) {
    this.servicio.irA(path);
  }
}
