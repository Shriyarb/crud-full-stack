const {
    reg_Order,
    searchOrders,
    fetch_Orders,
    updateOrderInfo,
    remOrder
} = require("../services/order.service");

const createOrderHandler = async (req, res) => {
    try {
        const creationRes = await reg_Order(req.body);
        res.status(201).json({ success: true, body: creationRes});
    } catch (err) {
        res.status(500).json({ success: false, message: "Could not create order :(" });
    }
};

const fetchOrderHandlerbyID = async (req, res) => {
    try {
        const orderRec = await searchOrders(req.params.id);
        res.status(200).json({ success: true, body: orderRec });
    } catch (err) {
        res.status(500).json({ success: false, message: "Could not fetch order :(" });
    }
};

const fetchAllOrdersHandler = async (req, res) => {
    try {
        const orderLt = await fetch_Orders();
        res.status(200).json({ success: true, body: orderLt });
    } catch (err) {
        res.status(500).json({ success: false, message: "Could not fetch orders" });
    }
};

const updateOrderHandler = async (req, res) => {
    try {
        const updateRes = await updateOrderInfo( req.params.id, req.body );

        res.status(200).json({ success: true, body: updateRes });
    } catch (err) {
        res.status(500).json({ success: false, message: "Could not update order" });
    }
};

const delOrderHandler = async (req, res) => {
    try {
        const del_Res = await remOrder(req.params.id);
        res.status(200).json({ success: true, body: del_Res });
    } catch (err) {
        res.status(500).json({ success: false, message: "Could not delete order" });
    }
};

module.exports = {
    createOrderHandler,
    fetchOrderHandlerbyID,
    fetchAllOrdersHandler,
    updateOrderHandler,
    delOrderHandler
};