const productModel = require("../../models/product.model");

const getAllProducts = async (req, res) => {
  try {
    const allProduct = await productModel.find();
    return res.status(200).json({
      statusCode: 200,
      message: "Success get all products",
      allProduct,
    });
  } catch (err) {
    console.log("Error from get all products", err);
    return res.status(404).json({
      statusCode: 404,
      message: "Something went wrong..",
    });
  }
};

module.exports = getAllProducts;
