const productModel = require("../../models/product.model");

const updateProduct = async (req, res) => {
  try {
    const updateProduct = await productModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    return res.status(200).json({
      statusCode: 200,
      message: "Product updated successfully",
      updateProduct,
    });
  } catch (err) {
    console.log("error while update product", err);
    return res.status(404).json({
      statusCode: 404,
      message: "something went wrong..",
    });
  }
};

module.exports = updateProduct;
