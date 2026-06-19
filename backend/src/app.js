const express = require("express");
const cors = require("cors");
const userRouter = require("./router/user.routes");
const productRouter = require("./router/product.routes");
const orderRouter = require("./router/order.routes");

const app = express();
app.use(cors({origin: "http://localhost:5173"}));
app.use(express.json());
app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/orders", orderRouter);
module.exports = app;