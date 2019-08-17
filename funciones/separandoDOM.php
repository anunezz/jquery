    <div class="col-md-12">
        <h2>Separando el DOM</h2>
        <hr>
    </div> 
    <div class="col md-12">
        <div id="elemt" style="background: blue; width: 100px; height:100px;" ></div>
    </div>

<script src="js/jquery.min.js"></script>
<script>

   var i = 0, iteraciones =1000;
   var elem = $("#elemt");

   console.time("enlazado al DOM");
    
   var y = elem.width(210);
    console.log(y);
   console.timeEnd("enlazado al DOM");


   console.time("otro tiempo");
   var parent = elem.parent();
   elem.detach(); //despegamos del elemento del DOM
   elem.width(610);
   elem.css('background','red');
   elem.appendTo(parent);

   console.log(parent);
   console.timeEnd("otro tiempo");


</script>