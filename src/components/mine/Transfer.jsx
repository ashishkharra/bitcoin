import React from "react";
import { useNavigate } from "react-router-dom";

export default function Transfer() {
  const navigate = useNavigate();
  return (
    <div className="bg-white flex justify-center items-start py-12 px-4 sm:px-6 lg:px-8 my-10">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <div className="flex justify-between">
            <button className="text-lg" onClick={() => navigate('/me')}>&larr;</button>
            <h2 className="text-2xl font-bold text-gray-900">Transfer to friends</h2>
          </div>
          <div className="text-sm text-right text-blue-600 cursor-pointer hover:underline">
            Record
          </div>
        </div>

        <div className="bg-blue-500 rounded-lg p-6 text-center text-white font-semibold text-lg">
          <div>Wallet balance</div>
          <div className="text-3xl font-bold">$10,000</div>
        </div>

        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            id="username"
            name="username"
            type="text"
            autoComplete="username"
            placeholder="Enter username"
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
          <p className="mt-1 text-xs text-orange-500">
            Tips: The other party's account must be a first-level VIP before you can transfer it out.
          </p>
        </div>

        <div>
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
            Amount
          </label>
          <div className="relative">
            <input
              id="amount"
              name="amount"
              type="text"
              placeholder="Enter amount"
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm py-2 px-3 pr-10 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-blue-600 text-sm cursor-pointer">
              All
            </span>
          </div>
          <p className="mt-1 text-xs text-orange-500">
            Tips: The other party's account must be a first-level VIP before you can transfer it out.
          </p>
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 text-base font-medium"
        >
          One-click transfer, no key required
        </button>
      </div>
    </div>
  );
}
