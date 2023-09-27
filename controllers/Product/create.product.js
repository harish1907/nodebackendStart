const productModel = require("../../models/product.model");

const createProduct = (req, res) => {
  try {
    const product = new productModel(req.body);
    product.save();
    return res.status(200).json({
      statusCode: 200,
      message: "Product create successfully",
      product,
    });
  } catch (err) {
    console.log("error from createProduct", err);
    return res.status(404).json({
      statusCode: 404,
      message: "Success",
    });
  }
};

module.exports = createProduct;
