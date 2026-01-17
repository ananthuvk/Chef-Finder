import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import SearchSection from './SearchSection.jsx';
import './Jobs.css';

function Jobs() {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const navigate = useNavigate();
  
  const handleJobClick = (job) => {
    navigate(`/jobs/${job.id}`, { state: { job } });
  };

  const [jobs] = useState([
    {
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
    },
    {
      id: 2,
      title: 'Sous Chef',
      company: 'Modern Bistro',
      location: 'Los Angeles, CA',
      salary: '$50,000 - $70,000',
      type: 'Full-time',
      posted: '1 day ago',
      description: 'Join our dynamic team as a Sous Chef. Experience with French cuisine preferred.',
      skills: ['French Cuisine', 'Kitchen Management']
    },
    {
      id: 3,
      title: 'Pastry Chef',
      company: 'Artisan Bakery',
      location: 'San Francisco, CA',
      salary: '$45,000 - $65,000',
      type: 'Full-time',
      posted: '3 days ago',
      description: 'Looking for a creative Pastry Chef to design and create beautiful desserts and pastries.',
      skills: ['Pastry', 'Dessert Design', 'Baking']
    },
    {
      id: 4,
      title: 'Line Cook',
      company: 'Casual Dining Chain',
      location: 'Chicago, IL',
      salary: '$35,000 - $45,000',
      type: 'Full-time',
      posted: '5 days ago',
      description: 'Fast-paced kitchen environment seeking experienced Line Cook. Great opportunity for growth.',
      skills: ['Line Cooking', 'Fast-paced Environment']
    },
    {
      id: 5,
      title: 'Head Chef',
      company: 'Upscale Hotel',
      location: 'Miami, FL',
      salary: '$70,000 - $100,000',
      type: 'Full-time',
      posted: '1 week ago',
      description: 'Luxury hotel seeking Head Chef to oversee multiple restaurant concepts.',
      skills: ['Hotel Management', 'Multi-concept', 'Fine Dining']
    },
    {
      id: 6,
      title: 'Private Chef',
      company: 'Private Residence',
      location: 'Beverly Hills, CA',
      salary: '$60,000 - $90,000',
      type: 'Full-time',
      posted: '4 days ago',
      description: 'Private family seeking experienced Private Chef for daily meal preparation and special events.',
      skills: ['Private Dining', 'Event Planning', 'Menu Planning']
    },
    {
      id: 7,
      title: 'Catering Chef',
      company: 'Event Catering Co.',
      location: 'Austin, TX',
      salary: '$40,000 - $60,000',
      type: 'Full-time',
      posted: '6 days ago',
      description: 'Catering company looking for a Chef to lead event catering operations.',
      skills: ['Catering', 'Event Management', 'Large Scale Cooking']
    },
    {
      id: 8,
      title: 'Chef de Cuisine',
      company: 'Michelin Star Restaurant',
      location: 'New York, NY',
      salary: '$90,000 - $130,000',
      type: 'Full-time',
      posted: '2 days ago',
      description: 'Prestigious Michelin-starred restaurant seeking Chef de Cuisine with exceptional culinary skills.',
      skills: ['Michelin Experience', 'Fine Dining', 'Culinary Innovation']
    }
  ]);

  return (
    <>
    <Header />
    <SearchSection />

    <div className="jobs-page">
      <div className="container">
        <div className="jobs-header">
          <div className="jobs-header-content">
            <h1 className="jobs-title">Find Your Dream Chef Job</h1>
            <p className="jobs-subtitle">{jobs.length} jobs available</p>
          </div>
          <div className="view-toggle">
            <button
              className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
              title="Grid View"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="2" y="2" width="6" height="6" stroke="currentColor" strokeWidth="2" fill="none"/>
                <rect x="12" y="2" width="6" height="6" stroke="currentColor" strokeWidth="2" fill="none"/>
                <rect x="2" y="12" width="6" height="6" stroke="currentColor" strokeWidth="2" fill="none"/>
                <rect x="12" y="12" width="6" height="6" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </button>
            <button
              className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
              title="List View"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="2" y="2" width="16" height="3" stroke="currentColor" strokeWidth="2" fill="none"/>
                <rect x="2" y="8.5" width="16" height="3" stroke="currentColor" strokeWidth="2" fill="none"/>
                <rect x="2" y="15" width="16" height="3" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </button>
          </div>
        </div>

        <div className={`jobs-content ${viewMode}`}>
          {jobs.map(job => (
            <div 
              key={job.id} 
              className={`job-card ${viewMode}`}
              onClick={() => handleJobClick(job)}
            >
              <div className="job-card-header">
                <div className="job-title-section">
                  <h2 className="job-title">{job.title}</h2>
                  <p className="job-company">{job.company}</p>
                </div>
                <button className="job-save-btn" title="Save job">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M19 21L12 16L5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21Z" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              
              <div className="job-details">
                <div className="job-location">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 8C9.10457 8 10 7.10457 10 6C10 4.89543 9.10457 4 8 4C6.89543 4 6 4.89543 6 6C6 7.10457 6.89543 8 8 8Z" stroke="#666" strokeWidth="1.5"/>
                    <path d="M8 14.6667C10.6667 12 13.3333 9.33333 13.3333 6C13.3333 3.29543 11.1046 1.06667 8.4 1.06667C5.69543 1.06667 3.46667 3.29543 3.46667 6C3.46667 9.33333 6.13333 12 8.8 14.6667" stroke="#666" strokeWidth="1.5"/>
                  </svg>
                  <span>{job.location}</span>
                </div>
                <div className="job-salary">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 1V15M4 5H12M4 9H12" stroke="#0a6629" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <span>{job.salary}</span>
                </div>
                <div className="job-type">
                  <span className="job-type-badge">{job.type}</span>
                </div>
              </div>

              <p className="job-description">{job.description}</p>

              <div className="job-skills">
                {job.skills.map((skill, index) => (
                  <span key={index} className="job-skill-tag">{skill}</span>
                ))}
              </div>

              <div className="job-footer">
                <span className="job-posted">Posted {job.posted}</span>
                <button 
                  className="job-apply-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleJobClick(job);
                  }}
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
    </>
  );
}

export default Jobs;

