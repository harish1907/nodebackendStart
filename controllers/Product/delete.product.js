const productModel = require("../../models/product.model");

const deleteProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json({
      statusCode: 200,
      message: "Product deleted successfully",
    });
  } catch (err) {
    console.log("delete product object error.", err);
    res.status(404).json({
      statusCode: 404,
      message: "Something went wrong.",
    });
  }
};

module.exports = deleteProduct;
