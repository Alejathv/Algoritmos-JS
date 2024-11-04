//1)algoritmo que realiza la suma de dos valores ingresados por usuario
function suma() {
    // declara variables necesarias para este algoritmo
    let a;
    let b;
    let s;

//solicito al usuarios los valores
    a = parseInt(prompt("ingrese el primer valor a sumar"));
    b = parseInt(prompt("ingrese el segundo valor a sumar"));

    //realizar la operacion
    s=a+b;
    //mostrar el resultado
    console.log("el resultado de la suma es: "+s);
    alert("el resultado de la suma es: "+s);
}
//2)algoritmo que determina la suma, resta, multiplicacion y division entre dos valores ingresados por el usuario. 
function operaciones() {
    // declara variables necesarias para este algoritmo
    let c;
    let f;
    let s;
    let r;
    let m;
    let d;
    //solicito al usuarios los valores
    c = parseInt(prompt("ingrese el primer valor a operar"));
    f = parseInt(prompt("ingrese el segundo valor a operar"));

    //realizar la operacion
    s=c+f;
    r=c-f;
    m=c*f;
    d=c/f;
    //mostrar el resultado
    console.log("el resultado de la suma es: "+s);
    alert("el resultado de la suma es: "+s);

    console.log("el resultado de la resta es: "+r);
    alert("el resultado de la resta es: "+r);

    console.log("el resultado de la multiplicación es: "+m);
    alert("el resultado de la multiplicación es: "+m);

    console.log("el resultado de la división es: "+d);
    alert("el resultado de la división es: "+d);
    
}


//3 Algoritmo que determine el cuadrado de un numero ingresado por un usuario

function cuadrado() {
    let c;

    c = parseInt(prompt("ingrese el valor a operar"));

    //operacion 

    z= c**2

    console.log("el resultado es es: "+z);
    alert("el resultado es: "+z);


}

//4 algoritmo que determine el area de un triangulo apartir de la base y la altura ingresadas por el usuario
function area() {
    let b;
    let a;

    b= parseInt(prompt("ingresa la base del triangulo"));
    a= parseInt(prompt("ingresa la altura del triangulo"));

//operacion
    ar= (b*a)/2

    console.log("el area del triangulo es: "+ar);
    alert("el area del triangulo es: "+ar);

}

//5 algoritmo que determine los  kilometros, pulgadas y metros de un valor dado en cm
function medidas() {
    let cm;

    cm= parseInt(prompt("ingrese los cm a converir"));

//operacion 
    km=cm/100000
    p=cm/2.54
    m=cm/100

    console.log("los cm convertidos a kilometros son: "+km);
    alert("los cm convertidos a kilometros son: "+km);

    console.log("los cm convertidos a pulgadas son: "+p);
    alert("los cm convertidos a pulgadas son: "+p);

    console.log("los cm convertidos a metros son: "+m);
    alert("los cm convertidos a metros son:: "+m);
}

//6 algoritmo que determine el numero mayor de dos numeros ingresados por el usuario
function mayor(params) {
    let m;

    num1= parseInt(prompt("ingrese primer numero"));
    num2= parseInt(prompt("ingrese segundo numero"));

//operacion
    if (num1>num2) {
        nummayor=num1;
    }
    else if (num2>num1){
        nummayor=num2;
    } 
    else{
        console.log("los dos numeros ingresados son iguales");
    }

    console.log("el numero mayor entre: " +num1+ "y " +num2+" es: " +nummayor);
    alert("el numero mayor entre: " +num1+ " y " +num2+" es: " +nummayor);
    


}

//7 algoritmo que determine el numero menor de tres numeros ingresados por el usuario
function menor() {
    let num1;
    let num2;
    let num3;

    num1= parseInt(prompt("ingrese primer numero"));
    num2= parseInt(prompt("ingrese segundo numero"));
    num3= parseInt(prompt("ingrese tercer numero"));

//operacion
    if ((num1<num2) && (num1<num3)) {
        nummenor=num1;
        console.log("el numero menor es:"+ num1);

    }
    else if ((num2<num1) && (num2<num3)){
        nummenor=num2;
        console.log("el numero menor es:"+ num2);
    }
    else if ((num3<num1) && (num3<num2)){
        nummenor=num3;
        console.log("el numero menor es:"+ num3);
    }
    else{
        console.log("los dos numeros ingresados son iguales");
    }

    console.log("el numero menor entre: " +num1+ " , " +num2+ " y " +num3+ "es: " +nummenor);
    alert("el numero menor entre: " +num1+ " , " +num2+ " y " +num3+" es: " +nummenor);
  
}

