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

//creando un arreglo de funciones apuntando con el this al objeto

var manejador = {
  id:"123",
  init: function(){
   // document.addEventListener("click",
  //  event => this.clickEnPagina(event.type));

    //document.addEventListener("click",function(){
    //  this.clickEnPagina(event.type);
    // }).bind(this),false;})
  },
  clickEnPagina: function(type){
    console.log("Manejando "+type + "para el id: "+this.id);
  }
};

manejador.init();

//Funciones d eflecha poniendo en orden un arreglo de numeros ordenados
 var arreglo = [1,4,6,7,12,67,22,17,33,45];
 var ordenado = arreglo.sort(function(a,b){
   return a-b;
 });
 
 let ordenado2 = arreglo.sort((a,b)=>a-b);

//estas dos funciones hacen lo mismo
console.log(ordenado);
console.log(ordenado2);

// otros ejemplos de flechas

var restar = (a,b) => a-b;
console.log( typeof restar ); //manda que una funcion
console.log( restar instanceof Function );  // true

//funcion anonima de flecha
function ejemplo(x,y){
  //las funciones de flecha no tiene argumentes almenos que este encerrada dentro de una funcion padre
((a,b)=>{
  console.log( arguments[0,1] );
})();
}

ejemplo(10,20);



