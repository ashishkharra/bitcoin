import React, { useState } from 'react'
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Mine = () => {
    const tools = [
        { name: "My Wallet", color: "text-blue-500", icon: "wallet" },
        {
            name: "Transfer",
            color: "text-sky-400",
            icon: "transfer",
            action: () => setShowQR(true)
        },
        { name: "Wallet Recharge", color: "text-red-400", icon: "recharge" },
        { name: "Wallet Withdrawal", color: "text-green-400", icon: "withdrawal" },
        { name: "My Team", color: "text-blue-400", icon: "team" },
        { name: "Points Record", color: "text-red-400", icon: "points" },
        { name: "Auth Center", color: "text-yellow-400", icon: "auth" },
        { name: "My Messages", color: "text-teal-400", icon: "messages" },
        { name: "My Rewards", color: "text-red-400", icon: "rewards" },
        { name: "Member Center", color: "text-teal-400", icon: "member" },
        { name: "FAQ", color: "text-yellow-400", icon: "faq" },
        { name: "Sign-In Reward", color: "text-yellow-400", icon: "signin" },
    ];

    const icons = {
        wallet: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2 7h20v10H2V7zm2 2v6h16V9H4z" />
            </svg>
        ),
        transfer: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 12H4M10 6l-6 6 6 6" />
            </svg>
        ),
        recharge: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2v20m10-10H2" />
            </svg>
        ),
        withdrawal: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 19V5m0 0l-6 6m6-6l6 6" />
            </svg>
        ),
        team: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 21v-2a4 4 0 00-8 0v2m4-6a4 4 0 100-8 4 4 0 000 8z" />
            </svg>
        ),
        points: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" stroke="white" strokeWidth="2" />
            </svg>
        ),
        auth: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
        ),
        messages: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
            </svg>
        ),
        rewards: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 12l-8-8-8 8m16 0v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8" />
            </svg>
        ),
        member: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M5 20h14M12 2l4 8H8l4-8z" />
            </svg>
        ),
        faq: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 10h.01M12 14h.01M16 10h.01M9 16h6" />
            </svg>
        ),
        signin: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3h-1V1h-2v2H8V1H6v2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM5 21v-2h14v2H5z" />
            </svg>
        ),
    };

    const [showWithdrawBlock, setShowWithdrawBlock] = useState(false);
    const [password, setPassword] = useState('');
    const [selectedAmount, setSelectedAmount] = useState('');
    const [showQR, setShowQR] = useState(false);

    const withdrawAmounts = [
        "200,000-150,000",
        "200,000-100,000",
        "200,000-50,000",
        "200,000-0"
    ];

    return (
        <div className='text-[12px] sm:text-base'>
            <div className="text-center mt-[63px] bg-blue-600 text-white py-2 top-0 fixed w-full z-50 flex justify-between items-center px-4 z-50">
                <div className="flex justify-between items-center px-4 gap-2">
                    <img src="/assets/images/en.png" alt="" className='rounded-full w-16' />
                    <Link to='/login' className="font-medium px-4 py-2 rounded-md bg-yellow-600 cursor-pointer">Go to login</Link>
                </div>
                <IoSettingsOutline size={24} />

            </div>

            <div className="bg-white rounded-lg shadow-md w-full max-w-4xl mx-auto p-6 mt-40">
                <div className="flex md:flex-row justify-between items-center space-y-8 md:space-y-0">

                    {/* My Investments */}
                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 mb-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-full h-full text-blue-500"
                            >
                                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                <path d="M2 17l10 5 10-5" />
                                <path d="M2 12l10 5 10-5" />
                            </svg>
                        </div>
                        <p className="text-gray-700 font-medium">My Investments</p>
                    </div>

                    {/* Billing Details */}
                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 mb-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-full h-full text-blue-500"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 17v-2h6v2a2 2 0 002 2h1a2 2 0 002-2V7a2 2 0 00-2-2h-1a2 2 0 00-2 2v2H9V7a2 2 0 00-2-2H6a2 2 0 00-2 2v10a2 2 0 002 2h1a2 2 0 002-2z"
                                />
                            </svg>
                        </div>
                        <p className="text-gray-700 font-medium">Billing Details</p>
                    </div>

                    {/* Online Service */}
                    <div className="flex flex-col items-center pt-[-10px] relative">
                        <div className="w-12 h-12 mb-3 flex items-center justify-center absolute -mt-10 sm:-mt-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-full h-full text-blue-500"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M18 13a6 6 0 00-12 0v5a3 3 0 003 3h6a3 3 0 003-3v-5z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M8 15h.01M16 15h.01"
                                />
                            </svg>
                        </div>
                        <p className="text-gray-700 font-medium mt-7 sm:mt-12 ">Online Service</p>
                    </div>

                </div>
            </div>



            <div className="bg-white rounded-lg shadow-md w-full p-6 mx-auto mt-10 relative overflow-hidden max-w-4xl">
                {/* Top Section */}
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <h2 className="text-gray-800 font-semibold text-lg">Balance</h2>
                        <p className="text-2xl font-bold mt-1">$10,000</p>
                    </div>
                    <button
                        hidden={showWithdrawBlock}
                        onClick={() => setShowWithdrawBlock(!showWithdrawBlock)}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                        Withdraw Funds
                    </button>
                </div>

                {/* Bottom Stats */}
                <div className="flex justify-between text-center text-gray-700">
                    <div>
                        <p className="font-semibold">500</p>
                        <p className="text-sm text-gray-500 mt-1">Total Earnings</p>
                    </div>
                    <div>
                        <p className="font-semibold">15</p>
                        <p className="text-sm text-gray-500 mt-1">Total Rewards</p>
                    </div>
                    <div>
                        <p className="font-semibold">300</p>
                        <p className="text-sm text-gray-500 mt-1">Margin</p>
                    </div>
                    <div>
                        <p className="font-semibold">150</p>
                        <p className="text-sm text-gray-500 mt-1">Freeze</p>
                    </div>
                </div>

                {/* Background Icon */}
                <div className="absolute bottom-2 right-2 opacity-10 w-24 h-24">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-full h-full text-blue-200"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 2L2 7l10 5 10-5-10-5z"
                        />
                        <path d="M2 17l10 5 10-5" />
                        <path d="M2 12l10 5 10-5" />
                    </svg>
                </div>
            </div>

            {showWithdrawBlock && (
                <WithdrawalModal
                    onClose={() => setShowWithdrawBlock(false)}
                    selectedAmount={selectedAmount}
                    setSelectedAmount={setSelectedAmount}
                    password={password}
                    setPassword={setPassword}
                />
            )}

            <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
                {tools.map((tool) => (
                    <div
                        key={tool.name}
                        className="flex flex-col items-center text-center cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
                        onClick={tool.action ? tool.action : undefined}  // Only add onClick if action exists
                    >
                        <div className={`w-8 h-8 sm:w-12 sm:h-12 mb-2 ${tool.color}`}>
                            {icons[tool.icon]}
                        </div>
                        <p className="text-gray-700 text-sm">{tool.name}</p>
                    </div>
                ))}
            </div>

            {showQR && (
                <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center z-30 sm:top-40">
                    <div className="bg-white p-8 rounded-lg max-w-md text-center border">
                        <h3 className="text-xl font-bold mb-4">Scan to Receive Payment</h3>
                        <img
                            src="/assets/images/qr.jpg"
                            alt="Payment QR Code"
                            className="w-64 h-64 mx-auto mb-4 border-2 border-gray-200 object-contain"
                        />
                        <button
                            onClick={() => setShowQR(false)}
                            className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

        </div>
    )
}

const WithdrawalModal = ({ onClose, selectedAmount, setSelectedAmount, password, setPassword }) => {
    const amounts = [200000, 400000, 600000, 800000, 1000000, 1200000, 1400000, 1600000, 1800000, 2000000];
    const withdrawalPassword = "123";

    return (
        <div className="inset-0 z-50 bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-lg overflow-hidden transform transition-all">
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-5 sm:px-8 sm:py-6">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl sm:text-2xl font-bold text-white">Withdraw Funds</h2>
                        <button
                            onClick={onClose}
                            className="text-white hover:text-blue-100 transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <p className="mt-2 text-blue-100 text-sm">Secure withdrawal process</p>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                    {/* Amount Selection */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-4">Select Amount</label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {amounts.map((amount) => {
                                const fee = Math.floor(amount * 0.075);
                                const netAmount = amount - fee;

                                return (
                                    <button
                                        key={amount}
                                        onClick={() => setSelectedAmount(amount.toString())}
                                        className={`p-4 rounded-lg border transition-all duration-200 text-left 
                        ${selectedAmount === amount.toString()
                                                ? 'border-blue-500 bg-blue-50 shadow-inner'
                                                : 'border-gray-200 hover:bg-gray-50'}`}
                                    >
                                        <div className="flex justify-between items-center">
                                            <span className={`font-medium ${selectedAmount === amount.toString() ? 'text-blue-600' : 'text-gray-800'}`}>
                                                ${amount.toLocaleString()}
                                            </span>
                                            <span className={`text-xs px-2 py-1 rounded-full 
                          ${selectedAmount === amount.toString()
                                                    ? 'bg-blue-100 text-blue-700'
                                                    : 'bg-gray-100 text-gray-600'}`}>
                                                Fee: ${fee.toLocaleString()}
                                            </span>
                                        </div>
                                        <p className={`text-sm mt-1 ${selectedAmount === amount.toString() ? 'text-blue-500' : 'text-gray-500'}`}>
                                            Net: ${netAmount.toLocaleString()}
                                        </p>
                                    </button>
                                )
                            })}
                        </div>
                    </div>

                    {/* Custom Amount */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-3">Custom Amount</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <span className="text-gray-500">$</span>
                            </div>
                            <input
                                type="number"
                                min="200000"
                                max="2000000"
                                step="200000"
                                value={selectedAmount}
                                onChange={(e) => setSelectedAmount(e.target.value)}
                                placeholder="Enter amount (200k increments)"
                                className="w-full pl-9 pr-24 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                <span className="text-gray-500 text-sm">Max: $2M</span>
                            </div>
                        </div>
                    </div>

                    {/* Security Input */}
                    {selectedAmount && (
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-3">Security Verification</label>
                            <div className="relative">
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter transaction password"
                                    className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                />
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 mt-8">
                        <button
                            onClick={onClose}
                            className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors flex-1"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={() => {
                                if (password === withdrawalPassword) {
                                    alert(`Withdrawal of $${selectedAmount} confirmed!`);
                                    onClose();
                                } else {
                                    alert('Incorrect password!');
                                }
                            }}
                            disabled={!selectedAmount || !password}
                            className={`px-6 py-3 rounded-lg text-white transition-colors flex-1
                  ${!selectedAmount || !password
                                    ? 'bg-gray-300 cursor-not-allowed'
                                    : 'bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600'}`}
                        >
                            Confirm Withdrawal
                        </button>
                    </div>
                </div>

                {/* Footer */}
                <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                    <div className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Processing time: 1-3 business days • 7.5% platform fee applies</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mine