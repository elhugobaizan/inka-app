import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ItinerarioPageRoutingModule } from './itinerario-routing.module';
import { ItinerarioPage } from './itinerario.page';
import { InkaHeaderComponent } from 'src/app/components/inka-header/inka-header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItinerarioPageRoutingModule,
    InkaHeaderComponent
  ],
  declarations: [ItinerarioPage]
})
export class ItinerarioPageModule {}
