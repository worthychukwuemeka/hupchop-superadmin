import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Orders from './pages/Orders';
import Customers from './pages/Customers';
import Dashboard from './pages/Dashboard';
import Category from './pages/Category';
import Wallet from './pages/Wallet';
import Report from './pages/Reports';
import Vendors from './pages/Vendors';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import OrderDetails from './pages/OrderDetails';
import VerifyOTP from './pages/VerifyOTP';
import CustomerDetails from './pages/CustomerDetails';
import VendorDetails from './pages/VendorDetails';
import Reports from './pages/Reports';
import Settings  from './pages/Settings';
import UserManagement from './pages/UserManagement';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/verify-otp" element={<VerifyOTP />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/category" element={<Category />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/vendors" element={<Vendors />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/order-details" element={<OrderDetails />} />
        <Route path="/customer-details" element={<CustomerDetails />} />
        <Route path="/vendor-details" element={<VendorDetails />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/user-management" element={<UserManagement />} />
      </Routes>
    </Router>
  );
};

export default App;
