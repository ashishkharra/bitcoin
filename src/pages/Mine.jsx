import React, { useState } from 'react'
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useAuth } from '../components/AuthProvider';

const Mine = () => {
    const { isAuthenticated } = useAuth();
    const tools = [
        { name: "My Wallet", color: "text-blue-500", icon: "wallet",route: "/me/wallet" },  
        {
            name: "Transfer",
            color: "text-sky-400",
            icon: "transfer",
            route: "/me/transfer"
        },
        { name: "Wallet Recharge", color: "text-red-400", icon: "recharge", route: "/me/wallet-recharge" },
        { name: "Wallet Withdrawal", color: "text-green-400", icon: "withdrawal", route: "/me/withdraw" },
        { name: "My Team", color: "text-blue-400", icon: "team", route: "/me/team" },
        { name: "Points Record", color: "text-red-400", icon: "points", route: "/me/points" },
        { name: "Auth Center", color: "text-yellow-400", icon: "auth", route: "/me/auth-center" },
        { name: "My Messages", color: "text-teal-400", icon: "messages", route: "/me/messages" },
        { name: "My Rewards", color: "text-red-400", icon: "rewards", route: "/me/rewards" },
        { name: "Member Center", color: "text-teal-400", icon: "member", route: "/me/member-center" },
        { name: "FAQ", color: "text-yellow-400", icon: "faq", route: "/me/faq" },
        { name: "Sign-In Reward", color: "text-yellow-400", icon: "signin", route: "/me/signin" },
    ];

    const icons = {
        wallet: (
            <svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M3 7h18v13H3z" />
                <path d="M3 7V5a2 2 0 0 1 2-2h14v4" />
            </svg>
        ),
        transfer: (
            <svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M4 17l6-6-6-6M20 7h-8M20 17h-8" />
            </svg>
        ),
        recharge: (
            <svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M13 2L3 14h9v8l10-12h-9z" />
            </svg>
        ),
        withdrawal: (
            <svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 19V6M5 12l7 7 7-7" />
            </svg>
        ),
        team: (
            <svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="9" cy="7" r="4" />
                <circle cx="17" cy="7" r="4" />
                <path d="M5.5 21h7M11.5 21c0-2-2.5-4-6-4s-6 2-6 4" />
            </svg>
        ),
        points: (
            <svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
            </svg>
        ),
        auth: (
            <svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 12v4m0-4a4 4 0 1 0-4-4 4 4 0 0 0 4 4z" />
                <path d="M4 20h16" />
            </svg>
        ),
        messages: (
            <svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
        ),
        rewards: (
            <svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21 16.54 14 22 10.24 15.36 9 12 2 8.64 9 2 10.24 7.46 14 5.82 21z" />
            </svg>
        ),
        member: (
            <svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="7" r="4" />
                <path d="M5.5 21h13c0-4-3-6-6.5-6s-6.5 2-6.5 6z" />
            </svg>
        ),
        faq: (
            <svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M9 9a3 3 0 1 1 6 0c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
                <circle cx="12" cy="12" r="10" />
            </svg>
        ),
        signin: (
            <svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M10 16l4-4-4-4M20 12H10M4 4h16v16H4z" />
            </svg>
        ),
    };

    return (
        <div className='text-[12px] sm:text-base py-8'>
            <div className="text-center mt-[63px] bg-blue-600 text-white py-2 top-0 fixed w-full flex justify-between items-center px-4 z-40">
                <div className="flex justify-between items-center px-4 gap-2 py-1">
                    <img src="/assets/images/en.png" alt="" className='rounded-full w-12' />
                    <div>
                        {isAuthenticated && <p className='text-lg'>Welcome <span className='font-bold'>a@g.com</span></p>}
                        <p className='text-start'>Refer code 1234</p>
                    </div>
                </div>
                <Link to='/me/settings' className='cursor-pointer'><IoSettingsOutline size={24} /></Link>

            </div>

            <div className="bg-white rounded-lg shadow-md w-full max-w-4xl mx-auto p-6 mt-24 sm:mt-32">
                <div className="flex md:flex-row justify-between items-center space-y-8 md:space-y-0">

                    {/* My Investments */}
                    <div className="flex flex-col items-center">
                        <Link to='/me/my-investments' className="w-10 h-10 sm:w-12 sm:h-12 mb-3">
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
                        </Link>
                        <p className="text-gray-700 font-medium">My Investments</p>
                    </div>

                    {/* Billing Details */}
                    <div className="flex flex-col items-center">
                        <Link to='/me/billing-details' className="w-10 h-10 sm:w-12 sm:h-12 mb-3">
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
                        </Link>
                        <p className="text-gray-700 font-medium">Billing Details</p>
                    </div>

                    {/* Online Service */}
                    <div className="flex flex-col items-center pt-[-10px] relative">
                        <Link to='/me/my-services' className="w-10 h-10 sm:w-12 sm:h-12 mb-3 flex items-center justify-center absolute -mt-9 sm:-mt-4">
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
                        </Link>
                        <p className="text-gray-700 font-medium mt-5 sm:mt-12 ">Online Service</p>
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
                    <Link
                        to="/withdraw"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                        Withdraw Funds
                    </Link>
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


            <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 my-10">
                {tools.map((tool) => (
                    <Link
                        to={tool.route}
                        key={tool.name}
                        className="flex flex-col items-center text-center cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
                        onClick={tool.action ? tool.action : undefined}
                    >
                        <div className={`w-8 h-8 sm:w-12 sm:h-12 mb-2 ${tool.color}`}>
                            {icons[tool.icon]}
                        </div>
                        <p className="text-gray-700 text-sm">{tool.name}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}


export default Mine