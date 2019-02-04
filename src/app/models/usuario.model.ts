export class Usuario{
    constructor(
        public google: boolean,
        public dni: string,
        public nombre: string,
        public apellidos: string,
        public fechaNacimiento: Date,
        public telefono: string,
        public email:string,
        public password: string,
        public _id: string
    ){} 
}