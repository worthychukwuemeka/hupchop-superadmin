import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RiArrowRightSLine } from 'react-icons/ri';

function Sidebar() {
  const location = useLocation();

  // Function to determine if a link is active
  const isActive = (path: string) => {
    // Log the current path and the path being checked
    console.log('Current Path:', location.pathname);
    console.log('Checking Path:', path);
    
    // Return active class if paths match
    return location.pathname === path ? 'bg-pink-100 text-red-500 font-bold' : '';
  };

  return (
    <div>
      <nav className="nxl-navigation">
        <div className="navbar-wrapper">
          <div className="m-header">
            <Link to="/" className="b-brand">
              {/* ========   change your logo here   ============ */}
              <img src="assets/images/logo-full.png" alt="Logo" className="logo logo-lg" />
              <img src="assets/images/logo-abbr.png" alt="Logo" className="logo logo-sm" />
            </Link>
          </div>
          <div className="navbar-content">
            <ul className="nxl-navbar">
              <li className="nxl-item nxl-caption">
                <label>Operations</label>
              </li>
              <li className="nxl-item nxl-hasmenu">
                <Link to="/dashboard" className={`nxl-link ${isActive('/dashboard')}`}>
                  <span className="nxl-micon"><i className="feather-airplay"></i></span>
                  <span className="nxl-mtext">Dashboard</span>
                </Link>
              </li>
              <li className="nxl-item nxl-hasmenu">
                <Link to="/orders" className={`nxl-link ${isActive('/orders')}`}>
                  <span className="nxl-micon"><i className="feather-truck"></i></span>
                  <span className="nxl-mtext">Orders</span>
                </Link>
              </li>
              <li className="nxl-item nxl-hasmenu">
                <Link to="/customers" className={`nxl-link ${isActive('/customers')}`}>
                  <span className="nxl-micon"><i className="feather-users"></i></span>
                  <span className="nxl-mtext">Customers</span>
                </Link>
              </li>
              <li className="nxl-item nxl-hasmenu">
                <Link to="/vendors" className={`nxl-link ${isActive('/vendors')}`}>
                  <span className="nxl-micon"><i className="feather-home"></i></span>
                  <span className="nxl-mtext">Vendors</span>
                </Link>
              </li>
              <li className="nxl-item nxl-caption">
                <label>Administrations & Finance</label>
              </li>
              <li className="nxl-item nxl-hasmenu">
                <Link to="/reports" className={`nxl-link ${isActive('/reports')}`}>
                  <span className="nxl-micon"><i className="feather-download-cloud"></i></span>
                  <span className="nxl-mtext">Reports</span>
                </Link>
              </li>
              <li className="nxl-item nxl-hasmenu">
                <Link to="/wallet" className={`nxl-link ${isActive('/wallet')}`}>
                  <span className="nxl-micon"><i className="">₦</i></span>
                  <span className="nxl-mtext">Wallet</span>
                </Link>
              </li>
              <li className="nxl-item nxl-hasmenu">
                <Link to="/settings" className={`nxl-link ${isActive('/settings')}`}>
                  <span className="nxl-micon"><i className="feather-settings"></i></span>
                  <span className="nxl-mtext">Settings</span>
                </Link>
              </li>
              <li className="nxl-item nxl-caption">
                <label>Logout</label>
              </li>
              <li className="nxl-item nxl-hasmenu">
                <Link to="/logout" className={`nxl-link ${isActive('/logout')}`}>
                  <span className="nxl-micon"><i className="feather-power"></i></span>
                  <span className="nxl-mtext">Sign Out</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
