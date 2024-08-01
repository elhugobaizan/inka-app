import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SalidaPageRoutingModule } from './salida-routing.module';
import { SalidaPage } from './salida.page';
import { InkaHeaderComponent } from 'src/app/components/inka-header/inka-header.component';
import { ButtonBoxComponent } from "../../components/button-box/button-box.component";
import { ExpeditionBoxComponent } from "../../components/expedition-box/expedition-box.component";
import { InkaCardButtonComponent } from "../../components/inka-card-button/inka-card-button.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalidaPageRoutingModule,
    InkaHeaderComponent,
    ButtonBoxComponent,
    ExpeditionBoxComponent,
    InkaCardButtonComponent
],
  declarations: [SalidaPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SalidaPageModule {}
