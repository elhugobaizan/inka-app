import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReclamosPageRoutingModule } from './reclamos-routing.module';
import { ReclamosPage } from './reclamos.page';
import { InkaHeaderComponent } from 'src/app/components/inka-header/inka-header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReclamosPageRoutingModule,
    InkaHeaderComponent
  ],
  declarations: [ReclamosPage]
})
export class ReclamosPageModule {}
