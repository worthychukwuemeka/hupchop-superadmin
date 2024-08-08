import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'

function Wallet() {
  return (
    <div>
      <Sidebar />

      <Header />

      <main className="nxl-container">
        <div className="nxl-content">
          {/* Breadcrumb */}
          <div className="page-header">
            <div className="page-header-left d-flex align-items-center">
              <div className="page-header-title">
                <h5 className="m-b-10">Wallet</h5> {/* Updated to "Wallet" */}
              </div>
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><a href="/dashboard">Dashboard</a></li>
                <li className="breadcrumb-item">Wallet</li> {/* Updated to "Vendors" */}
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
              <>
                {/* [Mini Card] start */}
                <div className="col-xxl-3 col-md-6">
                  <div className="card stretch stretch-full">
                    <div className="card-body">
                      <div className="d-flex align-items-start justify-content-between mb-4">
                        <div className="d-flex gap-4 align-items-center">
                          <div className="avatar-text avatar-lg bg-gray-200">
                            <i className="feather-dollar-sign"></i>
                          </div>
                          <div>
                            <div className="fs-4 fw-bold text-dark"><span className="counter">45</span>/<span className="counter">76</span></div>
                            <h3 className="fs-13 fw-semibold text-truncate-1-line">Pending Transactions</h3>
                          </div>
                        </div>
                        <a href="javascript:void(0);">
                          <i className="feather-more-vertical"></i>
                        </a>
                      </div>
                      <div className="pt-4">
                        <div className="d-flex align-items-center justify-content-between">
                          <a href="javascript:void(0);" className="fs-12 fw-medium text-muted text-truncate-1-line">Pending Transactions</a>
                          <div className="w-100 text-end">
                            <span className="fs-12 text-dark">$5,569</span>
                            <span className="fs-11 text-muted">(56%)</span>
                          </div>
                        </div>
                        <div className="progress mt-2 ht-3">
                          <div className="progress-bar bg-primary" role="progressbar" style={{ width: '56%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-3 col-md-6">
                  <div className="card stretch stretch-full">
                    <div className="card-body">
                      <div className="d-flex align-items-start justify-content-between mb-4">
                        <div className="d-flex gap-4 align-items-center">
                          <div className="avatar-text avatar-lg bg-gray-200">
                            <i className="feather-cast"></i>
                          </div>
                          <div>
                            <div className="fs-4 fw-bold text-dark"><span className="counter">48</span>/<span className="counter">86</span></div>
                            <h3 className="fs-13 fw-semibold text-truncate-1-line">Successful Transactions</h3>
                          </div>
                        </div>
                        <a href="javascript:void(0);">
                          <i className="feather-more-vertical"></i>
                        </a>
                      </div>
                      <div className="pt-4">
                        <div className="d-flex align-items-center justify-content-between">
                          <a href="javascript:void(0);" className="fs-12 fw-medium text-muted text-truncate-1-line">Successful Transactions</a>
                          <div className="w-100 text-end">
                            <span className="fs-12 text-dark">52 Completed</span>
                            <span className="fs-11 text-muted">(63%)</span>
                          </div>
                        </div>
                        <div className="progress mt-2 ht-3">
                          <div className="progress-bar bg-warning" role="progressbar" style={{ width: '63%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-3 col-md-6">
                  <div className="card stretch stretch-full">
                    <div className="card-body">
                      <div className="d-flex align-items-start justify-content-between mb-4">
                        <div className="d-flex gap-4 align-items-center">
                          <div className="avatar-text avatar-lg bg-gray-200">
                            <i className="feather-briefcase"></i>
                          </div>
                          <div>
                            <div className="fs-4 fw-bold text-dark"><span className="counter">16</span>/<span className="counter">20</span></div>
                            <h3 className="fs-13 fw-semibold text-truncate-1-line">Wallet Transactions In Progress</h3>
                          </div>
                        </div>
                        <a href="javascript:void(0);">
                          <i className="feather-more-vertical"></i>
                        </a>
                      </div>
                      <div className="pt-4">
                        <div className="d-flex align-items-center justify-content-between">
                          <a href="javascript:void(0);" className="fs-12 fw-medium text-muted text-truncate-1-line">Transactions In Progress</a>
                          <div className="w-100 text-end">
                            <span className="fs-12 text-dark">16 Completed</span>
                            <span className="fs-11 text-muted">(78%)</span>
                          </div>
                        </div>
                        <div className="progress mt-2 ht-3">
                          <div className="progress-bar bg-success" role="progressbar" style={{ width: '78%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-3 col-md-6">
                  <div className="card stretch stretch-full">
                    <div className="card-body">
                      <div className="d-flex align-items-start justify-content-between mb-4">
                        <div className="d-flex gap-4 align-items-center">
                          <div className="avatar-text avatar-lg bg-gray-200">
                            <i className="feather-activity"></i>
                          </div>
                          <div>
                            <div className="fs-4 fw-bold text-dark"><span className="counter">46.59</span>%</div>
                            <h3 className="fs-13 fw-semibold text-truncate-1-line">Transaction Success Rate</h3>
                          </div>
                        </div>
                        <a href="javascript:void(0);">
                          <i className="feather-more-vertical"></i>
                        </a>
                      </div>
                      <div className="pt-4">
                        <div className="d-flex align-items-center justify-content-between">
                          <a href="javascript:void(0);" className="fs-12 fw-medium text-muted text-truncate-1-line">Transaction Success Rate</a>
                          <div className="w-100 text-end">
                            <span className="fs-12 text-dark">$2,254</span>
                            <span className="fs-11 text-muted">(46%)</span>
                          </div>
                        </div>
                        <div className="progress mt-2 ht-3">
                          <div className="progress-bar bg-danger" role="progressbar" style={{ width: '46%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* [Mini Card] end */}
              </>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Wallet