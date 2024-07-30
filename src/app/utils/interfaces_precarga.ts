

export interface Categoria {
    id: number,
    nombre: string,
    ubicaciones: Ubicacion[]
}

export interface Ubicacion {
    id: number,
    nombre: string
}

export interface Usuario {
    id: number,
    mail: string,
    nombre: string,
    telefono: string
}

export interface Salida {
    id: string,
    descripcion: string,
    itinerario: {
        dia: number,
        titulo: string,
        detalle: string
    }[]
}

export interface Guia {
    id: number,
    nombre: string
}