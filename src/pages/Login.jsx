import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../components/AuthProvider";
import { IoChevronBackSharp } from "react-icons/io5";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [form, setForm] = React.useState({
    username: "",
    password: "",
  })
  const [showPassword, setShowPassword] = React.useState(false);

  const staticUsername = 'Hilkeno';
  const staticPassword = 'Hilk0671'

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.username === staticUsername && form.password === staticPassword) {
      localStorage.setItem("user", JSON.stringify({ username: form.username }));

      login(form.username);
      const origin = location.state?.from?.pathname || '/me';
      navigate(origin);
    } else {
      alert("Invalid username or password");
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">

      <div className="w-full max-w-md p-8 rounded-lg shadow-lg">
        <div className="flex flex-col justify-between text-center w-full">
          <div className="cursor-pointer" onClick={() => navigate('/me')}><IoChevronBackSharp size={22} /></div>
          <h1 className="text-2xl font-bold mb-6 text-gray-900">You're welcome</h1>
        </div>

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
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              placeholder="Please enter your mobile username/phone number"
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
              type={showPassword ? "text" : "password"}
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              placeholder="Enter password"
              className="bg-transparent focus:outline-none w-full text-sm text-gray-700 placeholder-gray-400"
            />
            <div onClick={() => setShowPassword(!showPassword)} className="cursor-pointer">
              {showPassword ? (
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11V7a3 3 0 00-6 0m8 4H7a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2z" />
                </svg>
              ) : (

                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              )}
            </div>
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
