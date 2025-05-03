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

const AppContent = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 500); // simulate load delay
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
        <Route path="/me" element={<Mine />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </>
  );
};

const App = () => (
  <BrowserRouter>
    <AppContent />
  </BrowserRouter>
);

export default App;
