import { useState, useEffect } from "react";
import axios from "axios";
import "./Products.css";

function Products() {

    const [products, setProducts] = useState([]);

    const [productInfo, setProductInfo] = useState({
        name: "",
        description: "",
        price: "",
        quantity: "",
        category: ""
    });

    const [editingId, setEditingId] = useState(null);

    const [editProduct, setEditProduct] = useState({
        name: "",
        description: "",
        price: "",
        quantity: "",
        category: ""
    });

    const fetchProducts = async () => {

        try {

            const res = await axios.get(
                "http://localhost:5000/products"
            );

            setProducts(res.data.body);

        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleChange = (e) => {

        setProductInfo({
            ...productInfo,
            [e.target.name]: e.target.value
        });
    };

    const addProduct = async () => {

        try {

            await axios.post(
                "http://localhost:5000/products",
                productInfo
            );

            setProductInfo({
                name: "",
                description: "",
                price: "",
                quantity: "",
                category: ""
            });

            fetchProducts();

        } catch (err) {
            console.log(err);
        }
    };

    const startEdit = (product) => {

        setEditingId(product._id);

        setEditProduct({
            name: product.name,
            description: product.description,
            price: product.price,
            quantity: product.quantity,
            category: product.category
        });
    };

    const saveProduct = async (id) => {

        try {

            await axios.put(
                `http://localhost:5000/products/${id}`,
                editProduct
            );

            setEditingId(null);

            fetchProducts();

        } catch (err) {
            console.log(err);
        }
    };

    const deleteProduct = async (id) => {

        try {

            await axios.delete(
                `http://localhost:5000/products/${id}`
            );

            fetchProducts();

        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="products-page">

            <h1>Product Management</h1>

            <div className="product-form">

                <input
                    type="text"
                    name="name"
                    placeholder="Product Name"
                    value={productInfo.name}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={productInfo.description}
                    onChange={handleChange}
                />

                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={productInfo.price}
                    onChange={handleChange}
                />

                <input
                    type="number"
                    name="quantity"
                    placeholder="Quantity"
                    value={productInfo.quantity}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="category"
                    placeholder="Category"
                    value={productInfo.category}
                    onChange={handleChange}
                />

                <button onClick={addProduct}>
                    Add Product
                </button>

            </div>

            <h2>Available Products</h2>

            <div className="product-grid">

                {products.map((product) => (

                    <div
                        className="product-card"
                        key={product._id}
                    >

                        {
                            editingId === product._id ?

                            (
                                <>
                                    <input
                                        type="text"
                                        value={editProduct.name}
                                        onChange={(e) =>
                                            setEditProduct({
                                                ...editProduct,
                                                name: e.target.value
                                            })
                                        }
                                    />

                                    <input
                                        type="text"
                                        value={editProduct.description}
                                        onChange={(e) =>
                                            setEditProduct({
                                                ...editProduct,
                                                description: e.target.value
                                            })
                                        }
                                    />

                                    <input
                                        type="number"
                                        value={editProduct.price}
                                        onChange={(e) =>
                                            setEditProduct({
                                                ...editProduct,
                                                price: e.target.value
                                            })
                                        }
                                    />

                                    <input
                                        type="number"
                                        value={editProduct.quantity}
                                        onChange={(e) =>
                                            setEditProduct({
                                                ...editProduct,
                                                quantity: e.target.value
                                            })
                                        }
                                    />

                                    <input
                                        type="text"
                                        value={editProduct.category}
                                        onChange={(e) =>
                                            setEditProduct({
                                                ...editProduct,
                                                category: e.target.value
                                            })
                                        }
                                    />

                                    <div className="btn-group">

                                        <button
                                            className="save-btn"
                                            onClick={() =>
                                                saveProduct(product._id)
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
                                    <h3>{product.name}</h3>

                                    <p>
                                        <strong>Description:</strong> {product.description}
                                    </p>

                                    <p>
                                        <strong>Price:</strong> ₹{product.price}
                                    </p>

                                    <p>
                                        <strong>Stock:</strong> {product.quantity}
                                    </p>

                                    <p>
                                        <strong>Category:</strong> {product.category}
                                    </p>

                                    <div className="btn-group">

                                        <button
                                            className="edit-btn"
                                            onClick={() =>
                                                startEdit(product)
                                            }
                                        >
                                            Edit
                                        </button>

                                        <button
                                            className="delete-btn"
                                            onClick={() =>
                                                deleteProduct(product._id)
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

export default Products;