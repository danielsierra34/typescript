var op1 = 10;
var op2 = 15;
console.log("Mis variables iniciales son ".concat(op1, " y ").concat(op2));
op1++;
op2 += 4;
console.log("Mis variables iniciales son ".concat(op1, " y ").concat(op2));
var resultado = op1 / op2;
console.log("Resultado = ".concat(resultado));
console.log("Resultado = ".concat(resultado.toPrecision(2)));
var varTipoDesconocido;
console.log("variable tiene valor : ".concat(varTipoDesconocido, " y es de tipo ").concat(typeof (varTipoDesconocido)));
varTipoDesconocido = "Esta es una cadena de caracteres";
console.log("variable tiene valor : ".concat(varTipoDesconocido, " y es de tipo ").concat(typeof (varTipoDesconocido)));
varTipoDesconocido = 9;
console.log("variable tiene valor : ".concat(varTipoDesconocido, " y es de tipo ").concat(typeof (varTipoDesconocido)));
var varTipoIndefinido;
//varTipoIndefinido = null;
var varVoid = undefined;
console.log("variable tiene valor : ".concat(varVoid, " y es de tipo ").concat(typeof (varVoid)));
//varVoid = 10;
function imprimirMensaje() {
    console.log("Mensaje Generico");
}
function imprimirMensaje2(msg) {
    console.log(msg);
}
imprimirMensaje();
imprimirMensaje2("holatu");
function sumar(op1, op2) {
    return op1 + op2;
}
var fsumar = sumar;
console.log(sumar(10, 15));
console.log(fsumar(10, 15));
