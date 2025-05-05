import react from "react";
import { useNavigate } from "react-router-dom";

function MemberCenter() {
    const navigate = useNavigate();
    const benefits = [
      { title: "Daily Investment Limit", subtitle: "1 Secondary", icon: "📅" },
      { title: "Number of investments per month", subtitle: "2 Secondary", icon: "📋" },
      { title: "Level 1 Recharge Reward", subtitle: "3%", icon: "💳" },
      { title: "Level 2 Recharge Reward", subtitle: "2%", icon: "💳" },
      { title: "Level 3 Recharge Reward", subtitle: "1%", icon: "💳" },
      { title: "Level 1 Finance Reward", subtitle: "3%", icon: "🌐" },
      { title: "Level 2 Finance Reward", subtitle: "2%", icon: "🌐" },
      { title: "Level 3 Finance Reward", subtitle: "1%", icon: "🌐" },
      { title: "Level 1 Contract Reward", subtitle: "3%", icon: "✅" },
      { title: "Level 2 Contract", subtitle: "", icon: "✅" },
      { title: "Level 3 Contract", subtitle: "", icon: "✅" },
      { title: "Level 1 VIP", subtitle: "", icon: "✔️" },
    ];
  
    return (
      <div className="max-w-6xl mx-auto p-8 bg-white my-16">
        <div>
          <button className="text-lg" onClick={() => navigate('/me')}>&larr;</button>
        <h2 className="text-center text-2xl font-bold mb-6">Member Center</h2>
        </div>
  
        <div className="bg-gradient-to-r from-blue-100 to-blue-300 rounded-2xl p-6 flex items-center justify-between mb-8">
          <div className="flex items-center space-x-6">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
              <img
                src="https://via.placeholder.com/60"
                alt="avatar"
                className="rounded-full"
              />
            </div>
            <div>
              <div className="font-bold text-xl">option</div>
              <span className="text-sm bg-blue-600 text-white rounded-full px-3 py-1">VIP0</span>
            </div>
          </div>
          <div className="text-right">
            <div className="font-semibold text-2xl">1.05</div>
            <div className="text-md text-gray-700">Balance</div>
            <div className="font-semibold text-2xl">0.00</div>
            <div className="text-md text-gray-700">Earnings</div>
          </div>
        </div>
  
        <h3 className="text-xl font-semibold mb-6">LV0 Membership Benefits</h3>
  
        <div className="grid grid-cols-4 gap-6">
          {benefits.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center text-sm p-4 rounded-xl hover:bg-gray-50"
            >
              <div className="w-14 h-14 bg-blue-500 text-white rounded-full flex items-center justify-center mb-2 text-xl">
                <span>{item.icon}</span>
              </div>
              <div className="font-medium leading-tight text-sm">{item.title}</div>
              <div className="text-xs text-gray-600">{item.subtitle}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default MemberCenter;
  