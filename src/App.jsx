import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Invest from './pages/Invest';
import Contract from './pages/Contract';
import Vip from './pages/Vip';
import Mine from './pages/Mine';
import Loader from './components/Loader';
import Login from './pages/Login';
import Register from './pages/Register';
import Withdraw from './components/mine/Withdraw';
import Faq from './components/mine/Faq';
import Auth_Center from './components/mine/Auth_Center';
import Member_Center from './components/mine/Member_Center';
import My_Messages from './components/mine/My_Messages';
import My_Team from './components/mine/My_Team';
import My_Rewards from './components/mine/My_Rewards';
import Points_Record from './components/mine/Points_Record';
import Wallet_Recharge from './components/mine/Wallet_Recharge';
import My_Wallet from './components/mine/My_Wallet'
import Settings from './components/mine/Settings';
import { AuthProvider } from './components/AuthProvider';
import ProtectedRoute from './components/ProtectedRoute';
import Transfer from './components/mine/Transfer';

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/investments" element={<Invest />} />
        <Route path="/contract" element={<Contract />} />
        <Route path="/vip" element={<Vip />} />
        <Route path='/me' element={<Mine />} />
        <Route
          path="/withdraw"
          element={
            <ProtectedRoute>
              <Withdraw />
            </ProtectedRoute>
          }
        />
        <Route
          path="/me/auth-center"
          element={
            <ProtectedRoute>
              <Auth_Center />
            </ProtectedRoute>
          }
        />
        <Route
          path="/me/faq"
          element={
            <ProtectedRoute>
              <Faq />
            </ProtectedRoute>
          }
        />
        <Route
          path="/me/member-center"
          element={
            <ProtectedRoute>
              <Member_Center />
            </ProtectedRoute>
          }
        />
        <Route
          path="/me/messages"
          element={
            <ProtectedRoute>
              <My_Messages />
            </ProtectedRoute>
          }
        />
        <Route
          path="/me/team"
          element={
            <ProtectedRoute>
              <My_Team />
            </ProtectedRoute>
          }
        />
        <Route
          path="/me/rewards"
          element={
            <ProtectedRoute>
              <My_Rewards />
            </ProtectedRoute>
          }
        />
        <Route
          path="/me/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />
        <Route
          path="/me/points"
          element={
            <ProtectedRoute>
              <Points_Record />
            </ProtectedRoute>
          }
        />
        <Route
          path="/me/wallet-recharge"
          element={
            <ProtectedRoute>
              <Wallet_Recharge />
            </ProtectedRoute>
          }
        />

        <Route
          path="/me/withdraw"
          element={
            <ProtectedRoute>
              <Withdraw />
            </ProtectedRoute>
          }
        />

        <Route
          path="/me/wallet"
          element={
            <ProtectedRoute>
              <My_Wallet />
            </ProtectedRoute>
          }
        />

        <Route
          path="/me/transfer"
          element={
            <ProtectedRoute>
              <Transfer/>
            </ProtectedRoute>
          }
        />

        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
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
