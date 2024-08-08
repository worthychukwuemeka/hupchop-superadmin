import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Customers from './Customers';
import { Link } from 'react-router-dom';

function CustomerDetails() {
    return (
        <div>
            <Sidebar />

            <Header />

            <main className="nxl-container">
                <div className="nxl-content">
                    <div className="page-header">
                        {/* Left section of the header containing the title and breadcrumb navigation */}
                        <div className="page-header-left d-flex align-items-center">
                            <div className="page-header-title">
                                <h5 className="m-b-10">Customer Details</h5>
                            </div>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to="/dashboard">Dashboard</Link> {/* Link to the Dashboard page */}
                                </li>
                                <li className="breadcrumb-item">
                                    <Link to="/customers">Customers</Link> {/* Link to the Orders page */}
                                </li>
                                <li className="breadcrumb-item">Customer Details</li> {/* Current page */}
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
                                                <span>Export Customer Data</span>
                                            </a>
                                            <div className="dropdown-divider"></div>
                                            <a href="#" className="dropdown-item">
                                                <i className="feather-trash-2 me-3"></i>
                                                <span>Delete Customer Profile</span>
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
                                            <span>Share</span>
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

                    <div className="main-content">
                        {/* Container for the main content */}
                        <div className="row">
                            {/* Row for layout */}
                            <div className="col-xxl-4 col-xl-6">
                                {/* Column with responsive sizes */}
                                <div className="card stretch stretch-full">
                                    {/* Card component */}
                                    <div className="card-body">
                                        {/* Body of the card */}
                                        <div className="mb-4 text-center">
                                            {/* Container for profile image and user details */}
                                            <div className="wd-150 ht-150 mx-auto mb-3 position-relative">
                                                {/* Profile image container */}
                                                <div className="avatar-image wd-150 ht-150 border border-5 border-gray-3">
                                                    {/* Profile image */}
                                                    <img src="assets/images/avatar/1.png" alt="User Avatar" className="img-fluid" />
                                                </div>
                                                <div
                                                    className="wd-10 ht-10 text-success rounded-circle position-absolute translate-middle"
                                                    style={{ top: '76%', right: '10px' }}
                                                >
                                                    {/* Status indicator */}
                                                    <i className="bi bi-patch-check-fill"></i>
                                                </div>
                                            </div>
                                            <div className="mb-4">
                                                {/* User name and email */}
                                                <a href="javascript:void(0);" className="fs-14 fw-bold d-block">Alexandra Della</a>
                                                <a href="javascript:void(0);" className="fs-12 fw-normal text-muted d-block">alex.della@outlook.com</a>
                                            </div>
                                            
                                        </div>

                                        <ul className="list-unstyled mb-4">
                                            <li className="hstack justify-content-between mb-4">
                                                <span className="text-muted fw-medium hstack gap-3">
                                                    <i className="feather-map-pin"></i>Location
                                                </span>
                                                <a href="javascript:void(0);" className="float-end">4 Mike Akhigbe Way, Abuja</a>
                                            </li>
                                            <li className="hstack justify-content-between mb-4">
                                                <span className="text-muted fw-medium hstack gap-3">
                                                    <i className="feather-phone"></i>Phone
                                                </span>
                                                <a href="javascript:void(0);" className="float-end">+01 (375) 2589 645</a>
                                            </li>
                                            <li className="hstack justify-content-between mb-0">
                                                <span className="text-muted fw-medium hstack gap-3">
                                                    <i className="feather-mail"></i>Email
                                                </span>
                                                <a href="javascript:void(0);" className="float-end">alex.della@outlook.com</a>
                                            </li>
                                        </ul>
                                        {/* Action buttons */}
                                        <div className="d-flex gap-2 text-center pt-4">
                                            <a href="javascript:void(0);" className="w-50 btn btn-light-brand">
                                                <i className="feather-download-cloud me-2"></i>
                                                <span>Download Data</span>
                                            </a>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xxl-8 col-xl-6">
                                <div className="card border-top-0">
                                    <div className="card-header p-0">
                                        <ul className="nav nav-tabs flex-wrap w-100 text-center customers-nav-tabs" id="myTab" role="tablist">
                                            {/* Overview Tab */}
                                            <li className="nav-item flex-fill border-top" role="presentation">
                                                <a
                                                    href="javascript:void(0);"
                                                    className="nav-link active"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#overviewTab"
                                                    role="tab"
                                                >
                                                    Overview
                                                </a>
                                            </li>
                                            {/* Billing Tab */}
                                            <li className="nav-item flex-fill border-top" role="presentation">
                                                <a
                                                    href="javascript:void(0);"
                                                    className="nav-link"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#billingTab"
                                                    role="tab"
                                                >
                                                    Billing
                                                </a>
                                            </li>
                                            {/* Activity Tab */}
                                            <li className="nav-item flex-fill border-top" role="presentation">
                                                <a
                                                    href="javascript:void(0);"
                                                    className="nav-link"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#activityTab"
                                                    role="tab"
                                                >
                                                    Activity
                                                </a>
                                            </li>


                                            {/* Security Tab */}
                                            <li className="nav-item flex-fill border-top" role="presentation">
                                                <a
                                                    href="javascript:void(0);"
                                                    className="nav-link"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#securityTab"
                                                    role="tab"
                                                >
                                                    Security
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="tab-content">
                                        {/* Overview tab */}
                                        <div className="tab-pane fade show active p-4" id="overviewTab" role="tabpanel">
                                            <div className="profile-details mb-5">
                                                <div className="mb-4 d-flex align-items-center justify-content-between">
                                                    <h5 className="fw-bold mb-0">Profile Details:</h5>
                                                    
                                                </div>
                                                <div className="row g-0 mb-4">
                                                    <div className="col-sm-6 text-muted">Full Name:</div>
                                                    <div className="col-sm-6 fw-semibold">Alexandra Della</div>
                                                </div>
                                                <div className="row g-0 mb-4">
                                                    <div className="col-sm-6 text-muted">Surname:</div>
                                                    <div className="col-sm-6 fw-semibold">Della</div>
                                                </div>
                                                <div className="row g-0 mb-4">
                                                    <div className="col-sm-6 text-muted">Date of Birth:</div>
                                                    <div className="col-sm-6 fw-semibold">26 May, 2000</div>
                                                </div>
                                                <div className="row g-0 mb-4">
                                                    <div className="col-sm-6 text-muted">Mobile Number:</div>
                                                    <div className="col-sm-6 fw-semibold">+01 (375) 5896 3214</div>
                                                </div>
                                                <div className="row g-0 mb-4">
                                                    <div className="col-sm-6 text-muted">Email Address:</div>
                                                    <div className="col-sm-6 fw-semibold">alex.della@outlook.com</div>
                                                </div>
                                                <div className="row g-0 mb-4">
                                                    <div className="col-sm-6 text-muted">Location:</div>
                                                    <div className="col-sm-6 fw-semibold">4 Mike Akhigbe way, Nigeria</div>
                                                </div>
                                                <div className="row g-0 mb-4">
                                                    <div className="col-sm-6 text-muted">Joining Date:</div>
                                                    <div className="col-sm-6 fw-semibold">20 Dec, 2023</div>
                                                </div>
                                                <div className="row g-0 mb-4">
                                                    <div className="col-sm-6 text-muted">Country:</div>
                                                    <div className="col-sm-6 fw-semibold">Nigeria</div>
                                                </div>
                                            </div>
                                            <div className="alert alert-dismissible mb-4 p-4 d-flex alert-soft-warning-message profile-overview-alert" role="alert">
                                                <div className="me-4 d-none d-md-block">
                                                    <i className="feather feather-alert-triangle fs-1"></i>
                                                </div>
                                                <div>
                                                    <p className="fw-bold mb-1 text-truncate-1-line">This profile has not been updated</p>
                                                    <p className="fs-10 fw-medium text-uppercase text-truncate-1-line">Last Update: <strong>26 Dec, 2023</strong></p>
                                                    <a href="javascript:void(0);" className="btn btn-sm bg-soft-warning text-warning d-inline-block">Send email to Update Now</a>
                                                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                                </div>
                                            </div>
                                            <div className="project-section">
                                                <div className="mb-4 d-flex align-items-center justify-content-between">
                                                    <h5 className="fw-bold mb-0">Recent Orders:</h5>
                                                    <a href="javascript:void(0);" className="btn btn-sm btn-light-brand">View All</a>
                                                </div>
                                                <div className="row">
                                                    <div className="col-xxl-6 col-xl-12 col-md-6">
                                                        <div className="border border-dashed border-gray-5 rounded mb-4 md-lg-0">
                                                            <div className="p-4">
                                                                <div className="d-sm-flex align-items-center">
                                                                    <div className="wd-50 ht-50 p-2 bg-gray-200 rounded-2">
                                                                        <img src="assets/images/brand/github.png" className="img-fluid" alt="" />
                                                                    </div>
                                                                    <div className="ms-0 mt-4 ms-sm-3 mt-sm-0">
                                                                        <a href="javascript:void(0);" className="d-block">Wings & Thighs Combo Meal</a>
                                                                        <div className="fs-12 d-block text-muted">Chicken Republic Wuse</div>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex align-items-center justify-content-between">
                                                                    <div className="img-group lh-0 ms-3"></div>
                                                                    <div className="badge bg-soft-danger text-danger">Cancelled</div>
                                                                </div>
                                                            </div>
                                                            <div className="px-4 py-3 border-top border-top-dashed border-gray-5 d-flex justify-content-between gap-2">
                                                                <div className="w-75 d-none d-md-block">
                                                                    <small className="fs-11 fw-medium text-uppercase text-muted d-flex align-items-center justify-content-between">
                                                                        <span>Progress</span>
                                                                        <span>15%</span>
                                                                    </small>
                                                                    <div className="progress mt-1 ht-3">
                                                                        <div className="progress-bar bg-danger" role="progressbar" style={{ width: '15%' }}></div>
                                                                    </div>
                                                                </div>
                                                                <span className="mx-2 text-gray-400 d-none d-md-block">|</span>
                                                                <a href="/order-details" className="fs-12 fw-bold">View &rarr;</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xxl-6 col-xl-12 col-md-6">
                                                        <div className="border border-dashed border-gray-5 rounded">
                                                            <div className="p-4">
                                                                <div className="d-sm-flex align-items-center">
                                                                    <div className="wd-50 ht-50 p-2 bg-gray-200 rounded-2">
                                                                        <img src="assets/images/brand/figma.png" className="img-fluid" alt="" />
                                                                    </div>
                                                                    <div className="ms-0 mt-4 ms-sm-3 mt-sm-0">
                                                                        <a href="javascript:void(0);" className="d-block">Fried Rice Refuel Meal</a>
                                                                        <div className="fs-12 text-muted">Drumstix Wuse II</div>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex align-items-center justify-content-between">
                                                                    <div className="img-group lh-0 ms-3"></div>
                                                                    <div className="badge bg-soft-success text-success">Delivered</div>
                                                                </div>
                                                            </div>
                                                            <div className="px-4 py-3 border-top border-top-dashed border-gray-5 d-flex justify-content-between gap-2">
                                                                <div className="w-75 d-none d-md-block">
                                                                    <small className="fs-10 fw-medium text-uppercase text-muted d-flex align-items-center justify-content-between">
                                                                        <span>Progress</span>
                                                                        <span>100%</span>
                                                                    </small>
                                                                    <div className="progress mt-1 ht-3">
                                                                        <div className="progress-bar bg-success" role="progressbar" style={{ width: '100%' }}></div>
                                                                    </div>
                                                                </div>
                                                                <span className="mx-2 text-gray-400 d-none d-md-block">|</span>
                                                                <a href="javascript:void(0);" className="fs-12 fw-bold">View &rarr;</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Billing tab */}
                                        <div className="tab-pane fade" id="billingTab" role="tabpanel">
                                            <br />
                                            <div className="payment-methord px-4">
                                                <div className="mb-4 d-flex align-items-center justify-content-between">
                                                    <h5 className="fw-bold mb-0">Payment Methods:</h5>
                                                    
                                                </div>
                                                <div className="row">
                                                    <div className="col-xxl-6 col-xl-12 col-lg-6">
                                                        <div className="px-4 py-2 mb-4 d-sm-flex justify-content-between border border-dashed border-gray-3 rounded-1 position-relative">
                                                            <div className="d-sm-flex align-items-center">
                                                                <div className="wd-100">
                                                                    <img src="assets/images/payment/mastercard.svg" className="img-fluid" alt="" />
                                                                </div>
                                                                <div className="ms-0 ms-sm-3">
                                                                    <div className="text-dark fw-bold mb-2">Alexandra Della</div>
                                                                    <div className="mb-0 text-truncate-1-line">5155 **** **** ****</div>
                                                                    <small className="fs-10 fw-medium text-uppercase text-muted text-truncate-1-line">Card expires at 12/24</small>
                                                                </div>
                                                            </div>

                                                            <div className="position-absolute top-50 start-0 translate-middle">
                                                                <i className="feather-check fs-12 bg-primary text-white p-1 rounded-circle"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xxl-6 col-xl-12 col-lg-6">
                                                        <div className="px-4 py-2 mb-4 d-sm-flex justify-content-between border border-dashed border-gray-3 rounded-1">
                                                            <div className="d-sm-flex align-items-center">
                                                                <div className="wd-100">
                                                                    <img src="assets/images/payment/visa.svg" className="img-fluid" alt="" />
                                                                </div>
                                                                <div className="ms-0 ms-sm-3">
                                                                    <div className="text-dark fw-bold mb-2">Alexandra Della</div>
                                                                    <div className="mb-0 text-truncate-1-line">4236 **** **** ****</div>
                                                                    <small className="fs-10 fw-medium text-uppercase text-muted text-truncate-1-line">Card expires at 11/23</small>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="col-xxl-6 col-xl-12 col-lg-6">
                                                        <div className="px-4 py-2 mb-4 d-sm-flex justify-content-between border border-dashed border-gray-3 rounded-1">
                                                            <div className="d-sm-flex align-items-center">
                                                                <div className="wd-100">
                                                                    <img src="assets/images/payment/american-express.svg" className="img-fluid" alt="" />
                                                                </div>
                                                                <div className="ms-0 ms-sm-3">
                                                                    <div className="text-dark fw-bold mb-2">Alexandra Della</div>
                                                                    <div className="mb-0 text-truncate-1-line">3437 **** **** ****</div>
                                                                    <small className="fs-10 fw-medium text-uppercase text-muted text-truncate-1-line">Card expires at 11/24</small>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="col-xxl-6 col-xl-12 col-lg-6">
                                                        <div className="px-4 py-2 mb-4 d-sm-flex justify-content-between border border-dashed border-gray-3 rounded-1">
                                                            <div className="d-sm-flex align-items-center">
                                                                <div className="wd-100">
                                                                    <img src="assets/images/payment/discover.svg" className="img-fluid" alt="" />
                                                                </div>
                                                                <div className="ms-0 ms-sm-3">
                                                                    <div className="text-dark fw-bold mb-2">Alexandra Della</div>
                                                                    <div className="mb-0 text-truncate-1-line">6011 **** **** ****</div>
                                                                    <small className="fs-10 fw-medium text-uppercase text-muted text-truncate-1-line">Card expires at 11/25</small>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="mt-2" />
                                            <div className="payment-history">
                                                <div className="mb-4 px-4 d-flex align-items-center justify-content-between">
                                                    <h5 className="fw-bold mb-0">Billing History:</h5>
                                                    <a href="javascript:void(0);" className="btn btn-sm btn-light-brand">All History</a>
                                                </div>
                                                <div className="table-responsive">
                                                    <table className="table mb-0">
                                                        <thead>
                                                            <tr className="border-top">
                                                                <th>ID</th>
                                                                <th>Date</th>
                                                                <th>Amount</th>
                                                                <th>Status</th>
                                                                <th className="text-end">Actions</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td><a href="javascript:void(0);">#258963</a></td>
                                                                <td>02 NOV, 2022</td>
                                                                <td>$350</td>
                                                                <td><span className="badge bg-soft-success text-success">Completed</span></td>
                                                                <td className="hstack justify-content-end gap-4 text-end">
                                                                    <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Sent Mail">
                                                                        <i className="feather feather-send fs-12"></i>
                                                                    </a>
                                                                    <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Invoice Details">
                                                                        <i className="feather feather-eye fs-12"></i>
                                                                    </a>
                                                                    <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-trigger="hover" title="More Options">
                                                                        <i className="feather feather-more-vertical fs-12"></i>
                                                                    </a>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <td><a href="javascript:void(0);">#357951</a></td>
                                                                <td>03 JAN, 2023</td>
                                                                <td>$250</td>
                                                                <td><span className="badge bg-soft-success text-success">Completed</span></td>
                                                                <td className="hstack justify-content-end gap-4 text-end">
                                                                    <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Sent Mail">
                                                                        <i className="feather feather-send fs-12"></i>
                                                                    </a>
                                                                    <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Invoice Details">
                                                                        <i className="feather feather-eye fs-12"></i>
                                                                    </a>
                                                                    <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-trigger="hover" title="More Options">
                                                                        <i className="feather feather-more-vertical fs-12"></i>
                                                                    </a>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <td><a href="javascript:void(0);">#189745</a></td>
                                                                <td>05 JUN, 2023</td>
                                                                <td>$100</td>
                                                                <td><span className="badge bg-soft-danger text-danger">Cancelled</span></td>
                                                                <td className="hstack justify-content-end gap-4 text-end">
                                                                    <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Sent Mail">
                                                                        <i className="feather feather-send fs-12"></i>
                                                                    </a>
                                                                    <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Invoice Details">
                                                                        <i className="feather feather-eye fs-12"></i>
                                                                    </a>
                                                                    <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-trigger="hover" title="More Options">
                                                                        <i className="feather feather-more-vertical fs-12"></i>
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Activity tab */}
                                        <div className="tab-pane fade" id="activityTab" role="tabpanel">
                                            <div className="recent-activity p-4 pb-0">
                                                <div className="mb-4 pb-2 d-flex justify-content-between">
                                                    <h5 className="fw-bold">Recent Activity:</h5>
                                                    <a href="javascript:void(0);" className="btn btn-sm btn-light-brand">View All</a>
                                                </div>
                                                <ul className="list-unstyled activity-feed">
                                                    <li className="d-flex justify-content-between feed-item feed-item-success">
                                                        <div>
                                                            <span className="text-truncate-1-line lead_date">Reynante placed new order <span className="date">[April 19, 2023]</span></span>
                                                            <span className="text">New order placed <a href="javascript:void(0);" className="fw-bold text-primary">#456987</a></span>
                                                        </div>
                                                    </li>
                                                    <li className="d-flex justify-content-between feed-item feed-item-warning">
                                                        <div>
                                                            <span className="text-truncate-1-line lead_date">Reynante made a deposit $565 NGN <span className="date">[April 22, 2023]</span></span>
                                                            <span className="text">Made deposit <a href="javascript:void(0);" className="fw-bold text-primary">$565 NGN</a></span>
                                                        </div>
                                                    </li>
                                                    <li className="d-flex justify-content-between feed-item feed-item-primary">
                                                        <div>
                                                            <span className="text-truncate-1-line lead_date">New event coming soon <span className="date">[April 23, 2023]</span></span>
                                                            <span className="text">Attending the event <a href="javascript:void(0);" className="fw-bold text-primary">"Duralux Event"</a></span>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <a href="javascript:void(0);" className="d-flex align-items-center text-muted">
                                                    <i className="feather feather-more-horizontal fs-12"></i>
                                                    <span className="fs-10 text-uppercase ms-2 text-truncate-1-line">Load More</span>
                                                </a>
                                            </div>

                                            <hr />

                                            <div className="logs-history mb-0">
                                                <div className="px-4 mb-4 d-flex justify-content-between">
                                                    <h5 className="fw-bold">Logs History</h5>
                                                    <a href="javascript:void(0);" className="btn btn-sm btn-light-brand">View All</a>
                                                </div>
                                                <div className="table-responsive">
                                                    <table className="table">
                                                        <thead className="text-dark text-center border-top">
                                                            <tr>
                                                                <th className="text-start ps-4">Browser</th>
                                                                <th>IP</th>
                                                                <th>Time</th>
                                                                <th>Signed In</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="text-center">
                                                            <tr>
                                                                <td className="fw-medium text-dark text-start ps-4">Chrome on Windows</td>
                                                                <td><span className="text-muted">192.149.122.128</span></td>
                                                                <td><span className="text-muted"><span className="d-none d-sm-inline-block">11:34 PM</span></span></td>
                                                                <td><i className="feather feather-check-circle text-success"></i></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="fw-medium text-dark text-start ps-4">Mozilla on Windows</td>
                                                                <td><span className="text-muted">186.188.154.225</span></td>
                                                                <td><span className="text-muted">Oct 13, 2023 <span className="d-none d-sm-inline-block">05:43 AM</span></span></td>
                                                                <td><a href="javascript:void(0);"><i className="feather feather-x text-danger"></i></a></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="fw-medium text-dark text-start ps-4">Chrome on iMac</td>
                                                                <td><span className="text-muted">192.149.122.128</span></td>
                                                                <td><span className="text-muted">Oct 03, 2023 <span className="d-none d-sm-inline-block">04:12 AM</span></span></td>
                                                                <td><a href="javascript:void(0);"><i className="feather feather-x text-danger"></i></a></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Security tab */}
                                        <div className="tab-pane fade p-4" id="securityTab" role="tabpanel">
                                            <div className="p-4 mb-4 border border-dashed border-gray-3 rounded-1">
                                                <h6 className="fw-bolder"><a href="javascript:void(0);">Two-factor Authentication</a></h6>
                                                <div className="fs-12 text-muted text-truncate-3-line mt-2 mb-4">
                                                    This user has 2FA enabled. Two-factor authentication is an enhanced security measure. Once enabled, you'll be required to give two types of identification when you log into Google Authentication and SMS are Supported.
                                                </div>
                                                <div className="form-check form-switch form-switch-sm">
                                                    <label className="form-check-label fw-500 text-dark c-pointer" htmlFor="2faVerification">Enable 2FA Verification</label>
                                                    <input className="form-check-input c-pointer" type="checkbox" id="2faVerification" defaultChecked />
                                                </div>
                                            </div>

                                            <div className="p-4 mb-4 border border-dashed border-gray-3 rounded-1">
                                                <h6 className="fw-bolder"><a href="javascript:void(0);">Secondary Verification</a></h6>
                                                <div className="fs-12 text-muted text-truncate-3-line mt-2 mb-4">
                                                    This user has secondary verification enabled. The first factor is a password and the second commonly includes a text with a code sent to your smartphone, or biometrics using your fingerprint, face, or retina.
                                                </div>
                                                <div className="form-check form-switch form-switch-sm">
                                                    <label className="form-check-label fw-500 text-dark c-pointer" htmlFor="secondaryVerification">Set up secondary method</label>
                                                    <input className="form-check-input c-pointer" type="checkbox" id="secondaryVerification" defaultChecked />
                                                </div>
                                            </div>

                                            <div className="p-4 mb-4 border border-dashed border-gray-3 rounded-1">
                                                <h6 className="fw-bolder"><a href="javascript:void(0);">Backup Codes</a></h6>
                                                <div className="fs-12 text-muted text-truncate-3-line mt-4 mb-4">
                                                    This user has downloaded their backup codes. A backup code is automatically generated for you when you turn on two-factor authentication through your iOS or Android Twitter app. You can also generate a backup code on twitter.com.
                                                </div>
                                                <div className="form-check form-switch form-switch-sm">
                                                    <label className="form-check-label fw-500 text-dark c-pointer" htmlFor="generateBackup">Generate backup codes</label>
                                                    <input className="form-check-input c-pointer" type="checkbox" id="generateBackup" />
                                                </div>
                                            </div>

                                            <div className="p-4 border border-dashed border-gray-3 rounded-1">
                                                <h6 className="fw-bolder"><a href="javascript:void(0);">Login Verification</a></h6>
                                                <div className="fs-12 text-muted text-truncate-3-line mt-2 mb-4">
                                                    This user has set up login verification. Login verification is an enhanced security measure. Once enabled, you'll be required to give two types of identification when you log into Google Authentication and SMS are Supported.
                                                </div>
                                                <div className="form-check form-switch form-switch-sm">
                                                    <label className="form-check-label fw-500 text-dark c-pointer" htmlFor="loginVerification">Enable Login Verification</label>
                                                    <input className="form-check-input c-pointer" type="checkbox" id="loginVerification" defaultChecked />
                                                </div>
                                            </div>

                                            <div className="card mt-5">
                                                <div className="card-body">
                                                    <h6 className="fw-bold">Ban Account</h6>
                                                    <p className="fs-11 text-muted">
                                                        As a super admin, you can ban/suspend an account. Scroll to "Your data & privacy options." Delete your Profile Account. Follow the instructions to ban the user's account:
                                                    </p>
                                                    <div className="my-4 py-2">
                                                        <input type="password" className="form-control" placeholder="Enter the customer's email" />
                                                        <div className="mt-3">
                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" id="acDeleteDeactive" />
                                                                <label className="custom-control-label c-pointer" htmlFor="acDeleteDeactive">I confirm the account ban or suspension.</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-sm-flex gap-2">
                                                        <a href="javascript:void(0);" className="btn btn-danger" data-action-target="#acSecctingsActionMessage">Ban Account</a>
                                                        <a href="javascript:void(0);" className="btn btn-warning mt-2 mt-sm-0 successAlertMessage">Suspend Account</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>



                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default CustomerDetails