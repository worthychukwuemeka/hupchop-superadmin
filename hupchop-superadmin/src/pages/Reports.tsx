import React, { useEffect } from 'react';
import 'jquery-circle-progress';
import Sidebar from './Sidebar'
import Header from './Header'
import { useState } from 'react';
import { FaSortUp, FaSortDown } from 'react-icons/fa';



const Reports: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <div>
      <Sidebar />

      <Header />

      <main className="nxl-container">
        <div className="nxl-content">
          {/* Breadcrumbs start */}
          <div className="page-header">
            <div className="page-header-left d-flex align-items-center">
              <div className="page-header-title">
                <h5 className="m-b-10">Reports</h5>
              </div>
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                <li className="breadcrumb-item">Reports</li>
              </ul>
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

          <div className="main-content">
            <div className="row">

              {/* [Mini Card] start */}
              <div className="row">
                <div className="col-xxl-3 col-md-6">
                  <div className="card card-body">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="me-3">
                        <h5 className="fs-4">$84,059</h5>
                        <span className="text-muted">Sales</span>
                      </div>
                      <div className="avatar-text avatar-lg bg-primary text-white rounded">
                        <i className="feather-shopping-cart"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-md-6">
                  <div className="card card-body">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="me-3">
                        <h5 className="fs-4">$23,485</h5>
                        <span className="text-muted">Earnings</span>
                      </div>
                      <div className="avatar-text avatar-lg bg-success text-white rounded">
                        <i className="feather-dollar-sign"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-md-6">
                  <div className="card card-body">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="me-3">
                        <h5 className="fs-4">2,364</h5>
                        <span className="text-muted">Total Sales</span>
                      </div>
                      <div className="avatar-text avatar-lg bg-warning text-white rounded">
                        <i className="feather-tag"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-md-6">
                  <div className="card card-body">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="me-3">
                        <h5 className="fs-4">$96,485</h5>
                        <span className="text-muted">Revenue</span>
                      </div>
                      <div className="avatar-text avatar-lg bg-teal text-white rounded">
                        <i className="feather-bar-chart-2"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* [Mini Card] end */}
              <hr className="border-top-dashed mt-4 mb-5 mx-3" />

              {/* [Regions in Abuja] start */}
              <div className="col-xxl-4">
                <div className="card stretch stretch-full">
                  <div className="card-header">
                    <h5 className="card-title">Traffic by Region</h5>

                    <div className="d-flex align-items-center gap-2 page-header-right-items-wrapper">
                      <a href="javascript:void(0);" className="btn btn-icon btn-light-brand" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                        <i className="feather-bar-chart"></i>
                      </a>
                      <div className="dropdown">
                        <a className="btn btn-icon btn-light-brand" data-bs-toggle="dropdown" data-bs-offset="0, 10" data-bs-auto-close="outside">
                          <i className="feather-filter"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a href="javascript:void(0);" className="dropdown-item">

                            <span>Sort by Country</span>
                          </a>
                          <a href="javascript:void(0);" className="dropdown-item">

                            <span>Sort by State</span>
                          </a>
                          <a href="javascript:void(0);" className="dropdown-item">

                            <span>Sort by City</span>
                          </a>
                          <a href="javascript:void(0);" className="dropdown-item">

                            <span>Sort by Town</span>
                          </a>
                          <a href="javascript:void(0);" className="dropdown-item">

                            <span>Sort by Region</span>
                          </a>

                          <div className="dropdown-divider"></div>

                          <a href="javascript:void(0);" className="dropdown-item">
                            <i className="feather feather-printer me-3"></i>
                            <span>Print Table</span>
                          </a>
                        </div>
                      </div>
                      <a href="javascript:void(0);" className="btn btn-icon btn-light-brand">
                        <i className="feather-refresh-cw"></i>
                      </a>



                      {/* Search box */}
                      <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="card-body custom-card-action p-0">
                    <div className="table-responsive mb-3">
                      <table className="table table-hover mb-0">
                        <thead className="thead-light">
                          <tr>
                            <td>
                              Region
                            </td>
                            <td>
                              Traffic Rate
                            </td>
                            <td>
                              Active Users
                            </td>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <td>
                              <div className="hstack gap-3">
                                <div className="wd-30">
                                  <img
                                    src="assets/vendors/img/flags/4x3/ng.svg"
                                    alt=""
                                    className="img-fluid rounded"
                                  />
                                </div>
                                <div>
                                  <a href="javascript:void(0);" className="d-block">
                                    Maitama
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="text-success">
                              <i className="feather-chevron-up fs-12 me-1"></i>76.57%
                            </td>
                            <td className="fw-bold">500k</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="hstack gap-3">
                                <div className="wd-30">
                                  <img
                                    src="assets/vendors/img/flags/4x3/ng.svg"
                                    alt=""
                                    className="img-fluid rounded"
                                  />
                                </div>
                                <div>
                                  <a href="javascript:void(0);" className="d-block">
                                    Wuse
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="text-danger">
                              <i className="feather-chevron-down fs-12 me-1"></i>35.00%
                            </td>
                            <td className="fw-bold">400k</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="hstack gap-3">
                                <div className="wd-30">
                                  <img
                                    src="assets/vendors/img/flags/4x3/ng.svg"
                                    alt=""
                                    className="img-fluid rounded"
                                  />
                                </div>
                                <div>
                                  <a href="javascript:void(0);" className="d-block">
                                    Garki
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="text-success">
                              <i className="feather-chevron-up fs-12 me-1"></i>76.57%
                            </td>
                            <td className="fw-bold">350k</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="hstack gap-3">
                                <div className="wd-30">
                                  <img
                                    src="assets/vendors/img/flags/4x3/ng.svg"
                                    alt=""
                                    className="img-fluid rounded"
                                  />
                                </div>
                                <div>
                                  <a href="javascript:void(0);" className="d-block">
                                    Asokoro
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="text-danger">
                              <i className="feather-chevron-down fs-12 me-1"></i>35.00%
                            </td>
                            <td className="fw-bold">300k</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="hstack gap-3">
                                <div className="wd-30">
                                  <img
                                    src="assets/vendors/img/flags/4x3/ng.svg"
                                    alt=""
                                    className="img-fluid rounded"
                                  />
                                </div>
                                <div>
                                  <a href="javascript:void(0);" className="d-block">
                                    Gwarinpa
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="text-success">
                              <i className="feather-chevron-up fs-12 me-1"></i>76.57%
                            </td>
                            <td className="fw-bold">250k</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="hstack gap-3">
                                <div className="wd-30">
                                  <img
                                    src="assets/vendors/img/flags/4x3/ng.svg"
                                    alt=""
                                    className="img-fluid rounded"
                                  />
                                </div>
                                <div>
                                  <a href="javascript:void(0);" className="d-block">
                                    Lugbe
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="text-danger">
                              <i className="feather-chevron-down fs-12 me-1"></i>35.00%
                            </td>
                            <td className="fw-bold">200k</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="card-footer">
                    <a href="#"><p style={{ textTransform: 'uppercase', textAlign: 'center' }}>Load More</p></a>
                  </div>
                </div>
              </div>
              {/* [Regions in Abuja] end */}

              { /* Traffic reports start */}
              <hr className="border-top-dashed mt-4 mb-5 mx-3" />
              <div className="col-lg-12">
                <div className="card stretch stretch-full">
                  <div className="card-header">
                    <h5 className="card-title">Traffic Reports</h5>
                    <div className="d-flex align-items-center gap-2 page-header-right-items-wrapper">
                      <a href="javascript:void(0);" className="btn btn-icon btn-light-brand" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                        <i className="feather-bar-chart"></i>
                      </a>
                      <div className="dropdown">
                        <a className="btn btn-icon btn-light-brand" data-bs-toggle="dropdown" data-bs-offset="0, 10" data-bs-auto-close="outside">
                          <i className="feather-filter"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a href="javascript:void(0);" className="dropdown-item">

                            <span>Sort by Country</span>
                          </a>
                          <a href="javascript:void(0);" className="dropdown-item">

                            <span>Sort by State</span>
                          </a>
                          <a href="javascript:void(0);" className="dropdown-item">

                            <span>Sort by City</span>
                          </a>
                          <a href="javascript:void(0);" className="dropdown-item">

                            <span>Sort by Town</span>
                          </a>
                          <a href="javascript:void(0);" className="dropdown-item">

                            <span>Sort by Region</span>
                          </a>

                          <div className="dropdown-divider"></div>

                          <a href="javascript:void(0);" className="dropdown-item">
                            <i className="feather feather-printer me-3"></i>
                            <span>Print Table</span>
                          </a>
                        </div>
                      </div>
                      <a href="javascript:void(0);" className="btn btn-icon btn-light-brand">
                        <i className="feather-refresh-cw"></i>
                      </a>



                      {/* Search box */}
                      <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="card-body custom-card-action p-0">
                    <div className="table-responsive">
                      <table className="table table-hover mb-0">
                        <thead className="thead-light">
                          <tr>
                            <th>Source</th>
                            <th>Sessions</th>
                            <th>Changes</th>
                            <th>Pages/Session</th>
                            <th>Avg. Session</th>
                            <th>Conversion Rate</th>
                            <th className='text-end'>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <a href="javascript:void(0);">
                                <span className="wd-10 ht-10 bg-warning me-2 d-inline-block rounded-circle"></span>
                                <span>Organic</span>
                              </a>
                            </td>
                            <td>
                              8965 <small className="text-muted">(47.79%)</small>
                            </td>
                            <td>69.74%</td>
                            <td>2.76</td>
                            <td>00:05:37</td>
                            <td>2.00%</td>
                            <td className="text-end">
                              <a href="javascript:void(0);">
                                <i className="feather-eye me-2"></i>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="javascript:void(0);">
                                <span className="wd-10 ht-10 bg-primary me-2 d-inline-block rounded-circle"></span>
                                <span>Referral</span>
                              </a>
                            </td>
                            <td>
                              3698 <small className="text-muted">(14.79%)</small>
                            </td>
                            <td>61.80%</td>
                            <td>6.76</td>
                            <td>00:06:37</td>
                            <td>3.48%</td>
                            <td className="text-end">
                              <a href="javascript:void(0);">
                                <i className="feather-eye me-2"></i>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="javascript:void(0);">
                                <span className="wd-10 ht-10 bg-success me-2 d-inline-block rounded-circle"></span>
                                <span>Direct</span>
                              </a>
                            </td>
                            <td>
                              6542 <small className="text-muted">(68.79%)</small>
                            </td>
                            <td>47.47%</td>
                            <td>2.58</td>
                            <td>00:04:58</td>
                            <td>6.57%</td>
                            <td className="text-end">
                              <a href="javascript:void(0);">
                                <i className="feather-eye me-2"></i>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="javascript:void(0);">
                                <span className="wd-10 ht-10 bg-danger me-2 d-inline-block rounded-circle"></span>
                                <span>Affiliate</span>
                              </a>
                            </td>
                            <td>
                              5896 <small className="text-muted">(65.54%)</small>
                            </td>
                            <td>46.47%</td>
                            <td>3.48</td>
                            <td>00:04:37</td>
                            <td>6.00%</td>
                            <td className="text-end">
                              <a href="javascript:void(0);">
                                <i className="feather-eye me-2"></i>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="javascript:void(0);">
                                <span className="wd-10 ht-10 bg-info me-2 d-inline-block rounded-circle"></span>
                                <span>Email</span>
                              </a>
                            </td>
                            <td>
                              1597 <small className="text-muted">(14.41%)</small>
                            </td>
                            <td>45.80%</td>
                            <td>5.76</td>
                            <td>00:04:47</td>
                            <td>6.47%</td>
                            <td className="text-end">
                              <a href="javascript:void(0);">
                                <i className="feather-eye me-2"></i>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="javascript:void(0);">
                                <span className="wd-10 ht-10 bg-dark me-2 d-inline-block rounded-circle"></span>
                                <span>Other</span>
                              </a>
                            </td>
                            <td>
                              1597 <small className="text-muted">(14.41%)</small>
                            </td>
                            <td>45.80%</td>
                            <td>5.76</td>
                            <td>00:04:47</td>
                            <td>6.47%</td>
                            <td className="text-end">
                              <a href="javascript:void(0);">
                                <i className="feather-eye me-2"></i>
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              {/* Traffic report ends */}

              {/* Store ratings and reviews */}
              <hr className="border-top-dashed mt-4 mb-5 mx-3" />
              <div className="col-lg-12">
                <div className="card stretch stretch-full">
                  <div className="card-header">
                    <h5 className="card-title">Stores Overview</h5>
                    <div className="card-header-action">
                      <div className="card-header-btn">
                        <div data-bs-toggle="tooltip" title="Delete">
                          <a href="javascript:void(0);" className="avatar-text avatar-xs bg-danger" data-bs-toggle="remove"></a>
                        </div>
                        <div data-bs-toggle="tooltip" title="Refresh">
                          <a href="javascript:void(0);" className="avatar-text avatar-xs bg-warning" data-bs-toggle="refresh"></a>
                        </div>
                        <div data-bs-toggle="tooltip" title="Maximize/Minimize">
                          <a href="javascript:void(0);" className="avatar-text avatar-xs bg-success" data-bs-toggle="expand"></a>
                        </div>
                      </div>
                      <div className="dropdown">
                        <a href="javascript:void(0);" className="avatar-text avatar-sm" data-bs-toggle="dropdown" data-bs-offset="25, 25">
                          <div data-bs-toggle="tooltip" title="Options">
                            <i className="feather-more-vertical"></i>
                          </div>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a href="javascript:void(0);" className="dropdown-item"><i className="feather-at-sign"></i>New</a>
                          <a href="javascript:void(0);" className="dropdown-item"><i className="feather-calendar"></i>Event</a>
                          <a href="javascript:void(0);" className="dropdown-item"><i className="feather-bell"></i>Snoozed</a>
                          <a href="javascript:void(0);" className="dropdown-item"><i className="feather-trash-2"></i>Deleted</a>
                          <div className="dropdown-divider"></div>
                          <a href="javascript:void(0);" className="dropdown-item"><i className="feather-settings"></i>Settings</a>
                          <a href="javascript:void(0);" className="dropdown-item"><i className="feather-life-buoy"></i>Tips & Tricks</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body custom-card-action p-0">
                    <div className="table-responsive">
                      <table className="table table-hover mb-0">
                        <thead>
                          <tr>
                            <th>Store</th>
                            <th>Market Value</th>
                            <th>Reviews</th>
                            <th className="text-end">Status</th>
                            <th className="text-end">Details</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center gap-3">
                                <div className="avatar-image">
                                  <img src="assets/images/logo/adwords.png" alt="" className="img-fluid" />
                                </div>
                                <div>
                                  <a href="javascript:void(0);" className="text-dark d-block">KFC</a>
                                  <span className="fs-12 text-muted">http://kfc.store</span>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div>
                                <a href="javascript:void(0);" className="fw-bold">$86,954NGN</a>
                              </div>
                              <div>
                                <span className="fs-12 text-muted">Market Value on Hupchop</span>
                              </div>
                            </td>
                            <td>
                              <div className="d-flex gap-1 mb-1">
                                <i className="fa fa-star text-warning fs-12"></i>
                                <i className="fa fa-star text-warning fs-12"></i>
                                <i className="fa fa-star text-warning fs-12"></i>
                                <i className="fa fa-star text-warning fs-12"></i>
                                <i className="fa fa-star text-warning fs-12"></i>
                              </div>
                              <div>
                                <span className="fs-12 text-muted">5,698 Reviews</span>
                              </div>
                            </td>
                            <td className="text-end"><span className="badge bg-soft-primary text-primary">Trending</span></td>
                            <td className="text-end">
                              <a href="/vendor-details" className="avatar-text avatar-md ms-auto"><i className="feather-arrow-right"></i></a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center gap-3">
                                <div className="avatar-image">
                                  <img src="assets/images/logo/app-store.png" alt="" className="img-fluid" />
                                </div>
                                <div>
                                  <a href="javascript:void(0);" className="text-dark d-block">Chicken Republic</a>
                                  <span className="fs-12 text-muted">http://chickenrepublic.store</span>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div>
                                <a href="javascript:void(0);" className="fw-bold">$77,597NGN</a>
                              </div>
                              <div>
                                <span className="fs-12 text-muted">Market Value on Hupchop</span>
                              </div>
                            </td>
                            <td>
                              <div className="d-flex gap-1 mb-1">
                                <i className="fa fa-star text-warning fs-12"></i>
                                <i className="fa fa-star text-warning fs-12"></i>
                                <i className="fa fa-star text-warning fs-12"></i>
                                <i className="fa fa-star text-warning fs-12"></i>
                                <i className="fa fa-star text-warning fs-12"></i>
                              </div>
                              <div>
                                <span className="fs-12 text-muted">7,875 Reviews</span>
                              </div>
                            </td>
                            <td className="text-end"><span className="badge bg-soft-success text-success">Topper</span></td>
                            <td className="text-end">
                              <a href="/vendor-details" className="avatar-text avatar-md ms-auto"><i className="feather-arrow-right"></i></a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center gap-3">
                                <div className="avatar-image">
                                  <img src="assets/images/logo/google-wallet.png" alt="" className="img-fluid" />
                                </div>
                                <div>
                                  <a href="javascript:void(0);" className="text-dark d-block">Chick-fil-A</a>
                                  <span className="fs-12 text-muted">http://chickfila.store</span>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div>
                                <a href="javascript:void(0);" className="fw-bold">$67,578NGN</a>
                              </div>
                              <div>
                                <span className="fs-12 text-muted">Market Value on Hupchop</span>
                              </div>
                            </td>
                            <td>
                              <div className="d-flex gap-1 mb-1">
                                <i className="fa fa-star text-warning fs-12"></i>
                                <i className="fa fa-star text-warning fs-12"></i>
                                <i className="fa fa-star text-warning fs-12"></i>
                                <i className="fa fa-star text-warning fs-12"></i>
                                <i className="fa fa-star text-warning fs-12"></i>
                              </div>
                              <div>
                                <span className="fs-12 text-muted">9,748 Reviews</span>
                              </div>
                            </td>
                            <td className="text-end"><span className="badge bg-soft-warning text-warning">Feature</span></td>
                            <td className="text-end">
                              <a href="/vendor-details" className="avatar-text avatar-md ms-auto"><i className="feather-arrow-right"></i></a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center gap-3">
                                <div className="avatar-image">
                                  <img src="assets/images/logo/pawprint.png" alt="" className="img-fluid" />
                                </div>
                                <div>
                                  <a href="#" className="text-dark d-block">Drumstix</a>
                                  <span className="fs-12 text-muted">http://drumstix.store</span>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div>
                                <a href="#" className="fw-bold">$60,447NGN</a>
                              </div>
                              <div>
                                <span className="fs-12 text-muted">Market Value on Hupchop</span>
                              </div>
                            </td>
                            <td>
                              <div className="d-flex gap-1 mb-1">
                                <i className="fa fa-star text-warning fs-12"></i>
                                <i className="fa fa-star text-warning fs-12"></i>
                                <i className="fa fa-star text-warning fs-12"></i>
                                <i className="fa fa-star text-warning fs-12"></i>
                                <i className="fa fa-star text-warning fs-12"></i>
                              </div>
                              <div>
                                <span className="fs-12 text-muted">4,447 Reviews</span>
                              </div>
                            </td>
                            <td className="text-end"><span className="badge bg-soft-danger text-danger">Medium</span></td>
                            <td className="text-end">
                              <a href="/vendor-details" className="avatar-text avatar-md ms-auto"><i className="feather-arrow-right"></i></a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="card-footer">
                    <a href="#"><p style={{ textTransform: 'uppercase', textAlign: 'center' }}>Load More</p></a>
                  </div>
                </div>
              </div>

              {/* Platform up and down time */}
              <hr className="border-top-dashed mt-4 mb-5 mx-3" />

              {/* [Tickets] start */}
              <div className="col-xxl-4 col-lg-6">
                <div className="card widget-tickets-content">
                  <div className="card-header">
                    <h5 className="card-title">Operational Reports</h5>
                    <div className="card-header-action">
                      <div className="card-header-btn">
                        <div data-bs-toggle="tooltip" title="Refresh">
                          <a href="#" className="avatar-text avatar-xs bg-warning" data-bs-toggle="refresh"></a>
                        </div>
                        <div data-bs-toggle="tooltip" title="Maximize/Minimize">
                          <a href="#" className="avatar-text avatar-xs bg-success" data-bs-toggle="expand"></a>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div className="card-body custom-card-action p-0">
                    <div className="table-responsive tickets-items-wrapper">
                      <table className="table table-hover mb-0">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Ticket</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <a href="javascript:void(0);">#987456</a>
                            </td>
                            <td>
                              <a href="javascript:void(0);">System Upgrade <span className="fs-12 fw-normal text-muted">(01/08/2024)</span></a>
                              <p className="fs-12 text-muted text-truncate-1-line tickets-sort-desc">Scheduled system upgrade for performance improvements.</p>
                              <div className="tickets-list-action d-flex align-items-center gap-3">
                                <a href="javascript:void(0);">View</a>
                                <span>|</span>
                                <a href="javascript:void(0);">View public form</a>
                                <span>|</span>
                                
                                <a href="javascript:void(0);" className="text-danger">Delete</a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="javascript:void(0);">#963258</a>
                            </td>
                            <td>
                              <a href="javascript:void(0);">Server Maintenance <span className="fs-12 fw-normal text-muted">(02/08/2024)</span></a>
                              <p className="fs-12 text-muted text-truncate-1-line tickets-sort-desc">Routine server maintenance to ensure system stability.</p>
                              <div className="tickets-list-action d-flex align-items-center gap-3">
                                <a href="javascript:void(0);">View</a>
                                <span>|</span>
                                <a href="javascript:void(0);">View public form</a>
                                <span>|</span>
                                
                                <a href="javascript:void(0);" className="text-danger">Delete</a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="javascript:void(0);">#753951</a>
                            </td>
                            <td>
                              <a href="javascript:void(0);">Feature Request <span className="fs-12 fw-normal text-muted">(03/08/2024)</span></a>
                              <p className="fs-12 text-muted text-truncate-1-line tickets-sort-desc">Request for new feature implementation in the app.</p>
                              <div className="tickets-list-action d-flex align-items-center gap-3">
                                <a href="javascript:void(0);">View</a>
                                <span>|</span>
                                <a href="javascript:void(0);">View public form</a>
                                <span>|</span>
                                
                                <a href="javascript:void(0);" className="text-danger">Delete</a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="javascript:void(0);">#456987</a>
                            </td>
                            <td>
                              <a href="javascript:void(0);">User Feedback <span className="fs-12 fw-normal text-muted">(04/08/2024)</span></a>
                              <p className="fs-12 text-muted text-truncate-1-line tickets-sort-desc">Feedback received from users regarding recent updates.</p>
                              <div className="tickets-list-action d-flex align-items-center gap-3">
                                <a href="javascript:void(0);">View</a>
                                <span>|</span>
                                <a href="javascript:void(0);">View public form</a>
                                <span>|</span>
                                
                                <a href="javascript:void(0);" className="text-danger">Delete</a>
                              </div>
                            </td>
                          </tr>
                          <tr className="mb-1">
                            <td>
                              <a href="javascript:void(0);">#369852</a>
                            </td>
                            <td>
                              <a href="javascript:void(0);">Bug Report <span className="fs-12 fw-normal text-muted">(05/08/2024)</span></a>
                              <p className="fs-12 text-muted text-truncate-1-line tickets-sort-desc">Reported bug affecting application performance.</p>
                              <div className="tickets-list-action d-flex align-items-center gap-3">
                                <a href="javascript:void(0);">View</a>
                                <span>|</span>
                                <a href="javascript:void(0);">View public form</a>
                                <span>|</span>
                                
                                <a href="javascript:void(0);" className="text-danger">Delete</a>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              {/* [Tickets] end */}

              {/* Compliance and audit logs start */}

              <div className="col-xxl-4 col-lg-6">
                <div className="card stretch stretch-full">
                  <div className="card-header">
                    <h5 className="card-title">Audit & Compliance Report</h5>
                    <div className="card-header-action">
                      <div className="card-header-btn">
                        
                        <div data-bs-toggle="tooltip" title="Refresh">
                          <a href="javascript:void(0);" className="avatar-text avatar-xs bg-warning" data-bs-toggle="refresh"></a>
                        </div>
                        <div data-bs-toggle="tooltip" title="Maximize/Minimize">
                          <a href="javascript:void(0);" className="avatar-text avatar-xs bg-success" data-bs-toggle="expand"></a>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                  <div className="card-body custom-card-action">
                    <div className="d-flex align-items-center">
                      <div className="me-4">
                        <h2 className="fs-16 fw-bold mb-0">#9201</h2>
                      </div>
                      <div className="d-flex align-items-center justify-content-between border-3 border-start border-primary rounded w-100">
                        <div className="mx-3">
                          <a href="javascript:void(0);" className="fw-semibold mb-1 text-truncate-1-line">Complete Financial Review</a>
                          <div className="fs-12 fw-normal text-muted text-truncate-1-line">Due in 3 days</div>
                        </div>
                        <a href="javascript:void(0);" className="badge bg-soft-primary text-primary">New</a>
                      </div>
                    </div>
                    <hr className="border-dashed my-3" />
                    <div className="d-flex align-items-center">
                      <div className="me-4">
                        <h2 className="fs-16 fw-bold mb-0">#9201</h2>
                      </div>
                      <div className="d-flex align-items-center justify-content-between border-3 border-start border-success rounded w-100">
                        <div className="mx-3">
                          <a href="javascript:void(0);" className="fw-semibold mb-1 text-truncate-1-line">Update Compliance Records</a>
                          <div className="fs-12 fw-normal text-muted text-truncate-1-line">Due in 5 days</div>
                        </div>
                        <a href="javascript:void(0);" className="badge bg-soft-success text-success">New</a>
                      </div>
                    </div>
                    <hr className="border-dashed my-3" />
                    <div className="d-flex align-items-center">
                      <div className="me-4">
                        <h2 className="fs-16 fw-bold mb-0">#9201</h2>
                      </div>
                      <div className="d-flex align-items-center justify-content-between border-3 border-start border-dark rounded w-100">
                        <div className="mx-3">
                          <a href="javascript:void(0);" className="fw-semibold mb-1 text-truncate-1-line">Review Recent Policy Changes</a>
                          <div className="fs-12 fw-normal text-muted text-truncate-1-line">Due in 2 days</div>
                        </div>
                        <a href="javascript:void(0);" className="badge bg-soft-dark text-dark">New</a>
                      </div>
                    </div>
                    <hr className="border-dashed my-3" />
                    <div className="d-flex align-items-center">
                      <div className="me-4">
                        <h2 className="fs-16 fw-bold mb-0">#9201</h2>
                      </div>
                      <div className="d-flex align-items-center justify-content-between border-3 border-start border-danger rounded w-100">
                        <div className="mx-3">
                          <a href="javascript:void(0);" className="fw-semibold mb-1 text-truncate-1-line">Finalize Annual Audit Report</a>
                          <div className="fs-12 fw-normal text-muted text-truncate-1-line">Due in 4 days</div>
                        </div>
                        <a href="javascript:void(0);" className="badge bg-soft-danger text-danger">New</a>
                      </div>
                    </div>
                    <hr className="border-dashed my-3" />
                    <div className="d-flex align-items-center mb-2">
                      <div className="me-4">
                        <h2 className="fs-16 fw-bold mb-0">#9201</h2>
                      </div>
                      <div className="d-flex align-items-center justify-content-between border-3 border-start border-success rounded w-100">
                        <div className="mx-3">
                          <a href="javascript:void(0);" className="fw-semibold mb-1 text-truncate-1-line">Prepare Compliance Meeting with Team</a>
                          <div className="fs-12 fw-normal text-muted text-truncate-1-line">Due in 3 days</div>
                        </div>
                        <a href="javascript:void(0);" className="badge bg-soft-success text-success">New</a>
                      </div>
                    </div>
                    <hr className="border-dashed my-3" />
                    <div className="d-flex align-items-center mb-2">
                      <div className="me-4">
                        <h2 className="fs-16 fw-bold mb-0">#9201</h2>
                      </div>
                      <div className="d-flex align-items-center justify-content-between border-3 border-start border-warning rounded w-100">
                        <div className="mx-3">
                          <a href="javascript:void(0);" className="fw-semibold mb-1 text-truncate-1-line">Design Hupchop Compliance Logo</a>
                          <div className="fs-12 fw-normal text-muted text-truncate-1-line">Due in 2 days</div>
                        </div>
                        <a href="javascript:void(0);" className="badge bg-soft-warning text-warning">New</a>
                      </div>
                    </div>
                  </div>
                  <a href="javascript:void(0);" className="card-footer fs-11 fw-bold text-uppercase text-center">Refresh</a>
                </div>
              </div>




            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Reports