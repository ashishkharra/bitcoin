import React from 'react'
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Mine = () => {
    const tools = [
        { name: "My Wallet", color: "text-blue-500", icon: "wallet" },
        { name: "Transfer", color: "text-sky-400", icon: "transfer" },
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

    return (
        <div>
            <div className="text-center mt-[63px] bg-blue-600 text-white py-2 top-0 fixed w-full z-50 flex justify-between items-center px-4">
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
                    <div className="flex flex-col items-center pt-[-10px]">
                        <div className="w-12 h-12 mb-3 flex items-center justify-center">
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
                        <p className="text-gray-700 font-medium">Online Service</p>
                    </div>

                </div>
            </div>

            <div className="bg-white rounded-lg shadow-md w-full p-6 mx-auto mt-10 relative overflow-hidden max-w-4xl">
                {/* Top Section */}
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <h2 className="text-gray-800 font-semibold text-lg">Balance</h2>
                        <p className="text-2xl font-bold mt-1">$0</p>
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full">
                        Withdraw
                    </button>
                </div>

                {/* Bottom Stats */}
                <div className="flex justify-between text-center text-gray-700">
                    <div>
                        <p className="font-semibold">0</p>
                        <p className="text-sm text-gray-500 mt-1">Total Earnings</p>
                    </div>
                    <div>
                        <p className="font-semibold">0</p>
                        <p className="text-sm text-gray-500 mt-1">Total Rewards</p>
                    </div>
                    <div>
                        <p className="font-semibold">0</p>
                        <p className="text-sm text-gray-500 mt-1">Margin</p>
                    </div>
                    <div>
                        <p className="font-semibold">0</p>
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

            <div className="bg-white rounded-lg shadow-md w-full p-6 mt-10 mb-20 lg:mb-0 md:mb-0">
                <h2 className="text-gray-800 font-semibold text-lg mb-6">More Tools</h2>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
                    {tools.map((tool) => (
                        <div key={tool.name} className="flex flex-col items-center text-center">
                            <div className={`w-12 h-12 mb-2 ${tool.color}`}>
                                {icons[tool.icon]}
                            </div>
                            <p className="text-gray-700 text-sm">{tool.name}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Mine