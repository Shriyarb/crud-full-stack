const { MongoClient } = require("mongodb");

const dbConnectionUrl =
    process.env.MONGO_DATABASE_URL;

const app_MClient =
    new MongoClient(dbConnectionUrl);

let activeDatabase;

const connectDB = async () => {
    try {
        await app_MClient.connect();

        activeDatabase =
            app_MClient.db(
                process.env.DATABASE_NAME
            );

        console.log("Mongo done.");
    } catch (dbConnectionIssue) {
        console.error(
            "Boom it failed :(",
            dbConnectionIssue
        );

        throw dbConnectionIssue;
    }
};

const getDB = () => activeDatabase;

module.exports = {
    connectDB,
    getDB
};