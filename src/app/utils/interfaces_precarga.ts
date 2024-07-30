

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
    id_cliente: number,
    mail: string,
    nombre: string,
    apellido: string,
    idioma: string,
    id_salida: number,
    salida: string
}

export interface Salida {
    id: number,
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