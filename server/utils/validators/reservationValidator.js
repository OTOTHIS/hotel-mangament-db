const { check } = require("express-validator");
const validatiorMiddelware = require("../../middelwares/ValidatorMiddelware");

exports.getReservationValidator = [
    check('id').isMongoId().withMessage("invalid Reservation id"),
    validatiorMiddelware,
]

exports.createReservationValidator = [
    check("debut").isISO8601().notEmpty().withMessage('date debut is required')  ,
    check("fin").isISO8601().notEmpty().withMessage('date fin is required')  ,
    check("client").notEmpty().withMessage('nom de client is required')  ,
    // Add more validation checks as needed
    // For example:
    check("type").notEmpty().withMessage('reservation type is required'),
    check("formuls").notEmpty().withMessage('formuls is required'),
    check("nbrNuit").isNumeric().notEmpty().withMessage('nbrNuit must be a number'),

    validatiorMiddelware,    
];

exports.updateReservationValidator = [
    check('id').isMongoId().withMessage("invalid Reservation id"),
    validatiorMiddelware,
]


exports.deleteReservationValidator = [
    check('id').isMongoId().withMessage("invalid Reservation id"),
    validatiorMiddelware,
]
