import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Stores from "./pages/Stores";
import AdminDashboard from "./pages/AdminDashboard";
import OwnerDashboard from "./pages/OwnerDashboard";
import { useEffect, useState } from "react";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("user");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  return (
    <BrowserRouter>
      <nav className="bg-white shadow p-4 flex justify-between">
        <div className="space-x-4">
          <Link to="/" className="font-semibold hover:text-blue-600">
            Stores
          </Link>

          {!user && (
            <>
              <Link to="/login" className="hover:text-blue-600">Login</Link>
              <Link to="/signup" className="hover:text-blue-600">Signup</Link>
            </>
          )}

          {user?.role === "admin" && (
            <Link to="/admin" className="hover:text-blue-600">Admin Panel</Link>
          )}

          {user?.role === "owner" && (
            <Link to="/owner" className="hover:text-blue-600">Owner Dashboard</Link>
          )}
        </div>

        {user && (
          <button
            onClick={() => {
              localStorage.clear();
              window.location.href = "/";
            }}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Logout
          </button>
        )}
      </nav>

      <div className="p-6">
        <Routes>
          <Route path="/" element={<Stores />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/owner" element={<OwnerDashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
