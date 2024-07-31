import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SalidaPageRoutingModule } from './salida-routing.module';
import { SalidaPage } from './salida.page';
import { InkaHeaderComponent } from 'src/app/components/inka-header/inka-header.component';
import { ButtonBoxComponent } from "../../components/button-box/button-box.component";
import { ExpeditionBoxComponent } from "../../components/expedition-box/expedition-box.component";
import { SurveyBoxComponent } from "../../components/survey-box/survey-box.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalidaPageRoutingModule,
    InkaHeaderComponent,
    ButtonBoxComponent,
    ExpeditionBoxComponent,
    SurveyBoxComponent
],
  declarations: [SalidaPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SalidaPageModule {}
