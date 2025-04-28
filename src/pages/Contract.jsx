import React, { useState } from "react";

const timeframes = ["1min", "5min", "15min", "30min", "60min", "4hour", "1day"];
const indicators = ["VOL", "MACD", "KDJ", "RSI", "DMI", "OBV", "BOLL", "SAR", "DMA", "TRIX", "BRAR", "VR", "EMV", "WR", "ROC", "MTM", "PSY"];

export default function Contract() {
    const [activeTimeframe, setActiveTimeframe] = useState("1min");
    const [activeTab, setActiveTab] = useState('In Progress');
    const [orders, setOrders] = useState([]);

    return (
        <div className="w-full p-4 text-sm font-medium my-16">
            {/* Header */}
            <div className="flex justify-between items-center mb-2">
                <div className="font-bold text-lg">Contract</div>
                <div className="text-blue-600">Contract Play</div>
            </div>

            {/* Market Info */}
            <div className="flex justify-between items-center text-gray-700 mb-2">
                <div className="flex items-center gap-2">
                    <span className="font-semibold text-lg">BTC/USDT</span>
                    <span className="text-green-600">94717.49</span>
                    <span className="bg-green-100 text-green-600 px-2 rounded">+0.86%</span>
                </div>
            </div>

            {/* Timeframes */}
            <div className="flex gap-3 overflow-x-auto mb-2">
                {timeframes.map((tf) => (
                    <button
                        key={tf}
                        onClick={() => setActiveTimeframe(tf)}
                        className={`pb-1 ${activeTimeframe === tf ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"}`}
                    >
                        {tf}
                    </button>
                ))}
            </div>

            {/* Chart Placeholder */}
            <div className="bg-gray-100 h-48 flex items-center justify-center text-gray-500 mb-2 rounded">
                Chart Placeholder
            </div>

            {/* Indicators */}
            <div className="flex flex-wrap gap-2 mb-4 text-xs text-gray-600">
                {indicators.map((ind) => (
                    <span key={ind} className="cursor-pointer hover:text-blue-600">
                        {ind}
                    </span>
                ))}
            </div>

            {/* Order Info */}
            <div className="mb-2 font-semibold text-gray-900">Order Information</div>
            <div className="max-w-6xl mx-auto p-4 mb-10 md:p-6">
                {/* Tabs */}
                <div className="flex mb-6 border-b border-gray-200 overflow-x-auto">
                    <button
                        onClick={() => setActiveTab('In Progress')}
                        className={`px-4 py-2 whitespace-nowrap text-sm font-medium ${activeTab === 'In Progress'
                                ? 'border-b-2 border-blue-600 text-blue-600'
                                : 'text-gray-500 hover:text-gray-700'
                            }`}
                    >
                        In Progress
                    </button>
                    <button
                        onClick={() => setActiveTab('Completed')}
                        className={`px-4 py-2 whitespace-nowrap text-sm font-medium ${activeTab === 'Completed'
                                ? 'border-b-2 border-blue-600 text-blue-600'
                                : 'text-gray-500 hover:text-gray-700'
                            }`}
                    >
                        Completed
                    </button>
                </div>

                {/* Content Area */}
                <div className="bg-white rounded-lg shadow-sm p-6 min-h-[200px] flex items-center justify-center">
                    {orders.length > 0 ? (
                        <div className="w-full">
                            {/* Render orders here if they exist */}
                            {/* Example order item:
            {orders.map(order => (
              <div key={order.id} className="border-b py-4">
                Order #{order.id}
              </div>
            ))}
            */}
                        </div>
                    ) : (
                        <div className="text-center text-gray-500">
                            <svg
                                className="mx-auto h-12 w-12 text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                />
                            </svg>
                            <h3 className="mt-2 text-sm font-medium">No order records</h3>
                            <p className="mt-1 text-sm text-gray-500">
                                Get started by placing a new order.
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 w-fit fixed bottom-10 left-8 my-10">
                <button className="flex-1 bg-green-600 text-white py-2 rounded w-fit px-5">Buy Up</button>
                <button className="flex-1 bg-red-600 text-white py-2 rounded w-fit px-5">Buy Down</button>
            </div>
        </div>
    );
}