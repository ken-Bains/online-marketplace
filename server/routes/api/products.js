const router = require("express").Router();
const productsController = require("../../controllers/productsController");

router
  .route("/db")
    .get(productsController.findAllFromDB)

  // Matches with "/api/products/category"
router
  .route("/category")
  .get(productsController.findByClass)
  
  // Matches with "/api/products/:id"
router
  .route("/:id")
  .get(productsController.findById)
  .put(productsController.update)
  .delete(productsController.remove);
// Matches with "/api/products"
router
  .route("/")
  .get(productsController.findAll)
  .post(productsController.create);

module.exports = router;
