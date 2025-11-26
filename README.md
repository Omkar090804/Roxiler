⭐ FullStack Rating Application

A complete full-stack web application built using Express.js, React.js, and MySQL/SQLite, fulfilling all requirements from the FullStack Intern Coding Challenge.

Users can rate stores (1–5), admins can manage the system, and store owners can view ratings related to their stores.

📌 Table of Contents

Project Overview

Tech Stack

Features Coverage (Mapped to PDF Requirements)

Installation & Setup

Running the Project

Role-Based Functionality Guide

Normal User

System Administrator

Store Owner

Validation Rules

API Summary

Folder Structure

Screens / Testing Guide

⭐ 1. Project Overview

This application allows users to:

Sign up & log in

View stores

Submit & update ratings

Admin adds users and stores

Store owners see ratings for their stores

All features match the official specification:
✔ user roles
✔ rating system
✔ admin dashboard
✔ form validations
✔ search & filtering
✔ secure authentication (JWT)

Reference: FullStack Intern Coding Challenge PDF 

FullStack Intern Coding Challen…

⭐ 2. Tech Stack
Frontend

React.js + Vite

Axios

TailwindCSS (Enhanced UI, optional)

Backend

Node.js (Express.js)

Sequelize ORM

MySQL or SQLite (default)

JWT Authentication

Joi Validation

⭐ 3. Requirements Coverage (Mapped to PDF)
✔ User Roles Implemented

System Administrator

Normal User

Store Owner
(As required) 

FullStack Intern Coding Challen…

✔ System Administrator Features
Requirement	Implemented
Add stores	✔ /api/admin/stores
Add users (admin/user/owner)	✔ /api/admin/users
Dashboard counts	✔ /api/admin/dashboard
View store list with rating	✔ /api/admin/stores
View user list (filters: name/email/address/role)	✔ /api/admin/users
View details of all users	✔ Yes
Owner's store rating	✔ Included
Logout	✔ Frontend implemented
✔ Normal User Features
Requirement	Implemented
Signup page	✔ /signup (React UI)
Login	✔ /login
Update password	✔ /api/users/update-password
View stores	✔ /api/stores
Search stores by name/address	✔ UI search bar
Submit rating (1–5)	✔ /api/ratings/:storeId
Modify rating	✔ Same endpoint updates rating
Logout	✔
✔ Store Owner Features
Requirement	Implemented
Login	✔ /login
Update password	✔
View who rated their store	✔ /api/stores/owner/:storeId/dashboard
See average rating	✔ Calculated dynamically
Logout	✔
✔ Form Validations (PDF Requirements)
Field	Requirement from PDF	Implemented?
Name	20–60 chars	✔ Joi validation
Address	Max 400 chars	✔
Password	8–16 chars, 1 uppercase, 1 special	✔ Regex validated
Email	Must be valid	✔ Joi validated

Reference section: Form Validations 

FullStack Intern Coding Challen…

✔ Additional Notes

Sorting supported by frontend filters

Folder structure follows best practices

Database schema normalized (Users, Stores, Ratings tables)

⭐ 4. Installation & Setup
📦 Clone the repository
git clone https://github.com/Omkar090804/Roxiler.git
cd Roxiler

📌 4.1 Backend Setup
cd backend
npm install

Create .env:
DB_DIALECT=sqlite
DB_STORAGE=./database.sqlite
JWT_SECRET=your_secret_here
PORT=4000

Seed default admin, owner & sample store:
node src/seed.js

Start backend:
npm run dev


Backend now runs at:

👉 http://localhost:4000

📌 4.2 Frontend Setup
cd frontend
npm install
npm run dev


Frontend opens at:

👉 http://localhost:3000

⭐ 5. Running the Project (Full Flow)

Open two terminals

Terminal 1 → backend → npm run dev

Terminal 2 → frontend → npm run dev

Test backend availability:
👉 http://localhost:4000/api/health

Open frontend UI:
👉 http://localhost:3000

⭐ 6. Role-Based Usage Guide
🟢 Normal User Flow

Visit /signup

Enter name ≥ 20 chars, password with special + uppercase

Login

View all stores

Submit rating (star UI)

Update rating anytime

Logout

🔵 Admin Flow

Use seed login:
admin@example.com / Admin@123

Dashboard shows:

Total Users

Total Stores

Total Ratings

Admin can:

Add stores

Add users (user/admin/owner)

View all users

View all stores

Apply filters

Logout

🟡 Store Owner Flow

Use seed login:
owner@example.com / Owner@123

Owner can:

View average rating of their store

See list of users who rated them

Update password

Logout

⭐ 7. Validation Rules (Enforced through Joi & UI)
Field	Requirement	Example
Name	20–60 chars	Omkar Darekar Full Stack Dev
Password	8–16 chars, 1 uppercase, 1 special	Omkar@123
Address	≤ 400 chars	Pune, Maharashtra
Email	Must be valid	omkar@example.com
⭐ 8. API Summary
Endpoint	Method	Role	Purpose
/api/auth/signup	POST	Public	Register user
/api/auth/login	POST	Public	Login & get token
/api/admin/stores	POST	Admin	Add store
/api/admin/users	POST	Admin	Add user/admin/owner
/api/admin/dashboard	GET	Admin	Stats
/api/stores	GET	All	List stores
/api/ratings/:storeId	POST	User	Submit/update rating
/api/stores/owner/:id/dashboard	GET	Owner	Owner stats
⭐ 9. Folder Structure
Roxiler/
 ├── backend/
 │    ├── src/
 │    │    ├── models/
 │    │    ├── routes/
 │    │    ├── middleware/
 │    │    ├── utils/
 │    ├── .env
 │    ├── package.json
 │
 ├── frontend/
 │    ├── src/
 │    │    ├── pages/
 │    │    ├── components/
 │    ├── package.json
 │
 ├── README.md

⭐ 10. Testing Guide (Checklist)
✔ Signup page working
✔ Login (all roles)
✔ Admin Dashboard
✔ Add Store
✔ Add User
✔ Filter Users
✔ View Stores
✔ Submit Rating
✔ Update Rating
✔ Owner Dashboard
✔ Validations applied