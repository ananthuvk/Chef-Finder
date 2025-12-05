import React from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import './JobDetails.css';
import Header from './Header';
import Footer from './Footer';

function JobDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const jobFromState = location.state?.job;
  // Default job data if none provided
  const defaultJob = {
    id: 1,
    title: 'Executive Chef',
    company: 'Fine Dining Restaurant',
    location: 'New York, NY',
    salary: '$80,000 - $120,000',
    type: 'Full-time',
    posted: '2 days ago',
    description: 'We are seeking an experienced Executive Chef to lead our kitchen team. Must have 10+ years of experience in fine dining.',
    skills: ['Fine Dining', 'Menu Development', 'Team Leadership'],
    fullDescription: `We are looking for a highly skilled and experienced Executive Chef to lead our kitchen operations at our prestigious fine dining restaurant. The ideal candidate will have a passion for culinary excellence and a proven track record in creating exceptional dining experiences.

As our Executive Chef, you will be responsible for overseeing all aspects of kitchen operations, including menu development, food preparation, staff management, and maintaining the highest standards of quality and presentation. You will work closely with the restaurant management team to ensure our guests receive an unforgettable dining experience.

This is an excellent opportunity for a creative and driven culinary professional to make their mark in the fine dining industry.`,
    requirements: [
      'Minimum 10 years of experience in fine dining restaurants',
      'Culinary degree or equivalent professional training',
      'Strong leadership and team management skills',
      'Excellent knowledge of French and modern cuisine techniques',
      'Ability to create innovative and seasonal menus',
      'Experience with inventory management and cost control',
      'Strong communication and organizational skills',
      'Ability to work in a fast-paced, high-pressure environment',
      'Food safety certification (ServSafe or equivalent)',
      'Flexibility to work evenings, weekends, and holidays'
    ],
    responsibilities: [
      'Develop and execute seasonal menus that reflect our restaurant\'s vision',
      'Oversee all kitchen operations and ensure consistency in food quality',
      'Manage and train kitchen staff, including sous chefs, line cooks, and prep cooks',
      'Maintain food safety and sanitation standards',
      'Control food costs and manage inventory',
      'Collaborate with suppliers to source high-quality ingredients',
      'Participate in menu tastings and special events',
      'Ensure compliance with health and safety regulations',
      'Create and maintain kitchen schedules',
      'Foster a positive and collaborative work environment'
    ],
    benefits: [
      'Competitive salary with performance bonuses',
      'Health, dental, and vision insurance',
      'Paid time off and holidays',
      'Professional development opportunities',
      'Employee meal program',
      '401(k) retirement plan',
      'Opportunity to work with premium ingredients',
      'Collaborative and supportive team environment'
    ],
    companyInfo: 'Fine Dining Restaurant is a Michelin-recognized establishment known for its innovative cuisine and exceptional service. We pride ourselves on using locally sourced, seasonal ingredients and creating memorable dining experiences for our guests.'
  };

  const jobData = jobFromState || defaultJob;

  return (
    <div className="job-details-page">
      <Header />

      <div className="container">
        <button className="back-button" onClick={() => navigate('/jobs')}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginRight: '8px' }}>
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Jobs
        </button>

        <div className="job-details-content">
          <div className="job-details-main">
            <div className="job-header-section">
              <div className="job-title-section">
                <h1 className="job-details-title">{jobData.title}</h1>
                <p className="job-details-company">{jobData.company}</p>
              </div>
              <div className="job-header-actions">
                <button className="job-save-btn-large" title="Save job">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M19 21L12 16L5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21Z" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Save
                </button>
                <button className="job-share-btn" title="Share job">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 5.12549 15.0077 5.24919 15.0227 5.37063L8.08261 9.79866C7.54305 9.29264 6.80891 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15C6.80891 15 7.54305 14.7074 8.08261 14.2013L15.0227 18.6294C15.0077 18.7508 15 18.8745 15 19C15 20.6569 16.3431 22 18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C17.1911 16 16.457 16.2926 15.9174 16.7987L8.97727 12.3706C8.99231 12.2492 9 12.1255 9 12C9 11.8745 8.99231 11.7508 8.97727 11.6294L15.9174 7.20134C16.457 7.70736 17.1911 8 18 8Z" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Share
                </button>
              </div>
            </div>

            <div className="job-meta-info">
              <div className="job-meta-item">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 10C11.3807 10 12.5 8.88071 12.5 7.5C12.5 6.11929 11.3807 5 10 5C8.61929 5 7.5 6.11929 7.5 7.5C7.5 8.88071 8.61929 10 10 10Z" stroke="#666" strokeWidth="1.5"/>
                  <path d="M10 18.3333C13.3333 15 16.6667 11.6667 16.6667 7.5C16.6667 4.11929 13.8807 1.33333 10.5 1.33333C7.11929 1.33333 4.33333 4.11929 4.33333 7.5C4.33333 11.6667 7.66667 15 11 18.3333" stroke="#666" strokeWidth="1.5"/>
                </svg>
                <span>{jobData.location}</span>
              </div>
              <div className="job-meta-item">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 1V19M5 5H15M5 9H15" stroke="#0a6629" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <span>{jobData.salary}</span>
              </div>
              <div className="job-meta-item">
                <span className="job-type-badge-large">{jobData.type}</span>
              </div>
              <div className="job-meta-item">
                <span className="job-posted-text">Posted {jobData.posted}</span>
              </div>
            </div>

            <div className="job-section">
              <h2 className="job-section-title">Job Description</h2>
              <p className="job-description-text">{jobData.fullDescription || jobData.description}</p>
            </div>

            <div className="job-section">
              <h2 className="job-section-title">Key Responsibilities</h2>
              <ul className="job-list">
                {jobData.responsibilities?.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            </div>

            <div className="job-section">
              <h2 className="job-section-title">Requirements</h2>
              <ul className="job-list">
                {jobData.requirements?.map((requirement, index) => (
                  <li key={index}>{requirement}</li>
                ))}
              </ul>
            </div>

            <div className="job-section">
              <h2 className="job-section-title">Benefits</h2>
              <ul className="job-list">
                {jobData.benefits?.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>

            <div className="job-section">
              <h2 className="job-section-title">Required Skills</h2>
              <div className="job-skills-large">
                {jobData.skills?.map((skill, index) => (
                  <span key={index} className="job-skill-tag-large">{skill}</span>
                ))}
              </div>
            </div>

            <div className="job-section">
              <h2 className="job-section-title">About the Company</h2>
              <p className="job-description-text">{jobData.companyInfo}</p>
            </div>

            <div className="job-apply-section">
              <button className="job-apply-btn-large">Apply Now</button>
              <button className="job-save-btn-secondary">Save Job</button>
            </div>
          </div>

          <div className="job-details-sidebar">
            <div className="sidebar-card">
              <h3 className="sidebar-title">Job Summary</h3>
              <div className="sidebar-info">
                <div className="sidebar-info-item">
                  <span className="sidebar-label">Job Type:</span>
                  <span className="sidebar-value">{jobData.type}</span>
                </div>
                <div className="sidebar-info-item">
                  <span className="sidebar-label">Location:</span>
                  <span className="sidebar-value">{jobData.location}</span>
                </div>
                <div className="sidebar-info-item">
                  <span className="sidebar-label">Salary:</span>
                  <span className="sidebar-value">{jobData.salary}</span>
                </div>
                <div className="sidebar-info-item">
                  <span className="sidebar-label">Posted:</span>
                  <span className="sidebar-value">{jobData.posted}</span>
                </div>
              </div>
            </div>

            <div className="sidebar-card">
              <h3 className="sidebar-title">Quick Apply</h3>
              <p className="sidebar-text">Sign in to apply quickly with your saved resume.</p>
              <button className="sidebar-signin-btn">Sign in to Apply</button>
            </div>

            <div className="sidebar-card">
              <h3 className="sidebar-title">Similar Jobs</h3>
              <div className="similar-jobs">
                <a href="#job1" className="similar-job-link">Sous Chef - Fine Dining</a>
                <a href="#job2" className="similar-job-link">Head Chef - Upscale Restaurant</a>
                <a href="#job3" className="similar-job-link">Chef de Cuisine - Michelin Star</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default JobDetails;

