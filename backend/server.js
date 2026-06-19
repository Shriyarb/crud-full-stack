require("dotenv").config();

const app = require("./src/app");
const { connectDB } = require("./src/config/db");

const server_Port = process.env.PORT || 5000;

const start_Server = async () => {
    try {
        await connectDB();

        app.listen(server_Port, () => { console.log(`Server running: ${server_Port}`); });

    } catch (err) {
        console.error( "Server startup failed", err );
    }
};

start_Server();