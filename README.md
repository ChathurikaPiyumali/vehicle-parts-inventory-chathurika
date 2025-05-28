# 🚗 Vehicle Parts Inventory System

A fullstack web application for managing vehicle parts inventory with search, filtering, and CRUD operations.

## 📚 Technologies Used
- **Frontend**: React.js, Axios, React Router
- **Backend**: Express.js, Sequelize ORM
- **Database**: MySQL
- **Tooling**: SQLTools (for database), Nodemon, VS Code

## 🚀 Features
- Add, edit, delete vehicle parts  
- Search parts by name  
- Filter by part type and availability status  
- Clean and simple React interface  
- RESTful API with Express.js and Sequelize  
- MySQL for persistent storage

### 1️⃣ Prerequisites
- Node.js (v16+)
- MySQL Server
- VS Code (recommended)
- SQLTools extension (optional)

### 2️⃣ Backend Setup
cd backend  
npm install

Create a `.env` file:

DB_HOST=localhost  
DB_USER=root  
DB_PASS=chathurika123  
DB_NAME=vehicle_parts  
PORT=5000

Run the server:
npx nodemon server.js

### 3️⃣ Create the MySQL Database
Use SQLTools or MySQL CLI:
CREATE DATABASE vehicle_parts;

Run the backend once to auto-create the `parts` table via Sequelize.

### 4️⃣ Frontend Setup
cd frontend  
npm install  
npm start

The app will be available at: http://localhost:3000

## 🧪 API Endpoints
GET    /parts         → List parts (with search/filter)  
GET    /parts/:id     → Get part by ID  
POST   /parts         → Create new part  
PUT    /parts/:id     → Update part  
DELETE /parts/:id     → Delete part

## 📸 Screenshots

### 🏠 Home Page – Parts Listing
![Home Page](https://github.com/ChathurikaPiyumali/vehicle-parts-inventory-chathurika/blob/main/HomePage.png)

### ➕ Add New Part Form
![Add New Part](https://github.com/ChathurikaPiyumali/vehicle-parts-inventory-chathurika/blob/main/addnewpart.png?raw=true)

### ✏️ Edit Part Form
![Edit Part](https://github.com/ChathurikaPiyumali/vehicle-parts-inventory-chathurika/blob/main/editpart.png?raw=true)


