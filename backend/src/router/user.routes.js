const express = require("express");

const {
    createUserHandler,
    fetchAllUsersHandler,
    getUserHandler,
    updateUserHandler,
    delUserHandler
} = require("../handlers/user.handler");

const userRouter = express.Router();
userRouter.post("/", createUserHandler);
userRouter.get("/", fetchAllUsersHandler);
userRouter.get("/:id", getUserHandler);
userRouter.put("/:id", updateUserHandler);
userRouter.delete("/:id", delUserHandler);
module.exports = userRouter;