import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SalidaPageRoutingModule } from './salida-routing.module';
import { SalidaPage } from './salida.page';
import { InkaHeaderComponent } from 'src/app/components/inka-header/inka-header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalidaPageRoutingModule,
    InkaHeaderComponent
  ],
  declarations: [SalidaPage]
})
export class SalidaPageModule {}
