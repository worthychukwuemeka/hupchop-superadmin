import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import { Link } from 'react-router-dom';

function VendorDetails() {
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
                <h5 className="m-b-10">Vendor Details</h5>
              </div>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/dashboard">Dashboard</Link> {/* Link to the Dashboard page */}
                </li>
                <li className="breadcrumb-item">
                  <Link to="/vendors">Vendors</Link> {/* Link to the Orders page */}
                </li>
                <li className="breadcrumb-item">Vendor Details</li> {/* Current page */}
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
                        <span>Export Vendor Data</span>
                      </a>
                      <div className="dropdown-divider"></div>
                      <a href="#" className="dropdown-item">
                        <i className="feather-trash-2 me-3"></i>
                        <span>Delete Vendor Profile</span>
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
            <div className="tab-content">
              <div className="tab-pane fade show active" id="profileTab" role="tabpanel">
                <div className="card card-body lead-info">
                  <div className="mb-4 d-flex align-items-center justify-content-between">
                    <h5 className="fw-bold mb-0">
                      <span className="d-block mb-2">Vendor Details</span>
                    </h5>
                  </div>
                  <div className="row mb-4">
                    <div className="col-lg-2 fw-medium">Vendor Name</div>
                    <div className="col-lg-10">
                      <a href="javascript:void(0);">KFC</a>
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div className="col-lg-2 fw-medium">Address</div>
                    <div className="col-lg-10">
                      4 Mike Akhigbe Way, <a href="javascript:void(0);">Jabi</a>
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div className="col-lg-2 fw-medium">Restaurant Type</div>
                    <div className="col-lg-10">
                      <a href="javascript:void(0);">Fastfood Restaurant</a>
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div className="col-lg-2 fw-medium">Email</div>
                    <div className="col-lg-10">
                      <a href="javascript:void(0);">contact@kfc.com</a>
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div className="col-lg-2 fw-medium">Phone</div>
                    <div className="col-lg-10">
                      <a href="javascript:void(0);">+01 (375) 5896 654</a>
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div className="col-lg-2 fw-medium">Website</div>
                    <div className="col-lg-10">
                      <a href="javascript:void(0);">https://www.kfc.com</a>
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div className="col-lg-2 fw-medium">City</div>
                    <div className="col-lg-10">
                      <a href="javascript:void(0);">Jabi</a>
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div className="col-lg-2 fw-medium">State</div>
                    <div className="col-lg-10">
                      <a href="javascript:void(0);">Abuja FCT</a>
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div className="col-lg-2 fw-medium">Country</div>
                    <div className="col-lg-10">
                      <a href="javascript:void(0);">Nigeria</a>
                    </div>
                  </div>
                  <div className="row mb-0">
                    <div className="col-lg-2 fw-medium">Zip Code</div>
                    <div className="col-lg-10">
                      <a href="javascript:void(0);">81135-0615</a>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="card card-body general-info">
                  <div className="mb-4 d-flex align-items-center justify-content-between">
                    <h5 className="fw-bold mb-0">
                      <span className="d-block mb-2">General Information :</span>
                      <span className="fs-12 fw-normal text-muted d-block">
                        General information about vendor as seen in community
                      </span>
                    </h5>
                    <a href="javascript:void(0);" className="btn btn-sm btn-light-brand">
                      Visit Community Profile
                    </a>
                  </div>
                  <div className="row mb-4">
                    <div className="col-lg-2 fw-medium">Store Name</div>
                    <div className="col-lg-10 hstack gap-1">
                      <a href="javascript:void(0);" className="hstack gap-2">
                        <div className="avatar-text avatar-sm">
                          <i className="feather-git-commit"></i>
                        </div>
                        <span>KFC, Wuse II, Abuja</span>
                      </a>
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div className="col-lg-2 fw-medium">Social Links</div>
                    <div className="col-lg-10 hstack gap-1">
                      <a href="javascript:void(0);" className="hstack gap-2">
                        <div className="avatar-text avatar-sm">
                          <i className="feather-facebook"></i>
                        </div>
                      </a>
                      <a href="javascript:void(0);" className="hstack gap-2">
                        <div className="avatar-text avatar-sm">
                          <i className="feather-instagram"></i>
                        </div>
                      </a>
                      <a href="javascript:void(0);" className="hstack gap-2">
                        <div className="avatar-text avatar-sm">
                          <i className="feather-twitter"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div className="col-lg-2 fw-medium">Account Privacy</div>
                    <div className="col-lg-10 hstack gap-1">
                      <a href="javascript:void(0);" className="hstack gap-2">
                        <div className="avatar-text avatar-sm">
                          <i className="feather-globe"></i>
                        </div>
                        <span>Public</span>
                      </a>
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div className="col-lg-2 fw-medium">Created</div>
                    <div className="col-lg-10 hstack gap-1">
                      <a href="javascript:void(0);" className="hstack gap-2">
                        <div className="avatar-text avatar-sm">
                          <i className="feather-clock"></i>
                        </div>
                        <span>26 MAY, 2023</span>
                      </a>
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div className="col-lg-2 fw-medium">Store Type</div>
                    <div className="col-lg-10 hstack gap-1">
                      <a href="javascript:void(0);" className="hstack gap-2">
                        <div className="avatar-image avatar-sm">
                          <img src="assets/images/orders/fastfood.jpeg" alt="" className="img-fluid" />
                        </div>
                        <span>Fast food Restaurant</span>
                      </a>
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div className="col-lg-2 fw-medium">Our Motto</div>
                    <div className="col-lg-10 hstack gap-1">
                      <a href="javascript:void(0);" className="hstack gap-2">
                        <div className="avatar-image avatar-sm">
                          <img src="assets/images/vendors/1.jpg" alt="" className="img-fluid" />
                        </div>
                        <span>KFC - It's Finger Lickin' Good!</span>
                      </a>
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div className="col-lg-2 fw-medium">Tags</div>
                    <div className="col-lg-10 hstack gap-1">
                      <a href="javascript:void(0);" className="badge bg-soft-primary text-primary">VIP</a>
                      <a href="javascript:void(0);" className="badge bg-soft-success text-success">High Rated</a>
                      <a href="javascript:void(0);" className="badge bg-soft-warning text-warning">Promotions</a>
                      <a href="javascript:void(0);" className="badge bg-soft-danger text-danger">Fast food</a>
                      <a href="javascript:void(0);" className="badge bg-soft-teal text-teal">24H Store</a>
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div className="col-lg-2 fw-medium">About Us</div>
                    <div className="col-lg-10 hstack gap-1">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, nulla veniam, ipsam nemo autem fugit earum accusantium reprehenderit recusandae in minima harum vitae doloremque quasi aut dolorum voluptate. Minima, deleniti. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, nulla veniam, ipsam nemo autem fugit earum accusantium reprehenderit recusandae in minima harum vitae doloremque quasi aut dolorum voluptate.
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

export default VendorDetails