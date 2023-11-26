const router = require("express").Router();
const {
  createClient,
  getAllClients,
  getOneClient,
  updateClient,
  deleteClient,
} = require("../controllers/clientController"); // Replace with the actual path to your client controller
const { createClientValidator } = require("../utils/validators/clientValidator"); // Replace with the actual path to your client validators

router.route("/").post(createClientValidator, createClient).get(getAllClients);
router
  .route("/:id")
  .get( getOneClient)
  .put( updateClient)
  .delete( deleteClient);

module.exports = router;
