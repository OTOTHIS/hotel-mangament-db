const { check } = require("express-validator");
const validatiorMiddelware = require("../../middelwares/ValidatorMiddelware");

exports.getReservationValidator = [
    check('id').isMongoId().withMessage("invalid Reservation id"),
    validatiorMiddelware,
]

exports.createReservationValidator = [
    check("numero").isMongoId().notEmpty().withMessage('numero is required')  ,
    check("debut").isISO8601().notEmpty().withMessage('date debut is required')  ,
    check("fin").isISO8601().notEmpty().withMessage('date fin is required')  ,
    check("client").notEmpty().withMessage('nom de client is required')  ,
  
    validatiorMiddelware,    
]

exports.updateReservationValidator = [
    check('id').isMongoId().withMessage("invalid Reservation id"),
    validatiorMiddelware,
]


exports.deleteReservationValidator = [
    check('id').isMongoId().withMessage("invalid Reservation id"),
    validatiorMiddelware,
]
