# 🚗 Vehicle Parts Inventory System

A fullstack web application for managing vehicle parts inventory with search, filtering, and CRUD operations.

## 📚 Technologies Used
- **Frontend**: React.js, Axios, React Router
- **Backend**: Express.js, Sequelize ORM
- **Database**: MySQL
- **Tooling**: SQLTools (for database), Nodemon, VS Code

---

## 🚀 Features
- Add, edit, delete vehicle parts  
- Search parts by name  
- Filter by part type and availability status  
- Clean and simple React interface  
- RESTful API with Express.js and Sequelize  
- MySQL for persistent storage

---

## ✅ Prerequisites
- Node.js (v16+)
- MySQL Server
- VS Code (recommended)
- SQLTools extension (optional)

---

## 🔧 Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder:

```
DB_HOST=localhost
DB_USER=root
DB_PASS=chathurika123
DB_NAME=vehicle_parts
PORT=5000
```

Start the backend server:

```bash
npx nodemon server.js
```

---

## 🛢️ MySQL Database Setup

### Option 1: Create Manually

```sql
CREATE DATABASE vehicle_parts;
```

Then start the backend once — Sequelize will auto-create the `parts` table.

---

### Option 2: Import SQL File (Recommended for new machines)

1. Ensure MySQL Server is running.
2. Open terminal or CMD.
3. Navigate to the project directory.
4. Run the following command:

```bash
mysql -u root -p vehicle_parts < vehicle_parts.sql
```

> Replace `root` and `vehicle_parts` if your DB credentials are different.

This will restore the database structure and sample data (if included).

---

## 🎨 Frontend Setup

```bash
cd frontend
npm install
npm start
```

The frontend will run on:

```
http://localhost:3000
```

---

## 🧪 API Endpoints

| Method | Endpoint       | Description                  |
|--------|----------------|------------------------------|
| GET    | `/parts`       | List all parts (with filters)|
| GET    | `/parts/:id`   | Get part by ID               |
| POST   | `/parts`       | Create new part              |
| PUT    | `/parts/:id`   | Update part                  |
| DELETE | `/parts/:id`   | Delete part                  |

---

## 📸 Screenshots

### 🏠 Home Page – Parts Listing  
![Home Page](https://github.com/ChathurikaPiyumali/vehicle-parts-inventory-chathurika/blob/main/HomePage.png)

### ➕ Add New Part Form  
![Add New Part](https://github.com/ChathurikaPiyumali/vehicle-parts-inventory-chathurika/blob/main/Add.png)

### ✏️ Edit Part Form  
![Edit Part](https://github.com/ChathurikaPiyumali/vehicle-parts-inventory-chathurika/blob/main/Update.png)

---

## 📦 Submission Includes
- ✅ Full project code (frontend & backend)
- ✅ `README.md` setup guide
- ✅ `vehicle_parts.sql` MySQL export
- ✅ Screenshots of the UI

---

## 💬 Contact

For help or inquiries, contact: [Chathurika Piyumali](mailto:chathurikapiyumali01@gmail.com)
