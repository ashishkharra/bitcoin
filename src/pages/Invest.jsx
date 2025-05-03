import { useState } from "react";
import { motion } from "framer-motion";

const tabList = ["Hot", "Quantify", "Pledge"];
const subTabs = ["All", "VIP0", "VIP1", "VIP2", "VIP3", "VIP4"];

const cardsData = [
  { vipLevel: "VIP0", parts: 2, amount: 10, progress: 56 },
  { vipLevel: "VIP1", parts: 1, amount: 30, progress: 65 },
  { vipLevel: "VIP2", parts: 3, amount: 50, progress: 80 },
  { vipLevel: "VIP3", parts: 1, amount: 70, progress: 25 },
  { vipLevel: "VIP4", parts: 2, amount: 100, progress: 95 },
  { vipLevel: "VIP0", parts: 2, amount: 10, progress: 56 },
  { vipLevel: "VIP1", parts: 1, amount: 30, progress: 65 },
  { vipLevel: "VIP2", parts: 3, amount: 50, progress: 80 },
  { vipLevel: "VIP3", parts: 1, amount: 70, progress: 25 },
  { vipLevel: "VIP4", parts: 2, amount: 100, progress: 95 },
  { vipLevel: "VIP0", parts: 2, amount: 10, progress: 56 },
  { vipLevel: "VIP1", parts: 1, amount: 30, progress: 65 },
  { vipLevel: "VIP2", parts: 3, amount: 50, progress: 80 },
  { vipLevel: "VIP3", parts: 1, amount: 70, progress: 25 },
  { vipLevel: "VIP4", parts: 2, amount: 100, progress: 95 },
];

const InvestmentCard = ({ vipLevel, parts, amount, progress }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md w-full border border-gray-300 dark:border-gray-700"
    >
      <div className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">
        BTC Daily Intelligent AI Quantitative Trading
      </div>
      <div className="flex md:flex-row justify-around items-center mb-2 text-sm sm:text-base">
        <div className="text-red-500 text-xl font-bold">
          1<span className="text-sm">%</span>
        </div>
        <div className="text-gray-700 dark:text-gray-300 text-sm">1 Day</div>
        <div className="text-gray-700 dark:text-gray-300 text-sm">${amount.toFixed(2)}</div>
        <button className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm hover:bg-blue-700 transition cursor-pointer">
          Invest now
        </button>
      </div>
      <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
        Product purchase restrictions:{" "}
        <span className="text-red-500 font-medium">{parts}</span> part
      </div>
      <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
        This product is limited to{" "}
        <span className="text-yellow-500 font-medium">{vipLevel}</span> Buy
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div
          className="bg-yellow-500 h-2.5 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </motion.div>
  );
};

const Invest = () => {
  const [activeTab, setActiveTab] = useState("Hot");
  const [activeSubTab, setActiveSubTab] = useState("All");

  const filteredCards = activeSubTab === "All"
    ? cardsData
    : cardsData.filter(card => card.vipLevel === activeSubTab);

  return (
    <div className="px-4 py-6 my-12">
      {/* Main Tabs */}
      <div className="flex justify-between sm:justify-around gap-4 mb-6 pb-2 border-b border-gray-300">
        {tabList.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-[12px] sm:text-sm font-medium transition ${
              activeTab === tab
                ? "border-b-2 border-b-blue-600 text-black"
                : "text-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Sub Tabs */}
      <div className="flex flex-wrap justify-around sm:justify-center sm:gap-4 mb-6">
        {subTabs.map((sub) => (
          <button
            key={sub}
            onClick={() => setActiveSubTab(sub)}
            className={`px-3 py-1 rounded-full text-xs font-medium transition ${
              activeSubTab === sub
                ? "bg-blue-500 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300"
            }`}
          >
            {sub}
          </button>
        ))}
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredCards.map((card, index) => (
          <InvestmentCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Invest;