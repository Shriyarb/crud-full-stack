import { useState, useEffect } from "react";
import axios from "axios";
import "./Users.css";

function Users() {

    const [users, setUsers] = useState([]);

    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    });

    const [editingId, setEditingId] = useState(null);

    const [editUser, setEditUser] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    });

    const fetchUsers = async () => {

        try {

            const res = await axios.get(
                "http://localhost:5000/users"
            );

            setUsers(res.data.body);

        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleChange = (e) => {

        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        });
    };

    const addUser = async () => {

        try {

            await axios.post(
                "http://localhost:5000/users",
                userInfo
            );

            setUserInfo({
                name: "",
                email: "",
                phone: "",
                address: ""
            });

            fetchUsers();

        } catch (err) {
            console.log(err);
        }
    };

    const startEdit = (user) => {

        setEditingId(user._id);

        setEditUser({
            name: user.name,
            email: user.email,
            phone: user.phone,
            address: user.address
        });
    };

    const saveUser = async (id) => {

        try {

            await axios.put(
                `http://localhost:5000/users/${id}`,
                editUser
            );

            setEditingId(null);

            fetchUsers();

        } catch (err) {
            console.log(err);
        }
    };

    const deleteUser = async (id) => {

        try {

            await axios.delete(
                `http://localhost:5000/users/${id}`
            );

            fetchUsers();

        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="users-page">

            <h1>User Management</h1>

            <div className="user-form">

                <input
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    value={userInfo.name}
                    onChange={handleChange}
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={userInfo.email}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="phone"
                    placeholder="Enter Phone"
                    value={userInfo.phone}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="address"
                    placeholder="Enter Address"
                    value={userInfo.address}
                    onChange={handleChange}
                />

                <button onClick={addUser}>
                    Add User
                </button>

            </div>

            <h2>Registered Users</h2>

            <div className="user-grid">

                {users.map((user) => (

                    <div
                        className="user-card"
                        key={user._id}
                    >

                        {editingId === user._id ? (

                            <>
                                <input
                                    type="text"
                                    value={editUser.name}
                                    onChange={(e) =>
                                        setEditUser({
                                            ...editUser,
                                            name: e.target.value
                                        })
                                    }
                                />

                                <input
                                    type="email"
                                    value={editUser.email}
                                    onChange={(e) =>
                                        setEditUser({
                                            ...editUser,
                                            email: e.target.value
                                        })
                                    }
                                />

                                <input
                                    type="text"
                                    value={editUser.phone}
                                    onChange={(e) =>
                                        setEditUser({
                                            ...editUser,
                                            phone: e.target.value
                                        })
                                    }
                                />

                                <input
                                    type="text"
                                    value={editUser.address}
                                    onChange={(e) =>
                                        setEditUser({
                                            ...editUser,
                                            address: e.target.value
                                        })
                                    }
                                />

                                <div className="btn-group">

                                    <button
                                        className="save-btn"
                                        onClick={() =>
                                            saveUser(user._id)
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

                        ) : (

                            <>
                                <h3>{user.name}</h3>

                                <p>
                                    <strong>Email:</strong> {user.email}
                                </p>

                                <p>
                                    <strong>Phone:</strong> {user.phone}
                                </p>

                                <p>
                                    <strong>Address:</strong> {user.address}
                                </p>

                                <div className="btn-group">

                                    <button
                                        className="edit-btn"
                                        onClick={() =>
                                            startEdit(user)
                                        }
                                    >
                                        Edit
                                    </button>

                                    <button
                                        className="delete-btn"
                                        onClick={() =>
                                            deleteUser(user._id)
                                        }
                                    >
                                        Delete
                                    </button>

                                </div>
                            </>
                        )}

                    </div>
                ))}

            </div>

        </div>
    );
}

export default Users;