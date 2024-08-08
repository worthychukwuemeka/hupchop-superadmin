import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Redirect to the dashboard
    navigate('/dashboard');
  };

  return (
    <div>
      <main className="auth-minimal-wrapper">
        <div className="auth-minimal-inner">
          <div className="minimal-card-wrapper">
            <div className="card mb-4 mt-5 mx-4 mx-sm-0 position-relative">
              <div
                className="wd-50 bg-white p-2 rounded-circle shadow-lg position-absolute translate-middle top-0 start-50">
                <img src="assets/images/logo-abbr.png" alt="Logo" className="img-fluid" />
              </div>
              <div className="card-body p-sm-5">
                <h2 className="fs-20 fw-bolder mb-4">Login</h2>
                <h4 className="fs-13 fw-bold mb-2">Login to your account</h4>
                
                <form onSubmit={handleLogin} className="w-100 mt-4 pt-2">
                  <div className="mb-4">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email or Username"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="rememberMe" />
                        <label className="custom-control-label c-pointer" htmlFor="rememberMe">
                          Remember Me
                        </label>
                      </div>
                    </div>
                    <div>
                      <a href="/forgot-password" className="fs-11 text-primary">Forgot password?</a>
                    </div>
                  </div>
                  <div className="mt-5">
                    <button type="submit" className="btn btn-lg btn-primary w-100">Login</button>
                  </div>
                </form>
                
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;
