import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Vip = () => {
    const [paymentPassword, setPaymentPassword] = useState('');
    const handleUpgrade = () => {
        console.log('Upgrade initiated with password:', paymentPassword);
    };
    return (
        <div className="w-full py-4 bg-white rounded-lg shadow-sm">
            {/* Header */}
            <div className="text-center mt-[63px] bg-blue-600 text-white py-4 top-0 fixed w-full z-50">
                <h1 className="text-2xl font-bold mb-2">Activate VIP</h1>
                <Link to='/login' className="font-medium px-4 py-2 rounded-md bg-yellow-600 cursor-pointer">Go to login</Link>
            </div>

            {/* Current Limits */}
            <div className="mb-8 mt-40">
                <div className="flex justify-between items-center mb-4 border border-gray-200 rounded-2xl py-5">
                    <div className="text-center w-1/2">
                        <p className="text-2xl sm:text-3xl font-bold">0</p>
                        <p className="text-gray-600 text-[12px] sm:text-base">Daily transfer limit</p>
                    </div>
                    <div className="text-center w-1/2">
                        <p className="text-2xl sm:text-3xl font-bold">0</p>
                        <p className="text-gray-600 text-[12px] sm:text-base">Monthly transfer limit</p>
                    </div>
                </div>
                <div className="border-t border-gray-200 my-4"></div>
            </div>

            {/* VIP Packages */}
            <div className='px-4 z-0'>
                <h2 className="text-xl font-semibold mb-4">VIP package</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                        { bg: 'vip1-bg.png', title: 'V1', daily: 10, monthly: 30, price: '$50.00' },
                        { bg: 'vip2-bg.png', title: 'V2', daily: 20, monthly: 60, price: '$100.00' },
                        { bg: 'vip3-bg.png', title: 'V3', daily: 30, monthly: 90, price: '$150.00' },
                        { bg: 'vip4-bg.png', title: 'V4', daily: 40, monthly: 120, price: '$200.00' },
                        { bg: 'vip5-bg.png', title: 'V5', daily: 50, monthly: 150, price: '$250.00' },
                        { bg: 'vip6-bg.png', title: 'V6', daily: 60, monthly: 180, price: '$300.00' },
                        { bg: 'vip7-bg.png', title: 'V7', daily: 70, monthly: 210, price: '$350.00' },
                        { bg: 'vip8-bg.png', title: 'V8', daily: 80, monthly: 240, price: '$400.00' },
                    ].map((pkg, index) => (
                        <div
                            key={index}
                            className="relative border border-gray-200 rounded-lg overflow-hidden w-full h-fit"
                        >
                            <img
                                src={`/assets/images/${pkg.bg}`}
                                alt={pkg.title}
                                className="w-full h-full object-cover"
                            />

                            {/* Text Overlay Positioned at the Bottom */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-4">
                                <div className="text-sm sm:text-base space-y-1">
                                    <p>
                                        Daily transfer limit:{' '}
                                        <span className="font-medium">{pkg.daily}</span>
                                    </p>
                                    <p>
                                        Monthly transfer limit:{' '}
                                        <span className="font-medium">{pkg.monthly}</span>
                                    </p>
                                    <p>
                                        Valid date:{' '}
                                        <span className="font-medium">60</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full p-4 sm:p-6 bg-white rounded-lg shadow-md mb-20 lg:mb-0 md:mb-0">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">VIP Membership</h1>
                    <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
                        Except for VIP1, the USDT paid by other VIP members is a deposit. When your membership expires or
                        you no longer need to use membership functions, you can send an email to customer service to
                        apply for a refund of your deposit. Subscribers are not charged USDT.
                    </p>

                    <div className="flex justify-between items-center mb-6 sm:mb-8 p-3 sm:p-4 bg-gray-100 rounded">
                        <span className="text-gray-700 text-sm sm:text-base">Balance</span>
                        <span className="font-medium">( 0 )</span>
                    </div>

                    <div className="mb-6 sm:mb-8">
                        <label htmlFor="paymentPassword" className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                            Enter payment password
                        </label>
                        <input
                            type="password"
                            id="paymentPassword"
                            value={paymentPassword}
                            onChange={(e) => setPaymentPassword(e.target.value)}
                            className="w-full px-4 py-2 sm:px-5 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                            placeholder="Payment password"
                        />
                    </div>

                    <button
                        onClick={handleUpgrade}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 sm:py-3 px-4 rounded-md transition duration-200 text-sm sm:text-base"
                    >
                        Upgrade now
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Vip;