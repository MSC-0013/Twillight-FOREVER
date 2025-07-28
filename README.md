# 🌌 FOREVER — MERN stack Shopping web application

FOREVER is a sleek, visually captivating React-based frontend with Tailwind CSS and Framer Motion. It features a polished animated landing page and a powerful Admin Dashboard for dynamic data management.

🎯 Project Repository: Twillight‑FOREVER
🚀 Live Demo (Vercel): [twillight-forever.vercel.app](https://twillight-forever.vercel.app)

📁 Project Structure

FOREVER/
├── public/                  # Static assets & favicon
├── src/
│   ├── components/          # Navbar, Footer, Cards, etc.
│   ├── pages/               # Home, Login,Register,Product, Wishlist etc.
│   ├── admin/               # Dashboard components & logic
│   ├── assets/              # Images, icons, SVGs
│   ├── screenshots/         # Screenshot images
│   ├── styles/              # Tailwind and custom CSS
│   ├── App.js               # Routes & layout
│   └── index.js             # App entry point
├── server/                  # 🆕 Express backend
│   ├── middleware/
│   │   └── auth.js          # JWT auth middleware
│   ├── models/
│   │   └── User.js          # User model schema
│   ├── routes/
│   │   └── auth.js          # Auth routes (login/register)
│   └── server.js            # Express server setup
├── .env                     # Environment variables (Mongo URI, JWT secret)
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
           # This documentation

✨ Features by Page

📊 Admin Dashboard
URL: /admin

Sidebar + topbar navigation layout

User stats & order summaries

Dynamic chart components

Placeholder API integration points
![Admin1](screenshots/Admin1.png)  
![Admin2](screenshots/Admin2.png)  
![Admin3](screenshots/Admin3.png)  
![Admin4](screenshots/Admin4.png)  
![Admin5](screenshots/Admin5.png)  
![Admin6](screenshots/Admin6.png)

🏠 Home Page
URL: /

Animated hero section using Framer Motion

Links to featured products

Scroll reveal transitions

Dark mode support

Custom font + Tailwind utilities

![Home1](screenshots/Home1.png)
![Home2](screenshots/Home2.png)
![Home3](screenshots/Home3.png)
![Home4](screenshots/Home4.png)
![Home5](screenshots/Home5.png)
![Home6](screenshots/Home6.png)
![Home7](screenshots/Home7.png)

 Product Page
URL: /product/:id

Detailed product information

Add to Cart / Wishlist functionality

Quantity selector

Price display with styling

🔐 Login & Register Pages
URL: /login, /register

User authentication via Express backend

JWT-based login system

Form validation

Password encryption using bcrypt.js

![Login](screenshots/Login.png)  
![Register](screenshots/Register.png)

📋 Order Pages
URL: /orders, /order/:id

Order history display

Individual order details (date, price, status)

Receipt download (optional)

![Order1](screenshots/Order1.png)  
![Order2](screenshots/Order2.png)  
![Order3](screenshots/Order3.png)  
![Recipt](screenshots/Receipt.png)

👤 Profile Page
URL: /profile

Displays user data: email, name, etc.

Update user info

View past orders
![Profile](screenshots/Profile.png)  
![Profile2](screenshots/Profile2.png)

💖 Cart & Wishlist
URL: /cart, /wishlist

Add/remove items

Quantity update controls

Responsive layout

Integrated with product DB

![Product1](screenshots/Product1.png)  
![Product2](screenshots/Product2.png)  
![Product3](screenshots/Product3.png)  
![Wishlist](screenshots/Wishlist.png)  
![Cart](screenshots/Cart.png)

🧰 Tech Stack

| Tech              | Usage                                   |
| ----------------- | --------------------------------------- |
| **React.js**      | Frontend Framework                      |
| **Tailwind CSS**  | Styling with utility classes            |
| **Framer Motion** | Smooth animations and transitions       |
| **React Router**  | Routing and page navigation             |
| **Heroicons**     | Clean, accessible icons                 |
| **Express.js**    | Backend API and routing                 |
| **MongoDB Atlas** | Database for user and product data      |
| **JWT**           | Secure login token management           |
| **bcryptjs**      | Password hashing for secure storage     |
| **Chart.js**      | (Optional) Visual dashboard data charts |

🛠️ Getting Started
Prerequisites
Node.js v16+

MongoDB URI (for .env)

Vite + React project bootstrapped

Installation

git clone [https://github.com/MSC-0013/Twillight-FOREVER.git](https://github.com/MSC-0013/Twillight-FOREVER.git)
cd Twillight-FOREVER
npm install
npm run dev

Then for server:

cd server
npm install
node server.js

⚙️ Deployment
Deployed frontend and backend separately:

Frontend: Vercel, Netlify, GitHub Pages

Backend: Render, Railway, or Firebase Functions

👤 Author
Soumayshree Rout

🔗 GitHub: @MSC-0013

🌐 Portfolio: [[Portfolio](https://port-folio-tau-coral.vercel.app)]

📬 Contact
📧 Email: <soumyashreerout99@gmail.com>

💼 LinkedIn: [Linkedin Profile](https://www.linkedin.com/in/soumyashree-rout-500671253)
