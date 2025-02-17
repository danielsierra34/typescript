function imprimir(aImprimir : string) : void {
    console.log(aImprimir)
}
imprimir("Hola mundo")
//////////////////////////////////////////////////////
function nombresApellidos(nombre : string, apellido : string, segundoNombre ?: string) : string {
    return `
    Nombres: ${nombre} ${segundoNombre} 
    Apellido: ${apellido}`;
}
console.log(nombresApellidos('Ana', 'Suarez', 'Maria'));
console.log(nombresApellidos('Ana', 'Suarez'));
//////////////////////////////////////////////////////
function sumar(op1 : number, op2 : number) : number {
    return op1 + op2
}
console.log(sumar(3, 4))
//////////////////////////////////////////////////////
let var1 : any = function sumar(op1 : number, op2 : number) : number {
    return op1 + op2
}
console.log(var1(3, 4))
//////////////////////////////////////////////////////
let var2 : any = function (op1 : number, op2 : number) : number {
    return op1 + op2
}
console.log(var2(4, 10))
//////////////////////////////////////////////////////
let saludarConsola = () => console.log("Hola");
saludarConsola();
//////////////////////////////////////////////////////
let varSumar = (op1 : number, op2 : number) : number => op1 + op2;
console.log(varSumar(4, 10))
//////////////////////////////////////////////////////
function calculadora(op1 : number, op2 : number, operador : any) : number {
    return operador(op1, op2)
}
console.log(`${calculadora}`)//imprime la funcion en consola
//////////////////////////////////////////////////////
let varMult = (op1 : number, op2 : number) => op1 * op2;
function calculadora2(op1:number, op2:number, operador:any) : number {
    return operador(op1, op2);
}
console.log(`${calculadora}`);
console.log(`10*2 es ${calculadora(10,2,varMult)}`)
calculadora(10, 2, varMult)
//////////////////////////////////////////////////////

///funciones de alto orden///
/*
forEach
filter
search
map->arreglo
reduce->valor
sort
reverse
...
*/