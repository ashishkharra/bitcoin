import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [form, setForm] = React.useState({
    email: "",
    password: "",
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://192.168.29.5:1000/api/postApi/user-login", form);
      console.log(response.data);
      alert("Login successful!");
    } catch (error) {
      console.error(error);
      alert("Login failed. Please try again.");
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md p-8 rounded-lg shadow-lg">
        {/* Heading */}
        <h1 className="text-2xl font-bold mb-6 text-gray-900">You're welcome</h1>

        {/* Input Fields */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Username / Phone */}
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-3">
            <svg
              className="w-5 h-5 text-gray-400 mr-3"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M16 14a4 4 0 01-8 0m8 0a4 4 0 00-8 0m8 0v1a2 2 0 002 2h.5a2.5 2.5 0 002.5-2.5V8.5A2.5 2.5 0 0018.5 6H18a2 2 0 00-2 2v1m-8 5v1a2 2 0 01-2 2h-.5A2.5 2.5 0 013 15.5V8.5A2.5 2.5 0 015.5 6H6a2 2 0 012 2v1" />
            </svg>
            <input
              type="text"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="Please enter your mobile phone number/email"
              className="bg-transparent focus:outline-none w-full text-sm text-gray-700 placeholder-gray-400"
            />
          </div>

          {/* Password */}
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-3">
            <svg
              className="w-5 h-5 text-gray-400 mr-3"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M12 11c.941 0 1.8.353 2.45.929A3.974 3.974 0 0116 15c0 1.105-.895 2-2 2h-4c-1.105 0-2-.895-2-2 0-1.105.895-2 2-2h.5a.5.5 0 00.5-.5V12a1 1 0 012 0v.5c0 .275.225.5.5.5h.5z" />
              <path d="M12 4v4" />
              <path d="M8 8h8" />
            </svg>
            <input
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              placeholder="Enter password"
              className="bg-transparent focus:outline-none w-full text-sm text-gray-700 placeholder-gray-400"
            />
          </div>
          <button type="submit" className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full font-semibold transition duration-200">
            Confirm
          </button>
        </form>

        {/* Links */}
        <div className="flex justify-between text-sm text-gray-500 mt-4">
          <span>
            Don’t have an account?{" "}
            <Link to="/register" className="text-blue-600 hover:underline">
              Register now
            </Link>
          </span>
          <a href="#" className="text-blue-600 hover:underline">
            Forgot password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
