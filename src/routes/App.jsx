import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from '@pages/Home/index.jsx';
import Checkout from '@pages/Checkout';
import Payment from '@pages/Payment';
import Success from '@pages/Success';
import Information from '@pages/Information';
import NotFound from '@pages/NotFound';

import Layout from '@containers/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/shop-app/" replace />}/>
          <Route path="/shop-app/" element={<Home />} />
          <Route path="/shop-app/checkout" element={<Checkout />} />
          <Route path="/shop-app/checkout/information" element={<Information />} />
          <Route path="/shop-app/checkout/payment" element={<Payment />} />
          <Route path="/shop-app/checkout/sucess" element={<Success />} />
  
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
      
    </BrowserRouter>
  );
}

export default App;
