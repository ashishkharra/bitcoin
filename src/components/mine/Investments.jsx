import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { IoChevronBackSharp } from 'react-icons/io5';
import { motion } from 'framer-motion';
import { useAuth } from '../AuthProvider';

const cardsData = [
  {
    title: "LTC Daily Intelligent AI Quantitative Trading",
    status: "Completed",
    dailyRate: 12,
    tenure: "1Day",
    amount: 3000,
    maturityDate: "2025-03-05 07:34:14",
    earnings: 360.00,
  },
  {
    title: "BTC Daily Quant Bot",
    status: "Completed",
    dailyRate: 8,
    tenure: "3Days",
    amount: 1500,
    maturityDate: "2025-04-02 12:00:00",
    earnings: 120.00,
  },
  {
    title: "ETH Daily Intelligent AI Quantitative Trading",
    status: "In Progress",
    dailyRate: 10,
    tenure: "5Days",
    amount: 2000,
    maturityDate: "2025-04-10 15:30:00",
    earnings: 100.00,
  },
  {
    title: "XRP Daily Intelligent AI Quantitative Trading",
    status: "In Progress",
    dailyRate: 6,
    tenure: "7Days",
    amount: 2500,
    maturityDate: "2025-04-15 09:00:00",
    earnings: 75.00,
  },
  {
    title: "DOGE Daily Intelligent AI Quantitative Trading",
    status: "In Progress",
    dailyRate: 5,
    tenure: "10Days",
    amount: 1000,
    maturityDate: "2025-04-20 18:45:00",
    earnings: 50.00,
  },
  {
    title: "SOL Daily Intelligent AI Quantitative Trading",
    status: "Completed",
    dailyRate: 7,
    tenure: "2Days",
    amount: 1200,
    maturityDate: "2025-03-28 11:15:00",
    earnings: 84.00,
  },
];

const tabs = ["All", "In Progress", "Completed"];


const Investments = () => {
  
  const { isAuthenticated } = useAuth();
  console.log('isAuthenticated:', isAuthenticated);
  const [activeTab, setActiveTab] = useState('All');
  const navigate = useNavigate();

  const location = useLocation();
  const storedUser = JSON.parse(localStorage.getItem('user'));
  const curr = location.pathname.split('/').pop();

  useEffect(() => {
    if (storedUser?.username) {
      navigate(`/me/${curr}`);
    }
  }, []);


  return (
    <div className="p-4 max-w-xl my-16">
      {/* Back Button */}
      <button onClick={() => navigate('/me')} className="flex items-center text-gray-600 mb-4">
        <IoChevronBackSharp size={24} />
        <span className="ml-2">Back</span>
      </button>

      {/* Tabs */}
      <div className="flex justify-between mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === tab ? 'border-b-2 border-blue-600 text-black' : ''
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="space-y-4">
        {cardsData.map((card, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-xl shadow-md p-4"
          >
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-base font-semibold text-gray-800">{card.title}</h2>
              <span className="text-sm px-3 py-1 bg-blue-200 text-blue-800 rounded-full">
                {card.status}
              </span>
            </div>

            <div className="flex justify-between text-center mb-4">
              <div>
                <p className="text-orange-600 text-xl font-bold">{card.dailyRate}%</p>
                <p className="text-xs text-gray-500">Daily Rate</p>
              </div>
              <div>
                <p className="text-gray-900 text-xl font-bold">{card.tenure}</p>
                <p className="text-xs text-gray-500">Investment Tenure</p>
              </div>
              <div>
                <p className="text-gray-900 text-xl font-bold">{card.amount.toFixed(2)}</p>
                <p className="text-xs text-gray-500">Investment Amount</p>
              </div>
            </div>

            <hr className="mb-3" />

            <div className="flex justify-between text-sm text-gray-600">
              <p>
                <span className="text-gray-500">Maturity Date:</span> {card.maturityDate}
              </p>
              <p>
                <span className="text-gray-500">Earnings:</span>{' '}
                <span className="text-orange-600 font-semibold">{card.earnings.toFixed(2)}</span>
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Investments;