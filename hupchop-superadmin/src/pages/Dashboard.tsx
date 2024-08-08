/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { ProgressBar, Tooltip, Dropdown, Button } from 'react-bootstrap';
import { FaTrashAlt, FaSyncAlt, FaExpandArrowsAlt, FaEllipsisV, FaAt, FaCalendar, FaBell, FaTrash, FaCog, FaLifeRing } from 'react-icons/fa';
import { Feather } from 'react-feather';
import Sidebar from './Sidebar'
import Header from './Header'
import Customers from './Customers';

function Dashboard() {
  
  return (
    <div>
      {/* Start Sidebar */}
      <div>
        <Sidebar />
      </div>

      {/* Start Header */}
      <div>
        <Header />
      </div>

      <main className="nxl-container">
        <div className="nxl-content">
          {/* Breadcrumbs start */}
          <div className="page-header">
            <div className="page-header-left d-flex align-items-center">
              <div className="page-header-title">
                <h5 className="m-b-10">Overview</h5>
              </div>

            </div>
            <div className="page-header-right ms-auto">
              <div className="page-header-right-items">
                <div className="d-flex d-md-none">
                  <a href="javascript:void(0)" className="page-header-right-close-toggle">
                    <i className="feather-arrow-left me-2"></i>
                    <span>Back</span>
                  </a>
                </div>

              </div>
              <div className="d-md-none d-flex align-items-center">
                <a href="javascript:void(0)" className="page-header-right-open-toggle">
                  <i className="feather-align-right fs-20"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Main content start */}
          <div className="main-content">
            <div className="row">
              {/* Mini cards start */}
              {/* Commissions card starts */}
              <div className="col-xxl-3 col-md-6">
                <div className="card stretch stretch-full">
                  <div className="card-body">
                    <div className="hstack justify-content-between">
                      <div>
                        <div className="hstack gap-2 mb-4">
                          <i className="feather-dollar-sign"></i>
                          <span>Total Revenue</span>
                        </div>
                        <h4 className="fw-bolder mb-3">₦<span className="counter">5,658</span> NGN</h4>
                        <p className="fs-12 text-muted mb-0">Total earnings from <span
                          className="fw-semibold text-dark">income sources</span></p>
                      </div>
                      <a href="javascript:void(0);" className="badge bg-soft-success text-success">+
                        23.65%</a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Commissions card ends */}

              {/* Revenue card starts */}
              <div className="col-xxl-3 col-md-6">
                <div className="card stretch stretch-full">
                  <div className="card-body">
                    <div className="hstack justify-content-between">
                      <div>
                        <div className="hstack gap-2 mb-4">
                          <i className="feather-pie-chart"></i>
                          <span>Total Commissions</span>
                        </div>
                        <h4 className="fw-bolder mb-3">₦<span className="counter">89,657</span> NGN</h4>
                        <p className="fs-12 text-muted mb-0">Your fees earned from <span
                          className="fw-semibold text-dark">transactions</span></p>
                      </div>
                      <a href="javascript:void(0);" className="badge bg-soft-danger text-danger">- 06.32%</a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Revenue card ends */}

              {/* Total customers' card starts */}
              <div className="col-xxl-3 col-md-6">
                <div className="card stretch stretch-full">
                  <div className="card-body">
                    <div className="hstack justify-content-between">
                      <div>
                        <div className="hstack gap-2 mb-4">
                          <i className="feather-users"></i>
                          <span>Total Customers</span>
                        </div>
                        <h4 className="fw-bolder mb-3">140 <span className="counter">Customers</span> </h4>
                        <p className="fs-12 text-muted mb-0">Number of active Hupchop <span
                          className="fw-semibold text-dark">customers</span></p>
                      </div>
                      <a href="javascript:void(0);" className="badge bg-soft-success text-success">+
                        30.47%</a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Total customers' card ends */}

              {/* Total vendors' card starts */}
              <div className="col-xxl-3 col-md-6">
                <div className="card stretch stretch-full">
                  <div className="card-body">
                    <div className="hstack justify-content-between">
                      <div>
                        <div className="hstack gap-2 mb-4">
                          <i className="feather-home"></i>
                          <span>Total Vendors</span>
                        </div>
                        <h4 className="fw-bolder mb-3">30 <span className="counter">Vendors</span></h4>
                        <p className="fs-12 text-muted mb-0">Number of active Hupchop <span
                          className="fw-semibold text-dark">vendors</span></p>
                      </div>
                      <a href="javascript:void(0);" className="badge bg-soft-danger text-danger">- 08.55%</a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Total vendors' card ends */}

              {/* Analytics chart begins */}
              <div className="col-xxl-8">
                <div className="card stretch stretch-full">
                  <div className="card-header">
                    <h5 className="card-title">Analytics</h5>
                    <div className="card-header-action">
                      <div className="d-flex align-items-center gap-2 page-header-right-items-wrapper">
                        <div id="reportrange" className="reportrange-picker d-flex align-items-center">
                          <span className="reportrange-picker-field">Jul 8, 24 - Aug 6, 24</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body custom-card-action p-0">
                    <div id="payment-records-chart">
                      {/* Chart Component */}
                    </div>

                  </div>
                </div>

              </div>
              {/* Analytics chart ends */}

              {/* Transactions and order lists start */}
              <div className="col-xxl-6 col-lg-6">
                <div className="card stretch stretch-full">
                  <div className="card-header">
                    <h5 className="card-title">Recent Transactions</h5>
                    <div className="card-header-action">

                      <div>
                        <a href="#" data-bs-offset="25, 25">
                          <div data-bs-toggle="tooltip" title="Options">
                            <small>View all</small><i style={{ fontSize: '12px' }} className="feather-arrow-right"></i>
                          </div>
                        </a>

                      </div>
                    </div>
                  </div>
                  <div className="card-body custom-card-action">
                    <div className="d-md-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <div className="avatar-text avatar-lg bg-soft-danger text-danger border-soft-danger rounded me-3">
                          <i className="feather-arrow-left"></i>
                        </div>
                        <div>
                          <a href="#">TR#005 from CHIMIEZE Kalu</a>
                          <p className="fs-12 text-muted mb-0">Aug 6, 1:32:23PM</p>
                        </div>
                      </div>
                      <div className="mt-2 mt-md-0 text-md-end mg-l-60 ms-md-0">
                        <a href="#" className="fw-bold d-block">₦99,685</a>
                        <span className="fs-12 text-danger">Failed</span>
                      </div>
                    </div>
                    <hr className="border-dashed my-3" />
                    <div className="d-md-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <div className="avatar-text avatar-lg bg-soft-success text-success border-soft-success rounded me-3">
                          <i className="feather-arrow-right"></i>
                        </div>
                        <div>
                          <a href="#">TR#004 from Randy Steve Mike</a>
                          <p className="fs-12 text-muted mb-0">Aug 6, 10:32:56AM</p>
                        </div>
                      </div>
                      <div className="mt-2 mt-md-0 text-md-end mg-l-60 ms-md-0">
                        <a href="#" className="fw-bold d-block">₦95,685</a>
                        <span className="fs-12 text-success">Successful</span>
                      </div>
                    </div>
                    <hr className="border-dashed my-3" />
                    <div className="d-md-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <div className="avatar-text avatar-lg bg-soft-danger text-danger border-soft-danger rounded me-3">
                          <i className="feather-arrow-left"></i>
                        </div>
                        <div>
                          <a href="#">TR#003 from Mujong Jimmy</a>
                          <p className="fs-12 text-muted mb-0">Aug 4, 12:23:25PM</p>
                        </div>
                      </div>
                      <div className="mt-2 mt-md-0 text-md-end mg-l-60 ms-md-0">
                        <a href="#" className="fw-bold d-block">₦90,759</a>
                        <span className="fs-12 text-danger">Reversed</span>
                      </div>
                    </div>
                    <hr className="border-dashed my-3" />
                    <div className="d-md-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <div className="avatar-text avatar-lg bg-soft-success text-success border-soft-success rounded me-3">
                          <i className="feather-arrow-right"></i>
                        </div>
                        <div>
                          <a href="#">TR#002 from Mujong Timmy</a>
                          <p className="fs-12 text-muted mb-0">Jul 31, 17:55:32PM</p>
                        </div>
                      </div>
                      <div className="mt-2 mt-md-0 text-md-end mg-l-60 ms-md-0">
                        <a href="#" className="fw-bold d-block">₦92,966</a>
                        <span className="fs-12 text-success">Successful</span>
                      </div>
                    </div>
                    <hr className="border-dashed my-3" />
                    <div className="d-md-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <div className="avatar-text avatar-lg bg-soft-success text-success border-soft-success rounded me-3">
                          <i className="feather-arrow-right"></i>
                        </div>
                        <div>
                          <a href="#">TR#001 from EMEKA Grace</a>
                          <p className="fs-12 text-muted mb-0">Jul 30, 16:32:24PM</p>
                        </div>
                      </div>
                      <div className="mt-2 mt-md-0 text-md-end mg-l-60 ms-md-0">
                        <a href="#" className="fw-bold d-block">₦75,478</a>
                        <span className="fs-12 text-success">Successful</span>
                      </div>
                    </div>
                  </div>
                  <a href="#" className="card-footer fs-11 fw-bold text-uppercase text-center">Refresh</a>
                </div>
              </div>

              <div className="col-xxl-6 col-lg-6">
                <div className="card stretch stretch-full">
                  <div className="card-header">
                    <h5 className="card-title">Recent Orders</h5>
                    <div className="card-header-action">

                      <div>
                        <a href="#" data-bs-offset="25, 25">
                          <div data-bs-toggle="tooltip" title="Options">
                            <small>View all</small><i style={{ fontSize: '12px' }} className="feather-arrow-right"></i>
                          </div>
                        </a>

                      </div>
                    </div>
                  </div>
                  <div className="card-body custom-card-action pb-3">
                    <ul className="list-unstyled activity-feed mb-0">
                      <li className="d-flex justify-content-between feed-item feed-item-success">
                        <div>
                          <span className="text-truncate-1-line lead_date">
                            Reynante placed new order <span className="date">[April 19, 2023]</span>
                          </span>
                          <span className="text">
                            New order placed <a href="javascript:void(0);" className="fw-bold text-primary">#456987</a>
                          </span>
                        </div>
                        <div className="ms-3 d-flex gap-2 align-items-center">

                          <div className="hstack gap-2 justify-content-end">
                            <a href="#" className="avatar-text avatar-md">
                              <i className="feather feather-eye"></i>
                            </a>
                            <div className="dropdown">
                              <a href="javascript:void(0)" className="avatar-text avatar-md" data-bs-toggle="dropdown" data-bs-offset="0,21">
                                <i className="feather feather-download-cloud"></i>
                              </a>
                              <ul className="dropdown-menu">
                                <li>
                                  <a className="dropdown-item" href="javascript:void(0)">
                                    <i className="bi bi-filetype-csv me-3"></i>
                                    <span>Download as CSV</span>
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item printBTN" href="javascript:void(0)">
                                    <i className="bi bi-filetype-pdf me-3"></i>
                                    <span>Download as PDF</span>
                                  </a>
                                </li>

                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li className="d-flex justify-content-between feed-item feed-item-success">
                        <div>
                          <span className="text-truncate-1-line lead_date">
                            Reynante placed new order <span className="date">[April 19, 2023]</span>
                          </span>
                          <span className="text">
                            New order placed <a href="javascript:void(0);" className="fw-bold text-primary">#456987</a>
                          </span>
                        </div>
                        <div className="ms-3 d-flex gap-2 align-items-center">

                          <div className="hstack gap-2 justify-content-end">
                            <a href="#" className="avatar-text avatar-md">
                              <i className="feather feather-eye"></i>
                            </a>
                            <div className="dropdown">
                              <a href="javascript:void(0)" className="avatar-text avatar-md" data-bs-toggle="dropdown" data-bs-offset="0,21">
                                <i className="feather feather-download-cloud"></i>
                              </a>
                              <ul className="dropdown-menu">
                                <li>
                                  <a className="dropdown-item" href="javascript:void(0)">
                                    <i className="bi bi-filetype-csv me-3"></i>
                                    <span>Download as CSV</span>
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item printBTN" href="javascript:void(0)">
                                    <i className="bi bi-filetype-pdf me-3"></i>
                                    <span>Download as PDF</span>
                                  </a>
                                </li>

                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li className="d-flex justify-content-between feed-item feed-item-success">
                        <div>
                          <span className="text-truncate-1-line lead_date">
                            Reynante placed new order <span className="date">[April 19, 2023]</span>
                          </span>
                          <span className="text">
                            New order placed <a href="javascript:void(0);" className="fw-bold text-primary">#456987</a>
                          </span>
                        </div>
                        <div className="ms-3 d-flex gap-2 align-items-center">

                          <div className="hstack gap-2 justify-content-end">
                            <a href="#" className="avatar-text avatar-md">
                              <i className="feather feather-eye"></i>
                            </a>
                            <div className="dropdown">
                              <a href="javascript:void(0)" className="avatar-text avatar-md" data-bs-toggle="dropdown" data-bs-offset="0,21">
                                <i className="feather feather-download-cloud"></i>
                              </a>
                              <ul className="dropdown-menu">
                                <li>
                                  <a className="dropdown-item" href="javascript:void(0)">
                                    <i className="bi bi-filetype-csv me-3"></i>
                                    <span>Download as CSV</span>
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item printBTN" href="javascript:void(0)">
                                    <i className="bi bi-filetype-pdf me-3"></i>
                                    <span>Download as PDF</span>
                                  </a>
                                </li>

                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li className="d-flex justify-content-between feed-item feed-item-success">
                        <div>
                          <span className="text-truncate-1-line lead_date">
                            Reynante placed new order <span className="date">[April 19, 2023]</span>
                          </span>
                          <span className="text">
                            New order placed <a href="javascript:void(0);" className="fw-bold text-primary">#456987</a>
                          </span>
                        </div>
                        <div className="ms-3 d-flex gap-2 align-items-center">

                          <div className="hstack gap-2 justify-content-end">
                            <a href="#" className="avatar-text avatar-md">
                              <i className="feather feather-eye"></i>
                            </a>
                            <div className="dropdown">
                              <a href="javascript:void(0)" className="avatar-text avatar-md" data-bs-toggle="dropdown" data-bs-offset="0,21">
                                <i className="feather feather-download-cloud"></i>
                              </a>
                              <ul className="dropdown-menu">
                                <li>
                                  <a className="dropdown-item" href="javascript:void(0)">
                                    <i className="bi bi-filetype-csv me-3"></i>
                                    <span>Download as CSV</span>
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item printBTN" href="javascript:void(0)">
                                    <i className="bi bi-filetype-pdf me-3"></i>
                                    <span>Download as PDF</span>
                                  </a>
                                </li>

                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li className="d-flex justify-content-between feed-item feed-item-success">
                        <div>
                          <span className="text-truncate-1-line lead_date">
                            Reynante placed new order <span className="date">[April 19, 2023]</span>
                          </span>
                          <span className="text">
                            New order placed <a href="javascript:void(0);" className="fw-bold text-primary">#456987</a>
                          </span>
                        </div>
                        <div className="ms-3 d-flex gap-2 align-items-center">

                          <div className="hstack gap-2 justify-content-end">
                            <a href="#" className="avatar-text avatar-md">
                              <i className="feather feather-eye"></i>
                            </a>
                            <div className="dropdown">
                              <a href="javascript:void(0)" className="avatar-text avatar-md" data-bs-toggle="dropdown" data-bs-offset="0,21">
                                <i className="feather feather-download-cloud"></i>
                              </a>
                              <ul className="dropdown-menu">
                                <li>
                                  <a className="dropdown-item" href="javascript:void(0)">
                                    <i className="bi bi-filetype-csv me-3"></i>
                                    <span>Download as CSV</span>
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item printBTN" href="javascript:void(0)">
                                    <i className="bi bi-filetype-pdf me-3"></i>
                                    <span>Download as PDF</span>
                                  </a>
                                </li>

                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li className="d-flex justify-content-between feed-item feed-item-success">
                        <div>
                          <span className="text-truncate-1-line lead_date">
                            Reynante placed new order <span className="date">[April 19, 2023]</span>
                          </span>
                          <span className="text">
                            New order placed <a href="javascript:void(0);" className="fw-bold text-primary">#456987</a>
                          </span>
                        </div>
                        <div className="ms-3 d-flex gap-2 align-items-center">

                          <div className="hstack gap-2 justify-content-end">
                            <a href="#" className="avatar-text avatar-md">
                              <i className="feather feather-eye"></i>
                            </a>
                            <div className="dropdown">
                              <a href="javascript:void(0)" className="avatar-text avatar-md" data-bs-toggle="dropdown" data-bs-offset="0,21">
                                <i className="feather feather-download-cloud"></i>
                              </a>
                              <ul className="dropdown-menu">
                                <li>
                                  <a className="dropdown-item" href="javascript:void(0)">
                                    <i className="bi bi-filetype-csv me-3"></i>
                                    <span>Download as CSV</span>
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item printBTN" href="javascript:void(0)">
                                    <i className="bi bi-filetype-pdf me-3"></i>
                                    <span>Download as PDF</span>
                                  </a>
                                </li>

                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <a href="#" className="card-footer fs-11 fw-bold text-uppercase text-center">Refresh</a>
                </div>
              </div>
              {/* Transactions and order lists ends */}
            </div>
          </div>
        </div>
      </main>
      {/* Dashboard row ends */}

    </div>
  )
}

export default Dashboard