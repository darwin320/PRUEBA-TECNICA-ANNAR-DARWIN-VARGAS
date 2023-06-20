export class Card {
    listCard!: Card[];
    constructor(
        public IdPersona: number,
        public Documento: string,
        public Nombres: string,
        public Apellidos: string,
        public Telefono: string,
        public Correo: string,
        public Direccion: string,

    ){}
};
