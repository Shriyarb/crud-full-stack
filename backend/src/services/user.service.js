const {
    createUser,
    fetchUserById,
    fetchAllUsers,
    del_User,
    updateUser
} = require("../models/user.model");

const reg_Users = async (userInfo) => {
    const creationRes = await createUser(userInfo);
    return creationRes;
};

const searchUsers = async (userId) => {
    const userRec = await fetchUserById(userId);
    return userRec;
};

const fetch_Users = async () => {
    const userLt = await fetchAllUsers();
    return userLt;
};

const updateUserInfo = async (userId, updatedUserInfo) => {
    const updateRes =
        await updateUser(userId, updatedUserInfo);
    return updateRes;
};

const remUser = async (userId) => {
    const del_Res = await del_User(userId);
    return del_Res;
};

module.exports = {
    reg_Users,
    searchUsers,
    fetch_Users,
    updateUserInfo,
    remUser
};