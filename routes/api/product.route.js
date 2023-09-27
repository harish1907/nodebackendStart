const router = require("express").Router();
const createProduct = require("../../controllers/Product/create.product");
const getProduct = require("../../controllers/Product/get.product");
const deleteProduct = require("../../controllers/Product/delete.product");
const updateProduct = require("../../controllers/Product/update.product");
const getAllProducts = require("../../controllers/Product/getall.product");

const validateAccessToken = require("../../middleware/jwt_validation");

router.post("/create", createProduct);
router.get("/get/:id", getProduct);
router.delete("/delete/:id", deleteProduct);
router.put("/update/:id", updateProduct);
router.get("/getall", getAllProducts);

module.exports = router;
