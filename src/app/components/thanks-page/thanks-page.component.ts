import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalController } from '@ionic/angular';
import { ExpeditionBoxComponent } from "../expedition-box/expedition-box.component";

@Component({
  selector: 'app-thanks-page',
  templateUrl: './thanks-page.component.html',
  styleUrls: ['./thanks-page.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  imports: [CommonModule, ExpeditionBoxComponent]
})
export class ThanksPageComponent  implements OnInit {
  public name: string ="";

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  cancelModal() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirmModal() {
    return this.modalCtrl.dismiss(this.name, 'confirm');
  }
}