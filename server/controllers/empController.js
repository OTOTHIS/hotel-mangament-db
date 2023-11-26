const employeeModel = require("../models/empModel");
const asyncHandler = require("express-async-handler");
const ApiError = require("../utils/ApiError");

exports.getOneemployee = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const employee = await employeeModel.findById(id);

  if (!employee) {
    next(new ApiError(`Cannot find any employee for this id ${id}`, 404));
  }

  res.status(200).json(employee);
});

exports.getAllemployees = asyncHandler(async (req, res) => {
  let mongooseQuery = employeeModel.find({});
  
if(req.query.fields) {
  const fields = req.query.fields.split(",").join(" ")
  mongooseQuery = mongooseQuery.select(fields)
}else {
  mongooseQuery = mongooseQuery.select("-__v")
}


 const employees = await mongooseQuery 
  res.status(200).json(employees);
});

exports.createemployee = asyncHandler(async (req, res) => {
  const { cin, passport, civilite, role, Nom, Prenom, email, situation, paye, ville, addresse, telephone } = req.body;

  const employee = await employeeModel.create({
    cin,
    passport,
    civilite,
    Nom,
    Prenom,
    role,
    email,
    situation,
    paye,
    ville,
    addresse,
    telephone,
  });

  res.status(201).json({ data: employee });
});

exports.updateemployee = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { cin, passport, role, civilite, Nom, Prenom, email, situation, paye, ville, addresse, telephone } = req.body;

  const employee = await employeeModel.findOneAndUpdate(
    { _id: id },
    {
      cin,
      passport,
      civilite,
      Nom,
      role,
      Prenom,
      email,
      situation,
      paye,
      ville,
      addresse,
      telephone,
    },
    { new: true }
  );

  if (!employee) {
    next(new ApiError(`Cannot find any employee for this id ${id}`, 404));
  }

  res.status(200).json({ data: employee });
});

exports.deleteemployee = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const employee = await employeeModel.findOneAndDelete(id);

  if (!employee) {
    next(new ApiError(`Cannot find any employee for this id ${id}`, 404));
  }

  res.status(204).send();
});
