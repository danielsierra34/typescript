/*
atributos y metodos
atributos privados, protegidos, publicos, readonly, static
metodos privados, protegidos, publicos
Herencia, Polimorfismos, sobrecarga de metodos
Clases abstractas*/


/*class Estudiante {
    private id : number;
    private nombre : string;
    private activo : boolean;

    constructor(idE: number, nombreE: string, activoE: boolean){
        this.id = idE;
        this.nombre = nombreE;
        this.activo = activoE;
    }
}*/

class Estudiante {
    constructor(private id : number, private nombre : string, private activo : boolean){

    }

    estaActivo() : boolean {
        return this.activo
    }

    activar() : void {
        this.activo = true
    }

    desplegar() : void {
        console.log(`El estudiante ${this.id}. Nombre ${this.nombre}. ${this.activo ? 'Activo' : 'No Activo'}`)
    }
}

let e1 = new Estudiante(1, 'daniel', false);
e1.activar();
e1.desplegar();

