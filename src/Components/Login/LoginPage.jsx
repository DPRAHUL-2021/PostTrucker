import React, { useState } from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("admin@gmail.com"); // Set default email
  const [password, setPassword] = useState("password"); // Set default password
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email) {
      setError("Please enter your email id");
      return;
    }
    if (!password) {
      setError("Please fill your password");
      return;
    }

    if (email === "admin@gmail.com" && password === "password") {
      setError("");
      navigate("/dashboard");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <>
      <div className="container">

        <div className="left-half">
          <div className="header-text">
            Post<span className="trucker">Trucker</span>
          </div>
          <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-group">
                <label>Password:</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                />
              </div>

              {error && <p className="error-message">{error}</p>}

              <button type="submit" className="login-button">
                Login
              </button>

              <a href="#" className="forgot-password">
                Forgot your password?
              </a>
            </form>
          </div>
        </div>

        <div className="right-half"></div>
      </div>
    </>
  );
};

export default LoginPage;
