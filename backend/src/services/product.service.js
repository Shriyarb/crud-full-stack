const {
    createProduct,
    fetchProductById,
    fetchAllProducts,
    updateProduct,
    del_Product
} = require("../models/product.model");

const reg_Product = async (productInfo) => {
    const creationRes = await createProduct(productInfo);
    return creationRes;
};

const searchProducts = async (productId) => {
    const productRec = await fetchProductById(productId);
    return productRec;
};

const fetch_Products = async () => {
    const productLt = await fetchAllProducts();
    return productLt;
};

const updateProductInfo = async ( productId, updatedProductInfo ) => {
    const updateRes =
        await updateProduct( productId, updatedProductInfo);
    return updateRes;
};

const remProduct = async (productId) => {
    const del_Res = await del_Product(productId);
    return del_Res;
};

module.exports = {
    reg_Product,
    searchProducts,
    fetch_Products,
    updateProductInfo,
    remProduct
};