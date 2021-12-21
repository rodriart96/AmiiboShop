export interface Amiibo {
    amiiboSeries: string;
    character: string;
    gameSeries: string;
    head: number;
    tail: number;
    image: string;
    name: string;
    type: string;
}

export interface Carrito extends Amiibo{
    cantidad: number
}