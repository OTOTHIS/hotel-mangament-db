const { check } = require("express-validator");
const validatiorMiddelware = require("../../middelwares/ValidatorMiddelware");

exports.getChambreValidator = [
    check('id').isMongoId().withMessage("invalid chambre id"),
    validatiorMiddelware,
]

exports.createChambreValidator = [
    check("numero").notEmpty().isNumeric().withMessage('numero de chambre is required')  ,
    check("prix").notEmpty().isFloat().withMessage('prix is required')  ,
    validatiorMiddelware,    
]

exports.updateChambreValidator = [
    check('id').isMongoId().withMessage("invalid chambre id"),
    validatiorMiddelware,
]


// exports.getChambreByNumeroValidator = [
//     check('id').isInt().withMessage("invalid chambre numero"),
//     validatiorMiddelware,
// ]

exports.deleteChambreValidator = [
    check('id').isMongoId().withMessage("invalid chambre id"),
    validatiorMiddelware,
]
