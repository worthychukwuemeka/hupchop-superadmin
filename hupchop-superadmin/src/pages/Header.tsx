import { Moon, Sun } from 'react-feather';
import { FaSearch, FaCog, FaSignOutAlt } from 'react-icons/fa';

function Header() {
  return (
    <div>
      <header className="nxl-header">
        <div className="header-wrapper">
          <div className="header-left d-flex align-items-center gap-4">
            <a href="javascript:void(0);" className="nxl-link"></a>
            <a href="javascript:void(0);" className="nxl-head-mobile-toggler" id="mobile-collapse">
              <div className="hamburger hamburger--arrowturn">
                <div className="hamburger-box">
                  <div className="hamburger-inner"></div>
                </div>
              </div>
            </a>

            <div className="nxl-navigation-toggle">
              <a href="javascript:void(0);" id="menu-mini-button" style={{ display: 'none' }}>
                <i className="feather-align-left"></i>
              </a>
              <a href="javascript:void(0);" id="menu-expend-button" style={{ display: '' }}>
                <i className="feather-arrow-right"></i>
              </a>
            </div>

            <div className="nxl-lavel-mega-menu-toggle d-flex d-lg-none">
              <a href="javascript:void(0);" id="nxl-lavel-mega-menu-open">
                <i className="feather-align-left"></i>
              </a>
            </div>

            <div className="nxl-drp-link nxl-lavel-mega-menu">
              <div className="nxl-lavel-mega-menu-toggle d-flex d-lg-none">
                <a href="javascript:void(0);" id="nxl-lavel-mega-menu-hide">
                  <i className="feather-arrow-left me-2"></i>
                  <span>Back</span>
                </a>
              </div>
            </div>
          </div>

          <div className="header-right ms-auto">
            <div className="d-flex align-items-center">
              <div className="dropdown nxl-h-item nxl-header-search">
                <a href="#" className="nxl-head-link me-0" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                  <i className="feather-search"></i>
                </a>
                <div className="dropdown-menu dropdown-menu-end nxl-h-dropdown nxl-search-dropdown">
                  <div className="input-group search-form">
                    <span className="input-group-text">
                      <i className="feather-search fs-6 text-muted"></i>
                    </span>
                    <input type="text" className="form-control search-input-field" placeholder="Search...." />
                    <span className="input-group-text">
                      <button type="button" className="btn-close"></button>
                    </span>
                  </div>
                  <div className="dropdown-divider mt-0"></div>
                  <div className="search-items-wrapper">
                    <div className="searching-for px-4 py-2">
                      <p className="fs-11 fw-medium text-muted">I'm searching for...</p>
                      <div className="d-flex flex-wrap gap-1"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="nxl-h-item dark-light-theme">
                <a href="javascript:void(0);" className="nxl-head-link me-0 dark-button">
                  <i className="feather-moon"></i>
                </a>
                <a href="javascript:void(0);" className="nxl-head-link me-0 light-button" style={{ display: 'none' }}>
                  <i className="feather-sun"></i>
                </a>
              </div>

              <div className="dropdown nxl-h-item">
                <a href="javascript:void(0);" data-bs-toggle="dropdown" role="button" data-bs-auto-close="outside">
                  <img src="assets/images/avatar/1.png" alt="user-image" className="img-fluid user-avtar me-0" />
                </a>
                <div className="dropdown-menu dropdown-menu-end nxl-h-dropdown nxl-user-dropdown">
                  <div className="dropdown-header">
                    <div className="d-flex align-items-center">
                      <img src="assets/images/avatar/1.png" alt="user-image" className="img-fluid user-avtar" />
                      <div>
                        <h6 className="text-dark mb-0">
                          Alexandra Della <span className="badge bg-soft-success text-success ms-1">PRO</span>
                        </h6>
                        <span className="fs-12 fw-medium text-muted">alex.della@outlook.com</span>
                      </div>
                    </div>
                  </div>
                  <a href="javascript:void(0);" className="dropdown-item">
                    <i className="feather-user"></i>
                    <span>Admin Details</span>
                  </a>
                  <a href="javascript:void(0);" className="dropdown-item">
                    <i className="feather-settings"></i>
                    <span>Account Settings</span>
                  </a>
                  <div className="dropdown-divider"></div>
                  <a href="auth-login-minimal.html" className="dropdown-item">
                    <i className="feather-log-out"></i>
                    <span>Logout</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
