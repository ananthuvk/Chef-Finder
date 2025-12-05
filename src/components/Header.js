import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '../assets/images/CHEF_FINDER.png';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userType, setUserType] = useState(null);
  const [userData, setUserData] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const currentPage = location.pathname === '/' ? 'home' : location.pathname.replace('/', '');

  useEffect(() => {
    // Check if user is signed in from localStorage
    const signedIn = localStorage.getItem('isSignedIn') === 'true';
    const storedUserType = localStorage.getItem('userType');
    setIsSignedIn(signedIn);
    setUserType(storedUserType);
    
    // Get user data from localStorage or use defaults
    if (signedIn) {
      const storedUserData = localStorage.getItem('userData');
      if (storedUserData) {
        setUserData(JSON.parse(storedUserData));
      } else {
        // Default user data based on type
        const defaultData = storedUserType === 'employer' 
          ? {
              name: 'Restaurant Owner',
              email: 'employer@cheffinder.com',
              profileImage: null
            }
          : {
              name: 'Michael Johnson',
              email: 'chef@cheffinder.com',
              profileImage: null
            };
        setUserData(defaultData);
        localStorage.setItem('userData', JSON.stringify(defaultData));
      }
    }
  }, [location]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    if (showDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDropdown]);

  const handleLogout = () => {
    localStorage.removeItem('isSignedIn');
    localStorage.removeItem('userType');
    localStorage.removeItem('userData');
    setIsSignedIn(false);
    setUserData(null);
    setShowDropdown(false);
    navigate('/');
  };

  const handleProfileClick = () => {
    setShowDropdown(false);
    if (userType === 'employer') {
      navigate('/employer-dashboard');
    } else {
      // Navigate to user dashboard with profile view
      navigate('/user-dashboard?view=profile');
    }
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const getUserInitials = (name) => {
    if (!name) return 'U';
    const parts = name.trim().split(' ');
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return name.charAt(0).toUpperCase();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="logo" className="img-fluid" style={{ maxHeight: '40px' }} />
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link 
                className={`nav-link ${currentPage === 'home' ? 'active' : ''}`} 
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${currentPage === 'jobs' ? 'active' : ''}`} 
                to="/jobs"
              >
                Jobs
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${currentPage === 'company-reviews' ? 'active' : ''}`} 
                to="/company-reviews"
              >
                Company reviews
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${currentPage === 'salary-guide' ? 'active' : ''}`} 
                to="/salary-guide"
              >
                Salary guide
              </Link>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            {isSignedIn ? (
              <div className="header-user-menu" ref={dropdownRef}>
                <button 
                  className="header-user-profile-btn"
                  onClick={toggleDropdown}
                  aria-expanded={showDropdown}
                  aria-haspopup="true"
                >
                  <div className="header-user-avatar">
                    {userData?.profileImage ? (
                      <img src={userData.profileImage} alt={userData.name} />
                    ) : (
                      <span>{getUserInitials(userData?.name || 'User')}</span>
                    )}
                  </div>
                  <span className="header-user-name">{userData?.name || 'User'}</span>
                  <svg 
                    className={`header-dropdown-arrow ${showDropdown ? 'open' : ''}`}
                    width="16" 
                    height="16" 
                    viewBox="0 0 16 16" 
                    fill="none"
                  >
                    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                
                {showDropdown && (
                  <div className="header-user-dropdown">
                    <div className="dropdown-header">
                      <div className="dropdown-user-info">
                        <div className="dropdown-user-avatar">
                          {userData?.profileImage ? (
                            <img src={userData.profileImage} alt={userData.name} />
                          ) : (
                            <span>{getUserInitials(userData?.name || 'User')}</span>
                          )}
                        </div>
                        <div className="dropdown-user-details">
                          <div className="dropdown-user-name">{userData?.name || 'User'}</div>
                          <div className="dropdown-user-email">{userData?.email || ''}</div>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown-divider"></div>
                    <button 
                      className="dropdown-item"
                      onClick={handleProfileClick}
                    >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M10 10C12.7614 10 15 7.76142 15 5C15 2.23858 12.7614 0 10 0C7.23858 0 5 2.23858 5 5C5 7.76142 7.23858 10 10 10Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                        <path d="M10 12C5.58172 12 2 14.6863 2 18V20H18V18C18 14.6863 14.4183 12 10 12Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                      </svg>
                      <span>View Profile</span>
                    </button>
                    <div className="dropdown-divider"></div>
                    <button 
                      className="dropdown-item"
                      onClick={handleLogout}
                    >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M7 17H3C2.44772 17 2 16.5523 2 16V4C2 3.44772 2.44772 3 3 3H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M13 14L17 10L13 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M17 10H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                      <span>Log out</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link to="/signin" className="header-link me-3">
                  Sign in
                </Link>
                <span className="header-separator"></span>
                <Link to="/employers" className="header-link ms-3">Employers / Post Job</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;

