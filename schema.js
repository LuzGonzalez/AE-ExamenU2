var mongoose = require ('mongoose');

module.exports = new mongoose.Schema({

    codigoProducto:{
        type:String,
        required:true
    },


    nombreProducto:{
        type:String,
        required:true
    },

    precio:{
        type:Number,
        required:true

    },

    descripcion:{
        type:String,
        require:true

    },

    existencia:{
        type:Number,
        required:true
    },

    cantidadMinima:{
        type:Number,
        require:true
    }

});