# Task 2 - CRUD Operations using Express and MongoDB

## Implementation Steps

1. Inititalize the application using "npm init -y".
2. Install Express using "npm i express".
3. Install MongoDB driver using "npm i mongodb".
4. Install dotenv using "npm i dotenv".
5. Create the basic project folder structure.
6. Create a ".env" file to store environment variables.
7. Configure MongoDB connection in "src/config/db.js".
8. Establish database connection using MongoClient and async/await.
9. Create a reusable database utility using the "getDB()" function.
10. Create "user.model.js" for User database operations.
11. Implement Create User functionality using "insertOne()".
12. Implement Fetch All Users functionality using "find().toArray()".
13. Implement Fetch User By Id functionality using "findOne()".
14. Implement Update User functionality using "updateOne()".
15. Implement Delete User functionality using "deleteOne()".
16. Create "user.service.js" to handle User business logic.
17. Create "user.handler.js" to handle User requests and responses.
18. Create "user.routes.js" to define User API endpoints.
19. Create "product.model.js" for Product database operations.
20. Implement Create Product functionality using "insertOne()".
21. Implement Fetch All Products functionality using "find().toArray()".
22. Implement Fetch Product By Id functionality using "findOne()".
23. Implement Update Product functionality using "updateOne()".
24. Implement Delete Product functionality using "deleteOne()".
25. Create "product.service.js" to handle Product business logic.
26. Create "product.handler.js" to handle Product requests and responses.
27. Create "product.routes.js" to define Product API endpoints.
28. Create "app.js" to configure middleware and register routes.
29. Create "server.js" to establish database connection and start the application.
30. Test User CRUD APIs using Postman.
31. Test Product CRUD APIs using Postman.
32. Verify data persistence using MongoDB.
33. Successfully implement and test CRUD operations for both Users and Products collections.

## Collections

### Users Collection

Sample Document:

{
"name": "Aarav Sharma",
"email": "[aarav.sharma@gmail.com](mailto:aarav.sharma@gmail.com)",
"age": 24
}

### Products Collection

Sample Document:

{
"productName": "iPhone 15",
"brand": "Apple",
"category": "Mobile",
"mrp": 79999,
"sellingPrice": 74999,
"stock": 25
}

## Environment Variables

PORT="port number"

MONGO_DATABASE_URL="url"

DATABASE_NAME="database name"

## API Endpoints

### Users

POST /users

GET /users

GET /users/:id

PUT /users/:id

DELETE /users/:id

### Products

POST /products

GET /products

GET /products/:id

PUT /products/:id

DELETE /products/:id


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
# crud-full-stack

