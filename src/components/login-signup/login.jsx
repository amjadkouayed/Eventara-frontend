import { useNavigate } from "react-router-dom";
import "./auth.css";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1 className="auth-title">Login</h1>
        <form className="auth-form">
          <div className="input-group">
            <label htmlFor="email" className="input-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="auth-input"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password" className="input-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="auth-input"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="auth-button">
            Login
          </button>
        </form>
        <div className="auth-footer">
          <p>
            {"Don't have an account?"}
            <button className="link-button" onClick={() => navigate("/signup")}>
              Register
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
