import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const VerifyOTP = () => {
  const [seconds, setSeconds] = useState(120); // Set initial timer to 120 seconds
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (seconds === 0) {
      setCanResend(true);
      return;
    }

    const timer = setInterval(() => {
      setSeconds(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, [seconds]);

  return (
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
              <h2 className="fs-20 fw-bolder mb-4">
                Verify{" "}
                <a href="javascript:void(0);" className="float-end fs-12 text-primary">
                  Change Method
                </a>
              </h2>
              <h4 className="fs-13 fw-bold mb-2">
                Please enter the code sent to your email.
              </h4>
              <p className="fs-12 fw-medium text-muted">
                <span>A code has been sent to</span>
                <strong>a****@hupchop.com</strong>
              </p>
              <form
                action="https://wphtml.com/html/tf/duralux-demo/index.html"
                className="w-100 mt-4 pt-2"
              >
                <div id="otp" className="inputs d-flex flex-row justify-content-center mt-2">
                  <input
                    className="m-2 text-center form-control rounded"
                    type="text"
                    id="first"
                    maxLength={1}
                    required
                  />
                  <input
                    className="m-2 text-center form-control rounded"
                    type="text"
                    id="second"
                    maxLength={1}
                    required
                  />
                  <input
                    className="m-2 text-center form-control rounded"
                    type="text"
                    id="third"
                    maxLength={1}
                    required
                  />
                  <input
                    className="m-2 text-center form-control rounded"
                    type="text"
                    id="fourth"
                    maxLength={1}
                    required
                  />
                  <input
                    className="m-2 text-center form-control rounded"
                    type="text"
                    id="fifth"
                    maxLength={1}
                    required
                  />
                  <input
                    className="m-2 text-center form-control rounded"
                    type="text"
                    id="sixth"
                    maxLength={1}
                    required
                  />
                </div>
                <div className="mt-5">
                  <Link to="/reset-password">
                    <button type="submit" className="btn btn-lg btn-primary w-100">
                      Validate
                    </button>
                  </Link>
                </div>
                <div className="mt-5 text-muted">
                  <span>Didn't get the code</span>{" "}
                  {canResend ? (
                    <a href="javascript:void(0);">Resend</a>
                  ) : (
                    <span>Resend in <span style={{ fontWeight: 'bold', color: 'red' }}>{Math.floor(seconds / 60)}:{seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60}</span></span>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default VerifyOTP;
