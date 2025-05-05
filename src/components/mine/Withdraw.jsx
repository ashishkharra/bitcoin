import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Withdraw = () => {
    const withdrawalPassword = "123";
    const availableBalance = 1.05;
    const amounts = [200000, 400000, 600000, 800000, 1000000, 1200000, 1400000, 1600000, 1800000, 2000000];
    const navigate = useNavigate();
    const [showQR, setShowQR] = useState(false);
    const [selectedAmount, setSelectedAmount] = useState('');
    const [password, setPassword] = useState('');
    const [isOpen, setIsOpen] = useState(true);
    const [showPassword, setShowPassword] = useState(false);

    const handleClose = () => {
        setIsOpen(false);
        navigate('/me')
    };

    if (!isOpen) return null;

    return (
        <div className="mt-16 inset-0 z-50 bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4">
            {/* QR Code Overlay */}
            {showQR && (
                <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50 p-4 border-black">
                    <div className="bg-white rounded-lg w-full max-w-md mx-2 relative">
                        {/* Close Button */}
                        <button
                            onClick={() => setShowQR(false)}
                            className="absolute -top-2 -right-2 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors"
                        >
                            <svg
                                className="w-6 h-6 text-gray-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>

                        <div className="p-6 sm:p-8">
                            <h3 className="text-lg sm:text-xl font-bold text-blue-600 mb-3 sm:mb-4">
                                Scan QR Code for Payment
                            </h3>

                            <div className="flex-shrink-0 mx-auto mb-4 sm:mb-6">
                                <img
                                    src="/assets/images/qr.jpg"
                                    alt="Payment QR Code"
                                    className=" object-center sm:w-64 sm:h-64 mx-auto border-2 border-blue-200 rounded-lg"
                                />
                            </div>

                            <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6">
                                Scan this QR code using your USDT wallet to complete the transaction
                            </p>

                            <div className="flex flex-col sm:flex-row gap-3">
                                <button
                                    onClick={() => setShowQR(false)}
                                    className="w-full py-2 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-medium rounded-lg transition-colors"
                                >
                                    Confirm Payment
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Main Withdrawal Content */}
            <div className={`bg-white rounded-xl shadow-xl w-full max-w-lg overflow-hidden transform transition-all ${showQR ? 'blur-xs' : ''}`}>
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-5 sm:px-8 sm:py-6">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl sm:text-2xl font-bold text-white">Withdraw Funds</h2>
                        <button
                            onClick={handleClose}
                            className="text-white hover:text-blue-100 transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                    {/* Withdrawal Account Section */}
                    <div className="mb-6">
                        <h3 className="text-sm font-medium text-gray-500 mb-2">Withdrawal account</h3>
                        <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                            <span className="font-medium text-blue-700">USDT wallet (USDT-TRC20)</span>
                            <span className="text-sm text-blue-600">Expected arrival: 30 mins</span>
                        </div>
                    </div>

                    {/* Amount Grid */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-4">Select Amount</label>
                        <div className="grid grid-cols-2 gap-3">
                            {amounts.map((amount) => {
                                const fee = Math.floor(amount * 0.075);
                                const netAmount = amount - fee;

                                return (
                                    <button
                                        key={amount}
                                        onClick={() => setSelectedAmount(amount.toString())}
                                        className={`p-3 rounded-lg border transition-all duration-200 text-left ${selectedAmount === amount.toString()
                                            ? 'border-blue-500 bg-blue-50 shadow-inner'
                                            : 'border-gray-200 hover:bg-gray-50'
                                            }`}
                                    >
                                        <div className="flex flex-col text-start">
                                            <span className={`font-medium ${selectedAmount === amount.toString() ? 'text-blue-600' : 'text-gray-800'
                                                }`}>
                                                ${amount.toLocaleString()}
                                            </span>
                                            <span className={`text-[12px] sm:text-xs px-2 py-1 rounded-full ${selectedAmount === amount.toString()
                                                ? 'bg-blue-100 text-blue-700'
                                                : 'bg-gray-100 text-gray-600'
                                                }`}>
                                                Fee: ${fee.toLocaleString()}
                                            </span>
                                        </div>
                                        <p className={`text-sm mt-1 ${selectedAmount === amount.toString() ? 'text-blue-500' : 'text-gray-500'
                                            }`}>
                                            Net: ${netAmount.toLocaleString()}
                                        </p>
                                    </button>
                                )
                            })}
                        </div>
                    </div>

                    {/* Custom Amount Section */}
                    <div className="mb-6">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-sm font-medium text-gray-500">Withdrawal amount</h3>
                            <div className="text-sm text-gray-500">
                                Available: ${availableBalance.toFixed(2)}
                                <button
                                    onClick={() => setSelectedAmount(availableBalance.toString())}
                                    className="ml-2 text-blue-600 hover:text-blue-700"
                                >
                                    Withdraw all
                                </button>
                            </div>
                        </div>
                        <div className="relative">
                            <input
                                type="number"
                                value={selectedAmount}
                                onChange={(e) => setSelectedAmount(e.target.value)}
                                className="w-full py-3 text-2xl font-bold text-gray-800 border border-gray-300 rounded-lg px-4 focus:ring-2 focus:ring-blue-500"
                                placeholder="0.00"
                                min="0"
                            />
                        </div>
                    </div>

                    {/* Security Verification */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-3">Transaction Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter security password"
                                className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                            />
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? (
                                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11V7a3 3 0 00-6 0m8 4H7a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2z" />
                                    </svg>
                                ) : (

                                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                )}


                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-3">
                        <button
                            onClick={() => {
                                if (password === withdrawalPassword) {
                                    alert(`Withdrawal of $${selectedAmount} initiated!`);
                                    handleClose();
                                } else {
                                    alert('Incorrect password!');
                                }
                            }}
                            disabled={!selectedAmount || !password}
                            className="w-full py-3 bg-blue-600 hover:bg-blue-700 cursor-pointer text-white font-medium rounded-lg transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                        >
                            Withdraw
                        </button>
                    </div>
                    <div className="flex flex-col gap-3 mt-2">
                        <button
                            onClick={() => {
                                if (password === withdrawalPassword) {
                                    setShowQR(true);
                                } else {
                                    alert('Incorrect password!');
                                }
                            }}
                            disabled={!selectedAmount || !password}
                            className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg cursor-pointer transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                        >
                            Generate Payment QR Code
                        </button>
                    </div>

                    {/* Disclaimer */}
                    <div className="mt-6 text-center text-sm text-gray-500">
                        <p>Withdrawal is automatically reviewed and processed by the system.</p>
                        <p>It is expected to arrive within 30 minutes. Please be patient!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Withdraw;