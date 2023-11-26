const mongoose = require('mongoose')

const reservationShema = new mongoose.Schema({

    client: {
        type:String,
        required:[true , "le nom de client est important"],
        lowercase:true

    },
    
    numero: {
        type:mongoose.Schema.ObjectId,
        ref:"chambres",
        required:[true , "chambre numero is required"],

    },
    type:String, formuls:String , nbrNuit:Number ,
    debut : {
        type:Date,
        required:[true , "la date de debut is required"]
    },
    fin : {
        type:Date,
        required:[true , "la date de fin is required"]
    }
     
},{
    timestamps:true
})

const chambreModel = new mongoose.model("reservation" ,reservationShema )

module.exports = chambreModel