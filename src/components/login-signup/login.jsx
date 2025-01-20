import { useNavigate } from "react-router-dom";
import "./auth.css";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:4000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email, password: password }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token);
        navigate("/dashboard");
      } else {
        setError(data.message || "Login failed.");
      }
    } catch (error) {
      setError("login failed. Please try again later.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1 className="auth-title">Login</h1>
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email" className="input-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="auth-input"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="auth-button">
            Login
          </button>
        </form>
        {error && <p className="error-message">{error}</p>}
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
