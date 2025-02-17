/*Herencia*/
/*
al heredar o extender de otra clase se ignora todo lo que está private
la subclase puede redefinir metodos de la clase padre
se puede agregar atributos y metodos
en el constructor se debe colocar super() para heredar
*/


class Persona {

    constructor(
        protected nombre : string,
        protected edad : number
    ){

    }

    desplegar() : string {
        return `Nombre: ${this.nombre} Edad: ${this.edad}`
    }
}

const persona1 = new Persona('Juan', 15);
console.log(persona1.desplegar());

class Empleado extends Persona {

    static readonly subsidio : number = 0.1;

    constructor(nombre : string, edad : number, private salario : number){
        super(nombre, edad)
    }

    desplegar(): string {
        return `${super.desplegar()} Salario: ${this.salario}`
    }

    tieneSubsidios() {
        if (this.salario < 1000)
            console.log(`${this.desplegar()} Tiene derecho a subsidios de ${this.calcularSubsidio()}`)
        else
            console.log(`${super.desplegar()} Salario : ${this.salario} No tiene derecho a subsidios`)
    }

    calcularSubsidio() : number {
        return this.salario * Empleado.subsidio;
    }

}




const empleado1 = new Empleado('Ana', 19, 500);
empleado1.tieneSubsidios();