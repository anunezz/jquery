<div class="col-md-12">
        <h2>Callbacks jquery</h2>
        <hr>
    </div> 
    <div class="col md-12">
       <input type="text" style="width:60px;" id="input1">
       <input type="text" style="width:60px;" id="input2">
       <input type="text" style="width:60px;" id="input3">
       <input type="text" style="width:60px;" id="input4">
       <input type="text" style="width:60px;" id="input5">
    </div>
    <div class="col-md-12">
     <p class="lipsum">la historia de mexico es excelente de muchos recuerdos.</p>
     <p class="lipsum">La programacion te abre la mente y creas aplicaciones lipsum nuevas</p>
     <p class="lipsum">Ser doctor puedes llegar a cuarar muchisima gente</p>
     <p class="lipsum">Bailar es lo lipsum mejor que ha pasado</p>
     <p class="lipsum">Es muy hermosos el dia azul</p>
    </div>


    
<script src="js/jquery.min.js"></script>
<script>
//colocar el nombre del id como valor en cada input
$("input[type=text]").val( function(){
   return  this.id;
});

var p = $(".lipsum");
//hacer un filtro que tengan todas las palabras lipsum
 p.filter(function(){
     return $(this).text().match(/lipsum/i) != null;
 }).hide();

 //agregar un indice a cada uno de esos parrafos 
 p = p.filter(":visible");
 p.prepend(function(index){
     return (index+1)+") ";
 });

//cada uno de etos parrafos inpares tengan un color y los pares de otro
p.css('color',function(index){
 return index%2 == 1 ? 'blue':'green';
});

//si el parrafo tiene mas de 40 caracteres dividirlo y ponerle ... sin foreach
p.html(function(){
    var contenido = $(this).text();
    if(contenido.length > 20 ){
       return contenido.slice(0,20)+"...";
    }
});

//pendiente
var primerparrafo = p.eq(1).is(function(){
   return $(this).css("color").match(/green/i);
});

alert(primerparrafo);

</script>