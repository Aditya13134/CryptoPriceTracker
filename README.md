# Crypto Alert Application

## **Description**
The Crypto Alert Application is a full-stack project that allows users to fetch the latest cryptocurrency prices and set alerts for price thresholds. Users receive email notifications when the price of a cryptocurrency reaches the specified threshold.

---

## **Features**
- Fetch real-time cryptocurrency prices using the CoinGecko API.
- Create alerts for specific cryptocurrencies and thresholds.
- Email notifications when thresholds are met.
- View all active alerts.

---

## **Tech Stack**

### **Backend**
- **Node.js**: Runtime environment.
- **Express.js**: Web framework.
- **MongoDB**: Database for storing alerts.
- **Redis**: In-memory data structure for caching.
- **TypeScript**: Strongly-typed JavaScript.
- **Nodemailer**: For email notifications.

### **Frontend**
- **React.js**: Library for building user interfaces.
- **Axios**: For API requests.
- **TypeScript**: Strongly-typed JavaScript.

---

## **Installation**

### **Backend Setup**
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/crypto-alert-app.git
    cd crypto-alert-app/backend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Create a `.env` file in the `backend` directory with the following variables:
    ```env
    MONGO_URI=your_mongodb_connection_string
    REDIS_URI=your_redis_connection_string
    EMAIL_USER=your_email@example.com
    EMAIL_PASS=your_email_password
    PORT=5000
    ```
4. Start the server:
    ```bash
    npm run dev
    ```
    The server will start at `http://localhost:5000`.

### **Frontend Setup**
1. Navigate to the frontend directory:
    ```bash
    cd ../frontend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the frontend server:
    ```bash
    npm start
    ```
    The React app will run at `http://localhost:3000`.

---

## **API Endpoints**

### **Crypto Endpoints**
- **GET /api/crypto/:crypto**: Fetch the price of a cryptocurrency.

### **Alert Endpoints**
- **POST /api/alerts**: Create a new alert.
    - **Request Body:**
      ```json
      {
        "crypto": "bitcoin",
        "threshold": 50000,
        "email": "user@example.com"
      }
      ```
- **GET /api/alerts**: Retrieve all alerts.

---

## **Frontend Functionality**
- **Crypto Price Fetching**: Input a cryptocurrency name and fetch the current price.
- **Alert Management**: Create, view, and manage alerts.

---


## **Contributing**
1. Fork the repository.
2. Create a feature branch:
    ```bash
    git checkout -b feature-name
    ```
3. Commit your changes:
    ```bash
    git commit -m "Add feature description"
    ```
4. Push to the branch:
    ```bash
    git push origin feature-name
    ```
5. Create a pull request.



## **Contact**
For any questions, feel free to reach out:
- **Email**: your-aadityasinghas001@gmail.com
- **GitHub**: [Aditya13134](https://github.com/Aditya13134)
