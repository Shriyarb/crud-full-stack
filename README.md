# CRUD Full Stack Application

A full-stack CRUD application built using React, Node.js, Express.js, and MongoDB.

## Project Overview

This project implements complete CRUD (Create, Read, Update, Delete) operations for three entities:

* Users
* Products
* Orders

The application follows a layered backend architecture and uses MongoDB as the database.

---

## Tech Stack

### Frontend

* React
* Vite
* Axios
* CSS

### Backend

* Node.js
* Express.js
* MongoDB Driver
* dotenv
* CORS

### Database

* MongoDB

---

## Project Structure

```text
Task2
│
├── backend
│   ├── src
│   │   ├── config
│   │   ├── handlers
│   │   ├── models
│   │   ├── router
│   │   └── services
│   │
│   ├── server.js
│   └── package.json
│
└── frontend
    ├── src
    ├── public
    └── package.json
```

---

## Backend Architecture

The backend follows a layered architecture:

```text
Router
   ↓
Handler
   ↓
Service
   ↓
Model
   ↓
MongoDB
```

---

## Environment Variables

Create a `.env` file inside the backend folder.

```env
PORT=5000

MONGO_DATABASE_URL=mongodb://localhost:27017

DATABASE_NAME=task2db
```

---

## Collections

### Users

```json
{
  "name": "John Doe",
  "email": "john@gmail.com",
  "phone": "9876543210",
  "address": "Hyderabad"
}
```

### Products

```json
{
  "name": "iPhone 17",
  "description": "Apple Smartphone",
  "price": 177000,
  "quantity": 25,
  "category": "Smart Phones"
}
```

### Orders

```json
{
  "userId": "USER_ID",
  "products": [
    {
      "productId": "PRODUCT_ID",
      "quantity": 1,
      "price": 177000
    }
  ],
  "totalAmount": 177000,
  "status": "pending"
}
```

---

## API Endpoints

### Users

| Method | Endpoint   |
| ------ | ---------- |
| POST   | /users     |
| GET    | /users     |
| GET    | /users/:id |
| PUT    | /users/:id |
| DELETE | /users/:id |

---

### Products

| Method | Endpoint      |
| ------ | ------------- |
| POST   | /products     |
| GET    | /products     |
| GET    | /products/:id |
| PUT    | /products/:id |
| DELETE | /products/:id |

---

### Orders

| Method | Endpoint    |
| ------ | ----------- |
| POST   | /orders     |
| GET    | /orders     |
| GET    | /orders/:id |
| PUT    | /orders/:id |
| DELETE | /orders/:id |

---

## Features

### Users

* Create User
* View All Users
* Update User
* Delete User

### Products

* Create Product
* View All Products
* Update Product
* Delete Product

### Orders

* Create Order
* View All Orders
* Update Order Status
* Delete Order

---

## Frontend Features

* Home Page
* Users Management Page
* Products Management Page
* Orders Management Page
* Responsive Card-Based UI
* Axios Integration with Backend APIs

---

## Running the Project

### Backend

```bash
cd backend

npm install

node server.js
```

Backend runs on:

```text
http://localhost:5000
```

---

### Frontend

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## Author

Shriya Rao Balivada

B.Tech Computer Science and Engineering

SRM University AP
