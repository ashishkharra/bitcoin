import react from "react";
import { useNavigate } from "react-router-dom";

function InformationPage() {
  const navigate = useNavigate();
  const announcements = [
    {
      date: "2024-10-24 14:17:44",
      title: "Latest announcement",
      content:
        "Dear members:\n\nIn order to bring a better experience to all members, the platform will be fully upgraded on October 24, 2024, Singapore time. If you have any questions or issues during this period, you can contact the platform’s online customer service for processing.",
    },
    {
      date: "2024-08-24 13:16:38",
      title: "Welcome to join the cryptocurrency investment exchange group",
      content:
        `Recommended Cryptocurrency Investment Exchange Group\n\nhttps://t.me/+EoKYVHaNPyFLOWJI\n\nGroup Introduction:\n\nHere, you can learn more about cryptocurrency market trading strategies, learn cryptocurrency-related knowledge, exchange...`,
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-100 my-16">
      <div>
        <button className="text-lg" onClick={() => navigate('/me')}>&larr;</button>
        <h2 className="text-center text-2xl font-bold mb-6">Information</h2>
      </div>

      {announcements.map((item, idx) => (
        <div key={idx} className="mb-8">
          <div className="flex justify-center mb-2">
            <span className="bg-gray-400 text-white text-xs px-3 py-1 rounded-full">
              {item.date}
            </span>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <h2 className="font-semibold mb-2">{item.title}</h2>
            <p className="text-sm whitespace-pre-line">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default InformationPage;
