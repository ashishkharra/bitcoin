import React, { useEffect } from "react";
import { ChevronRight } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { IoChevronBackSharp } from "react-icons/io5";

const wallets = [
  { type: "USDT-TRC20", description: "BindUSDT-TRC20" },
  { type: "USDT-ERC20", description: "BindUSDT-ERC20" },
  { type: "USDT-BEP20", description: "BindUSDT-BEP20" },
];

export default function MyWalletPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const storedUser = JSON.parse(localStorage.getItem('user'));
  const curr = location.pathname.split('/').pop();

  useEffect(() => {
    if (storedUser?.username) {
      navigate(`/me/${curr}`, { replace: true });
    }
  }, []);
  
  return (
    <div className="bg-gray-100 flex justify-center py-12 px-4 sm:px-6 lg:px-8 my-16">
      <div className="w-full max-w-2xl space-y-6">
        <div className="flex items-center justify-between text-gray-800">
          <div className="cursor-pointer" onClick={() => navigate('/me')}><IoChevronBackSharp size={22}/></div>
          <h2 className="text-xl font-semibold">My wallet</h2>
          <div className="w-6" /> {/* Spacer for symmetry */}
        </div>

        <div className="space-y-4">
          {wallets.map((wallet) => (
            <div
              key={wallet.type}
              className="bg-white rounded-xl shadow-sm p-4 flex items-center justify-between hover:bg-gray-50 cursor-pointer"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold">
                  T
                </div>
                <div>
                  <div className="font-semibold text-gray-800">{wallet.type}</div>
                  <div className="text-sm text-gray-500">{wallet.description}</div>
                </div>
              </div>
              <ChevronRight className="text-gray-400" />
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-xl p-4 text-sm text-gray-600 flex space-x-2">
          <div className="text-xl text-gray-400">ⓘ</div>
          <p>
            Please enter your personal valid receiving address. If the address is not valid, the withdrawal will fail. If you need to change the receiving address again, please contact customer service!
          </p>
        </div>
      </div>
    </div>
  );
}
