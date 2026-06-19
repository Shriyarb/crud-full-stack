const {
    createOrder,
    fetchOrderById,
    fetchAllOrders,
    updateOrder,
    del_Order
} = require("../models/order.model");

const reg_Order = async (orderInfo) => {
    const creationRes = await createOrder(orderInfo);
    return creationRes;
};

const searchOrders = async (orderId) => {
    const orderRec = await fetchOrderById(orderId);
    return orderRec;
};

const fetch_Orders = async () => {
    const orderLt = await fetchAllOrders();
    return orderLt;
};

const updateOrderInfo = async (
    orderId,
    updatedOrderInfo
) => {
    const updateRes =
        await updateOrder(
            orderId,
            updatedOrderInfo
        );

    return updateRes;
};

const remOrder = async (orderId) => {
    const del_Res = await del_Order(orderId);
    return del_Res;
};

module.exports = {
    reg_Order,
    searchOrders,
    fetch_Orders,
    updateOrderInfo,
    remOrder
};