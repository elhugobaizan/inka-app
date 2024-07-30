import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EncuestasPageRoutingModule } from './encuestas-routing.module';

import { EncuestasPage } from './encuestas.page';
import { InkaHeaderComponent } from 'src/app/components/inka-header/inka-header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EncuestasPageRoutingModule,
    InkaHeaderComponent
  ],
  declarations: [EncuestasPage]
})
export class EncuestasPageModule {}
