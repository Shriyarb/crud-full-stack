const {
    reg_Users,
    searchUsers,
    fetch_Users,
    updateUserInfo,
    remUser
} = require("../services/user.service");

const createUserHandler = async (req, res) => {
    try {
        const creationRes = await reg_Users(req.body);
        res.status(200).json({ success: true, body: creationRes});
    } catch (err) {
        res.status(500).json({ success: false, message: "Could not create the user bro :("});
    }
};

const getUserHandler = async (req, res) => {
    try {
        const userRec = await searchUsers(req.params.id);
        res.status(200).json({ success: true, body: userRec });
    } catch (err) {
        res.status(500).json({ success: false, message: "Could not fetch userrrr" });
    }
};

const fetchAllUsersHandler = async (req, res) => {
    try {
        const userLt = await fetch_Users();
        res.status(200).json({ success: true, body: userLt });
    } catch (err) {
        res.status(500).json({ success: false, message: "Could not fetch users :(" });
    }
};

const delUserHandler = async (req, res) => {
    try {
        const del_Res = await remUser(req.params.id);
        res.status(200).json({ success: true, body: del_Res });
    } catch (err) {
        res.status(500).json({ success: false, message: "User not deleted!!!" });
    }
};

const updateUserHandler = async (req, res) => {
    try {
        const updateRes = await updateUserInfo( req.params.id, req.body);
        res.status(200).json({ success: true, body: updateRes });
    } catch (err) {
        res.status(500).json({ success: false, message: "Could not update user" });
    }
};

module.exports = {
    createUserHandler,
    fetchAllUsersHandler,
    getUserHandler,
    updateUserHandler,
    delUserHandler
};