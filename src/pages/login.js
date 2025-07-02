import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../style/login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await fetch(
        `https://nxtwave-assisment.onrender.com/users?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
      );
      const users = await response.json();
      if (users.length > 0) {
        navigate("/home");
      } else {
        setError("Invalid email or password");
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
          <h1>Sign In</h1>
          <div className="loginscreenrightcontainersecondrow">
            Sign in to your account
          </div>
          <div className="signinpotionbuttoncontainer">
            <button className="graytext loginformsigninbutton" type="button">
              <FcGoogle /> Sign in with Google
            </button>
            <button className="graytext loginformsigninbutton" type="button">
              <AiFillApple /> Sign in with Apple
            </button>
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
              <Link to="*">Forgot password?</Link>
              <button type="submit" className="loginpagesignbutton">
                Sign In
              </button>
              {error && <div style={{color: 'red', marginTop: 8}}>{error}</div>}
            </form>
          </div>
          <div className="graytext loginpagedonthaveaccountlink">
            Don't have an account? <Link to="/register">Register here</Link>
          </div>
          
        </div>
      </div>
    </div>
  );
}


