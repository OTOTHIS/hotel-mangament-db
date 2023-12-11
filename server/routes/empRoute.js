const router = require("express").Router();
const {
  createemployee,
  getAllemployees,
  getOneemployee,
  updateemployee,
  deleteemployee,
} = require("../controllers/empController"); // Replace with the actual path to your client controller
const { createemployeeValidator } = require("../utils/validators/empValidtion");

router.route("/").post(createemployeeValidator, createemployee).get(getAllemployees);
router
  .route("/:id")
  .get( getOneemployee)
  .put( updateemployee)
  .delete(deleteemployee);

module.exports = router;
