import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Recharge = () => {
  const navigate = useNavigate();
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState("");

  const predefinedAmounts = [50, 100, 500, 1000, 5000, 10000];

  const handleAmountClick = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomChange = (e) => {
    const value = e.target.value;
    setCustomAmount(value);
    setSelectedAmount(Number(value));
  };

  return (
    <div className="bg-gray-100 px-6 py-6 md:px-24 lg:px-48 my-16">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <button className="text-lg" onClick={() => navigate('/me')}>&larr;</button>
        <h1 className="text-xl font-semibold">Recharge</h1>
        <button className="text-black font-medium">Record</button>
      </div>

      {/* Wallet Balance */}
      <div className="bg-blue-500 text-white text-center py-6 rounded-xl shadow mb-6">
        <p className="text-sm font-medium">Wallet balance</p>
        <p className="text-3xl font-bold">1.05</p>
      </div>

      {/* Amount Selection */}
      <div className="mb-4">
        <p className="font-semibold mb-2">Amount</p>
        <div className="grid grid-cols-3 gap-3">
          {predefinedAmounts.map((amount) => (
            <button
              key={amount}
              onClick={() => handleAmountClick(amount)}
              className={`py-2 rounded-lg border text-sm font-semibold ${
                selectedAmount === amount
                  ? "border-blue-500 text-blue-600 bg-blue-50"
                  : "border-gray-300 text-gray-700 bg-white"
              }`}
            >
              ${amount}
            </button>
          ))}
        </div>
      </div>

      {/* Custom Amount */}
      <div className="mb-4">
        <p className="font-semibold mb-1">Other amount</p>
        <input
          type="number"
          placeholder="Enter another amount"
          value={customAmount}
          onChange={handleCustomChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
        />
      </div>

      {/* Subtotal and Help */}
      <div className="flex justify-between items-center text-sm mb-4">
        <p>
          Subtotal: <span className="text-orange-500 font-bold">${selectedAmount}</span>
        </p>
        <p>
          Encounter an issue?{" "}
          <a href="#" className="text-blue-500 underline">
            Contact us
          </a>
        </p>
      </div>

      {/* Recharge Method */}
      <div className="mb-4">
        <p className="font-semibold mb-1">Recharge method</p>
        <div className="flex items-center px-4 py-3 border border-gray-300 rounded-lg justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-green-600 text-xl">₮</span>
            <span className="text-gray-800 font-medium">USDT-TRC20</span>
          </div>
          <span className="text-gray-400">&#9662;</span>
        </div>
      </div>

      {/* Payment Password */}
      <div className="mb-6">
        <p className="font-semibold mb-1">Payment password</p>
        <input
          type="password"
          placeholder="Enter payment password"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
        />
      </div>

      {/* Confirm Button */}
      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-full transition">
        Next step: Confirm order
      </button>
    </div>
  );
};

export default Recharge;
