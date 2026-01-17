import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import './EmployerDashboard.css';

function EmployerDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const stats = {
    totalJobs: 12,
    activeJobs: 8,
    totalApplications: 45,
    pendingApplications: 12,
    interviews: 5,
    hired: 3
  };

  const recentJobs = [
    {
      id: 1,
      title: 'Executive Chef',
      status: 'Active',
      applications: 8,
      views: 156,
      posted: '2 days ago',
      location: 'New York, NY'
    },
    {
      id: 2,
      title: 'Sous Chef',
      status: 'Active',
      applications: 5,
      views: 98,
      posted: '5 days ago',
      location: 'Los Angeles, CA'
    },
    {
      id: 3,
      title: 'Pastry Chef',
      status: 'Draft',
      applications: 0,
      views: 0,
      posted: 'Not posted',
      location: 'San Francisco, CA'
    },
    {
      id: 4,
      title: 'Line Cook',
      status: 'Closed',
      applications: 15,
      views: 234,
      posted: '2 weeks ago',
      location: 'Chicago, IL'
    }
  ];

  const recentApplications = [
    {
      id: 1,
      candidateName: 'John Smith',
      jobTitle: 'Executive Chef',
      appliedDate: '2 days ago',
      status: 'New',
      experience: '12 years',
      location: 'New York, NY'
    },
    {
      id: 2,
      candidateName: 'Sarah Johnson',
      jobTitle: 'Sous Chef',
      appliedDate: '3 days ago',
      status: 'Reviewing',
      experience: '8 years',
      location: 'Los Angeles, CA'
    },
    {
      id: 3,
      candidateName: 'Michael Brown',
      jobTitle: 'Executive Chef',
      appliedDate: '4 days ago',
      status: 'Interview Scheduled',
      experience: '15 years',
      location: 'New York, NY'
    },
    {
      id: 4,
      candidateName: 'Emily Davis',
      jobTitle: 'Line Cook',
      appliedDate: '1 week ago',
      status: 'Hired',
      experience: '3 years',
      location: 'Chicago, IL'
    }
  ];

  const StatCard = ({ icon, value, label, color }) => (
    <div className="stat-card">
      <div className="stat-icon" style={{ backgroundColor: color }}>
        {icon}
      </div>
      <div className="stat-content">
        <div className="stat-value">{value}</div>
        <div className="stat-label">{label}</div>
      </div>
    </div>
  );

  return (
    <div className="employer-dashboard-page">
      <Header />
      
      <div className="dashboard-container">
        <div className="dashboard-header">
          <div>
            <h1 className="dashboard-title">Employer Dashboard</h1>
            <p className="dashboard-subtitle">Manage your job postings and applications</p>
          </div>
          <button className="btn-post-job" onClick={() => navigate('/employers')}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ marginRight: '8px' }}>
              <path d="M10 2V18M2 10H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Post New Job
          </button>
        </div>

        <div className="dashboard-tabs">
          <button 
            className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button 
            className={`tab-btn ${activeTab === 'jobs' ? 'active' : ''}`}
            onClick={() => setActiveTab('jobs')}
          >
            My Jobs
          </button>
          <button 
            className={`tab-btn ${activeTab === 'applications' ? 'active' : ''}`}
            onClick={() => setActiveTab('applications')}
          >
            Applications
          </button>
          <button 
            className={`tab-btn ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            Settings
          </button>
        </div>

        {activeTab === 'overview' && (
          <div className="dashboard-content">
            <div className="stats-grid">
              <StatCard 
                icon="📋" 
                value={stats.totalJobs} 
                label="Total Jobs" 
                color="#e3f2fd"
              />
              <StatCard 
                icon="✅" 
                value={stats.activeJobs} 
                label="Active Jobs" 
                color="#e8f5e9"
              />
              <StatCard 
                icon="📨" 
                value={stats.totalApplications} 
                label="Total Applications" 
                color="#fff3e0"
              />
              <StatCard 
                icon="⏳" 
                value={stats.pendingApplications} 
                label="Pending Review" 
                color="#f3e5f5"
              />
              <StatCard 
                icon="📅" 
                value={stats.interviews} 
                label="Interviews" 
                color="#e0f2f1"
              />
              <StatCard 
                icon="🎉" 
                value={stats.hired} 
                label="Hired" 
                color="#e8f5e9"
              />
            </div>

            <div className="dashboard-sections">
              <div className="dashboard-section">
                <div className="section-header">
                  <h2 className="section-title">Recent Job Postings</h2>
                  <button className="view-all-btn" onClick={() => setActiveTab('jobs')}>
                    View All →
                  </button>
                </div>
                <div className="jobs-table">
                  <table>
                    <thead>
                      <tr>
                        <th>Job Title</th>
                        <th>Location</th>
                        <th>Status</th>
                        <th>Applications</th>
                        <th>Views</th>
                        <th>Posted</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentJobs.map(job => (
                        <tr key={job.id}>
                          <td>
                            <div className="job-title-cell">
                              <strong>{job.title}</strong>
                            </div>
                          </td>
                          <td>{job.location}</td>
                          <td>
                            <span className={`status-badge ${job.status.toLowerCase()}`}>
                              {job.status}
                            </span>
                          </td>
                          <td>{job.applications}</td>
                          <td>{job.views}</td>
                          <td>{job.posted}</td>
                          <td>
                            <div className="action-buttons">
                              <button className="action-btn view">View</button>
                              <button className="action-btn edit">Edit</button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="dashboard-section">
                <div className="section-header">
                  <h2 className="section-title">Recent Applications</h2>
                  <button className="view-all-btn" onClick={() => setActiveTab('applications')}>
                    View All →
                  </button>
                </div>
                <div className="applications-list">
                  {recentApplications.map(application => (
                    <div key={application.id} className="application-card">
                      <div className="application-header">
                        <div className="candidate-info">
                          <div className="candidate-avatar">
                            {application.candidateName.charAt(0)}
                          </div>
                          <div>
                            <div className="candidate-name">{application.candidateName}</div>
                            <div className="candidate-details">
                              {application.jobTitle} • {application.experience} experience
                            </div>
                          </div>
                        </div>
                        <span className={`status-badge ${application.status.toLowerCase().replace(' ', '-')}`}>
                          {application.status}
                        </span>
                      </div>
                      <div className="application-footer">
                        <span className="application-location">{application.location}</span>
                        <span className="application-date">Applied {application.appliedDate}</span>
                        <div className="application-actions">
                          <button className="action-btn view">View Profile</button>
                          <button className="action-btn contact">Contact</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'jobs' && (
          <div className="dashboard-content">
            <div className="jobs-header">
              <h2 className="section-title">My Job Postings</h2>
              <button className="btn-primary" onClick={() => navigate('/employers')}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ marginRight: '8px' }}>
                  <path d="M10 2V18M2 10H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                Post New Job
              </button>
            </div>
            <div className="jobs-table">
              <table>
                <thead>
                  <tr>
                    <th>Job Title</th>
                    <th>Location</th>
                    <th>Status</th>
                    <th>Applications</th>
                    <th>Views</th>
                    <th>Posted</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {recentJobs.map(job => (
                    <tr key={job.id}>
                      <td>
                        <div className="job-title-cell">
                          <strong>{job.title}</strong>
                        </div>
                      </td>
                      <td>{job.location}</td>
                      <td>
                        <span className={`status-badge ${job.status.toLowerCase()}`}>
                          {job.status}
                        </span>
                      </td>
                      <td>{job.applications}</td>
                      <td>{job.views}</td>
                      <td>{job.posted}</td>
                      <td>
                        <div className="action-buttons">
                          <button className="action-btn view">View</button>
                          <button className="action-btn edit">Edit</button>
                          <button className="action-btn delete">Delete</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'applications' && (
          <div className="dashboard-content">
            <div className="applications-header">
              <h2 className="section-title">All Applications</h2>
              <div className="filter-buttons">
                <button className="filter-btn active">All</button>
                <button className="filter-btn">New</button>
                <button className="filter-btn">Reviewing</button>
                <button className="filter-btn">Interview</button>
                <button className="filter-btn">Hired</button>
              </div>
            </div>
            <div className="applications-list">
              {recentApplications.map(application => (
                <div key={application.id} className="application-card">
                  <div className="application-header">
                    <div className="candidate-info">
                      <div className="candidate-avatar">
                        {application.candidateName.charAt(0)}
                      </div>
                      <div>
                        <div className="candidate-name">{application.candidateName}</div>
                        <div className="candidate-details">
                          {application.jobTitle} • {application.experience} experience • {application.location}
                        </div>
                      </div>
                    </div>
                    <span className={`status-badge ${application.status.toLowerCase().replace(' ', '-')}`}>
                      {application.status}
                    </span>
                  </div>
                  <div className="application-footer">
                    <span className="application-date">Applied {application.appliedDate}</span>
                    <div className="application-actions">
                      <button className="action-btn view">View Profile</button>
                      <button className="action-btn contact">Contact</button>
                      <button className="action-btn schedule">Schedule Interview</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="dashboard-content">
            <div className="settings-section">
              <h2 className="section-title">Account Settings</h2>
              <div className="settings-form">
                <div className="form-group">
                  <label className="form-label">Company Name</label>
                  <input type="text" className="form-input" defaultValue="Fine Dining Restaurant" />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-input" defaultValue="contact@restaurant.com" />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone</label>
                  <input type="tel" className="form-input" defaultValue="+1 (555) 123-4567" />
                </div>
                <div className="form-group">
                  <label className="form-label">Company Website</label>
                  <input type="url" className="form-input" defaultValue="https://www.restaurant.com" />
                </div>
                <div className="form-group">
                  <label className="form-label">Company Description</label>
                  <textarea className="form-textarea" rows="4" defaultValue="Award-winning fine dining restaurant..."></textarea>
                </div>
                <button className="btn-primary">Save Changes</button>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default EmployerDashboard;