//8 algoritmo que solicite al estudiante su nombre, la materia y ocho calificaciones de la misma entre 1 y 10 determinar 
//cpon esta infromacion si el estudiante aprobo
//o reprobo teniendo en cuenta que si aprubeas con 6.2 en adelante

function promedio() {
    let nombre;
    let materia;
    let calificacion1
    let calificacion2
    let calificacion3
    let calificacion4
    let calificacion5
    let calificacion6
    let calificacion7
    let calificacion8

    nombre=prompt("ingrese su nombre y apellido: ");
    materia=prompt("ingrese la materia: ");
    calificacion1=parseFloat(prompt("ingrese la primera calificacion: "))
    calificacion2=parseFloat(prompt("ingrese la segunda calificacion: "))
    calificacion3=parseFloat(prompt("ingrese la tercera calificacion: "))
    calificacion4=parseFloat(prompt("ingrese la cuarta calificacion: "))
    calificacion5=parseFloat(prompt("ingrese la quinta calificacion: "))
    calificacion6=parseFloat(prompt("ingrese la sexta calificacion: "))
    calificacion7=parseFloat(prompt("ingrese la septima calificacion: "))
    calificacion8=parseFloat(prompt("ingrese la octava calificacion: "))
//operacion
    promedio = (calificacion1+calificacion2+calificacion3+calificacion4+calificacion5+calificacion6+calificacion7+calificacion8)/8

    console.log("Estudiante: "+nombre);
    alert("Estudiante: "+nombre);
    console.log("El promedio de la asignarura: "+materia+" es: ");
    alert("El promedio de la asignarura: " +materia+ " es: " +promedio);

    if((promedio >= 6.2) &&( promedio <= 10.0)){
        console.log("buen trabajo:" + nombre + "aprobaste :)");
        alert("buen trabajo:" + nombre + "aprobaste :)");
    }
    else{
        console.log("Que mal "+ nombre +"  Reprobaste :( ")
        alert("Que mal " + nombre +  "  Reprobaste :( ")

    }
}

//9 determinar si el numero ingresado por el ususario es par o impar 

function par_impar(params) {
    let a;

    a= parseInt(prompt("Ingresa un Numero"));

//operacion

    if (a%2==0) {
        console.log("el numero ingresado es par");
        alert("el numero ingresado es par");
        
    }
    else{
        console.log("el numero ingresado es impar");
        alert("el numero ingresado es impar");
    }
}

// 10 un individuo desea invertir su capital en un banco y requiere saber 
// cuanto dinero ganara despues de n numero de años teniendo en 
// cuenta que eel intereste paraga un interes mensual del 0.7% 
function calcularInversion() {
    // Solicitar datos al usuario
    let inversion_inicial = parseFloat(prompt("Ingrese su capital a invertir: "));
    let años = parseInt(prompt("Ingrese los años de inversión: "));

    // Definir variables necesarias para el cálculo
    let interes_mensual = 0.007;
    let meses = años * 12;

    // Calcular el interés compuesto mes a mes
    for (let i = 0; i < meses; i++) {
        inversion_inicial += inversion_inicial * interes_mensual;
    }    

    // Mostrar el resultado en una alerta
    alert("Monto final después de " + años + " años: $" + inversion_inicial.toFixed(2));
}

//11 realizar un algoritmo que solicite al usuario un rango entre dos valores y muestre los numero entre ellos 

function rango() {
    // Solicitar al usuario el rango
    let ini = parseInt(prompt("Ingrese el valor inicial del rango:"));
    let fin = parseInt(prompt("Ingrese el valor final del rango:"));

    // Mostrar los números entre inicio y fin
    for (let i = ini; i <= fin; i++) {
        console.log(i);
        alert(i);
    }
}

// tabla de multiplicar
function tablaMultiplicar() {
    // Solicitar al usuario el número
    let numero = parseInt(prompt("Ingrese un número para ver su tabla de multiplicar:"));

    let resultado = "";

    // Generar la tabla de multiplicar
    for (let i = 1; i <= 10; i++) {
        resultado += numero + " x " + i + " = " + (numero * i); // Crear la línea de la tabla
    }

    // Mostrar el resultado
    console.log("Tabla de multiplicar del " + numero + " "+resultado);
    alert("Tabla de multiplicar del " + numero + " "+resultado);

}

// verfica si el numero es positivo negativo o 0 
function verificar() {
    // Solicitar al usuario un número
    let numero = parseFloat(prompt("Ingrese un número:"));

    // Verificar si el número es positivo, negativo o cero
    if (numero > 0) {
        console.log("El número es positivo.");
        alert("El número es positivo.");
    } else if (numero < 0) {
        console.log("El número es negativo.");
        alert("El número es negativo.");
    } else {
        console.log("El número es cero.");
        alert("El número es cero.");
    }
}