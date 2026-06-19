const express = require("express");

const {
    createOrderHandler,
    fetchOrderHandlerbyID,
    fetchAllOrdersHandler,
    updateOrderHandler,
    delOrderHandler  
} = require("../handlers/order.handler");

const orderRouter = express.Router();
orderRouter.post("/", createOrderHandler);
orderRouter.get("/:id", fetchOrderHandlerbyID);
orderRouter.get("/", fetchAllOrdersHandler);
orderRouter.put("/:id", updateOrderHandler);
orderRouter.delete("/:id", delOrderHandler);
module.exports = orderRouter;