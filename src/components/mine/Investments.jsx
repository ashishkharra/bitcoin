import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Investments = () => {
  const [activeTab, setActiveTab] = useState('all');
  const navigate = useNavigate();
  
  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'inProgress', label: 'In Progress' },
    { id: 'completed', label: 'Completed' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8 my-10">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6">
        <div className='flex justify-between'>
        <button className="text-lg" onClick={() => navigate('/me')}>&larr;</button>
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Investment Record</h1>
        </div>

        
        {/* Tabs */}
        <div className="border-b border-gray-200 my-6">
          <div className="flex justify-between">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-4 px-1 ${
                  activeTab === tab.id
                    ? 'border-b-2 border-blue-500 text-blue-600 font-medium'
                    : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[200px] flex items-center justify-center">
          <div className="text-center text-gray-500">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
            <p className="mt-4 text-gray-500">No data</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investments;