const chambreModel = require("../models/chambresModel");
const reservationModel = require('../models/reservarionModel')
const asyncHandler = require("express-async-handler");
const ApiError = require("../utils/ApiError");

exports.getOneChambre = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const chambre = await chambreModel.findById(id);

  if (!chambre) {
    next(new ApiError(`cant find any chamre for this id ${id}` , 404));
  }

  res.status(200).json({ data: chambre });
});

exports.getAllChambres = asyncHandler(async (req, res) => {
  try {
    const { page = 1, limit = 5, dispo } = req.query;
    const skip = (page - 1) * limit;
    const mongooseQuery = chambreModel.find({}).skip(skip).limit(limit);
    if (dispo==1) {
      const reservations = await reservationModel.find({ fin: { $lt: new Date() } });

      if (!reservations || reservations.length === 0) {
        throw new ApiError('No chambre disponible', 404);
      }
      const chambreIds = reservations.map((reservation) => reservation.numero);
      const chambres = await chambreModel.find({ _id: { $in: chambreIds } })
      res.status(200).json({ results: chambres.length, page, data: chambres });
    } else {
      const chambres = await mongooseQuery;
      res.status(200).json({ results: chambres.length, page, data: chambres });
    }
  } catch (error) {
    res.status(error.status || 500).json({ error: error.message });
  }
});

exports.getChambreByNumero = asyncHandler(async (req, res) => {
  const chambreId = req.params.numero;
  const chambre = await chambreModel.find({ numero: chambreId }).select('_id');
  if(!chambre){
    new ApiError('cette chambre not defind'+chambreId , 404)
  }
  res.status(200).json({ data: chambre[0] });

});





exports.createChambre = asyncHandler(async (req, res) => {
  const { numero, type, prix } = req.body;
  const chambre = await chambreModel.create({ numero, type, prix });
  res.status(201).json({ data: chambre });
});

exports.updateChambre = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { numero, type, prix } = req.body;

  const chambre = await chambreModel.findOneAndUpdate(
    { _id: id },
    { numero, type, prix },
    { new: true }
  );

  if (!chambre) {
    next(new ApiError(`cant find any chamre for this id ${id}` , 404));
  }

  res.status(200).json({ data: chambre });
});

exports.deleteChambre = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const chambre = await chambreModel.findOneAndDelete(id);

  if (!chambre) {
    next(new ApiError(`cant find any chamre for this id ${id}` , 404));
  }

  res.status(204).send();
});
