const mongoose = require('mongoose')

const ClientShema = new mongoose.Schema({

    cin: {
        type: String,
        required: [true, "le cin de client est important"],
        unique: [true, "le cin est unique"],
        uppercase: true

    },
    passport: {
        type: String,
        uppercase: true,
        unique: [true, "le passport code est unique"],
        default: "null",
    },
    civilite: {
        type: String,
        required: [true, "le civilité de client est important"],
    },
    Nom: {
        type: String,
        required: [true, "le nom de client est important"],
        lowercase: true
    },

    Prenom: {
        type: String,
        required: [true, "le prenom de client est important"],
        lowercase: true
    },
    email: {
        type: String,
        required: [true, "le email de client est important"],
        lowercase: true,
        unique: [true, "le email  est unique"],
    },
    situation: {
        type: String,
        required: [true, "le situation de client est important"],
        lowercase: true
    },

    paye: {
        type: String,
        required: [true, "le paye de client est important"],
        lowercase: true
    },
    ville: {
        type: String,
        required: [true, "le ville de client est important"],
        lowercase: true
    },

    addresse: {
        type: String,
        required: [true, "le addresse de client est important"],
        lowercase: true
    },

    telephone: {
        type: String,
        required: [true, "le telephone de client est important"],

    },

}, {
    timestamps: true
})

const ClientModel = new mongoose.model("Client", ClientShema)

module.exports = ClientModel