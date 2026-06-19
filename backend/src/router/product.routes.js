const express = require("express");

const {
    createProductHandler,
    fetchProductHandlerbyID,
    fetchAllProductsHandler,
    updateProductHandler,
    delProductHandler
} = require("../handlers/product.handler");

const productRouter = express.Router();
productRouter.post("/", createProductHandler);
productRouter.get("/", fetchAllProductsHandler);
productRouter.get("/:id", fetchProductHandlerbyID);
productRouter.put("/:id", updateProductHandler);
productRouter.delete("/:id", delProductHandler);
module.exports = productRouter;