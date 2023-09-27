const apiRoutes = require("express").Router();
const authRoutes = require("./auth.route");
const productRoutes = require("../api/product.route");

apiRoutes.use("/auth", authRoutes);
apiRoutes.use("/product", productRoutes);

module.exports = apiRoutes;
