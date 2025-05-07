import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../components/AuthProvider';

const Settings = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const menuItems = [
    { label: 'Update Profile', path: '/update-profile' },
    { label: 'Language Center', path: '/language-center' },
    { label: 'Change login password', path: '/change-login-password' },
    { label: 'Change payment password', path: '/change-payment-password' },
  ];

  const handleSignOut = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="bg-gray-100 text-black my-20">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 bg-white shadow">
        <button onClick={() => navigate(-1)} className="text-xl">
          &#8592;
        </button>
        <h2 className="text-lg font-semibold">Settings</h2>
        <div className="w-6" /> {/* Placeholder for alignment */}
      </div>

      {/* Menu List */}
      <div className="mt-4 space-y-3 px-4">
        {menuItems.map((item, index) => (
          <div
            key={index}
            onClick={() => alert('Coming soon!')}
            className="bg-white p-4 rounded-lg shadow flex justify-between items-center cursor-pointer"
          >
            <span className="font-medium">{item.label}</span>
            <span className="text-gray-400 text-xl">&#8250;</span>
          </div>
        ))}

        {/* Sign Out */}
        <button
          onClick={handleSignOut}
          className="w-full bg-white text-center py-4 rounded-lg shadow font-semibold mt-4"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Settings;