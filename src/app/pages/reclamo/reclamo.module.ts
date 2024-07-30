import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReclamoPageRoutingModule } from './reclamo-routing.module';

import { ReclamoPage } from './reclamo.page';
import { InkaHeaderComponent } from 'src/app/components/inka-header/inka-header.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReclamoPageRoutingModule,
    InkaHeaderComponent
  ],
  declarations: [ReclamoPage]
})
export class ReclamoPageModule {}
