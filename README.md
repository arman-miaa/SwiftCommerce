

### 📌 **SwiftCommerce - A Simple E-commerce API**  

SwiftCommerce is an E-commerce API that includes JWT Authentication, Product Management, Order Management, and User Authentication.

## 🚀 **Features**  
✅ **User Authentication** - Register & Login with JWT  
✅ **Product Management** - Create, Read, Update, Delete (Admin Only)  
✅ **Order Management** - Place Orders & View Orders  
✅ **Secure Routes** - Authentication & Authorization Middleware  

---

## 🛠 **Tech Stack**  

- **Backend:** `Node.js`, `Express.js`, `TypeScript`, `Zod`  
- **Database:** `MongoDB` & `Mongoose`  
- **Authentication:** `JWT` & `bcrypt`  
- **Validation:** `Zod`  
- **Security:** `dotenv`, `cors`  

---


## 🔑 **Authentication**  

| Route             | Method | Access     | Description       |
|------------------|--------|------------|-------------------|
| `/api/users/create-account` | `POST` | Public | Register a new user |
| `/api/users/login` | `POST` | Public | Login and get JWT Token |

---

## 📦 **Product API**  

| Route             | Method | Access     | Description       |
|------------------|--------|------------|-------------------|
| `/api/products/` | `GET` | Public | Get all products |
| `/api/products/` | `POST` | Admin Only | Add a new product |
| `/api/products/:id` | `GET` | Admin Only | Get a single product |
| `/api/products/:id` | `PUT` | Admin Only | Update product |
| `/api/products/:id` | `DELETE` | Admin Only | Delete product |

---

## 📑 **Order API**  

| Route             | Method | Access     | Description       |
|------------------|--------|------------|-------------------|
| `/api/orders/` | `POST` | Public | Place an order |
| `/api/orders/` | `GET` | Public | View all orders |

---

## ⚙️ **Setup & Run Locally**  

### **1️⃣ Clone the repository**  
```bash
git clone https://github.com/arman-miaa/SwiftCommerce.git
cd SwiftCommerce
```

### **2️⃣ Install dependencies**  
```bash
npm install
```

### **3️⃣ Setup environment variables**  
Create a `.env` file in the root directory and add the following:  
```env
PORT=5000
DB_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### **4️⃣ Run the project**  
#### 🚀 **For Development:**  
```bash
npm run start:dev
```
#### 🚀 **For Production:**  
```bash
npm run build
npm start
```