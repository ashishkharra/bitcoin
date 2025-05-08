import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { IoChevronBackSharp } from "react-icons/io5";
import { FaTelegramPlane, FaUsers, FaHeadset, FaQuestionCircle } from 'react-icons/fa';

const OnlineService = () => {
  const navigate = useNavigate();
  const location = useLocation();

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
      description: 'Ask your questions anytime',
    },
    {
      icon: <FaQuestionCircle className="text-xl text-white" />,
      bg: 'bg-orange-500',
      title: 'FAQ',
      description: 'Frequently asked questions',
    },
  ];
  const storedUser = JSON.parse(localStorage.getItem('user'));
  const curr = location.pathname.split('/').pop();

  useEffect(() => {
    if (storedUser?.username) {
      navigate(`/me/${curr}`, { replace: true });
    }
  }, []);

  return (
    <div className='my-16'>
      <div className="flex items-center p-4">
        <IoChevronBackSharp onClick={() => navigate(-1)} className="text-2xl cursor-pointer" />
        <h1 className="ml-4 text-lg font-semibold">Online Service</h1>
      </div>
      <div className="grid grid-cols-2 gap-4 p-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-4 rounded-xl shadow-md flex flex-col items-center text-center"
          >
            <div className={`p-3 rounded-full ${service.bg}`}>
              {service.icon}
            </div>
            <h2 className="mt-2 font-semibold">{service.title}</h2>
            <p className="text-sm text-gray-500">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OnlineService;
