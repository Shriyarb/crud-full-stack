# Task 2 - User CRUD API using Express and MongoDB

## Implementation Steps

1. Inititalize the application using "npm init -y".
2. Install Express using "npm i express".
3. Install MongoDB driver using "npm i mongodb".
4. Install dotenv using "npm i dotenv".
5. Create the basic project folder structure.
6. Create a ".env" file to store environment variables.
7. Configure MongoDB connection in "src/config/db.js".
8. Make database connection using MongoClient and async/await.
9. Create a reusable database utility using the "getDB()" function.
10. Create "user.model.js" to handle database operations.
11. Implement Create User functionality using "insertOne()".
12. Implement Fetch All Users functionality using "find().toArray()".
13. Implement Fetch User By Id functionality using "findOne()".
14. Implement Update User functionality using "updateOne()".
15. Implement Delete User functionality using "deleteOne()".
16. Create "user.service.js" to handle business logic.
17. Create "user.handler.js" to handle requests and responses.
18. Create "user.routes.js" to define API endpoints.
19. Create "app.js" to configure middleware and routes.
20. Create "server.js" to establish database connection and start the server.
21. Test Create User API using Postman.
22. Test Fetch All Users API using Postman.
23. Test Fetch User By Id API using Postman.
24. Test Update User API using Postman.
25. Test Delete User API using Postman.
26. Verify user data storage in MongoDB.
27. Implement and verify complete CRUD operations for the Users collection.

## API Testing Guide

### Create User

Method: POST

Endpoint:

[http://localhost:5000/users](http://localhost:5000/users)

Sample Input:

{
"name": "Aarav Sharma",
"email": "[aarav.sharma@gmail.com](mailto:aarav.sharma@gmail.com)",
"age": 24
}

Expected Result:

A new user document is inserted into the MongoDB Users collection and an insertedId is returned.

### Fetch All Users

Method: GET

Endpoint:

[http://localhost:5000/users](http://localhost:5000/users)

Expected Result:

Returns all user documents stored in the Users collection.

### Fetch User By Id

Method: GET

Endpoint:

[http://localhost:5000/users/](http://localhost:5000/users/)<user_id>

Example:

[http://localhost:5000/users/6a310d5962ba90f8a5956068](http://localhost:5000/users/6a310d5962ba90f8a5956068)

Expected Result:

Returns the user document associated with the provided MongoDB ObjectId.

### Update User

Method: PUT

Endpoint:

[http://localhost:5000/users/](http://localhost:5000/users/)<user_id>

Sample Input:

{
"age": 25
}

Expected Result:

Updates the specified fields of the selected user document.

### Delete User

Method: DELETE

Endpoint:

[http://localhost:5000/users/](http://localhost:5000/users/)<user_id>

Expected Result:

Deletes the user document associated with the provided MongoDB ObjectId.

## Environment Variables

Create a ".env" file in the project root and add:

PORT="port number"

MONGO_DATABASE_URL="url"

DATABASE_NAME=db name
