const {
    reg_Product,
    searchProducts,
    fetch_Products,
    updateProductInfo,
    remProduct
} = require("../services/product.service");

const createProductHandler = async (req, res) => {
    try {
        const creationRes = await reg_Product(req.body);
        res.status(201).json({ success: true, body: creationRes });
    } catch (err) {
        res.status(500).json({ success: false, message: "Could not be created :(" });
    }
};

const fetchProductHandlerbyID = async (req, res) => {
    try {
        const productRec = await searchProducts(req.params.id);
        res.status(200).json({ success: true, body: productRec });
    } catch (err) {
        res.status(500).json({ success: false, message: "Could not fetch product :(" });
    }
};

const fetchAllProductsHandler = async ( req, res ) => {
    try {
        const productLt = await fetch_Products();
        res.status(200).json({ success: true, body: productLt });
    } catch (err) {
        res.status(500).json({ success: false, message: "Could not fetch products"});
    }
};

const updateProductHandler = async ( req, res ) => {
    try {
        const updateRes = await updateProductInfo( req.params.id, req.body);
        res.status(200).json({ success: true, body: updateRes });
    } catch (err) {
        res.status(500).json({ success: false, message: "Could not update product"});
    }
};

const delProductHandler = async ( req, res ) => {
    try {
        const del_Res = await remProduct(req.params.id);
        res.status(200).json({ success: true, body: del_Res });
    } catch (err) {
        res.status(500).json({ success: false, message: "Could not delete product" });
    }
};

module.exports = {
    createProductHandler,
    fetchProductHandlerbyID,
    fetchAllProductsHandler,
    updateProductHandler,
    delProductHandler
};