<h1 align="center">🌟 FullStack Rating Application 🌟</h1>

<p align="center">
A complete full-stack application built with <b>Express.js</b> + <b>React.js</b>
</p>

---

<h2>📌 Table of Contents</h2>

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Requirements Coverage](#requirements-coverage)
- [Installation & Setup](#installation--setup)
- [Running the Project](#running-the-project)
- [Role-Based Functionality Guide](#role-based-functionality-guide)
- [Validation Rules](#validation-rules)
- [API Summary](#api-summary)
- [Folder Structure](#folder-structure)
- [Testing Checklist](#testing-checklist)

---

<h2 id="project-overview">🚀 Project Overview</h2>

This project is a full-stack rating platform where:

- ⭐ Normal users can sign up, log in, and rate stores  
- 🛠️ Admins can manage users & stores  
- 🏪 Store owners can view ratings for their stores  

All requirements from the official PDF are implemented:  
✔ User roles  
✔ Rating system  
✔ Admin dashboard  
✔ Validations  
✔ Search & filtering  
✔ Secure JWT authentication  

Reference: FullStack Intern Coding Challenge PDF :contentReference[oaicite:2]{index=2}.

---

<h2 id="tech-stack">🧰 Tech Stack</h2>

### 🔹 Frontend
- React.js (Vite)
- Tailwind CSS (UI enhancement)
- Axios  

### 🔹 Backend
- Node.js (Express.js)
- Sequelize ORM
- MySQL / SQLite
- JWT Authentication
- Joi Validation

---

<h2 id="requirements-coverage">📘 Requirements Coverage (Mapped to PDF)</h2>

<h3>🛠️ System Administrator Features</h3>

| Requirement | Status |
|------------|--------|
| Add stores | ✅ Implemented |
| Add users (normal/admin/owner) | ✅ |
| Dashboard: total users, stores, ratings | ✅ |
| View stores with rating | ✅ |
| View users with filtering (name/email/address/role) | ✅ |
| View complete user details | ✅ |
| Owner's store rating included | ✅ |
| Logout | ✅ |

---

<h3>🧑‍💻 Normal User Features</h3>

| Requirement | Status |
|------------|--------|
| Signup | ✅ |
| Login | ✅ |
| Update password | ✅ |
| View stores | ✅ |
| Search by name/address | ✅ |
| See store info | ✅ |
| Submit rating (1–5) | ✅ |
| Modify rating | ✅ |
| Logout | ✅ |

---

<h3>🏪 Store Owner Features</h3>

| Requirement | Status |
|------------|--------|
| Login | ✅ |
| Update password | ✅ |
| View users who rated them | ✅ |
| See average store rating | ✅ |
| Logout | ✅ |

---

<h3>📝 Form Validations (PDF Requirements)</h3>

| Field | Required | Implemented |
|-------|----------|-------------|
| Name | 20–60 characters | ✅ Joi Validation |
| Address | Max 400 chars | ✅ |
| Password | 8–16 chars, 1 uppercase, 1 special | ✅ |
| Email | Valid email | ✅ |

---

<h2 id="installation--setup">⚙️ Installation & Setup</h2>

### 1️⃣ Clone the repo

```bash
git clone https://github.com/Omkar090804/Roxiler.git
cd Roxiler

<h3>📦 Backend Setup</h3>

cd backend
npm install

Create .env:

DB_DIALECT=sqlite
DB_STORAGE=./database.sqlite
JWT_SECRET=your_secret_here
PORT=4000

Seed sample admin, owner & store:

node src/seed.js


Run backend:

npm run dev


Backend runs at:
👉 http://localhost:4000

<h3>🎨 Frontend Setup</h3>
cd frontend
npm install
npm run dev


Frontend runs at:
👉 http://localhost:3000

<h2 id="running-the-project">🏃 Running the Project</h2>

Open two terminals:

Terminal 1 → Backend
cd backend
npm run dev

Terminal 2 → Frontend
cd frontend
npm run dev


Verify backend:
👉 http://localhost:4000/api/health

Open the UI:
👉 http://localhost:3000

<h2 id="role-based-functionality-guide">👥 Role-Based Functionality Guide</h2>
<h3>🟢 Normal User Flow</h3>

Go to Signup

Enter valid name, email, password

Login

View stores

Submit rating (star UI)

Update rating

Logout

Signup fields follow PDF rules.

<h3>🔵 Admin Flow</h3>

Seed credentials:

admin@example.com
Admin@123


Admin can:

Add stores

Add users (normal/admin/owner)

View dashboard stats

Filter/search users

View stores with ratings

Logout

<h3>🟡 Store Owner Flow</h3>

Seed credentials:

owner@example.com
Owner@123


Owner can:

View ratings on their store

View average rating

Update password

Logout

<h2 id="validation-rules">✔️ Validation Rules</h2>

Name: 20–60 characters

Password: Must include uppercase + special char

Address: Max 400 characters

Email: Valid email format

Implemented using Joi validation.

<h2 id="api-summary">📡 API Summary</h2>
Endpoint	Method	Role	Description
/api/auth/signup	POST	Public	Register user
/api/auth/login	POST	Public	Login
/api/admin/users	POST	Admin	Add user/admin/owner
/api/admin/stores	POST	Admin	Add store
/api/admin/dashboard	GET	Admin	Dashboard stats
/api/stores	GET	All	List stores
/api/ratings/:id	POST	User	Submit/update rating
/api/stores/owner/:id/dashboard	GET	Owner	Owner analytics
<h2 id="folder-structure">📁 Folder Structure</h2>
Roxiler/
 ├── backend/
 │    ├── src/
 │    │    ├── models/
 │    │    ├── routes/
 │    │    ├── middleware/
 │    │    └── utils/
 │    ├── package.json
 │    └── .env
 ├── frontend/
 │    ├── src/
 │    │    ├── pages/
 │    │    ├── components/
 │    └── package.json
 └── README.md

<h2 id="testing-checklist">🧪 Testing Checklist</h2>
✔ Signup (Normal user)
✔ Login (All roles)
✔ Add store (Admin)
✔ Add user (Admin)
✔ Search & filtering (Admin)
✔ Submit rating
✔ Modify rating
✔ Owner dashboard visibility
✔ Validations enforced
✔ Logout logic tested
