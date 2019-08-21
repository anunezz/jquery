function crearPersona(nombre,apellido,edad){
  return {
    //   nombre : nombre,
    //   apellido: apellido,
    //   edad: edad
    nombre,
    apellido,
    edad
  }
}

// PODEMOS SIMPLIFICAR EL ARREGLO MANDADO DE LA FUNCION

var melisa = crearPersona("melisa","flores",30);
console.log(melisa);

//METODOS CONCISOS
var persona = {
    nombre:"adrian",
   // getNombre: function(){ ya no es necesario pone todo eso
    getNombre(){
        console.log(this.nombre);
    }
}

persona.getNombre();

//Nombres de propiedades computadas o procesadas
var persona3 = {};
var apellido ="apellido";
console.log(persona["primer nombre"] = "fernando");
console.log(persona[apellido] = "Herrera");

var per = {
    //mande error porque no debe tener espacios primer nombre
    "primer nombre":"melisaaa"
};

//valido solo encerrandolo en corchetes
console.log(per["primer nombre"]);



var apellido = "primer apellido";
var perso = {
    "primer nombre":"fernando",
    [apellido]: "herrera"
};

console.log(perso["primer nombre"]);
console.log(perso[apellido]);

var subfijo = "nombre";
var perr = {
    ["primer "+subfijo]:"Melisa",
    ["segundo "+subfijo]:"karen"
};
console.log(perr["primer nombre"]);
console.log(perr["segundo "+subfijo]);

//OBJETO.IS()
// comparaciones de dos objetos mismo tipo y mismo valor
console.log(+0 == -0);  //true
console.log(+0 === -0); //true
console.log( Object.is(+0,-0)  ); //false
console.log("==================");
console.log(NaN==NaN); // FALSE
console.log(NaN===NaN); //FALSE
console.log( Object.is(NaN,NaN)  ); // true
console.log("================");
console.log(5 == 5); // true
console.log(5 == "5"); // true
console.log(Object.is(5,5)); //true
console.log(5 === 5); // true
console.log(5 === "5"); // false
console.log(Object.is(5,"5")); //false

console.log("##################  Object().assing ################  ");
// esto se usa para combinar objetos muy util.
function mezclar(objReceptor,objDonador){
    Object.keys(objDonador).forEach(function(key){
       objReceptor[key] = objDonador[key];
    });
   return objReceptor;
}

var objReceptor = {ejemplo:"archivo-ejemplo.js"};
var objDonador = {
  //nombre:"mi-archivo.js"
  get nombre(){
      return "mi-archivo.js"
  },
  name: "archivo2.js"
};
console.log(objDonador.nombre);
console.log( mezclar(objReceptor,objDonador) );
console.log( Object.assign(objReceptor,objDonador) );
console.log(objDonador);

console.log("############# ORDEN DE LAS PROPIEDADES DE LO OBJETOS ##############");

// {
//  DESORDEN   ORDEN
//  nombre     2
//  apellido   nombre
//  edad       apellido
//  bio        edad
//  2          bio
// }

var objeto = {
    c: 1,
    0: 1,
    x: 1,
    15:1,
     r:1,
     3:1,
     b:1
}

objeto.d = 1;
objeto["2"] = 1;
objeto["a"] = 1;

console.log( Object.getOwnPropertyNames( objeto ).join(",") );
//ordena las llaves del arreglo de numeros menor a mayor y despues de letras
// respuesta 0,2,3,15,c,x,r,b,d,a

console.log( Object.keys(objeto) );
//Respuesta y hace lo mismo que el anterior
// [
//     '0',  '2',
//     '3', '15',
//     'c',  'x',
//     'r',  'b',
//     'd',  'a'
// ]

console.log( JSON.stringify(objeto) );
for(i in Object.keys(objeto)){
  console.log( Object.keys(objeto)[i] );
}