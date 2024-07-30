import { Component, OnInit } from '@angular/core';
import { FeedbackService } from 'src/app/utils/feedback.service';
import { InkaService } from 'src/app/utils/inka.service';
import { Encuesta } from 'src/app/utils/interfaces-app';

@Component({
  selector: 'app-encuestas',
  templateUrl: './encuestas.page.html',
  styleUrls: ['./encuestas.page.scss'],
})
export class EncuestasPage implements OnInit {

  public encuestas: Encuesta[] = [];

  constructor(
    private servicio: InkaService,
    private app: FeedbackService
  ) { }

  ngOnInit() {
    this.encuestas = this.app.getEncuestas();
  }

  irA(path: string) {
    this.servicio.irA(path);
  }
}
