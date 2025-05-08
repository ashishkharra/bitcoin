import React, { useEffect } from "react";
import { IoChevronBackSharp } from "react-icons/io5";
import { useNavigate, useLocation } from "react-router-dom";

// Mock transaction data
const transactions = [
  {
    id: 1,
    type: "Deposit",
    date: "2025-05-08",
    amount: 120.00,
    balance: 220.00,
  },
  {
    id: 2,
    type: "Withdrawal",
    date: "2025-05-06",
    amount: -50.00,
    balance: 100.00,
  },
  {
    id: 3,
    type: "Commission Earned",
    date: "2025-05-05",
    amount: 30.00,
    balance: 150.00,
  },
  {
    id: 4,
    type: "Deposit",
    date: "2025-05-04",
    amount: 200.00,
    balance: 120.00,
  },
  {
    id: 5,
    type: "Withdrawal",
    date: "2025-05-03",
    amount: -75.00,
    balance: 320.00,
  },
  {
    id: 6,
    type: "Commission Earned",
    date: "2025-05-02",
    amount: 45.00,
    balance: 395.00,
  },
  {
    id: 7,
    type: "Deposit",
    date: "2025-05-01",
    amount: 500.00,
    balance: 350.00,
  },
  {
    id: 8,
    type: "Withdrawal",
    date: "2025-04-30",
    amount: -100.00,
    balance: 850.00,
  },
  {
    id: 9,
    type: "Commission Earned",
    date: "2025-04-29",
    amount: 60.00,
    balance: 950.00,
  },
  {
    id: 10,
    type: "Deposit",
    date: "2025-04-28",
    amount: 300.00,
    balance: 890.00,
  },
];


export default function PointsRecordPage() {
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
    <div className="bg-gray-100 flex justify-center py-12 px-4 sm:px-6 lg:px-8 mt-7 min-h-screen">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="flex items-center justify-between text-gray-800 mb-6">
          <div className="cursor-pointer" onClick={() => navigate('/me')}><IoChevronBackSharp size={22} /></div>
          <h2 className="text-xl font-semibold">Wallet History</h2>
          <div className="w-6" />
        </div>

        {/* Transaction Cards */}
        <div className="space-y-4 mb-8">
          {transactions.map((tx) => (
            <div
              key={tx.id}
              className="bg-white rounded-xl p-4 shadow-sm flex justify-between items-center"
            >
              <div>
                <h3 className="text-md font-semibold text-gray-800">{tx.type}</h3>
                <p className="text-sm text-gray-400">{tx.date}</p>
              </div>
              <div className="text-right">
                <p
                  className={`text-lg font-bold ${tx.amount < 0 ? "text-red-500" : "text-green-600"
                    }`}
                >
                  {tx.amount < 0 ? "-" : "+"}${Math.abs(tx.amount).toFixed(2)}
                </p>
                <p className="text-sm text-gray-500">Balance: ${tx.balance.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: No Data State */}
        {transactions.length === 0 && (
          <div className="flex flex-col items-center justify-center bg-gray-50 rounded-xl p-10">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4076/4076508.png"
              alt="No data"
              className="w-24 h-24 opacity-40"
            />
            <p className="mt-4 text-gray-400 text-sm">No transaction history found</p>
          </div>
        )}
      </div>
    </div>
  );
}
