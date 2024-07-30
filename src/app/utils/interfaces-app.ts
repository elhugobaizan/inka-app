export enum ESTADORECLAMO {
    iniciado,
    procesado,
    cerrado
}

export interface Reclamo {
    id: number,
    usuarioId: number,
    categoriaId: number,
    ubicacionId: number,
    guiaId: number,
    texto: string,
    estado: ESTADORECLAMO
}

export interface Pregunta {
    id: number,
    encuestaId: number,
    pregunta: string
}

export interface Encuesta {
    id: number,
    titulo: string,
    subtitulo: string,
    fechaCreada: string,
    preguntas: Pregunta[]
}

export interface PreguntaRespondida {
    id: number,
    preguntaId: number,
    respuesta: string
}

export interface EncuestaRespondida {
    id: number,
    encuestaId: number,
    usuarioId: number,
    estado: number,
    fechaCompletada: Date
    preguntas: Pregunta[]
}