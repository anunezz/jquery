console.log("###########  PROTOTIPOS DE CLASES EN JAVASCRIPT #####################");;
let gato = { sonido(){ console.log("Miu!!"); },
    chillido(){ console.log("Miu!!!!!!!!!"); }
}
let perro = { sonido(){ console.log("Guaaaaii!!!"); } }

let angora = Object.create(gato);
console.log( Object.getPrototypeOf(angora) === gato  ); // si la variable es un gato recibe un true
angora.sonido(); // ejecucion de las funciones del objeto
angora.chillido();
 
Object.setPrototypeOf(angora,perro); //pasandole 2 parametros al prototipo de objetos para evaluar
console.log( Object.getPrototypeOf(angora) === gato  ); // regresa un false porque ahora ya es un perro
angora.sonido(); // ejecuta la funcion porque esta en el objeto
//angora.chillido(); 
// no ejecuta porque no esta en el objeto

console.log("########## ACCESO AL PROTOTIPO CON LA REFERENCIA SUPER ##############");
let persona = { saludar(){ return "Hola";  } }

let amigo = {
    saludar(){
     //   return Object.getPrototypeOf(this).saludar(this) +" saludos!!!!!!"
     return super.saludar(); //Acceder de forma directa al otro objeto 
     //facil acceder a las propiedades de otros metodos
     //ojo si no hay una funcion saludar marcara error no hay un valor intermedio...
    }
}
//Heredar las propiedades de personas
Object.setPrototypeOf(amigo,persona);
console.log(amigo.saludar());

console.log("############ DESTRUCTURACION DE OBJETOS ###################");
var ajustes =  {
    nombre: "Fernando",
    email: "adriano_alanis@hotmail.com",
    facebook:"gunrockadrianooo",
    google:"adriano.google",
    premium: true
}

//usar una variable que se usa mucho en este objeto
let { nombre,email,facebook, google, premium:dePago, twitter = "adriantwetter", pagWeb:pag = "adrian.com" } = ajustes;

//cambiar nombre del objeto de premium a dePago
console.log(nombre, email,facebook);
console.log(dePago,twitter); // manda un true
console.log(pag); // ya nose podra ejecutar pagWeb porque no esta definida

console.log("###### DESTRUCTURACION DE OTROS OBJETOS ########");

let autoguardado = {
    cursor:{
        linea: 7,
        columna: 16
    },
    ultimoArchivo:{
        archivo: 'index.html',
        cursor: {
            linea: 8,
            columna: 20
        }
    },
    Nodo:{
        subNodo:{
            cursor:{
                linea: 11,
                columna: 12
            }
        }
    }
}


let { cursor:cursoActivo } = autoguardado; //instanciar y cambiar el nombre
console.log( cursoActivo );

let { ultimoArchivo:{ cursor:ultimoArchivo } } = autoguardado;
console.log("Sacar la variable de subNodo del cursor: "+ ultimoArchivo ); 

let { Nodo:{ subNodo:{cursor: apuntandoNodo } }  } = autoguardado;
console.log("Obtener la variable del objeto autoguardado de un nodo profundo" + apuntandoNodo);

console.log("############# DESTRUCTURACION DE ARREGLOS ####################");
let frutas = ['banana','manzana','pera'];
let [fruta1,fruta2,fruta3] = frutas;
let [,,fruta33] = frutas;
console.log(fruta1);
console.log(fruta33);
let otrafruta = "manzana";
[otrafruta] = frutas;
console.log(otrafruta);

let a =1, b = 2, temp;
temp = a;
a = b;
b = temp;

console.log(a);
console.log(b);

[a,b] = [b,a];
console.log(a);
console.log(b);

//DESTRUCTURACION DE ARREGLOS ANIDADOS
console.log("################  DESTRUCTURACION DE ARREGLOS ANIDADOS #####################");
let colores = ["rojo",["verde","amarillo"],"morado","naranja"];
let [color1,[color2]] = colores;
console.log(color1);
console.log(color2);
let colores2 = ["rojo","verde","amarillo","morado","naranja"];
let [colorprincipal,colorsecundario,...demascolores] = colores2;
console.log(colorprincipal);
console.log(colorsecundario);
console.log( demascolores );

console.log("############## VALORES POR DEFECTO EN LA DESTRUCTURACION  #################");
let fru = ["banana"];
let [fruUno,fruDos = "Manzana"] = fru;
console.log(fruUno);
console.log(fruDos);
console.log("############## VALORES POR DEFECTO EN LA DESTRUCTURACION OBJETOS #################");
let carros = {
    name: "ibiza"
};

let { name, car2 = 'No hay carros' } = carros;
console.log(name,car2);


console.log("###### DESTRUCTURACION DE PARAMETROS ############");
function crearJuego(nickname,
    {hp,sp,clase} = { hp: 100, sp:50 ,clase:"Mago"  }
){
console.log(nickname,hp,sp,clase);
}
crearJuego("Strider",{hp: 100,sp: 50,clase:''});

console.log("############   cambiando valores de los objetos   ##################");
let opciones = {
    imprime: false,
    soloLectura: true
   };
    
   let { puedeEscribir = true } = opciones;
    
   if( puedeEscribir ){
    console.log("Escribiendo...");
   }else{
    console.log("No puede escribir...");
   }

console.log("#####################################");

let ruleForm = {
    id_pais:0,
    pais:'',
    id_estado:0,
    estado:"",
    id_delegacion:0,
    delegacion:'',
    id_localidad:0,
    localidad:''  
};

function entidades(ruleForm){
 let { id_pais,pais,id_estado,estado,id_delegacion,delegacion,id_localidad,localidad } = ruleForm;
 var entidades = (id_pais == 0)? 1:2;

 switch (entidades) {
     case 1:
     {

     break;
     }
     default:
     {
     console.log("sin resultado de entidades...");
     break;
     }
 }


}

entidades(ruleForm);





