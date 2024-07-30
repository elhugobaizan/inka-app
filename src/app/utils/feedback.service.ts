import { Injectable } from '@angular/core';
import encuestas from '../../assets/encuestas.json';
import preguntas from '../../assets/preguntas.json';
import { Encuesta, Pregunta } from '../utils/interfaces-app';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor() { }

  getEncuestas() {
    let resEncuestas: any = [];
    encuestas.Encuestas.forEach(encuesta => {
      let result: Encuesta = {
        id: encuesta.id,
        titulo: encuesta.titulo,
        subtitulo: encuesta.subtitulo,
        fechaCreada: encuesta.fechaCreada,
        preguntas: []
      };
      resEncuestas.push(result);
    });
    return resEncuestas;
  }

  getEncuesta(id: string) {
    let buscaId: number = parseInt(id);
    let encuestaEncontrada = encuestas.Encuestas.find(encuesta => encuesta.id === buscaId);
    if (encuestaEncontrada != null) {
      let pregs: Pregunta[] = preguntas.Preguntas.filter((preg) => { return preg.encuestaId === encuestaEncontrada.id });
      let result: Encuesta = {
        id: encuestaEncontrada.id,
        titulo: encuestaEncontrada.titulo,
        subtitulo: encuestaEncontrada.subtitulo,
        fechaCreada: encuestaEncontrada.fechaCreada,
        preguntas: pregs
      };
      return result;
    } else {
      return { "error": "encuesta no encontrada" };
    }
  }
}
