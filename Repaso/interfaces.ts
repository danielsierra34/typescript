/*
No existe en javascript version 6
defina la forma de un objeto de typescript
contrato que una clase debe implementar
para definir tipos de funciones
signatura de tipos con indices
*/

interface IPersona {//parte publica de la clase
    darNombre(): string;
    cambiarNombre(nuevo : string): void;
}

class Persona implements IPersona {
    
    constructor(
        protected nombre : string,
        protected edad : number
    ){

    }

    desplegar(): string {
        return `Nombre: ${this.nombre} Edad: ${this.edad}`
    }

    darNombre(): string {
        return this.nombre
    }

    cambiarNombre(nuevo : string) : void {
        this.nombre = nuevo
    }


}

 