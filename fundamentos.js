//tipo de datos primitivos
let nombre= "Alee";//declara e inicializar la variable
let edad= 19;
let mayorEdad = true;
let vacio= null;
let xyz;

console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof mayorEdad);
console.log(typeof vacio);
console.log(typeof xyz);


//tipo de datos complejos 

let frutas =['pera','manzana','sandia'];

console.log(typeof frutas); //sera tipo de objeto arreglo

let autos={
    marca:"mazda",
    modelo:2024,
    colro:"azul",
    placa:"tde321",
    tipo:"camioneta",
    unicoDueño:true
}

console.log(typeof frutas);
console.log(typeof autos);

//CONCARDENAR VARIABLES EN MENSAJES//

console.log('holi '+ nombre + " tienes " + edad+ " años");

//ESTRUCTURAS CONDICIONALES//
console.log("------------------------------------")
let calificacion = 65;

if(calificacion >= 90){
    console.log("muy buen trabajo " + nombre + " tu nota es: "+ calificacion);
}
else if(calificacion >= 70){
    console.log("aprobaste " +nombre+" su nota fue: "+ calificacion)
}
else if(calificacion >=50){
    console.log("reprobaste "+nombre+" tu nota fue "+calificacion)
}
else{
    console.log("tremendo bruto todo pendejo "+nombre+" tu nota de porqueria fue "+calificacion)

}
console.log("------------------------------------")
let dia= "hora";
switch (dia) {
    case "lunes":
        console.log("primer dia de tortura")
        break;
    case "martes":
        console.log("ya no aguanto mas")
        break;
    case "miercoles":
        console.log("ya no estamos sosportando")
        break;
    case "jueves":
        console.log("ya casii")
        break;
    case "viernes":
        console.log("y el cuerpo lo sabe")
        break;
    case "sabado":
        console.log("ahuevo descansito")
        break;
    case "domingo":
        console.log("a sacarse los demonios")
        break;
    default:
        console.log("no es dia de semana")
        break;
}
console.log("------------------------------------")
//ESTRUCTURAS BUCLES//
let numero=1
while (numero <= 10) {
    console.log("ahora el numero es: " +numero);
    numero ++;
}
//declara iniciar--condicion--contador
for (let i = 100; i >= 0; i=i-10) {
    console.log("este es numero: " + i)
    
}

//funciones

function suma(valor1,valor2) {
    return valor1+valor2;
}
let resultado = suma(8,24);
console.log("el resultado es: "+resultado)