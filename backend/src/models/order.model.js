const { ObjectId } = require("mongodb");
const { getDB } = require("../config/db");

const orderCollection = () => {
    return getDB().collection("orders");
};

const createOrder = async (orderInfo) => {
    const res = await orderCollection().insertOne(orderInfo);
    return res;
};

const fetchOrderById = async (orderId) => {
    const orderRec = await orderCollection().findOne({
        _id: new ObjectId(orderId)
    });

    return orderRec;
};

const fetchAllOrders = async () => {
    const orderLt = await orderCollection()
        .find({})
        .toArray();

    return orderLt;
};

const updateOrder = async (
    orderId,
    updatedOrderInfo
) => {
    const updateRes =
        await orderCollection().updateOne(
            {
                _id: new ObjectId(orderId)
            },
            {
                $set: updatedOrderInfo
            }
        );

    return updateRes;
};

const del_Order = async (orderId) => {
    const delRes =
        await orderCollection().deleteOne({
            _id: new ObjectId(orderId)
        });

    return delRes;
};

module.exports = {
    createOrder,
    fetchOrderById,
    fetchAllOrders,
    updateOrder,
    del_Order
};