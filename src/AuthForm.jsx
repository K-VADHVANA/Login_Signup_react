import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaUser } from "react-icons/fa";
import "./styles.css";

export default function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="container">
      {/* Left Side - Login/Signup Form */}
      <div className="left-section">
        <div className="avatar">
          <FaUser size={30} color="#fff" />
        </div>
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>
        <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
          {!isLogin && (
            <>
              <input
                type="text"
                placeholder="Full Name"
                {...register("fullName", {
                  required: !isLogin && "Full Name is required",
                })}
              />
              <span className="error-text">{errors.fullName?.message}</span>
            </>
          )}

          <input
            type="text"
            placeholder="Username"
            {...register("username", { required: "Username is required" })}
          />
          <span className="error-text">{errors.username?.message}</span>

          {!isLogin && (
            <>
              <input
                type="tel"
                placeholder="Contact Number"
                {...register("contactNumber", {
                  required: !isLogin && "Contact Number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Enter a valid 10-digit number",
                  },
                })}
              />
              <span className="error-text">{errors.contactNumber?.message}</span>
            </>
          )}

          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: "Password is required" })}
          />
          <span className="error-text">{errors.password?.message}</span>

          {!isLogin && (
            <>
              <input
                type="password"
                placeholder="Confirm Password"
                {...register("confirmPassword", {
                  required: !isLogin && "Confirm Password is required",
                  validate: (value) =>
                    value === document.querySelector("input[name='password']").value ||
                    "Passwords do not match",
                })}
              />
              <span className="error-text">{errors.confirmPassword?.message}</span>
            </>
          )}

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
