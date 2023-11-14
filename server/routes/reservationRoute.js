const router = require("express").Router();

const {
  createReservarion,
  getAllReservarions,
  getOneReservarion,
  updateReservarion,
  deleteReservarion,
} = require("../controllers/reservationController");
const {
  createReservationValidator,
  getReservationValidator,
  updateReservationValidator,
  deleteReservationValidator,
} = require("../utils/validators/reservationValidator");



router
  .route("/")
  .post(createReservationValidator, createReservarion)
  .get(getAllReservarions);
router
  .route("/:id")
  .get(getReservationValidator, getOneReservarion)
  .put(updateReservationValidator, updateReservarion)
  .delete(deleteReservationValidator, deleteReservarion);

module.exports = router;
