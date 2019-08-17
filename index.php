<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Ejercicios de jquery</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
</head>
<body>
  
    
<div class="container">
  <div class="row">
    <?php   
    if( !isset($tema)){
        $tema = 0;
    ?>
     <div class="col-md-12">
         <form action="/jquery/" method="post">
            <select name="selecciona">
                <option value="0">Selecciona un tema por ver</option>
                <option value="1">callback jquery</option>
                <option value="2">Separando el DOM jquery</option>
            </select>
            <button type="submit">Ver</button>
         </form>
     </div>

    <?php
    }

    if (isset($_POST['selecciona'])) {
        $tema = $_POST['selecciona'];
    }else{
        $tema = 0;
    }

   
    
    switch($tema){
    case 0:
    {
    break;
    }
    case 1:
    {
    include("funciones/callback.php");    
    break;    
    }
    case 2:
    {
        include("funciones/separandoDOM.php"); 
    break;    
    }
    }
    ?>
  </div>
</div>

</body>
</html>