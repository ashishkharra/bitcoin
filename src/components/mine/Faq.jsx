import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { IoChevronBackSharp } from "react-icons/io5";

const faqData = [
  {
    question: "Forgot login password or transaction password",
    answer:
      "1. Click My on the homepage",
    image: "/assets/images/image1.jpg"
  },
  {
    question: "Forgot or changed email address",
    answer:
      "Email addresses and usernames are unique on the platform and are associated and cannot be modified, please contact your email service provider to retrieve your access rights."
  },
  {
    question: "How to transfer money between users",
    answer:
      "1. Click My on the homepage",
    image: "/assets/images/image2.jpg"
  },
  {
    question: "Member group, channel",
    answer: "Explanation of member groups and available channels."
  },
  {
    question: "How to withdraw cash",
    answer: "Instructions for making withdrawals from your wallet.",
    image: "/assets/images/image3.jpg",
  },
  {
    question: "How to activate VIP",
    answer: "Requirements and steps to activate VIP status.",
    image: "/assets/images/image4.jpg"
  },
  {
    question: "How to buy USDT quickly",
    answer: "Quick guide for purchasing USDT securely."
  },
  {
    question: "VIP function introduction",
    answer: "Overview of features available for VIP users.",
    image: "/assets/images/image5.jpg"
  },
  {
    question: "How to deposit",
    answer: "Step-by-step guide to making deposits.",
    image: "/assets/images/image6.jpg"
  },
  {
    question : 'Minimum withdrawal amount',
    answer : 'The minimum withdrawal amount is 10 USDT. If you have any questions, please contact customer service.'
  },
  {
    question : 'Withdrawal and deposit limits',
    answer : 'The withdrawal and deposit limits are set by the platform and may vary based on your account status. Please check the platform for specific limits.'
  }
];

export default function FAQPage() {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

    const location = useLocation();
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const curr = location.pathname.split('/').pop();
  
    useEffect(() => {
      if (storedUser?.username) {
        navigate(`/me/${curr}`, { replace: true });
      }
    }, []);

  return (
    <div className=" bg-gray-100 flex justify-center py-12 px-4 sm:px-6 lg:px-8 my-10">
      <div className="w-full max-w-2xl">
        <div className="flex items-center justify-between text-gray-800 mb-6">
          <div className="cursor-pointer" onClick={() => navigate('/me')}><IoChevronBackSharp size={22}/></div>
          <h2 className="text-xl font-semibold">FAQ</h2>
          <div className="w-6" />
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-4 cursor-pointer"
              onClick={() => toggleIndex(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-medium text-gray-800">
                  {item.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="text-gray-500" size={20} />
                ) : (
                  <ChevronDown className="text-gray-500" size={20} />
                )}
              </div>
              {openIndex === index && (
                <div className="mt-2 text-sm text-gray-600">
                  <p>{item.answer}</p>
                  {item.image && (
                    <img
                      src={item.image}
                      alt="FAQ illustration"
                      className="mt-4 rounded-md border border-gray-200"
                    />
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
