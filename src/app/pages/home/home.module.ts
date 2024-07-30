import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ExpeditionBoxComponent } from '../../components/expedition-box/expedition-box.component';
import { SurveyBoxComponent } from '../../components/survey-box/survey-box.component';
import { SurveyQuestionBoxComponent } from '../../components/survey-question-box/survey-question-box.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ExpeditionBoxComponent,
    SurveyBoxComponent,
    SurveyQuestionBoxComponent
  ],
  declarations: [HomePage]
})

export class HomePageModule {}
