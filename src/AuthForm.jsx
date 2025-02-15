import { useState } from "react";
import { FaUser } from "react-icons/fa"; // Avatar Icon
import "./styles.css"; // Import CSS file for styling

export default function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="container">
      {/* Left Side - Login/Signup Form */}
      <div className="left-section">
        <div className="avatar">
          <FaUser size={30} color="#fff" />
        </div>
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>
        <form className="auth-form">
          {!isLogin && <input type="text" placeholder="Full Name" required />}
          <input type="text" placeholder="Username" required />
          {!isLogin && <input type="tel" placeholder="Contact Number" inputMode="number" maxLength={10} required />}
          <input type="password" placeholder="Password" required />
          {!isLogin && <input type="password" placeholder="Confirm Password" required />}
          <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
        </form>
        <div className="form-footer">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="#">Forgot password?</a>
        </div>
        <p className="switch-text">
          {isLogin ? "New user?" : "Already have an account?"}{" "}
          <button className="switch-btn" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>

      {/* Right Side - Welcome Section */}
      <div className="right-section">
        <h1>Welcome.</h1>
        <p>
          {isLogin
            ? "To keep connected with us please login with your personal info"
            : "Enter your personal details and start your journey with us"}
            </p>
      </div>
    </div>
  );
}
