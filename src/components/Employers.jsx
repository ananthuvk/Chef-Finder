import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import './Employers.css';

function Employers() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    jobTitle: '',
    company: '',
    location: '',
    jobType: 'Full-time',
    salary: '',
    description: '',
    requirements: '',
    responsibilities: '',
    benefits: '',
    skills: '',
    email: '',
    phone: '',
    companyWebsite: ''
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
    // Handle job posting logic here
    console.log('Job posting data:', formData);
    alert('Job posted successfully!');
    // Reset form or navigate
    // navigate('/jobs');
  };

  return (
    <div className="employers-page">
      <Header />
      
      <div className="employers-hero">
        <div className="container">
          <div className="employers-hero-content">
            <h1 className="employers-hero-title">Find the Perfect Chef for Your Restaurant</h1>
            <p className="employers-hero-subtitle">
              Post your job listing and connect with talented culinary professionals
            </p>
          </div>
        </div>
      </div>

      <div className="employers-container">
        <div className="employers-content">
          <div className="employers-info">
            <h2 className="employers-info-title">Why Post on Chef Finder?</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M20 5L25 15L35 17L27 25L28 35L20 30L12 35L13 25L5 17L15 15L20 5Z" fill="#0e78b7"/>
                  </svg>
                </div>
                <h3 className="benefit-title">Reach Qualified Candidates</h3>
                <p className="benefit-text">Connect with experienced chefs and culinary professionals actively seeking opportunities.</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M20 5L25 15L35 17L27 25L28 35L20 30L12 35L13 25L5 17L15 15L20 5Z" fill="#0e78b7"/>
                  </svg>
                </div>
                <h3 className="benefit-title">Easy Job Posting</h3>
                <p className="benefit-text">Post your job in minutes with our simple and intuitive form.</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M20 5L25 15L35 17L27 25L28 35L20 30L12 35L13 25L5 17L15 15L20 5Z" fill="#0e78b7"/>
                  </svg>
                </div>
                <h3 className="benefit-title">Targeted Search</h3>
                <p className="benefit-text">Candidates can easily find your job through our advanced search filters.</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M20 5L25 15L35 17L27 25L28 35L20 30L12 35L13 25L5 17L15 15L20 5Z" fill="#0e78b7"/>
                  </svg>
                </div>
                <h3 className="benefit-title">Manage Applications</h3>
                <p className="benefit-text">Review and manage applications all in one place.</p>
              </div>
            </div>
          </div>

          <div className="post-job-section">
            <div className="post-job-card">
              <div className="post-job-header">
                <h2 className="post-job-title">Post a Job</h2>
                <p className="post-job-subtitle">Fill out the form below to post your job listing</p>
              </div>

              <form className="post-job-form" onSubmit={handleSubmit}>
                <div className="form-section">
                  <h3 className="form-section-title">Job Information</h3>
                  
                  <div className="form-group">
                    <label htmlFor="jobTitle" className="form-label">
                      Job Title <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="jobTitle"
                      name="jobTitle"
                      className="form-input"
                      placeholder="e.g., Executive Chef, Sous Chef"
                      value={formData.jobTitle}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="company" className="form-label">
                        Company Name <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="form-input"
                        placeholder="Your company name"
                        value={formData.company}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="location" className="form-label">
                        Location <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        className="form-input"
                        placeholder="e.g., New York, NY"
                        value={formData.location}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="jobType" className="form-label">
                        Job Type <span className="required">*</span>
                      </label>
                      <select
                        id="jobType"
                        name="jobType"
                        className="form-input"
                        value={formData.jobType}
                        onChange={handleChange}
                        required
                      >
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Contract">Contract</option>
                        <option value="Temporary">Temporary</option>
                        <option value="Internship">Internship</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="salary" className="form-label">
                        Salary Range
                      </label>
                      <input
                        type="text"
                        id="salary"
                        name="salary"
                        className="form-input"
                        placeholder="e.g., $50,000 - $70,000"
                        value={formData.salary}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="companyWebsite" className="form-label">
                      Company Website
                    </label>
                    <input
                      type="url"
                      id="companyWebsite"
                      name="companyWebsite"
                      className="form-input"
                      placeholder="https://www.example.com"
                      value={formData.companyWebsite}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-section">
                  <h3 className="form-section-title">Job Description</h3>
                  
                  <div className="form-group">
                    <label htmlFor="description" className="form-label">
                      Job Description <span className="required">*</span>
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      className="form-textarea"
                      rows="6"
                      placeholder="Provide a detailed description of the job..."
                      value={formData.description}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="responsibilities" className="form-label">
                      Key Responsibilities
                    </label>
                    <textarea
                      id="responsibilities"
                      name="responsibilities"
                      className="form-textarea"
                      rows="5"
                      placeholder="List the main responsibilities (one per line or separated by commas)..."
                      value={formData.responsibilities}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="requirements" className="form-label">
                      Requirements
                    </label>
                    <textarea
                      id="requirements"
                      name="requirements"
                      className="form-textarea"
                      rows="5"
                      placeholder="List the requirements (one per line or separated by commas)..."
                      value={formData.requirements}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="benefits" className="form-label">
                      Benefits
                    </label>
                    <textarea
                      id="benefits"
                      name="benefits"
                      className="form-textarea"
                      rows="4"
                      placeholder="List the benefits offered (one per line or separated by commas)..."
                      value={formData.benefits}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="skills" className="form-label">
                      Required Skills
                    </label>
                    <input
                      type="text"
                      id="skills"
                      name="skills"
                      className="form-input"
                      placeholder="e.g., Fine Dining, Menu Development, Team Leadership (comma separated)"
                      value={formData.skills}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-section">
                  <h3 className="form-section-title">Contact Information</h3>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        Email <span className="required">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-input"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone" className="form-label">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="form-input"
                        placeholder="(555) 123-4567"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-actions">
                  <button type="button" className="btn-cancel" onClick={() => navigate('/')}>
                    Cancel
                  </button>
                  <button type="submit" className="btn-submit">
                    Post Job
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Employers;

