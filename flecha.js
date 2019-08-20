var miFuncion = function(valor){
 return valor;
}

let miFuncion1 = valor1 => valor;

var sunar2 = function(num1,num2){
 return num1 + num2;
}

let sumar1 = (num1,num2) => num1 +num2;

var saludar2 = function(){
    return "Hola mundo";
}

let saludar1 = () => "Hola mundo";

var saludarPersona = function(nombre){
 var salida = "hola, "+nombre;
 return salida;
}

let saludarPersona2 = nombre => {
    let salida = `Hola ${nombre}`;
    return salida;
}

var obtenerLibro = function(id){
  return {
      id: id,
      nombre:"terminator"
  }
}

let obtenerLibro2 = id => ({ id:id,nombre:"terminator" });

console.log(  saludarPersona("Melisa")  );
console.log( saludarPersona2("Fernando") );
console.log( obtenerLibro2("hola") );

//FUNCIONES ANONIMAS
var v = function(nombre){
    return "Hola "+nombre
}("fernando");

console.log(v);

var saludo2 = (nombre => `Hola ${nombre}` )("melisa");
console.log(saludo2);


//



