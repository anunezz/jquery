var jsonPersonas = [
   {id:0,nombre:"Adrian",apellidoPaterno:"Núñez",apellidoMaterno:"Alanis", edad:30}, 
   {id:1,nombre:"Javier",apellidoPaterno:"Perez",apellidoMaterno:"Avila", edad:39},
   {id:2,nombre:"Erick",apellidoPaterno:"Corona",apellidoMaterno:"Rascon", edad:22},
];


const promesaa1 = item => {
   let persona = [];
   return new Promise((resolve,reject)=>{
      persona = jsonPersonas.find(i => i.id === item );
      if(persona){  setTimeout(()=>{ resolve(persona); },1000);
      }else{
        reject("La persona no existe en la base de datos.");
      }
   });
};

const promesaa2 = item =>{
  return new Promise((resolve,reject)=>{
      if(item){
         setTimeout(()=>{
            resolve(`Nombre completo: ${item.nombre}`);
          },1000);
      }else{
            reject("Error: no existe niinguna persona..");
      }

   });

}



promesaa1(1)
.then(response =>{
   console.log("La promesa 1 se ejecuto");
   console.log(response);
   return promesaa2(response);
}).then(response=>{
   console.log(response);
})
.catch(error=>{
   console.log("error", error);
});