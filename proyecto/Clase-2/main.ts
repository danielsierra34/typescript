let op1 : number = 10;
let op2 : number = 15;

console.log(`Mis variables iniciales son ${op1} y ${op2}`)

op1++;
op2+=4;

console.log(`Mis variables iniciales son ${op1} y ${op2}`)

let resultado : number = op1 / op2;

console.log(`Resultado = ${resultado}`);
console.log(`Resultado = ${resultado.toPrecision(2)}`);

let varTipoDesconocido : any;
console.log(`variable tiene valor : ${varTipoDesconocido} y es de tipo ${typeof(varTipoDesconocido)}`)

varTipoDesconocido = "Esta es una cadena de caracteres"
console.log(`variable tiene valor : ${varTipoDesconocido} y es de tipo ${typeof(varTipoDesconocido)}`)
varTipoDesconocido = 9
console.log(`variable tiene valor : ${varTipoDesconocido} y es de tipo ${typeof(varTipoDesconocido)}`)

let varTipoIndefinido : undefined;
//varTipoIndefinido = null;

let varVoid : void = undefined;
console.log(`variable tiene valor : ${varVoid} y es de tipo ${typeof(varVoid)}`)
//varVoid = 10;


function imprimirMensaje() : void {
    console.log("Mensaje Generico");
}

function imprimirMensaje2(msg : string) : void {
    console.log(msg)
}

imprimirMensaje();
imprimirMensaje2("holatu");

function sumar(op1 : number, op2 : number) : number {
    return op1 + op2
}

let fsumar = sumar;

console.log(sumar(10,15))
console.log(fsumar(10,15))