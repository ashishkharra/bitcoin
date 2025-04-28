import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="w-full shadow-md bg-white fixed top-0 left-0 right-0 z-50">
            {/* Top Section - Desktop */}
            <div className="hidden md:flex justify-between items-center px-10 py-4 max-w-7xl mx-auto">
                <div>
                    <img src="/assets/images/logo.png" alt="" className="w-36"/>
                </div>

                <nav className="hidden md:flex gap-8">
                    <Link
                        to="/"
                        className={`flex flex-col items-center ${isActive("/") ? "text-blue-600" : "text-gray-600"
                            } hover:text-orange-500 transition`}
                    >
                        <span className="font-medium">Home</span>
                        {isActive("/") && (
                            <div className="w-4 h-1 bg-orange-500 rounded-full mt-1"></div>
                        )}
                    </Link>

                    <Link
                        to="/investments"
                        className={`flex flex-col items-center ${isActive("/investments") ? "text-blue-600" : "text-gray-600"
                            } hover:text-orange-500 transition`}
                    >
                        <span className="font-medium">Invest</span>
                        {isActive("/investments") && (
                            <div className="w-4 h-1 bg-orange-500 rounded-full mt-1"></div>
                        )}
                    </Link>

                    <Link
                        to="/contract"
                        className={`flex flex-col items-center ${isActive("/investments") ? "text-blue-600" : "text-gray-600"
                            } hover:text-orange-500 transition`}
                    >
                        <span className="font-medium">Contract</span>
                        {isActive("/contract") && (
                            <div className="w-4 h-1 bg-orange-500 rounded-full mt-1"></div>
                        )}
                    </Link>

                    <Link
                        to="/vip"
                        className={`flex flex-col items-center ${isActive("/investments") ? "text-blue-600" : "text-gray-600"
                            } hover:text-orange-500 transition`}
                    >
                        <span className="font-medium">VIP</span>
                        {isActive("/vip") && (
                            <div className="w-4 h-1 bg-orange-500 rounded-full mt-1"></div>
                        )}
                    </Link>

                    <Link
                        to="/me"
                        className={`flex flex-col items-center ${isActive("/investments") ? "text-blue-600" : "text-gray-600"
                            } hover:text-orange-500 transition`}
                    >
                        <span className="font-medium">Mine</span>
                        {isActive("/me") && (
                            <div className="w-4 h-1 bg-orange-500 rounded-full mt-1"></div>
                        )}
                    </Link>
                </nav>

                <div className="flex items-center gap-4">
                    {/* Language */}
                    <button className="p-1 rounded-full hover:bg-gray-100 transition">
                        <img src="/assets/images/en.png" alt="" className="w-8" />
                    </button>
                    {/* Notification */}
                    <div className="relative">
                        <button className="p-1 rounded-full hover:bg-gray-100 transition">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                        </button>
                        <span className="absolute top-0 right-0 block w-2 h-2 bg-red-500 rounded-full"></span>
                    </div>
                </div>
            </div>

            {/* Mobile Header */}
            <div className="md:hidden flex justify-between items-center p-4">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                        D
                    </div>
                    <span className="text-xl font-bold">
                        Digi<span className="text-orange-500">Tifa</span>
                    </span>
                </div>

                <div className="flex items-center gap-4">
                    <button className="p-1 rounded-full hover:bg-gray-100 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                        <span className={`absolute top-3 right-3 block w-2 h-2 bg-red-500 rounded-full`}></span>
                    </button>

                    {/* Hamburger Menu */}
                    <button
                        onClick={toggleMenu}
                        className="p-1 rounded-full hover:bg-gray-100 transition focus:outline-none"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white shadow-lg">
                    <nav className="flex flex-col p-4">
                        <Link to="/" className="py-3 px-4 flex items-center text-blue-600 border-b border-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            Home
                            <div className="ml-auto w-2 h-2 bg-orange-500 rounded-full"></div>
                        </Link>
                        <Link to="/investments" className="py-3 px-4 flex items-center text-gray-600 border-b border-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Invest
                        </Link>
                        <Link to="/contract" className="py-3 px-4 flex items-center text-gray-600 border-b border-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                            </svg>
                            Contract
                        </Link>
                        <Link to="/vip" className="py-3 px-4 flex items-center text-gray-600 border-b border-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                            </svg>
                            VIP
                        </Link>
                        <Link to="/me" className="py-3 px-4 flex items-center text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            Mine
                        </Link>
                    </nav>

                    <div className="p-4 border-t border-gray-100 flex justify-between">
                        <button className="flex items-center text-gray-600">
                            <img src="/assets/images/en.png" alt="" className="w-8 mr-2" />
                            English
                        </button>
                        <button className="text-orange-500 font-medium">Log In</button>
                    </div>
                </div>
            )}

            {/* Bottom Navigation - Mobile Only */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200">
                <div className="flex justify-around items-center py-3">
                    <a href="#" className="flex flex-col items-center text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        <span className="text-xs">Home</span>
                    </a>
                    <a href="#" className="flex flex-col items-center text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-xs">Invest</span>
                    </a>
                    <a href="#" className="flex flex-col items-center text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                        <span className="text-xs">Contract</span>
                    </a>
                    <a href="#" className="flex flex-col items-center text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                        <span className="text-xs">VIP</span>
                    </a>
                    <a href="#" className="flex flex-col items-center text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span className="text-xs">Mine</span>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;