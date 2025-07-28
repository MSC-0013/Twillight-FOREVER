# 🌌 FOREVER — MERN stack Shopping web application

FOREVER is a sleek, visually captivating React-based frontend with Tailwind CSS and Framer Motion. It features a polished animated landing page and a powerful Admin Dashboard for dynamic data management.

🎯 Project Repository: Twillight‑FOREVER

🚀 Live Demo (Vercel): [twillight-forever.vercel.app](https://twillight-forever.vercel.app)

📁 Project Structure

FOREVER/
├── public/                  # Static assets & favicon
├── src/
│   ├── components/          # Reusable UI components (Navbar, Footer, Cards, etc.)
│   ├── pages/               # Route-based pages (Home, Login, Register, Product, etc.)
│   ├── admin/               # Admin Dashboard components & logic
│   ├── assets/              # Images, icons, SVGs
│   ├── screenshots/         # Images for documentation
│   ├── styles/              # Tailwind and custom CSS files
│   ├── App.js               # Main app with routes
│   └── index.js             # App entry point
├── server/                  # Express backend
│   ├── middleware/          # JWT auth middleware
│   ├── models/              # MongoDB schemas
│   ├── routes/              # API routes (auth, users, products, etc.)
│   └── server.js            # Server configuration
├── .env                     # Environment variables (Mongo URI, JWT secret)
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
├── package.json             # Dependencies and scripts
└── README.md                # Project documentation

✨ Features by Page

📊 Admin Dashboard
URL: /admin

Sidebar + topbar navigation layout

User stats & order summaries

Dynamic chart components

Placeholder API integration points
<p float="left"> <img src="screenshots/Admin1.png" width="260"/> <img src="screenshots/Admin2.png" width="260"/> <img src="screenshots/Admin3.png" width="260"/> <img src="screenshots/Admin4.png" width="260"/> <img src="screenshots/Admin5.png" width="260"/> <img src="screenshots/Admin6.png" width="260"/> </p>

🏠 Home Page
URL: /

Animated hero section using Framer Motion

Links to featured products

Scroll reveal transitions

Dark mode support

Custom font + Tailwind utilities

<p float="left"> <img src="screenshots/Home1.png" width="260"/> <img src="screenshots/Home2.png" width="260"/> <img src="screenshots/Home3.png" width="260"/> <img src="screenshots/Home4.png" width="260"/> <img src="screenshots/Home5.png" width="260"/> <img src="screenshots/Home6.png" width="260"/> <img src="screenshots/Home7.png" width="260"/> </p>

 Product Page
URL: /product/:id

Detailed product information

Add to Cart / Wishlist functionality

Quantity selector

Price display with styling

<p float="left"> <img src="screenshots/Product1.png" width="270"/> <img src="screenshots/Product2.png" width="270"/> <img src="screenshots/Product3.png" width="270"/> </p>

🔐 Login & Register Pages
URL: /login, /register

User authentication via Express backend

JWT-based login system

Form validation

Password encryption using bcrypt.js

<p float="left"> <img src="screenshots/Login.png" width="280"/> <img src="screenshots/Register.png" width="280"/> </p>

📋 Order Pages
URL: /orders, /order/:id

Order history display

Individual order details (date, price, status)

Receipt download (optional)

<p float="left"> <img src="screenshots/Order1.png" width="260"/> <img src="screenshots/Order2.png" width="260"/> <img src="screenshots/Order3.png" width="260"/> <img src="screenshots/Receipt.png" width="260"/> </p>

👤 Profile Page
URL: /profile

Displays user data: email, name, etc.

Update user info

View past orders

<p float="left"> <img src="screenshots/Profile.png" width="280"/> <img src="screenshots/Profile2.png" width="280"/> </p>

💖 Cart & Wishlist
URL: /cart, /wishlist

Add/remove items

Quantity update controls

Responsive layout

Integrated with product DB

<p float="left"> <img src="screenshots/Cart.png" width="280"/> <img src="screenshots/Wishlist.png" width="280"/> </p>

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
