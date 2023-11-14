const router = require("express").Router();
const {
  createChambre,
  getAllChambres,
  getOneChambre,
  updateChambre,
  deleteChambre,
  getChambreByNumero,

} = require("../controllers/chambreController");
const { getChambreValidator, deleteChambreValidator, updateChambreValidator, createChambreValidator, getChambreByNumeroValidator } = require("../utils/validators/chambreValidator");

router.route("/").post(createChambreValidator,createChambre).get(getAllChambres)
router
  .route("/:id")
  .get(getChambreValidator,getOneChambre) 
  .put(updateChambreValidator,updateChambre)
  .delete(deleteChambreValidator,deleteChambre);
router.route('/chambre/:numero').get(getChambreByNumero)

module.exports = router;
