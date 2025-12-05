import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Register.css';
import Header from './Header';
import Footer from './Footer';

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    userType: 'chef' // 'chef' or 'employer'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration functionality
    console.log('Registration data:', formData);
  };

  return (
    <div className="register-page">
      <Header />
      <div className="register-container">
        <div className="register-box">
          <h1 className="register-heading">Create your account</h1>
          <p className="register-subtitle">Join our network to find or hire exceptional culinary professionals.</p>
          
          <div className="register-legal">
            <p>
              By creating an account, you understand and agree to our{' '}
              <a href="#terms" className="legal-link">Terms</a>. You also consent to our{' '}
              <a href="#cookie" className="legal-link">Cookie</a> and{' '}
              <a href="#privacy" className="legal-link">Privacy</a> policies. You will receive marketing messages and may opt out at any time.
            </p>
          </div>

          <form className="register-form" onSubmit={handleSubmit}>
            <div className="user-type-selection">
              <label className="user-type-label">I am a:</label>
              <div className="user-type-options">
                <label className="user-type-option">
                  <input
                    type="radio"
                    name="userType"
                    value="chef"
                    checked={formData.userType === 'chef'}
                    onChange={handleChange}
                  />
                  <span>Chef / Culinary Professional</span>
                </label>
                <label className="user-type-option">
                  <input
                    type="radio"
                    name="userType"
                    value="employer"
                    checked={formData.userType === 'employer'}
                    onChange={handleChange}
                  />
                  <span>Employer / Restaurant</span>
                </label>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName" className="form-label">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="form-input"
                  placeholder="Enter your first name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName" className="form-label">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="form-input"
                  placeholder="Enter your last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                placeholder="youremail@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="form-input"
                placeholder="9876543210"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password *
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-input"
                placeholder="Create a strong password"
                value={formData.password}
                onChange={handleChange}
                required
                minLength="8"
              />
              <small className="form-hint">Must be at least 8 characters</small>
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password *
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="form-input"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            
            <button type="submit" className="register-submit-btn">
              Create Account
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ marginLeft: '8px' }}>
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className="register-login-link">
              <p>
                Already have an account?{' '}
                <Link to="/signin" className="login-link">Sign in</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Register;

