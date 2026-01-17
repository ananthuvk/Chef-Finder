import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import './SignIn.css';

function SignIn() {
  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState('chef'); // 'chef' or 'employer'
  const navigate = useNavigate();

  // Demo login credentials
  const demoCredentials = {
    employer: [
      'employer@cheffinder.com',
      'employer@demo.com',
      'restaurant@demo.com',
      'demo@employer.com'
    ],
    chef: [
      'chef@cheffinder.com',
      'chef@demo.com',
      'demo@chef.com'
    ]
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check for demo credentials
    const emailLower = email.toLowerCase().trim();
    const isDemoEmployer = demoCredentials.employer.includes(emailLower);
    const isDemoChef = demoCredentials.chef.includes(emailLower);
    
    // Prepare user data
    const userData = {
      name: emailLower.includes('employer') ? 'Restaurant Owner' : 'Michael Johnson',
      email: emailLower,
      profileImage: null
    };

    // If user selected employer type or used demo employer email
    if (userType === 'employer' || isDemoEmployer) {
      // Store sign-in state
      localStorage.setItem('isSignedIn', 'true');
      localStorage.setItem('userType', 'employer');
      localStorage.setItem('userData', JSON.stringify(userData));
      navigate('/employer-dashboard');
    } else if (isDemoChef || userType === 'chef') {
      // Regular chef sign in - redirect to user dashboard
      localStorage.setItem('isSignedIn', 'true');
      localStorage.setItem('userType', 'chef');
      localStorage.setItem('userData', JSON.stringify(userData));
      navigate('/user-dashboard');
    } else {
      // Default: redirect based on user type selection
      if (userType === 'employer') {
        localStorage.setItem('isSignedIn', 'true');
        localStorage.setItem('userType', 'employer');
        localStorage.setItem('userData', JSON.stringify(userData));
        navigate('/employer-dashboard');
      } else {
        localStorage.setItem('isSignedIn', 'true');
        localStorage.setItem('userType', 'chef');
        localStorage.setItem('userData', JSON.stringify(userData));
        navigate('/user-dashboard');
      }
    }
  };

  return (
    <div className="signin-page">
      <Header />
      <div className="signin-container">
        <div className="signin-box">
            <h1 className="signin-heading">Ready to take the next step?</h1>
            <p className="signin-subtitle">Create an account or sign in.</p>
            
            <div className="signin-legal">
              <p>
                By clicking any of the 'Continue' options below, you understand and agree to{' '}
                <a href="#terms" className="legal-link">Terms</a>. You also consent to our{' '}
                <a href="#cookie" className="legal-link">Cookie</a> and{' '}
                <a href="#privacy" className="legal-link">Privacy</a> policies. You will receive marketing messages from Indeed and may opt out at any time by following the unsubscribe link in our messages, or as detailed in our terms.
              </p>
            </div>

            <div className="social-buttons">
              <button 
                className="social-btn google-btn"
                onClick={(e) => {
                  e.preventDefault();
                  const userData = {
                    name: userType === 'employer' ? 'Restaurant Owner' : 'Michael Johnson',
                    email: 'user@example.com',
                    profileImage: null
                  };
                  if (userType === 'employer') {
                    localStorage.setItem('isSignedIn', 'true');
                    localStorage.setItem('userType', 'employer');
                    localStorage.setItem('userData', JSON.stringify(userData));
                    navigate('/employer-dashboard');
                  } else {
                    localStorage.setItem('isSignedIn', 'true');
                    localStorage.setItem('userType', 'chef');
                    localStorage.setItem('userData', JSON.stringify(userData));
                    navigate('/user-dashboard');
                  }
                }}
              >
                <svg className="google-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M19.6 10.2273C19.6 9.51818 19.5364 8.83636 19.4182 8.18182H10V12.05H15.3818C15.15 13.3 14.4455 14.3591 13.3864 15.0682V17.5773H16.6182C18.5091 15.8364 19.6 13.2727 19.6 10.2273Z" fill="#4285F4"/>
                  <path d="M10 20C12.7 20 14.9636 19.1045 16.6182 17.5773L13.3864 15.0682C12.4909 15.6682 11.3455 16.0227 10 16.0227C7.39545 16.0227 5.19091 14.2636 4.40455 11.9H1.06364V14.4909C2.70909 17.7591 6.09091 20 10 20Z" fill="#34A853"/>
                  <path d="M4.40455 11.9C4.20455 11.3 4.09091 10.6591 4.09091 10C4.09091 9.34091 4.20455 8.7 4.40455 8.1V5.50909H1.06364C0.386364 6.85909 0 8.38636 0 10C0 11.6136 0.386364 13.1409 1.06364 14.4909L4.40455 11.9Z" fill="#FBBC05"/>
                  <path d="M10 3.97727C11.4682 3.97727 12.7864 4.48182 13.8227 5.37273L16.6909 2.50455C14.9591 0.890909 12.6955 0 10 0C6.09091 0 2.70909 2.24091 1.06364 5.50909L4.40455 8.1C5.19091 5.73636 7.39545 3.97727 10 3.97727Z" fill="#EA4335"/>
                </svg>
                <span>Continue with Google</span>
              </button>
              
              <button 
                className="social-btn apple-btn"
                onClick={(e) => {
                  e.preventDefault();
                  const userData = {
                    name: userType === 'employer' ? 'Restaurant Owner' : 'Michael Johnson',
                    email: 'user@example.com',
                    profileImage: null
                  };
                  if (userType === 'employer') {
                    localStorage.setItem('isSignedIn', 'true');
                    localStorage.setItem('userType', 'employer');
                    localStorage.setItem('userData', JSON.stringify(userData));
                    navigate('/employer-dashboard');
                  } else {
                    localStorage.setItem('isSignedIn', 'true');
                    localStorage.setItem('userType', 'chef');
                    localStorage.setItem('userData', JSON.stringify(userData));
                    navigate('/user-dashboard');
                  }
                }}
              >
                <svg className="apple-icon" width="20" height="20" viewBox="0 0 24 24" fill="#000000">
                  <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <span>Continue with Apple</span>
              </button>
            </div>

            <div className="or-separator">
              <span>or</span>
            </div>

            <div className="user-type-selection">
              <label className="user-type-label">I am a:</label>
              <div className="user-type-options">
                <label className={`user-type-option ${userType === 'chef' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="userType"
                    value="chef"
                    checked={userType === 'chef'}
                    onChange={(e) => setUserType(e.target.value)}
                  />
                  <span>Chef / Culinary Professional</span>
                </label>
                <label className={`user-type-option ${userType === 'employer' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="userType"
                    value="employer"
                    checked={userType === 'employer'}
                    onChange={(e) => setUserType(e.target.value)}
                  />
                  <span>Employer / Restaurant</span>
                </label>
              </div>
            </div>

            <form className="signin-form" onSubmit={handleSubmit}>
              <label htmlFor="email" className="signin-label">
                Email address or phone number *
              </label>
              <input
                type="text"
                id="email"
                className="signin-input"
                placeholder="youremail@email.com or 9876543210"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              
              <button type="submit" className="signin-continue-btn">
                Continue
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ marginLeft: '8px' }}>
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>

            <div className="signin-demo-info">
              <p className="demo-title">Demo Login:</p>
              <p className="demo-text">
                <strong>Employer:</strong> employer@cheffinder.com or employer@demo.com<br/>
                <strong>Chef:</strong> chef@cheffinder.com or chef@demo.com
              </p>
            </div>

            <div className="signin-register-link">
              <p>
                Don't have an account?{' '}
                <Link to="/register" className="register-link">Create account</Link>
              </p>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SignIn;

