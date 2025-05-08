import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoChevronBackSharp } from "react-icons/io5";

const BillingDetails = () => {
  const [activeTab, setActiveTab] = useState('All');
  const navigate = useNavigate();

  const data = [
    { title: 'Sign in reward', amount: '+0.05', time: '2025-05-05 09:55' },
    { title: 'Register to give away gold coins', amount: '+1.00', time: '2025-05-05 09:44' },
    { title: 'Item purchase', amount: '-0.30', time: '2025-05-04 10:10' },
    { title: 'Invite bonus', amount: '+0.20', time: '2025-05-03 15:22' },
    { title: 'Refund for item', amount: '-0.50', time: '2025-05-02 12:00' },
    { title: 'Subscription fee', amount: '-5.00', time: '2025-05-01 08:30' },
    { title: 'Cashback reward', amount: '+2.00', time: '2025-04-30 14:15' },
    { title: 'Service charge', amount: '-1.50', time: '2025-04-29 11:45' },
    { title: 'Referral bonus', amount: '+0.75', time: '2025-04-28 16:20' },
    { title: 'In-app purchase', amount: '-3.00', time: '2025-04-27 13:10' },
    { title: 'Loyalty points redemption', amount: '+0.10', time: '2025-04-26 09:00' },
    { title: 'Gift card purchase', amount: '-10.00', time: '2025-04-25 17:30' },
    { title: 'Promotional credit', amount: '+1.50', time: '2025-04-24 19:00' },
    { title: 'Transaction fee', amount: '-0.05', time: '2025-04-23 21:15' },
    { title: 'Bonus points earned', amount: '+0.25', time: '2025-04-22 18:45' },
    { title: 'Account maintenance fee', amount: '-2.00', time: '2025-04-21 20:30' },
  ];

  const location = useLocation();
  const storedUser = JSON.parse(localStorage.getItem('user'));
  const curr = location.pathname.split('/').pop();

  useEffect(() => {
    if (storedUser?.username) {
      navigate(`/me/${curr}`, { replace: true });
    }
  }, []);

  const filterData = () => {
    if (activeTab === 'Income') return data.filter(item => item.amount.startsWith('+'));
    if (activeTab === 'Expense') return data.filter(item => item.amount.startsWith('-'));
    return data; // All
  };

  const filteredData = filterData();

  return (
    <div className="p-4 max-w-md my-16">
      {/* Header */}
      <div className="flex items-center mb-4">
        <button onClick={() => navigate(-1)} className="text-xl mr-2">
          <IoChevronBackSharp />
        </button>
        <h1 className="text-lg font-semibold">Billing Details</h1>
      </div>

      {/* Tabs */}
      <div className="flex justify-around mb-4">
        {['All', 'Income', 'Expense'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-1 ${
              activeTab === tab ? 'border-b-2 border-blue-600 text-black' : 'text-gray-600'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Transaction List */}
      <div className="space-y-3">
        {filteredData.length === 0 ? (
          <p className="text-center text-gray-500">No transactions found.</p>
        ) : (
          filteredData.map((item, idx) => (
            <div key={idx} className="p-3 border rounded-md shadow-sm">
              <div className="flex justify-between">
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-gray-500">{item.time}</p>
                </div>
                <div className={`font-bold ${item.amount.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                  {item.amount}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BillingDetails;