const mongoose = require('mongoose')

const chambresShema = new mongoose.Schema({
    numero: {
        type:Number,
        required:[true , "chambre numero is required"],
        unique:[true , "chambre numero is unique"]
    },
    type:{
        type:String,
        required:[true , "type de chambre is required"],
     
     } ,
    prix:{
        type:Number,
        required:[true , "prix is required"],
     }
},{
    timestamps:true
})

const chambreModel = new mongoose.model("chambres" ,chambresShema )

module.exports = chambreModel