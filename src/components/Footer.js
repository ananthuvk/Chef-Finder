import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="footer-links-row mb-3">
              <a href="#career-advice" className="me-3 mb-2">Career advice</a>
              <a href="#browse-jobs" className="me-3 mb-2">Browse jobs</a>
              <a href="#browse-companies" className="me-3 mb-2">Browse companies</a>
              <a href="#salaries" className="me-3 mb-2">Salaries</a>
              <a href="#events" className="me-3 mb-2">Events</a>
              <a href="#about" className="me-3 mb-2">About</a>
              <a href="#help" className="me-3 mb-2">Help</a>
            </div>
            <div className="footer-links-row mb-3">
              <a href="#post-job" className="me-3">Post a job</a>
            </div>
            <div className="footer-bottom pt-3">
              <span className="me-3">©2025 CHEF FINDER</span>
              <a href="#privacy" className="me-3">Privacy</a>
              <a href="#terms">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

