import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-green-700 text-white p-4 flex justify-between">
    <h1 className="text-xl font-bold">Green IT</h1>
    <div className="space-x-4">
      <Link to="/">Home</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/scheduler">Scheduler</Link>
      <Link to="/report">Report</Link>
      <Link to="/admin">Admin</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
    </div>
  </nav>
);

export default Navbar;