import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [show,setShow] = React.useState(false);
  const [form,setForm] = React.useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      const response = await axios.post("http://192.168.29.5:1000/api/postApi/user-signup", form);
      console.log(response.data);
      alert("Registration successful!");
    } catch (error) {
      console.error(error);
      alert("Registration failed. Please try again.");
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-gray-900">You're welcome</h1>
        <p className="text-sm text-gray-500 mb-6">Register with Email and Password</p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-3">
            <span className="text-gray-400 mr-3">👤</span>
            <input
              type="text"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              value={form.name}
              placeholder="please enter user name"
              className="bg-transparent outline-none w-full text-sm"
            />
          </div>

          <div className="flex items-center bg-gray-100 rounded-full px-4 py-3">
            <span className="text-gray-400 mr-3">📧</span>
            <input
              type="email"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              value={form.email}
              placeholder="Enter Email Address"
              className="bg-transparent outline-none w-full text-sm"
            />
          </div>

          <div className="flex items-center bg-gray-100 rounded-full px-4 py-3 justify-between">
            <div className="flex items-center w-full">
              <span className="text-gray-400 mr-3">🛡️</span>
              <input
                type="text"
                placeholder="Enter Verification Code"
                className="bg-transparent outline-none w-full text-sm"
              />
            </div>
            <span className="text-blue-500 cursor-pointer text-xl">📩</span>
          </div>

          <div className="flex items-center bg-gray-100 rounded-full px-4 py-3">
            <select className="bg-transparent outline-none text-sm mr-2">
              <option value="91">91</option>
            </select>
            <input
              type="tel"
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              value={form.phone}
              placeholder="Enter Phone Number"
              className="bg-transparent outline-none w-full text-sm"
            />
          </div>

          <div className="flex items-center bg-gray-100 rounded-full px-4 py-3">
            <span className="text-gray-400 mr-3">🔒</span>
            <input
              type={show ? "text" : "password"}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              value={form.password}
              placeholder="Enter Password"
              className="bg-transparent outline-none w-full text-sm"
            />
            <span onClick={() => setShow(prev => !prev)} className="text-gray-400 cursor-pointer">👁️</span>
          </div>

          <div className="flex items-center bg-gray-100 rounded-full px-4 py-3">
            <span className="text-gray-400 mr-3">🔒</span>
            <input
              type={show ? "text" : "password"}
              placeholder="Confirm Password"
              className="bg-transparent outline-none w-full text-sm"
            />
          </div>

          <p className="text-sm text-gray-500">
            Already Have an Account?{" "}
            <Link to='/login' className="text-blue-600 cursor-pointer">Log In</Link>
          </p>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold text-sm hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
