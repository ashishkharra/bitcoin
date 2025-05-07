import react from "react";
import { useNavigate } from "react-router-dom";

function AuthCenter() {
  const navigate = useNavigate();
  const authMethods = [
    {
      icon: "📱",
      label: "Mobile Auth",
      description: "Mobile Account Auth",
      bgColor: "bg-blue-500",
    },
    {
      icon: "✉️",
      label: "Email Auth",
      description: "Dual Account Insurance",
      bgColor: "bg-green-500",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-100 mt-16">
      <div className="flex justify-between items-center">
        <button className="text-lg" onClick={() => navigate('/me')}>&larr;</button>
        <h1 className="text-2xl font-semibold text-center mb-6">Auth Center</h1>
      </div>
      <div className="space-y-4">
        {authMethods.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center space-x-4">
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full text-white text-xl ${item.bgColor}`}
              >
                {item.icon}
              </div>
              <div>
                <div className="font-semibold text-sm md:text-base">{item.label}</div>
                <div className="text-gray-500 text-xs md:text-sm">{item.description}</div>
              </div>
            </div>
            <div className="text-gray-400 text-xl">›</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AuthCenter;
