abstract class Figura{

    constructior(){}
    abstract pintar();
}

class Rectangulo extends Figura {
    constructor(
        private alto : number,
        private ancho : number    
    ){
        super()
    }

    pintar() {
        console.log(`pintando rectangulo de ${this.alto}x${this.ancho}`)
    }
}

new Rectangulo(15,25).pintar()