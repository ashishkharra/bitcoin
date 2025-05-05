import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTelegramPlane, FaUsers, FaHeadset, FaQuestionCircle } from 'react-icons/fa';

const services = [
  {
    icon: <FaTelegramPlane className="text-xl text-white" />,
    bg: 'bg-blue-500',
    title: 'Telegram',
    description: 'Online customer service',
  },
  {
    icon: <FaUsers className="text-xl text-white" />,
    bg: 'bg-black',
    title: 'Member group',
    description: 'Everyone is welcome to join',
  },
  {
    icon: <FaHeadset className="text-xl text-white" />,
    bg: 'bg-blue-500',
    title: 'Online customer service',
    description: '',
  },
  {
    icon: <FaQuestionCircle className="text-xl text-white" />,
    bg: 'bg-orange-500',
    title: 'FAQ',
    description: 'Quickly familiarize yourself with platform operations',
  },
];

const OnlineService = () => {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-4 sm:px-6 lg:px-8 my-16">
      <div className='flex justify-between'>
      <button className="text-lg" onClick={() => navigate('/me')}>&larr;</button>
      <div className="text-center mb-6 text-xl font-semibold">Online Service</div>
      </div>
      <div className="space-y-4">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between bg-white rounded-xl p-4 shadow-sm"
          >
            <div className="flex items-center space-x-4">
              <div className={`w-10 h-10 flex items-center justify-center rounded-full ${service.bg}`}>
                {service.icon}
              </div>
              <div>
                <div className="font-bold">{service.title}</div>
                {service.description && (
                  <div className="text-gray-500 text-sm">{service.description}</div>
                )}
              </div>
            </div>
            <div className="text-gray-400 text-lg">{'>'}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OnlineService;