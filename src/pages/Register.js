import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/login.css";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      const response = await fetch(
        `http://localhost:3001/users?email=${encodeURIComponent(email)}`
      );
      const users = await response.json();
      if (users.length > 0) {
        setError("User already exists");
      } else {
        // Register the user
        await fetch(`http://localhost:3001/users`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password })
        });
        setSuccess("Registration successful! Redirecting to login...");
        setTimeout(() => navigate("/login"), 1500);
      }
    } catch (err) {
      setError("Server error");
    }
  };

  return (
    <div className="loginscreenparentcontainer">
      <div className="loginscreenleftcontainer">
        <div>Board.</div>
      </div>
      <div className="loginscreenrightcontainer">
        <div>
          <h1>Register</h1>
          <div className="loginscreenrightcontainersecondrow">
            Create a new account
          </div>
          <div className="logincontainer">
            <form onSubmit={handleSubmit}>
              <label className="loginpagelable">Email address</label>
              <input
                type="text"
                className="loginpageinput"
                placeholder="test@example.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <label className="loginpagelable">Password</label>
              <input
                type="password"
                className="loginpageinput"
                placeholder="123456"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <button type="submit" className="loginpagesignbutton">
                Register
              </button>
              {error && <div style={{color: 'red', marginTop: 8}}>{error}</div>}
              {success && <div style={{color: 'green', marginTop: 8}}>{success}</div>}
            </form>
          </div>
          <div className="graytext loginpagedonthaveaccountlink">
            Already have an account? <Link to="/login">Login here</Link>
          </div>
        </div>
      </div>
    </div>
  );
} 