import React, { useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom"; 
import { IoChevronBackSharp } from "react-icons/io5";
import { useAuth } from "../../components/AuthProvider";

const MyTeam = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const location = useLocation();
  const storedUser = JSON.parse(localStorage.getItem('user'));
  const curr = location.pathname.split('/').pop();

  useEffect(() => {
    if (storedUser?.username) {
      navigate(`/me/${curr}`, { replace: true });
    }
  }, []);
  
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 min-h-screen my-20">
      <div className="cursor-pointer" onClick={() => navigate('/me')}><IoChevronBackSharp size={22}/></div>
      <div className="bg-blue-600 rounded-b-lg p-6 text-white my-2">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">My Team</h1>
          <button className="text-white font-semibold">Invite</button>
        </div>
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
            <img src="/avatar-placeholder.png" alt="Avatar" className="w-12 h-12 rounded-full" />
          </div>
          <div>
            <p className="font-semibold text-lg">option</p>
            <p className="text-sm">Referral code: <span className="font-medium">1234</span></p>
          </div>
        </div>
        <div className="grid grid-cols-3 text-center text-sm">
          <div>
            <p className="text-lg font-bold">{isAuthenticated ? '$122121.72' : '$0'}</p>
            <p>Total earnings</p>
          </div>
          <div>
            <p className="text-lg font-bold">{isAuthenticated ? '$1221.72' : '$0'}</p>
            <p>Today</p>
          </div>
          <div>
            <p className="text-lg font-bold">{isAuthenticated ? '$1121.72' : '$0'}</p>
            <p>Yesterday</p>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-white p-4 rounded-lg text-center">
        <div className="grid grid-cols-2">
          <div>
            <p className="text-lg font-bold">0</p>
            <p>Total</p>
          </div>
          <div>
            <p className="text-lg font-bold">0</p>
            <p>Today's count</p>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="font-semibold mb-4 border-l-4 border-blue-600 pl-2">Subordinate invitation</h2>

        {[1, 2, 3].map(level => (
          <div key={level} className="bg-white p-4 rounded-lg mb-4 shadow-sm">
            <p className="font-semibold mb-2">level {level}</p>
            <div className="flex justify-between text-sm">
              <div>
                <p className="text-gray-500">all/valid</p>
                <p className="font-semibold">0/0</p>
              </div>
              <div className="text-right">
                <p className="text-gray-500">Get commission</p>
                <p className="font-semibold">0</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTeam;
