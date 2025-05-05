import React from "react";
import { useNavigate } from "react-router-dom"; 

export default function PointsRecordPage() {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-100 flex justify-center py-12 px-4 sm:px-6 lg:px-8 mt-7">
      <div className="w-full max-w-2xl">
        <div className="flex items-center justify-between text-gray-800 mb-6">
          <button className="text-xl font-semibold" onClick={() => navigate('/me')}>←</button>
          <h2 className="text-xl font-semibold">Points Record</h2>
          <div className="w-6" />
        </div>

        <div className="flex flex-col items-center justify-center bg-gray-50 rounded-xl p-10">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4076/4076508.png"
            alt="No data"
            className="w-24 h-24 opacity-40"
          />
          <p className="mt-4 text-gray-400 text-sm">No data</p>
        </div>
      </div>
    </div>
  );
}
