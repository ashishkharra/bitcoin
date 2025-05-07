import react from "react";
import { useAuth } from "../../components/AuthProvider";
import { useNavigate } from "react-router-dom";

function RewardsPage() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const rewards = [
    {
      title: "Sign in reward",
      amount: "$0.05",
      date: "2025-05-05 09:55:05",
    },
    {
      title: "Register to give away gold coins",
      amount: "$1.00",
      date: "2025-05-05 09:44:45",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white mt-16">
      <div className="flex justify-between">
        <button className="text-xl my-2 cursor-pointer" onClick={() => navigate('/me')}>&larr;</button>
        <h1 className="text-center text-2xl font-semibold mb-6">My Rewards</h1>
      </div>


      <div className="bg-blue-500 text-white rounded-xl p-6 mb-6 text-center">
        <div className="text-lg font-medium">Balance</div>
        <div className="text-3xl font-bold mb-4">{isAuthenticated ? '$122121.72' : '$0'}</div>
        <div className="flex justify-center gap-8 text-sm">
          <div>
            <div className="font-semibold">{isAuthenticated ? '$121.72' : '$0'}</div>
            <div>Today's Rewards</div>
          </div>
          <div className="border-l border-white h-6"></div>
          <div>
            <div className="font-semibold">{isAuthenticated ? '$12981.72' : '$0'}</div>
            <div>Total Rewards</div>
          </div>
        </div>
      </div>

      <h2 className="text-lg font-semibold mb-4 border-l-4 border-blue-500 pl-2">Rewards List</h2>
      <div className="space-y-4">
        {rewards.map((reward, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center border-b pb-2 text-sm"
          >
            <div>
              <div className="font-semibold">{reward.title}</div>
              <div className="text-gray-500">{reward.date}</div>
            </div>
            <div className="text-orange-500 font-semibold">{reward.amount}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RewardsPage;
