import React, { useEffect, useState, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Loader from './components/Loader';
import ScrollToTop from './components/ScrollToTop';
import ProtectedRoute from './components/ProtectedRoute';
import { IoChevronBackSharp } from "react-icons/io5";
import { AuthProvider } from './components/AuthProvider';

// Lazy loaded pages
const Home = lazy(() => import('./pages/Home'));
const Invest = lazy(() => import('./pages/Invest'));
const Contract = lazy(() => import('./pages/Contract'));
const Vip = lazy(() => import('./pages/Vip'));
const Mine = lazy(() => import('./pages/Mine'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));

// Lazy loaded Mine section
const Withdraw = lazy(() => import('./components/mine/Withdraw'));
const Faq = lazy(() => import('./components/mine/Faq'));
const Auth_Center = lazy(() => import('./components/mine/Auth_Center'));
const Member_Center = lazy(() => import('./components/mine/Member_Center'));
const My_Messages = lazy(() => import('./components/mine/My_Messages'));
const My_Team = lazy(() => import('./components/mine/My_Team'));
const My_Rewards = lazy(() => import('./components/mine/My_Rewards'));
const Points_Record = lazy(() => import('./components/mine/Points_Record'));
const Wallet_Recharge = lazy(() => import('./components/mine/Wallet_Recharge'));
const My_Wallet = lazy(() => import('./components/mine/My_Wallet'));
const Settings = lazy(() => import('./components/mine/Settings'));
const Transfer = lazy(() => import('./components/mine/Transfer'));
const Investments = lazy(() => import('./components/mine/Investments'));
const BillingDetails = lazy(() => import('./components/mine/BillingDetails'));
const OnlineService = lazy(() => import('./components/mine/OnlineService'));

const AppContent = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <>
      {loading && <Loader />}
      <Header />
      <Suspense fallback={<Loader />}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/investments" element={<Invest />} />
          <Route path="/contract" element={<Contract />} />
          <Route path="/vip" element={<Vip />} />
          <Route path='/me' element={<Mine />} />

          <Route path="/withdraw" element={<ProtectedRoute><Withdraw /></ProtectedRoute>} />
          <Route path="/me/auth-center" element={<ProtectedRoute><Auth_Center /></ProtectedRoute>} />
          <Route path="/me/faq" element={<ProtectedRoute><Faq /></ProtectedRoute>} />
          <Route path="/me/member-center" element={<ProtectedRoute><Member_Center /></ProtectedRoute>} />
          <Route path="/me/messages" element={<ProtectedRoute><My_Messages /></ProtectedRoute>} />
          <Route path="/me/team" element={<ProtectedRoute><My_Team /></ProtectedRoute>} />
          <Route path="/me/rewards" element={<ProtectedRoute><My_Rewards /></ProtectedRoute>} />
          <Route path="/me/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
          <Route path="/me/points" element={<ProtectedRoute><Points_Record /></ProtectedRoute>} />
          <Route path="/me/wallet-recharge" element={<ProtectedRoute><Wallet_Recharge /></ProtectedRoute>} />
          <Route path="/me/withdraw" element={<ProtectedRoute><Withdraw /></ProtectedRoute>} />
          <Route path="/me/wallet" element={<ProtectedRoute><My_Wallet /></ProtectedRoute>} />
          <Route path="/me/transfer" element={<ProtectedRoute><Transfer /></ProtectedRoute>} />
          <Route path="/me/my-investments" element={<ProtectedRoute><Investments /></ProtectedRoute>} />
          <Route path="/me/billing-details" element={<ProtectedRoute><BillingDetails /></ProtectedRoute>} />
          <Route path="/me/my-services" element={<ProtectedRoute><OnlineService /></ProtectedRoute>} />

          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Suspense>
    </>
  );
};

const App = () => (
  <BrowserRouter>
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  </BrowserRouter>
);

export default App;