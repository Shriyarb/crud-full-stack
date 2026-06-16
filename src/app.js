const express = require("express");
const userRouter = require("./router/user.routes");
const productRouter = require("./router/product.routes");
const app = express();
app.use(express.json());
app.use("/users", userRouter);
app.use("/products", productRouter);
module.exports = app;