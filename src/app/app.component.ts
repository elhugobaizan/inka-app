import { Component, inject, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { InkaService } from './utils/inka.service';
import { Messaging, getToken, isSupported, onMessage } from '@angular/fire/messaging';
import { environment } from 'src/environments/environment';
import { ActivationStart, Router, RouterOutlet } from '@angular/router';
import { Platform } from '@ionic/angular';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  @ViewChild(RouterOutlet) outlet: RouterOutlet | undefined;

  private readonly _messaging = inject(Messaging);
  //private readonly _env = inject(ENVIRONMENT);

  public usuario: any = null;
  public token: any = null;

  public appPages = [
    { title: 'Tu salida', url: 'pages/salida/1', icon: '../../assets/icon-ruta.svg' },
    { title: 'Encuestas', url: 'pages/encuestas', icon: '../../assets/icon-encuesta.svg' },
    { title: 'Reclamos', url: 'pages/reclamos', icon: '../../assets/icon-reclamo.svg' },
  ];

  constructor(
    private translate: TranslateService,
    private servicio: InkaService,
    private router: Router,
    private platform: Platform
  ) {
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('es');
    translate.use('es');
  }

  ngOnInit(): void {
    this._getDeviceToken();
    this._onMessage();
    this.router.events.subscribe(e => {
      if (e instanceof ActivationStart && e.snapshot.outlet === "administration" && this.outlet != undefined)
        this.outlet.deactivate();
    });
  }

  private _getDeviceToken(): void {
    let messaging = this._messaging;
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("./firebase-messaging-sw.js")
        .then((registration) => {
          console.log("Registration successful, scope is:", registration.scope);
          getToken(messaging, { vapidKey: environment.vapidKey, serviceWorkerRegistration: registration })
            .then((currentToken) => {
              if (currentToken) {
                console.log('current token for client: ', currentToken);
                this.token = currentToken;
                // Track the token -> client mapping, by sending to backend server
                // show on the UI that permission is secured
              } else {
                console.log('No registration token available. Request permission to generate one.');

                // shows on the UI that permission is required 
              }
            }).catch((err) => {
              console.log('An error occurred while retrieving token. ', err);
              // catch error while creating client token
            });
        })
        .catch(function (err) {
          console.log("Service worker registration failed, error:", err);
        });
    }
  }

  private _onMessage(): void {
    onMessage(this._messaging, {
      next: (payload) => { console.log('Message', payload); },
      error: (error) => { console.log('Message error', error) },
      complete: () => { console.log('Done listening messages') }
    });
  }

  requestPermission(): Promise<void> {
    return new Promise<void>(async (resolve) => {
      if (!Notification) {
        resolve();
        return;
      }
      if (!isSupported()) {
        resolve();
        return;
      }
      try {
        await this.requestPermission();

        const token: string = await getToken(this._messaging);

        console.log('User notifications token:', token);
      } catch (err) {
        // No notifications granted
      }

      resolve();
    });
  }

  ngAfterViewInit() {
    this.platform.ready().then(async () => { await this.requestPermission() })
    this.usuario = localStorage.getItem("loggedUser");
    console.log(this.usuario);
  }

  cerrarSesion() {
    localStorage.removeItem("loggedUser");
    this.servicio.irA('/login');
  }

}
