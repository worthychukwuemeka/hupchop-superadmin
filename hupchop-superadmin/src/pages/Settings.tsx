import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'

function Settings() {
  return (
    <div>
      <Sidebar />

      <Header />

      <main className='nxl-container apps-container'>
        <div className='nxl-content without-header nxl-full-content'>
          <div className="main-content d-flex">

            {/* Content Sidebar start */}
            <div className="content-sidebar content-sidebar-md" data-scrollbar-target="#psScrollbarInit">
              <div className="content-sidebar-header bg-white sticky-top hstack justify-content-between">
                <h4 className="fw-bolder mb-0">Settings</h4>
                <a href="javascript:void(0);" className="app-sidebar-close-trigger d-flex">
                  <i className="feather-x"></i>
                </a>
              </div>
              <div className="content-sidebar-body">
                <ul className="nav flex-column nxl-content-sidebar-item">
                  <li className="nav-item">
                    <a className="nav-link active" href="settings-profile.html">
                      <i className="feather-user"></i>
                      <span>Profile Management</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="settings-users.html">
                      <i className="feather-users"></i>
                      <span>User Management</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="settings-permissions.html">
                      <i className="feather-lock"></i>
                      <span>Permissions</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="settings-security.html">
                      <i className="feather-shield"></i>
                      <span>Security Settings</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="settings-notifications.html">
                      <i className="feather-bell"></i>
                      <span>Notification Settings</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="settings-audit.html">
                      <i className="feather-archive"></i>
                      <span>Audit Logs</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="settings-integrations.html">
                      <i className="feather-plug"></i>
                      <span>Integrations</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="settings-finance.html">
                      <i className="feather-dollar-sign"></i>
                      <span>Financial Settings</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="settings-backup.html">
                      <i className="feather-cloud"></i>
                      <span>Backup & Recovery</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="settings-customizations.html">
                      <i className="feather-cogs"></i>
                      <span>Customizations</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="settings-support.html">
                      <i className="feather-help-circle"></i>
                      <span>Support</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="settings-logs.html">
                      <i className="feather-log-out"></i>
                      <span>System Logs</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Content Sidebar end */}

            {/* Main content start */}
            <div className="content-area" data-scrollbar-target="#psScrollbarInit">
              <div className="content-area-header bg-white sticky-top">
                <div className="page-header-left">
                  {/* Button to open the sidebar */}
                  <a href="javascript:void(0);" className="app-sidebar-open-trigger me-2">
                    <i className="feather-align-left fs-24"></i>
                  </a>
                </div>
                <div className="page-header-right ms-auto">
                  <div className="d-flex align-items-center gap-3 page-header-right-items-wrapper">
                    {/* Cancel button */}
                    <a href="javascript:void(0);" className="text-danger">Cancel</a>
                    {/* Save Changes button */}
                    <a href="javascript:void(0);" className="btn btn-primary successAlertMessage">
                      <i className="feather-save me-2"></i>
                      <span>Save Changes</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="content-area-body">
                <div className="card mb-0">
                  <div className="card-body">

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

export default Settings