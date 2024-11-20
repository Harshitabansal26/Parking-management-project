import React from 'react';
import '../Styles/SignUp.css';

const SignUp = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="card_title">
          <h1>Create Account</h1>
          <span>
            Already have an account? <a href="/login">Sign In</a>
          </span>
        </div>
        <div className="form">
          <form action="/register" method="post">
            <input
              type="text"
              name="username"
              id="username"
              placeholder="UserName"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
            <button type="submit">Sign Up</button>
          </form>
        </div>
        <div className="card_terms">
          <input type="checkbox" id="terms" />
          <span>
            I have read and agree to the{' '}
            <a href="/terms">Terms of Service</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;