const { check } = require('express-validator');
const validatiorMiddelware = require("../../middelwares/ValidatorMiddelware");


exports.createemployeeValidator = [
    check('cin').notEmpty().isString().withMessage('CIN is required').toUpperCase(),
    check('passport').optional().isString().toUpperCase(),
    check('civilite').notEmpty().isString().withMessage('Civilite is required'),
    check('Nom').notEmpty().isString().withMessage('Nom is required').toLowerCase(),
    check('Prenom').notEmpty().isString().withMessage('Prenom is required').toLowerCase(),
    check('email').notEmpty().isEmail().withMessage('Email is required').toLowerCase(),
    check('situation').notEmpty().isString().withMessage('Situation is required').toLowerCase(),
    check('paye').notEmpty().isString().withMessage('Paye is required').toLowerCase(),
    check('ville').notEmpty().isString().withMessage('Ville is required').toLowerCase(),
    check('addresse').notEmpty().isString().withMessage('Addresse is required').toLowerCase(),
    check('telephone').notEmpty().isString().withMessage('Telephone is required'),
    check('role').notEmpty().isString().withMessage('Role is required'),

    validatiorMiddelware,
];
