const ClientModel = require("../models/clientModel");
const asyncHandler = require("express-async-handler");
const ApiError = require("../utils/ApiError");

exports.getOneClient = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const client = await ClientModel.findById(id);

  if (!client) {
    next(new ApiError(`Cannot find any client for this id ${id}`, 404));
  }

  res.status(200).json({ data: client });
});

exports.getAllClients = asyncHandler(async (req, res) => {
  let mongooseQuery = ClientModel.find({});
  
if(req.query.fields) {
  const fields = req.query.fields.split(",").join(" ")
  mongooseQuery = mongooseQuery.select(fields)
}else {
  mongooseQuery = mongooseQuery.select("-__v")
}


 const clients = await mongooseQuery 
  res.status(200).json(clients);
});

exports.createClient = asyncHandler(async (req, res) => {
  const { cin, passport, civilite, Nom, Prenom, email, situation, paye, ville, addresse, telephone } = req.body;

  const client = await ClientModel.create({
    cin,
    passport,
    civilite,
    Nom,
    Prenom,
    email,
    situation,
    paye,
    ville,
    addresse,
    telephone,
  });

  res.status(201).json({ data: client });
});

exports.updateClient = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { cin, passport, civilite, Nom, Prenom, email, situation, paye, ville, addresse, telephone } = req.body;

  const client = await ClientModel.findOneAndUpdate(
    { _id: id },
    {
      cin,
      passport,
      civilite,
      Nom,
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

  if (!client) {
    next(new ApiError(`Cannot find any client for this id ${id}`, 404));
  }

  res.status(200).json({ data: client });
});

exports.deleteClient = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const client = await ClientModel.findOneAndDelete(id);

  if (!client) {
    next(new ApiError(`Cannot find any client for this id ${id}`, 404));
  }

  res.status(204).send();
});
