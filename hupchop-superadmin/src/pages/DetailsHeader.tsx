import React from 'react';
import { Link } from 'react-router-dom';

// Functional component for the page header on the Order Details page
const DetailsHeader = () => (
  <div className="page-header">
    {/* Left section of the header containing the title and breadcrumb navigation */}
    <div className="page-header-left d-flex align-items-center">
      <div className="page-header-title">
        <h5 className="m-b-10">Order Details</h5>
      </div>
      <ul className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Dashboard</Link> {/* Link to the Dashboard page */}
        </li>
        <li className="breadcrumb-item">
          <Link to="/orders">Orders</Link> {/* Link to the Orders page */}
        </li>
        <li className="breadcrumb-item">Order Details</li> {/* Current page */}
      </ul>
    </div>

    {/* Right section of the header containing action buttons and dropdowns */}
    <div className="page-header-right ms-auto">
      <div className="page-header-right-items">
        {/* Mobile view back button */}
        <div className="d-flex d-md-none">
          <a href="#" className="page-header-right-close-toggle">
            <i className="feather-arrow-left me-2"></i>
            <span>Back</span>
          </a>
        </div>

        {/* Action buttons and dropdown menus */}
        <div className="d-flex align-items-center gap-2 page-header-right-items-wrapper">
          {/* Dropdown for additional options */}
          <div className="dropdown">
            <a
              className="btn btn-icon btn-light-brand"
              data-bs-toggle="dropdown"
              data-bs-offset="0, 10"
              data-bs-auto-close="outside"
              href="#"
            >
              <i className="feather-more-vertical"></i>
            </a>
            <div className="dropdown-menu dropdown-menu-end">
              <a href="#" className="dropdown-item">
                <i className="feather-cast me-3"></i>
                <span>Export Order</span>
              </a>
              <div className="dropdown-divider"></div>
              <a href="#" className="dropdown-item">
                <i className="feather-trash-2 me-3"></i>
                <span>Delete Order</span>
              </a>
            </div>
          </div>

          {/* Dropdown for sharing options */}
          <div className="dropdown">
            <a
              href="#"
              className="btn btn-primary"
              data-bs-toggle="dropdown"
              data-bs-offset="0,11"
            >
              <i className="feather-share-2 me-2"></i>
              <span>Share Order</span>
            </a>
            <ul className="dropdown-menu dropdown-menu-start">
              <li className="dropdown-divider"></li>
              <li>
                <a href="#" className="dropdown-item">
                  <i className="feather feather-link me-3"></i>
                  <span>Copy Link</span>
                </a>
              </li>
              <li>
                <a href="#" className="dropdown-item">
                  <i className="feather feather-grid me-3"></i>
                  <span>Share via QR</span>
                </a>
              </li>
              <li>
                <a href="#" className="dropdown-item">
                  <i className="feather feather-mail me-3"></i>
                  <span>Share via Email</span>
                </a>
              </li>
              <li>
                <a href="#" className="dropdown-item">
                  <i className="feather feather-message-square me-3"></i>
                  <span>Share via Message</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile view menu toggle button */}
      <div className="d-md-none d-flex align-items-center">
        <a href="#" className="page-header-right-open-toggle">
          <i className="feather-align-right fs-20"></i>
        </a>
      </div>
    </div>
  </div>
);

export default DetailsHeader;
