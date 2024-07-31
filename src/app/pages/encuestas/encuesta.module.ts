import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EncuestaPageRoutingModule } from './encuesta-routing.module';
import { EncuestaPage } from './encuesta.page';
import { RatingComponent } from 'src/app/components/rating/rating.component';
import { InkaHeaderComponent } from 'src/app/components/inka-header/inka-header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EncuestaPageRoutingModule,
    RatingComponent,
    InkaHeaderComponent
  ],
  declarations: [EncuestaPage]
})
export class EncuestaPageModule { }
