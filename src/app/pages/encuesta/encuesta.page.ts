import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FeedbackService } from 'src/app/utils/feedback.service';
import { Encuesta } from '../../utils/interfaces-app';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.page.html',
  styleUrls: ['./encuesta.page.scss'],
})
export class EncuestaPage implements OnInit {

  public encuestaId: string = "";
  public encuesta: Encuesta = {
    id: 0,
    titulo: "",
    subtitulo: "",
    fechaCreada: "",
    preguntas: []
  };

  constructor(
    private route: ActivatedRoute,
    private servicio: FeedbackService
  ) { }

  ngOnInit() {
    this.encuestaId = this.route.snapshot.params['id'];
    this.encuesta = this.servicio.getEncuesta(this.encuestaId) as Encuesta;
    console.log(this.encuesta);
  }

}
