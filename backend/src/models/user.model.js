const { ObjectId } = require("mongodb");
const { getDB } = require("../config/db");

const userCollection = () => {
    return getDB().collection("users");
};

const createUser = async (userInfo) => {
    const creationRes =
        await userCollection().insertOne( userInfo );
    return creationRes;
};


const fetchUserById = async (userId) => {
    const userRecord =
        await userCollection().findOne({ _id: new ObjectId(userId)});
    return userRecord;
};

const fetchAllUsers = async () => {
    const userList = await userCollection() .find({}) .toArray();
    return userList;
};

const del_User = async (userId) => {
    const del_Res =
        await userCollection().deleteOne({_id: new ObjectId(userId)});
    return del_Res;
};

const updateUser = async ( userId, updatedUserInfo) => {
    const updateRes =
        await userCollection().updateOne( {_id: new ObjectId(userId)},{ $set: updatedUserInfo });
    return updateRes;
};


module.exports = {
    createUser,
    fetchUserById,
    fetchAllUsers,
    del_User,
    updateUser

};