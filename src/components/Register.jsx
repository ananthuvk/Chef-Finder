import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import InfoTooltip from '../core/constants/InfoTooltip';
import RegisterService from '../core/service/RegisterService';
import { showSuccessToast, showErrorToastFromError } from '../core/utils/toast';
import { validatePassword, validatePhone } from '../core/utils/Utils';
import './Register.css';

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    userType: 'chef' // 'chef' or 'employer'
  });
  const [isLoading, setIsLoading] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const newFormData = {
        ...prev,
        [name]: value
      };
      
      // Real-time validation for confirmPassword
      if (name === 'confirmPassword' || name === 'password') {
        setFieldErrors(prevErrors => {
          const newErrors = { ...prevErrors };
          
          // If confirmPassword field is being changed or password is being changed
          if (name === 'confirmPassword') {
            // Validate confirmPassword against current password (before update)
            if (value && prev.password && value !== prev.password) {
              newErrors.confirmPassword = 'Passwords do not match';
            } else {
              // If passwords match or confirmPassword is empty, clear error
              delete newErrors.confirmPassword;
            }
          } else if (name === 'password') {
            // If password changes, validate against confirmPassword
            if (prev.confirmPassword && value !== prev.confirmPassword) {
              newErrors.confirmPassword = 'Passwords do not match';
            } else if (prev.confirmPassword && value === prev.confirmPassword) {
              delete newErrors.confirmPassword;
            }
          }
          
          return newErrors;
        });
      } else {
        // Clear error for other fields when user starts typing
        if (fieldErrors[name]) {
          setFieldErrors(prev => {
            const newErrors = { ...prev };
            delete newErrors[name];
            return newErrors;
          });
        }
      }
      
      return newFormData;
    });
  };

  const validateForm = () => {
    // Validate phone number
    const phoneValidation = validatePhone(formData.phoneNumber);
    if (!phoneValidation.isValid) {
      showErrorToastFromError(
        { message: phoneValidation.errorMessage || 'Invalid phone number' },
        phoneValidation.errorMessage || 'Invalid phone number'
      );
      return false;
    }

    // Validate password
    const passwordValidation = validatePassword(formData.password);
    if (!passwordValidation.isValid) {
      showErrorToastFromError(
        { message: passwordValidation.errorMessage || 'Invalid password' },
        passwordValidation.errorMessage || 'Invalid password'
      );
      return false;
    }

    // Check password length
    if (formData.password.length < 8) {
      showErrorToastFromError(
        { message: 'Password must be at least 8 characters long' },
        'Password must be at least 8 characters long'
      );
      return false;
    }

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setFieldErrors(prev => ({
        ...prev,
        confirmPassword: 'Passwords do not match'
      }));
      showErrorToastFromError(
        { message: 'Passwords do not match' },
        'Passwords do not match'
      );
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Prepare registration data according to RegisterRequest interface
      const registerData = {
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        email: formData.email.trim().toLowerCase(),
        phoneNumber: formData.phoneNumber.trim(),
        password: formData.password,
        userType: formData.userType
      };

      // Call register API
      const response = await RegisterService.register(registerData);

      // Show success message
      showSuccessToast('Registration successful! Please check your email for verification.');

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
        userType: 'chef'
      });
      // Clear field errors
      setFieldErrors({});

      // Navigate to sign in page after a short delay
      setTimeout(() => {
        navigate('/signin');
      }, 2000);
    } catch (error) {
      // Handle error - showErrorToastFromError will extract the error message
      showErrorToastFromError(error, 'Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
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

          <form className="register-form" onSubmit={handleSubmit} autoComplete="off">
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
                  autoComplete="nope"
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
                  autoComplete="nope"
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
                autoComplete="nope"
                className="form-input"
                placeholder="Enter email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phoneNumber" className="form-label">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                autoComplete="nope"
                className="form-input"
                placeholder="xxxx-xxxx-xx"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password *
                <InfoTooltip
                  id="password-tooltip"
                  content="Password must contain:&#10;• At least 8 characters&#10;• At least one uppercase letter&#10;• At least one lowercase letter"
                  place="right"
                />
              </label>
              <input
                type="password"
                id="password"
                name="password"
                autoComplete="new-password"
                className="form-input"
                placeholder="Create a strong password"
                value={formData.password}
                onChange={handleChange}
                required
                minLength="8"
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password *
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                autoComplete="new-password"
                className={`form-input ${fieldErrors.confirmPassword ? 'error' : ''}`}
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              {fieldErrors.confirmPassword && (
                <small className="form-error">{fieldErrors.confirmPassword}</small>
              )}
            </div>
            
            <button 
              type="submit" 
              className="register-submit-btn"
              disabled={isLoading}
            >
              {isLoading ? 'Creating Account...' : 'Create Account'}
              {!isLoading && (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ marginLeft: '8px' }}>
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
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

