const reservarionModel = require("../models/reservarionModel");
const ClientModel =  require("../models/clientModel");
const chambreModel = require('../models/chambresModel');
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

  const reservations = await reservarionModel.find({}).select("-__v").populate({path:'numero' , select:"numero-_id"})
  res.status(200).json(reservations);
});

exports.createReservarion = asyncHandler( async (req, res) => {
    const { numero, client, type, formuls , nbrNuit ,  debut, fin } = req.body;
    let mongoidChambre = null ;
     const checkClient = await ClientModel.findOne({cin:client})
    
     if (!checkClient) {
      return res.status(422).json({
        error: 'This client does not exist',
      });
    }
    const chambre = await chambreModel.findOne({ numero: numero });
  
    if(chambre) {
      mongoidChambre = chambre._id
      
    }
 
    const checkReservation = await reservarionModel.findOne({
      mongoidChambre ,
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

    console.log('Query:', {
      mongoidChambre,
      debut: {
        $lte: new Date(fin),
        $gte: new Date(debut),
      },
      fin: {
        $lte: new Date(fin),
        $gte: new Date(debut),
      },
    });

    if (checkReservation) {
      return res.status(422).json({
        error: 'Reservation exist',
      });
    }
   

    const reservation = await reservarionModel.create({numero: mongoidChambre, client, type, formuls , nbrNuit, debut, fin });
  
    res.status(201).json({ data: reservation });
  }
)

exports.updateReservarion = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { numero, client, type, formuls , nbrNuit, debut, fin } = req.body;

  const reservarion = await reservarionModel.findOneAndUpdate(
    { _id: id },
    {numero, client, type, formuls , nbrNuit, debut, fin },
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
