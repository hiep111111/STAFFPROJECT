import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PurchaseRequestion from './pagesPurchase/PurchaseRequestionHome.jsx';
import OrderRequestion from './pagesPurchase/OrderRequestionHome.jsx';
import CreateOrderRequisitionForm from './pagesPurchase/CreateOderRequisition.jsx'
import CreatePurchaseRequisition from './pagesPurchase/CreatePurchaseRequisition.jsx'
import PurchaseHome from './pagesPurchase/Home.jsx'
import ErrorPageNotification from './pagesPurchase/PageNotificationError.jsx'
import SuccessPageNotification from './pagesPurchase/PageNotificationSuccess.jsx'
import ShowOderRequisitionDetail from './pagesPurchase/ShowOderRequisitionDetail.jsx'
import ShowPurchaseRequisitionDetail from './pagesPurchase/ShowPurchaseRequisitionDetail.jsx'

import CreateStockReturnForm from './pagesStock/CreateStockReturnForm.jsx';
import StockHome from './pagesStock/Home.jsx';
import StockAdvantageHome from './pagesStock/StockAdvantageHome.jsx';
import CreateStockAdvantageForm from './pagesStock/CreateStockAdvantageForm.jsx';
import StockReturnHome from './pagesStock/StockReturnHome.jsx';
import ShowStockAdvantageDetail from './pagesStock/ShowStockAdvantageDetail.jsx';
import ShowStockReturnDetail from './pagesStock/ShowStockReturnDetail.jsx';
import Home from './Home/Home.jsx';

import Login from './authPages/Login.jsx';
import SignUp from './authPages/SignUp.jsx';
import Profile from './Home/Profile.jsx';
import Help from './Home/Help.jsx';

const Purchase = () => {
  return (
    <Router>
      <Routes>
      <Route path='/Help' element={<Help />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/' element={<Login />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/purchase/*' element={<PurchaseHome />} />
        <Route path='/purchase/purchase' element={<PurchaseRequestion />} />
        <Route path='/purchase/order' element={<OrderRequestion />} />
        <Route path='/purchase/purchase/Create' element={<CreatePurchaseRequisition />} />
        <Route path='/purchase/order/Create' element={<CreateOrderRequisitionForm />} />
        <Route path="/purchase/order/Detail/:id" element={<ShowOderRequisitionDetail />} />
        <Route path="/purchase/purchase/Detail/:id" element={<ShowPurchaseRequisitionDetail />} />
        <Route path='/purchase/0/error' element={<ErrorPageNotification />} />
        <Route path='/purchase/0/success' element={<SuccessPageNotification />} />
      </Routes>
      <Routes>
        <Route path='/stock/*' element={<StockHome />} />
        <Route path='/stock/return' element={<StockReturnHome />} />
        <Route path='/stock/advantage' element={<StockAdvantageHome />} />
        <Route path='/stock/return/Create' element={<CreateStockReturnForm />} />
        <Route path='/stock/advantage/Create' element={<CreateStockAdvantageForm />} />
        <Route path="/stock/return/Detail/:id" element={<ShowStockReturnDetail />} />
        <Route path="/stock/advantage/Detail/:id" element={<ShowStockAdvantageDetail />} />
        <Route path='/stock/0/error' element={<ErrorPageNotification />} />
        <Route path='/stock/0/success' element={<SuccessPageNotification />} />
      </Routes>
    </Router>
  );
};

export default Purchase;
