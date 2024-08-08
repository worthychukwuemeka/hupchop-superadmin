import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';

const ResetPassword: React.FC = () => {
  const [password, setPassword] = useState<string>('');
  const [repeatPassword, setRepeatPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [matchError, setMatchError] = useState<string>('');

  // Function to check password strength
  const isStrongPassword = (password: string): boolean => {
    // Example strong password criteria: minimum 8 characters, at least one uppercase letter, one lowercase letter, one number, and one special character
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return strongPasswordRegex.test(password);
  };

  // Handle form submission
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    // Reset errors
    setPasswordError('');
    setMatchError('');

    if (!isStrongPassword(password)) {
      setPasswordError('Password does not meet strength criteria.');
      return;
    }

    if (password !== repeatPassword) {
      setMatchError('Passwords do not match.');
      return;
    }

    // Proceed with password reset logic
    console.log('Password reset successfully.');
  };

  return (
    <div>
      <main className="auth-minimal-wrapper">
        <div className="auth-minimal-inner">
          <div className="minimal-card-wrapper">
            <div className="card mb-4 mt-5 mx-4 mx-sm-0 position-relative">
              <div className="wd-50 bg-white p-2 rounded-circle shadow-lg position-absolute translate-middle top-0 start-50">
                <img src="assets/images/logo-abbr.png" alt="" className="img-fluid" />
              </div>
              <div className="card-body p-sm-5">
                <h2 className="fs-20 fw-bolder mb-4">Reset</h2>
                <h4 className="fs-13 fw-bold mb-2">Reset your password</h4>
                <p className="fs-12 fw-medium text-muted">
                  Create a new password
                </p>
                <form onSubmit={handleSubmit} className="w-100 mt-4 pt-2">
                  <div className="mb-4">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="New password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    {passwordError && <p className="text-danger">{passwordError}</p>}
                  </div>
                  <div className="mb-4">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Repeat password"
                      value={repeatPassword}
                      onChange={(e) => setRepeatPassword(e.target.value)}
                      required
                    />
                    {matchError && <p className="text-danger">{matchError}</p>}
                  </div>
                  <div className="mt-5">
                    <Link to="/">
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
  );
};

export default ResetPassword;
