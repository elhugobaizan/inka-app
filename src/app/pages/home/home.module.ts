import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ExpeditionBoxComponent } from '../../components/expedition-box/expedition-box.component';
import { InkaCardButtonComponent } from '../../components/inka-card-button/inka-card-button.component';
import { SurveyQuestionBoxComponent } from '../../components/survey-question-box/survey-question-box.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ExpeditionBoxComponent,
    InkaCardButtonComponent,
    SurveyQuestionBoxComponent
  ],
  declarations: [HomePage]
})

export class HomePageModule {}
