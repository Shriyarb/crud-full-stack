const { ObjectId } = require("mongodb");
const { getDB } = require("../config/db");

const productCollection = () => {
    return getDB().collection("products");
};

const createProduct = async (productInfo) => {
    const creationRes = await productCollection().insertOne(productInfo);
    return creationRes;
};

const fetchAllProducts = async () => {
    const productLt = await productCollection().find({}).toArray();
    return productLt;
};

const fetchProductById = async (productId) => {
    const productRec = await productCollection().findOne({ _id: new ObjectId(productId) });
    return productRec;
};

const updateProduct = async ( productId, updatedProductInfo) => {
    const updateRes =
        await productCollection().updateOne( { _id: new ObjectId(productId) }, { $set: updatedProductInfo });
    return updateRes;
};

const del_Product = async (productId) => {
    const del_Res = await productCollection().deleteOne({ _id: new ObjectId(productId) });
    return del_Res;
};

module.exports = {
    createProduct,
    fetchAllProducts,
    fetchProductById,
    updateProduct,
    del_Product
};