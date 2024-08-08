import React from 'react'
import { Link } from 'react-router-dom'

function ForgotPassword() {
  return (
    <div>
      <main className="auth-minimal-wrapper">
        <div className="auth-minimal-inner">
          <div className="minimal-card-wrapper">
            <div className="card mb-4 mt-5 mx-4 mx-sm-0 position-relative">
              <div
                className="wd-50 bg-white p-2 rounded-circle shadow-lg position-absolute translate-middle top-0 start-50"
              >
                <img src="assets/images/logo-abbr.png" alt="" className="img-fluid" />
              </div>
              <div className="card-body p-sm-5">
                <h2 className="fs-20 fw-bolder mb-4">Forgot Password</h2>
                <h4 className="fs-13 fw-bold mb-2">Forgot your password?</h4>
                <p className="fs-12 fw-medium text-muted">
                  Enter your registered email and a reset link will be sent to you.
                </p>
                <form action="#" className="w-100 mt-4 pt-2">
                  <div className="mb-4">
                    <input
                      className="form-control"
                      placeholder="Your email"
                      required
                    />
                  </div>
                  <div className="mt-5">
                    <Link to="/verify-otp">
                      <button type="submit" className="btn btn-lg btn-primary w-100">
                        Validate
                      </button>
                    </Link>
                  </div>
                </form>
  
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ForgotPassword