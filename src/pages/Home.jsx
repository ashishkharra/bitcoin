import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Home = () => {
    const slides = [
        { id: 1, img: '/assets/images/slide1.jpg', alt: 'Virtual currency your path to digital wealth' },
        { id: 2, img: '/assets/images/slide2.jpg', alt: 'Celebrities investing in crypto' },
        { id: 3, img: '/assets/images/slide3.jpg', alt: 'Virtual currency benefits' },
        { id: 4, img: '/assets/images/slide4.jpg', alt: 'Crypto in 2024' }
    ];

    const features = [
        { title: 'Recharge', img: '/assets/images/recharge.png' },
        { title: 'Withdraw', img: '/assets/images/withdrawal.png' },
        { title: 'Points Mall', img: '/assets/images/shop.png' },
        { title: 'Invite', img: '/assets/images/invitation.png' },
        { title: 'Lucky Draw', img: '/assets/images/gift.png' },
        { title: 'Transfer', img: '/assets/images/transfer.png' },
        { title: 'Team', img: '/assets/images/team.png' },
        { title: 'APP', img: '/assets/images/app_download.png' },
        { title: 'Platform', img: '/assets/images/intro.png' },
        { title: 'FAQ', img: '/assets/images/qa.png' }
    ];

    const items = [
        "Nx***cx Just Bought DOGE Daily Intelligent AI Quantitative Tra",
        "User*123 Just Sold BTC Smart Algorithm Trading System",
        "Ano***er Just Bought ETH Automated Crypto Investment",
        "Tra***er Just Sold XRP Next-Gen Quantitative Analysis"
    ];

    const exchanges = ['BINANCE', 'OKX', 'HUOBI', 'COINBASE'];
    const cryptoData = [
        { img: '/assets/images/bit.png', pair: 'BTC/USDT', price: '94,628.51', change: '+0.76%' },
        { img: '/assets/images/eth.png', pair: 'ETH/USDT', price: '1,803.87', change: '+0.57%' },
        { img: '/assets/images/bnb.png', pair: 'BNB/USDT', price: '606.66', change: '+1.14%' },
        { img: '/assets/images/eos.png', pair: 'EOS/USDT', price: '0.6795', change: '+2.39%' },
        { img: '/assets/images/eos.png', pair: 'BCH/USDT', price: '354.61', change: '+1.11%' }
    ];

    const userData = [
        { username: '2****aY', income: 2566.22, time: '2025-04-28' },
        { username: '6*Rt', income: 6542.42, time: '2025-04-28' },
        { username: 'I*iX', income: 1363.93, time: '2025-04-28' },
        { username: 'z**Cp', income: 3689.94, time: '2025-04-28' },
        { username: 'y****ju', income: 11266.96, time: '2025-04-28' }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState(1);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [activeExchange, setActiveExchange] = useState('BINANCE');

    const nextSlide = () => {
        setDirection(1);
        setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    useEffect(() => {
        if (isAutoPlaying) {
            const interval = setInterval(nextSlide, 5000);
            return () => clearInterval(interval);
        }
    }, [isAutoPlaying, currentSlide]);

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1,
            zIndex: 1
        },
        exit: (direction) => ({
            x: direction < 0 ? '100%' : '-100%',
            opacity: 0,
            zIndex: 0
        })
    };

    return (
        <div className="space-y-12 px-4 sm:px-6 lg:px-8">
            {/* Hero Slider */}
            <div className="relative w-full mt-20 h-48 md:h-96 overflow-hidden rounded-3xl shadow-2xl">
                <AnimatePresence custom={direction} initial={false}>
                    <motion.div
                        key={currentSlide}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.5 }
                        }}
                        className="absolute w-full h-full"
                        onMouseEnter={() => setIsAutoPlaying(false)}
                        onMouseLeave={() => setIsAutoPlaying(true)}
                    >
                        <img
                            src={slides[currentSlide].img}
                            alt={slides[currentSlide].alt}
                            className="w-full h-full object-cover rounded-3xl"
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Dots */}
                <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`h-2 w-8 rounded-full transition-all ${index === currentSlide ? 'bg-white' : 'bg-white/50'}`}
                        />
                    ))}
                </div>
            </div>

            {/* Feature Icons */}
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-6">
                {features.map((feature, idx) => (
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        key={idx}
                        className="flex flex-col items-center space-y-2"
                    >
                        <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center shadow-md">
                            <img src={feature.img} alt={feature.title} className="w-10 h-10 object-contain" />
                        </div>
                        <span className="text-sm font-medium text-gray-700">{feature.title}</span>
                    </motion.div>
                ))}
            </div>

            {/* Infinite Moving Text */}
            <div className="overflow-hidden whitespace-nowrap py-4 bg-gray-50 rounded-xl shadow-lg border border-gray-200">
                <motion.div
                    className="flex space-x-12"
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{
                        repeat: Infinity,
                        duration: 20,
                        ease: "linear"
                    }}
                >
                    {[...items, ...items].map((item, idx) => (
                        <span key={idx} className="text-sm text-gray-800 min-w-max">
                            {item}
                            <span className="mx-8 text-gray-300">|</span>
                        </span>
                    ))}
                </motion.div>
            </div>

            {/* Exchange Tabs and Table */}
            <div className="bg-gray-50 p-6 rounded-3xl shadow-lg space-y-4">
                <div className="flex flex-wrap justify-center gap-2">
                    {exchanges.map((exchange) => (
                        <button
                            key={exchange}
                            onClick={() => setActiveExchange(exchange)}
                            className={`px-4 py-2 text-sm rounded-full transition ${activeExchange === exchange ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                        >
                            {exchange}
                        </button>
                    ))}
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b">
                                <th className="text-left p-3 text-gray-500">Currency</th>
                                <th className="text-right p-3 text-gray-500">Price ($)</th>
                                <th className="text-right p-3 text-gray-500">Change</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cryptoData.map((crypto, idx) => (
                                <tr key={idx} className={`${idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                                    <td className="p-3 flex items-center gap-2">
                                        <img src={crypto.img} alt="" className="w-6" />
                                        {crypto.pair}
                                    </td>
                                    <td className="p-3 text-right">{crypto.price}</td>
                                    <td className={`p-3 text-right ${crypto.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                                        {crypto.change}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="text-xs text-right text-gray-400">
                    Showing data for: {activeExchange}
                </div>
            </div>

            {/* User Income Table */}
            <div className="bg-white p-6 mb-18 rounded-3xl shadow-lg">
                <table className="w-full">
                    <thead>
                        <tr className="border-b">
                            <th className="text-left p-3 text-gray-600">Username</th>
                            <th className="text-right p-3 text-gray-600">Income</th>
                            <th className="text-right p-3 text-gray-600">Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userData.map((user, idx) => (
                            <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                                <td className="p-3">{user.username}</td>
                                <td className="p-3 text-right text-green-600 font-semibold">
                                    {user.income.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                                </td>
                                <td className="p-3 text-right text-gray-500">{user.time}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;