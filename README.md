
## 🚀 Installation & Setup
1. **Clone the repository**
    ```sh
    git clone https://github.com/yourusername/easycar-maintenance.git
    cd easycar-maintenance
    ```

2. **Install dependencies**
    ```sh
    npm install
    ```

3. **Configure environment variables**
    Create a `.env` file in the root directory and add the following:
    ```env
    PORT=3000
    DB_HOST=your-database-host
    DB_USER=your-database-user
    DB_PASSWORD=your-database-password
    DB_NAME=easycar_db
    ```

4. **Run database migrations (if applicable)**
    ```sh
    npm run migrate
    ```

5. **Start the server**
    ```sh
    npm start
    ```
    For development mode:
    ```sh
    npm run dev
    ```
    The server will run on `http://localhost:3000`.

## 📌 API Endpoints

### User Routes
| Method | Endpoint                    | Description                  |
|--------|-----------------------------|------------------------------|
| GET    | /api/users                  | Get all users               |
| GET    | /api/users/:id              | Get user by ID              |
| POST   | /api/users                  | Create a new user           |
| PUT    | /api/users/:id              | Update user information     |
| DELETE | /api/users/:id              | Delete user                 |

### Order Routes
| Method | Endpoint                    | Description                          |
|--------|-----------------------------|--------------------------------------|
| GET    | /api/orders                 | Get all orders                      |
| GET    | /api/orders/:id             | Get order by ID                     |
| POST   | /api/orders                 | Create a new order                  |
| PUT    | /api/orders/:id             | Update order                        |
| DELETE | /api/orders/:id             | Delete order                        |

### Part Routes
| Method | Endpoint                    | Description                          |
|--------|-----------------------------|--------------------------------------|
| GET    | /api/parts                  | Get all parts                        |
| GET    | /api/parts/:id              | Get part by ID                       |
| POST   | /api/parts                  | Create a new part                   |
| PUT    | /api/parts/:id              | Update part information             |
| DELETE | /api/parts/:id              | Delete part                          |

### Payment Routes
| Method | Endpoint                    | Description                          |
|--------|-----------------------------|--------------------------------------|
| GET    | /api/payments               | Get all payments                    |
| GET    | /api/payments/:id           | Get payment by ID                   |
| POST   | /api/payments               | Create a new payment                |
| PUT    | /api/payments/:id           | Update payment information          |
| DELETE | /api/payments/:id           | Delete payment                      |

### Service Routes
| Method | Endpoint                    | Description                          |
|--------|-----------------------------|--------------------------------------|
| GET    | /api/services               | Get all services                     |
| GET    | /api/services/:id           | Get service by ID                    |
| POST   | /api/services               | Create a new service                 |
| PUT    | /api/services/:id           | Update service                       |
| DELETE | /api/services/:id           | Delete service                       |

### Review Routes
| Method | Endpoint                    | Description                          |
|--------|-----------------------------|--------------------------------------|
| GET    | /api/reviews                | Get all reviews                     |
| GET    | /api/reviews/:id            | Get review by ID                    |
| POST   | /api/reviews                | Create a new review                 |
| PUT    | /api/reviews/:id            | Update review                       |
| DELETE | /api/reviews/:id            | Delete review                       |

## 🛠 Technologies Used
- **Node.js** - Backend runtime
- **Express.js** - Web framework
- **MariaDB** - Relational database
- **dotenv** - Environment variable management
- **express-validator** – Request validation
- **bcrypt** – Password hashing
- **jsonwebtoken** – JWT authentication
- **sequelize** - ORM for handling database models and queries

## 🔍 Best Practices Followed
✔️ Follows MVC architecture  
✔️ Uses environment variables for security  
✔️ Implements error handling and validation  
✔️ Uses async/await for better promise handling  

## 📝 License
This project is licensed under the [MIT License](LICENSE).

---
Feel free to contribute by opening issues or submitting pull requests! 🚀
