var mongoose = require('mongoose');
var schema = require ('./schema');

//Conexion a la BD
mongoose.connect('mongodb://localhost:27017/productos');

//Modelo
var Producto = mongoose.model('Producto',schema,'producto');

//Guardar producto

 var guardar =()=>{
  producto1.save(function(error){
    if(error){
      console.log(error);
      process.exit(1);
    }
    console.log("El producto ha sido guardado");
  });

  producto2.save(function(error){
    if(error){
      console.log(error);
      process.exit(1);
    }
    console.log("El producto ha sido guardado");
  });

  producto3.save(function(error){
    if(error){
      console.log(error);
      process.exit(1);
    }
    console.log("El producto ha sido guardado");
  });


   
 }

  var producto1 = new Producto({
    codigoProducto:"LL23G87",
    nombreProducto:"Leche lala",
    precio:14,
    descripcion:"leche lala deslactosada",
    existencia:20,
    cantidadMinima:30
  });


  var producto2 = new Producto({
    codigoProducto:"CC45H92",
    nombreProducto:"Coca cola",
    precio:15,
    descripcion:"Bebida azucarada y gasificada",
    existencia:10,
    cantidadMinima:20
  });


  var producto3 = new Producto({
    codigoProducto:"Takis",
    nombreProducto:"Leche lala",
    precio:14,
    descripcion:"leche lala deslactosada",
    existencia:20,
    cantidadMinima:10
  });





//Consultar
function consultarProductos(){
  Producto.find({}, function(error,docs){
    if(error){
      console.log(error);
      process.exit(1);
    }
    console.log("Consulta General de productos"+"\n",docs);
  });
}

//Productos que en existencia sean menores al minimo que debe existir en inventario
function menorAlMinimo(){
  Producto.find({},function(error,datos){
    if(error){
      console.log(error);
      process.exit(1);
    }
    for(var i=0; i<datos.length;i++){
      var existencia = datos[i]["existencia"];
      var cantidadMinima = datos[i]["cantidadMinima"];

      if(existencia<cantidadMinima){
        console.log("Producto: "+datos[i]["nombreProducto"]+"\n"+"Tienes "+datos[i]["existencia"]+" en existencia"+"\n"+"El minimo que debe existir en inventario es: "+datos[i]["cantidadMinima"]);
      }
    } 
  });
}


//Actualizar un producto.
function actualizar(){
  Producto.update({_id:'5c9e31b985b5ef6f5c62fbee'},{$set: {nombreProducto: 'Runners'}},
function(error,docs){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log(docs);
    process.exit(0);
});

}




//guardar();
//consultarProductos();
menorAlMinimo();
//actualizar();