import React from "react";

const Signup = () => (
  <div className="p-6 max-w-sm mx-auto">
    <h2 className="text-xl font-bold mb-2">Sign Up</h2>
    <form className="space-y-4">
      <input type="text" placeholder="Name" className="w-full p-2 border" />
      <input type="email" placeholder="Email" className="w-full p-2 border" />
      <input type="password" placeholder="Password" className="w-full p-2 border" />
      <button className="bg-green-700 text-white px-4 py-2">Register</button>
    </form>
  </div>
);

export default Signup;