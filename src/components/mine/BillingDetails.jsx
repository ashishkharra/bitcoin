import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BillingDetails = () => {
  const [activeTab, setActiveTab] = useState('All');

  const data = [
    {
      title: 'Sign in reward',
      amount: '+0.05',
      time: '2025-05-05 09:55',
    },
    {
      title: 'Register to give away gold coins',
      amount: '+1.00',
      time: '2025-05-05 09:44',
    },
  ];

  const renderItems = () => {
    if (activeTab === 'Expense') return <p className="text-center text-gray-500 mt-6">No data available</p>;

    return data.map((item, index) => (
      <div key={index} className="bg-white shadow-sm rounded-xl p-4 mb-4">
        <div className="flex justify-between items-center">
          <p className="font-medium text-gray-800">{item.title}</p>
          <p className="text-red-500 font-semibold">{item.amount}</p>
        </div>
        <p className="text-sm text-gray-500 mt-1">{item.time}</p>
      </div>
    ));
  };

  const tabs = ['All', 'Income', 'Expense'];
  const navigate = useNavigate();

  return (
    <div className="max-w-md mx-auto p-4 min-h-screen bg-gray-100 my-16">
      <div>
      <button className="text-lg" onClick={() => navigate('/me')}>&larr;</button>
      <header className="text-center text-lg font-semibold mb-4">Billing Details</header>
      </div>

      {/* Tabs */}
      <div className="flex justify-around border-b mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`pb-2 border-b-2 transition-colors duration-300 ${
              activeTab === tab ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="space-y-4">{renderItems()}</div>
    </div>
  );
};

export default BillingDetails;