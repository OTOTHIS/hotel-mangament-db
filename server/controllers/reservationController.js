const reservarionModel = require("../models/reservarionModel");
const asyncHandler = require("express-async-handler");
const ApiError = require("../utils/ApiError");

exports.getOneReservarion = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const reservarion = await reservarionModel.findById(id);

  if (!reservarion) {
    next(new ApiError(`cant find any reservarion for this id ${id}` , 404));
  }

  res.status(200).json({ data: reservarion });
});

exports.getAllReservarions = asyncHandler(async (req, res) => {
  const page = req.query.page * 1 || 1;
  const limit = req.query.limit * 1 || 5;
  const skip = (page - 1) * limit;
  const reservations = await reservarionModel.find({}).populate({path:'numero' , select:"numero-_id"}).skip(skip).limit(limit);
  res.status(200).json({ results: reservations.length, page, data: reservations });
});

exports.createReservarion = asyncHandler( async (req, res) => {
    const { numero, client, debut, fin } = req.body;
    const checkReservation = await reservarionModel.findOne({
      numero,
      $or: [
        {
          debut: {
            $lte: new Date(fin),
            $gte: new Date(debut),
          },
        },
        {
          fin: {
            $lte: new Date(fin),
            $gte: new Date(debut),
          },
        },
      ],
    });
    if (checkReservation) {
      return res.status(422).json({
        error: 'Reservation exist',
      });
    }
    const reservation = await reservarionModel.create({ client, numero, debut, fin });
  
    res.status(201).json({ data: reservation });
  }
)

exports.updateReservarion = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { numero, client , debut , fin } = req.body;

  const reservarion = await reservarionModel.findOneAndUpdate(
    { _id: id },
    {numero, client , debut , fin  },
    { new: true }
  );

  if (!reservarion) {
    next(new ApiError(`cant find any reservarion for this id ${id}` , 404));
  }

  res.status(200).json({ data: reservarion });
});

exports.deleteReservarion = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const reservarion = await reservarionModel.findOneAndDelete(id);

  if (!reservarion) {
    next(new ApiError(`cant find any reservarion for this id ${id}` , 404));
  }

  res.status(204).send();
});
