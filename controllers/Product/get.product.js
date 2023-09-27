const productModel = require("../../models/product.model");

const getProduct = async (req, res) => {
  const productObject = await productModel.findOne({ _id: req.params.id });
  if (!productObject) {
    return res.status(404).json({
      statusCode: 404,
      message: "Product not found",
    });
  }
  return res.status(200).json({
    statusCode: 200,
    message: "product found successfully.",
    productObject,
  });
};

module.exports = getProduct;
