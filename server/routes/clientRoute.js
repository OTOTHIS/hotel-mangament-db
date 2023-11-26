const router = require("express").Router();
const {
  createemployee,
  getAllemployees,
  getOneemployee,
  updateemployee,
  deleteemployee,
} = require("../controllers/empController"); // Replace with the actual path to your client controller
const { createClientValidator } = require("../utils/validators/clientValidator"); // Replace with the actual path to your client validators

router.route("/").post(createClientValidator, createemployee).get(getAllemployees);
router
  .route("/:id")
  .get( getOneemployee)
  .put( updateemployee)
  .delete(deleteemployee);

module.exports = router;
