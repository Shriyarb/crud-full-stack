import { useState, useEffect } from "react";
import axios from "axios";
import "./Orders.css";

function Orders() {

    const [orders, setOrders] = useState([]);

    const [orderInfo, setOrderInfo] = useState({
        userId: "",
        productId: "",
        quantity: "",
        price: "",
        totalAmount: "",
        status: "pending"
    });

    const [editingId, setEditingId] = useState(null);

    const [editOrder, setEditOrder] = useState({
        userId: "",
        productId: "",
        quantity: "",
        price: "",
        totalAmount: "",
        status: "pending"
    });

    const fetchOrders = async () => {

        try {

            const res = await axios.get(
                "http://localhost:5000/orders"
            );

            setOrders(res.data.body);

        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    const handleChange = (e) => {

        setOrderInfo({
            ...orderInfo,
            [e.target.name]: e.target.value
        });
    };

    const addOrder = async () => {

        try {

            const orderBody = {
                userId: orderInfo.userId,
                products: [
                    {
                        productId: orderInfo.productId,
                        quantity: Number(orderInfo.quantity),
                        price: Number(orderInfo.price)
                    }
                ],
                totalAmount: Number(orderInfo.totalAmount),
                status: orderInfo.status
            };

            await axios.post(
                "http://localhost:5000/orders",
                orderBody
            );

            setOrderInfo({
                userId: "",
                productId: "",
                quantity: "",
                price: "",
                totalAmount: "",
                status: "pending"
            });

            fetchOrders();

        } catch (err) {
            console.log(err);
        }
    };

    const startEdit = (order) => {

        setEditingId(order._id);

        setEditOrder({
            userId: order.userId,
            productId: order.products?.[0]?.productId || "",
            quantity: order.products?.[0]?.quantity || "",
            price: order.products?.[0]?.price || "",
            totalAmount: order.totalAmount,
            status: order.status
        });
    };

    const saveOrder = async (id) => {

        try {

            const updatedOrder = {
                userId: editOrder.userId,
                products: [
                    {
                        productId: editOrder.productId,
                        quantity: Number(editOrder.quantity),
                        price: Number(editOrder.price)
                    }
                ],
                totalAmount: Number(editOrder.totalAmount),
                status: editOrder.status
            };

            await axios.put(
                `http://localhost:5000/orders/${id}`,
                updatedOrder
            );

            setEditingId(null);

            fetchOrders();

        } catch (err) {
            console.log(err);
        }
    };

    const deleteOrder = async (id) => {

        try {

            await axios.delete(
                `http://localhost:5000/orders/${id}`
            );

            fetchOrders();

        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="orders-page">

            <h1>Order Management</h1>

            <div className="order-form">

                <input
                    type="text"
                    name="userId"
                    placeholder="User ID"
                    value={orderInfo.userId}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="productId"
                    placeholder="Product ID"
                    value={orderInfo.productId}
                    onChange={handleChange}
                />

                <input
                    type="number"
                    name="quantity"
                    placeholder="Quantity"
                    value={orderInfo.quantity}
                    onChange={handleChange}
                />

                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={orderInfo.price}
                    onChange={handleChange}
                />

                <input
                    type="number"
                    name="totalAmount"
                    placeholder="Total Amount"
                    value={orderInfo.totalAmount}
                    onChange={handleChange}
                />

                <select
                    name="status"
                    value={orderInfo.status}
                    onChange={handleChange}
                >
                    <option value="pending">Pending</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="shipped">Shipped</option>
                    <option value="delivered">Delivered</option>
                </select>

                <button onClick={addOrder}>
                    Create Order
                </button>

            </div>

            <h2>Orders</h2>

            <div className="order-grid">

                {orders.map((order) => (

                    <div
                        className="order-card"
                        key={order._id}
                    >

                        {
                            editingId === order._id ?

                            (
                                <>
                                    <input
                                        type="text"
                                        value={editOrder.userId}
                                        onChange={(e) =>
                                            setEditOrder({
                                                ...editOrder,
                                                userId: e.target.value
                                            })
                                        }
                                    />

                                    <input
                                        type="text"
                                        value={editOrder.productId}
                                        onChange={(e) =>
                                            setEditOrder({
                                                ...editOrder,
                                                productId: e.target.value
                                            })
                                        }
                                    />

                                    <input
                                        type="number"
                                        value={editOrder.quantity}
                                        onChange={(e) =>
                                            setEditOrder({
                                                ...editOrder,
                                                quantity: e.target.value
                                            })
                                        }
                                    />

                                    <input
                                        type="number"
                                        value={editOrder.price}
                                        onChange={(e) =>
                                            setEditOrder({
                                                ...editOrder,
                                                price: e.target.value
                                            })
                                        }
                                    />

                                    <input
                                        type="number"
                                        value={editOrder.totalAmount}
                                        onChange={(e) =>
                                            setEditOrder({
                                                ...editOrder,
                                                totalAmount: e.target.value
                                            })
                                        }
                                    />

                                    <select
                                        value={editOrder.status}
                                        onChange={(e) =>
                                            setEditOrder({
                                                ...editOrder,
                                                status: e.target.value
                                            })
                                        }
                                    >
                                        <option value="pending">Pending</option>
                                        <option value="confirmed">Confirmed</option>
                                        <option value="shipped">Shipped</option>
                                        <option value="delivered">Delivered</option>
                                    </select>

                                    <div className="btn-group">

                                        <button
                                            className="save-btn"
                                            onClick={() =>
                                                saveOrder(order._id)
                                            }
                                        >
                                            Save
                                        </button>

                                        <button
                                            className="cancel-btn"
                                            onClick={() =>
                                                setEditingId(null)
                                            }
                                        >
                                            Cancel
                                        </button>

                                    </div>
                                </>
                            )

                            :

                            (
                                <>
                                    <h3>
                                        Order Status: {order.status}
                                    </h3>

                                    <p>
                                        <strong>Order ID:</strong> {order._id}
                                    </p>

                                    <p>
                                        <strong>User ID:</strong> {order.userId}
                                    </p>

                                    <p>
                                        <strong>Total Amount:</strong> ₹{order.totalAmount}
                                    </p>

                                    <p>
                                        <strong>Products:</strong> {order.products?.length}
                                    </p>

                                    <div className="btn-group">

                                        <button
                                            className="edit-btn"
                                            onClick={() =>
                                                startEdit(order)
                                            }
                                        >
                                            Edit
                                        </button>

                                        <button
                                            className="delete-btn"
                                            onClick={() =>
                                                deleteOrder(order._id)
                                            }
                                        >
                                            Delete
                                        </button>

                                    </div>
                                </>
                            )
                        }

                    </div>
                ))}

            </div>

        </div>
    );
}

export default Orders;