import React, { useState, useEffect } from 'react';
import { useNavigate, Link, useSearchParams } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import './UserDashboard.css';

function UserDashboard() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [activeView, setActiveView] = useState('home'); // 'home', 'my-jobs', 'profile', 'career-insights'
  
  useEffect(() => {
    // Check if user is signed in and is a chef
    const isSignedIn = localStorage.getItem('isSignedIn') === 'true';
    const userType = localStorage.getItem('userType');
    
    if (!isSignedIn || userType !== 'chef') {
      // Redirect to sign in if not authenticated as chef
      navigate('/signin');
    }

    // Check for view parameter from URL
    const viewParam = searchParams.get('view');
    if (viewParam === 'profile') {
      setActiveView('profile');
    }
  }, [navigate, searchParams]);
  
  const [user, setUser] = useState({
    name: 'Michael Johnson',
    email: 'michael.johnson@example.com',
    phone: '+1 (555) 123-4567',
    role: 'Graphic Design | Product Design | lead UI/UX Design | HFI-CUA',
    location: 'New York, NY',
    bio: 'Experienced UI/UX Designer with a passion for creating intuitive and beautiful user experiences. Specialized in product design and user research. Over 8 years of experience working with startups and Fortune 500 companies to create user-centered designs that drive business results.',
    experience: '8+ years',
    skills: ['UI/UX Design', 'Product Design', 'User Research', 'Prototyping', 'Figma', 'Adobe XD', 'Sketch', 'InVision', 'HTML/CSS', 'JavaScript'],
    education: 'Bachelor of Fine Arts in Graphic Design - New York University (2015)',
    certifications: [
      { name: 'Certified Usability Analyst (CUA)', issuer: 'Human Factors International', year: '2020' },
      { name: 'Google UX Design Certificate', issuer: 'Google', year: '2021' },
      { name: 'Interaction Design Foundation', issuer: 'IDF', year: '2022' }
    ],
    profileImage: null, // You can add profile image later
    resume: 'resume.pdf' // Dummy resume file name
  });

  const [resumeFile, setResumeFile] = useState(null);
  const [resumePreviewUrl, setResumePreviewUrl] = useState(null);

  useEffect(() => {
    // Load user data from localStorage if available
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      const parsedData = JSON.parse(storedUserData);
      setUser(prev => ({ ...prev, ...parsedData }));
    }
  }, []);

  const topJobPicks = [
    {
      id: 1,
      title: 'Senior UX Designer - Contract',
      company: 'Korn Ferry',
      location: 'India (Remote)',
      status: 'Actively reviewing applicants',
      tags: ['Promoted', 'Easy Apply'],
      posted: '2 days ago'
    },
    {
      id: 2,
      title: 'User Interface Designer',
      company: 'Kovaion Consulting',
      location: 'Coimbatore (On-site)',
      status: 'Actively reviewing applicants',
      tags: ['Promoted', 'Easy Apply'],
      posted: '1 day ago'
    },
    {
      id: 3,
      title: 'Principal UX Designer-Remote',
      company: 'Cimpress',
      location: 'Bengaluru (Remote)',
      status: 'Actively reviewing applicants',
      tags: ['Promoted', 'Easy Apply'],
      posted: '3 days ago'
    }
  ];

  const companies = [
    {
      id: 1,
      name: 'Omnicom Global Solutions',
      logo: 'OGS',
      badge: "We're Proud to be Great Place to Work Certified!",
      employees: '1001-5000 employees',
      location: 'Greater Coimbatore Area',
      alumni: '2 school alumni work here'
    },
    {
      id: 2,
      name: 'Toppan Merrill',
      logo: 'TOPPAN MERRILL',
      employees: '1001-5000 employees',
      location: 'Greater Coimbatore Area',
      alumni: '23 school alumni work here'
    },
    {
      id: 3,
      name: 'Quinn',
      logo: 'Q',
      tagline: 'INTRODUCING Quinn Advancing business. Expanding possible.',
      employees: '1001-5000 employees',
      location: 'Greater Coimbatore Area'
    },
    {
      id: 4,
      name: 'Thoughtv',
      logo: '/tw',
      employees: '10001+ employees',
      location: 'Greater Coimbatore Area'
    }
  ];

  // My Jobs List - saved and applied jobs
  const myJobs = [
    {
      id: 1,
      title: 'Executive Chef',
      company: 'Fine Dining Restaurant',
      location: 'New York, NY',
      salary: '$80,000 - $120,000',
      type: 'Full-time',
      posted: '2 days ago',
      status: 'Applied',
      appliedDate: '1 day ago'
    },
    {
      id: 2,
      title: 'Sous Chef',
      company: 'Modern Bistro',
      location: 'Los Angeles, CA',
      salary: '$50,000 - $70,000',
      type: 'Full-time',
      posted: '1 day ago',
      status: 'Saved',
      savedDate: '2 days ago'
    },
    {
      id: 3,
      title: 'Pastry Chef',
      company: 'Artisan Bakery',
      location: 'San Francisco, CA',
      salary: '$45,000 - $65,000',
      type: 'Full-time',
      posted: '3 days ago',
      status: 'Applied',
      appliedDate: '2 days ago'
    },
    {
      id: 4,
      title: 'Head Chef',
      company: 'Upscale Hotel',
      location: 'Miami, FL',
      salary: '$70,000 - $100,000',
      type: 'Full-time',
      posted: '1 week ago',
      status: 'Saved',
      savedDate: '5 days ago'
    }
  ];

  const handleDismissJob = (jobId) => {
    // Handle job dismissal
    console.log('Dismissing job:', jobId);
  };

  const handleJobClick = (job) => {
    navigate(`/jobs/${job.id}`);
  };

  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        alert('Please upload a PDF or Word document');
        return;
      }
      
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('File size should be less than 5MB');
        return;
      }

      setResumeFile(file);
      setUser(prev => ({ ...prev, resume: file.name }));
      
      // Create preview URL for PDF files
      if (file.type === 'application/pdf') {
        const url = URL.createObjectURL(file);
        setResumePreviewUrl(url);
      } else {
        setResumePreviewUrl(null);
      }
      
      // Store in localStorage (in a real app, you'd upload to a server)
      localStorage.setItem('userResume', file.name);
    }
  };

  const handleResumeRemove = () => {
    // Clean up the preview URL
    if (resumePreviewUrl) {
      URL.revokeObjectURL(resumePreviewUrl);
    }
    setResumeFile(null);
    setResumePreviewUrl(null);
    setUser(prev => ({ ...prev, resume: null }));
    localStorage.removeItem('userResume');
  };

  useEffect(() => {
    // Load resume from localStorage if available
    const storedResume = localStorage.getItem('userResume');
    if (storedResume) {
      setUser(prev => ({ ...prev, resume: storedResume }));
    }

    // Cleanup function to revoke object URLs
    return () => {
      if (resumePreviewUrl) {
        URL.revokeObjectURL(resumePreviewUrl);
      }
    };
  }, []);

  // Calculate job statistics
  const jobStats = {
    total: myJobs.length,
    applied: myJobs.filter(job => job.status === 'Applied').length,
    saved: myJobs.filter(job => job.status === 'Saved').length,
    pending: myJobs.filter(job => job.status === 'Applied').length, // Can be enhanced with actual status
  };

  return (
    <div className="user-dashboard-page">
      <Header />
      
      <div className="user-dashboard-container">
        <div className="user-dashboard-layout">
          {/* Left Sidebar */}
          <aside className="user-dashboard-sidebar">
            {/* User Profile Card */}
            <div className="user-profile-card">
              <div className="user-profile-image">
                {user.profileImage ? (
                  <img src={user.profileImage} alt={user.name} />
                ) : (
                  <div className="user-profile-avatar">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                )}
              </div>
              <div className="user-profile-info">
                <h3 className="user-profile-name">
                  {user.name}
                  <span className="verified-badge">✓</span>
                </h3>
                <p className="user-profile-role">{user.role}</p>
                <p className="user-profile-location">{user.location}</p>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="user-dashboard-nav">
             
              <button 
                className={`nav-link-item ${activeView === 'my-jobs' ? 'active' : ''}`}
                onClick={() => setActiveView('my-jobs')}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginRight: '8px' }}>
                  <path d="M13 2H3C2.44772 2 2 2.44772 2 3V13C2 13.5523 2.44772 14 3 14H13C13.5523 14 14 13.5523 14 13V3C14 2.44772 13.5523 2 13 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5 2V14M11 2V14M2 5H14M2 9H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <span>My jobs</span>
              </button>
              <button 
                className={`nav-link-item ${activeView === 'profile' ? 'active' : ''}`}
                onClick={() => setActiveView('profile')}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginRight: '8px' }}>
                  <circle cx="8" cy="6" r="3" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M2.5 13C2.5 10.7909 4.29086 9 6.5 9H9.5C11.7091 9 13.5 10.7909 13.5 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <span>Profile</span>
              </button>
              <button 
                className={`nav-link-item ${activeView === 'career-insights' ? 'active' : ''}`}
                onClick={() => setActiveView('career-insights')}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginRight: '8px' }}>
                  <rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <path d="M6 6H10M6 10H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <span>My Career Insights</span>
              </button>
            </nav>

            
          </aside>

          {/* Main Content */}
          <main className="user-dashboard-main">
            {activeView === 'home' && (
              <>
                {/* Top Job Picks Section */}
                <section className="job-picks-section">
                  <div className="section-header">
                    <div>
                      <h2 className="section-title">Top job picks for you</h2>
                      <p className="section-subtitle">
                        Based on your profile, preferences, and activity like applies, searches, and saves.
                      </p>
                    </div>
                  </div>

                  <div className="job-picks-list">
                    {topJobPicks.map(job => (
                      <div key={job.id} className="job-pick-card">
                        <button 
                          className="job-dismiss-btn"
                          onClick={() => handleDismissJob(job.id)}
                          aria-label="Dismiss job"
                        >
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                        </button>
                        <div className="job-pick-content" onClick={() => handleJobClick(job)}>
                          <h3 className="job-pick-title">{job.title}</h3>
                          <p className="job-pick-company">{job.company}</p>
                          <p className="job-pick-location">{job.location}</p>
                          <div className="job-pick-status">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                              <circle cx="8" cy="8" r="6" stroke="#0a6629" strokeWidth="1.5" fill="none"/>
                              <path d="M6 8L7.5 9.5L10 7" stroke="#0a6629" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>{job.status}</span>
                          </div>
                          <div className="job-pick-tags">
                            {job.tags.map((tag, index) => (
                              <span key={index} className="job-pick-tag">{tag}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button className="show-all-btn" onClick={() => navigate('/jobs')}>
                    Show all →
                  </button>
                </section>

                {/* Explore Companies Section */}
                <section className="companies-section">
                  <div className="section-header">
                    <h2 className="section-title">
                      Explore companies that hire for your skills
                      <span className="promoted-badge">Promoted</span>
                    </h2>
                  </div>

                  <div className="companies-carousel">
                    <button className="carousel-btn carousel-btn-left" aria-label="Previous">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M12 15L7 10L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                    
                    <div className="companies-list">
                      {companies.map(company => (
                        <div key={company.id} className="company-card">
                          <div className="company-logo">
                            {company.logo}
                          </div>
                          {company.name && (
                            <h3 className="company-name">{company.name}</h3>
                          )}
                          {company.tagline && (
                            <p className="company-tagline">{company.tagline}</p>
                          )}
                          {company.badge && (
                            <div className="company-badge">{company.badge}</div>
                          )}
                          <div className="company-details">
                            {company.employees && (
                              <p className="company-detail">{company.employees}</p>
                            )}
                            {company.location && (
                              <p className="company-detail">{company.location}</p>
                            )}
                            {company.alumni && (
                              <p className="company-alumni">{company.alumni}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    <button className="carousel-btn carousel-btn-right" aria-label="Next">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M8 5L13 10L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </section>
              </>
            )}

            {activeView === 'my-jobs' && (
              <>
               <div className="my-jobs-stats">
               <div className="job-stat-card">
                 <div className="job-stat-icon total">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                     <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                     <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                   </svg>
                 </div>
                 <div className="job-stat-content">
                   <div className="job-stat-value">{jobStats.total}</div>
                   <div className="job-stat-label">Total Jobs</div>
                 </div>
               </div>

               <div className="job-stat-card">
                 <div className="job-stat-icon applied">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                     <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                     <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                   </svg>
                 </div>
                 <div className="job-stat-content">
                   <div className="job-stat-value">{jobStats.applied}</div>
                   <div className="job-stat-label">Applied</div>
                 </div>
               </div>

               <div className="job-stat-card">
                 <div className="job-stat-icon saved">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                     <path d="M19 21L12 16L5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                   </svg>
                 </div>
                 <div className="job-stat-content">
                   <div className="job-stat-value">{jobStats.saved}</div>
                   <div className="job-stat-label">Saved</div>
                 </div>
               </div>

               <div className="job-stat-card">
                 <div className="job-stat-icon pending">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                     <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                     <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                   </svg>
                 </div>
                 <div className="job-stat-content">
                   <div className="job-stat-value">{jobStats.pending}</div>
                   <div className="job-stat-label">Pending Review</div>
                 </div>
               </div>
             </div>
              <section className="my-jobs-section">
                <div className="section-header">
                  <div>
                    <h2 className="section-title">My Jobs</h2>
                    <p className="section-subtitle">
                      View your saved and applied jobs
                    </p>
                  </div>
                </div>

                {/* Job Statistics */}
               

                <div className="my-jobs-list">
                  {myJobs.map(job => (
                    <div key={job.id} className="my-job-card" onClick={() => handleJobClick(job)}>
                      <div className="my-job-header">
                        <div className="my-job-title-section">
                          <h3 className="my-job-title">{job.title}</h3>
                          <p className="my-job-company">{job.company}</p>
                        </div>
                        <span className={`my-job-status-badge ${job.status.toLowerCase()}`}>
                          {job.status}
                        </span>
                      </div>
                      
                      <div className="my-job-details">
                        <div className="my-job-location">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8 8C9.10457 8 10 7.10457 10 6C10 4.89543 9.10457 4 8 4C6.89543 4 6 4.89543 6 6C6 7.10457 6.89543 8 8 8Z" stroke="#666" strokeWidth="1.5"/>
                            <path d="M8 14.6667C10.6667 12 13.3333 9.33333 13.3333 6C13.3333 3.29543 11.1046 1.06667 8.4 1.06667C5.69543 1.06667 3.46667 3.29543 3.46667 6C3.46667 9.33333 6.13333 12 8.8 14.6667" stroke="#666" strokeWidth="1.5"/>
                          </svg>
                          <span>{job.location}</span>
                        </div>
                        <div className="my-job-salary">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8 1V15M4 5H12M4 9H12" stroke="#0a6629" strokeWidth="1.5" strokeLinecap="round"/>
                          </svg>
                          <span>{job.salary}</span>
                        </div>
                        <div className="my-job-type">
                          <span className="my-job-type-badge">{job.type}</span>
                        </div>
                      </div>

                      <div className="my-job-footer">
                        <span className="my-job-date">
                          {job.status === 'Applied' ? `Applied ${job.appliedDate}` : `Saved ${job.savedDate}`}
                        </span>
                        <span className="my-job-posted">Posted {job.posted}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {myJobs.length === 0 && (
                  <div className="my-jobs-empty">
                    <p>You haven't saved or applied to any jobs yet.</p>
                    <button className="btn-browse-jobs" onClick={() => navigate('/jobs')}>
                      Browse Jobs
                    </button>
                  </div>
                )}
              </section>
              </>
            )}

            {activeView === 'profile' && (
              <section className="profile-section">
                <div className="section-header">
                  <div>
                    <h2 className="section-title">Profile</h2>
                    <p className="section-subtitle">
                      Manage your profile information
                    </p>
                  </div>
                  <button className="btn-edit-profile">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginRight: '8px' }}>
                      <path d="M11.3333 2.00001C11.5084 1.8249 11.7163 1.68607 11.9447 1.59231C12.1731 1.49854 12.4173 1.45166 12.6633 1.45434C12.9094 1.45702 13.1521 1.50922 13.3779 1.60789C13.6037 1.70656 13.8081 1.8496 13.9787 2.02868C14.1492 2.20776 14.2824 2.41934 14.3708 2.65088C14.4592 2.88242 14.5009 3.12926 14.4933 3.37701C14.4857 3.62476 14.4289 3.86842 14.3263 4.09334C14.2237 4.31826 14.0775 4.51988 13.8967 4.68601L13.3333 5.25001L10.75 2.66668L11.3133 2.10334C11.4914 1.93278 11.703 1.79957 11.9345 1.71119C12.1661 1.62281 12.4129 1.58105 12.6607 1.58863C12.9084 1.59621 13.1521 1.65301 13.377 1.75561C13.6019 1.85821 13.8035 2.00441 13.9697 2.18534L13.9697 2.18534L11.3333 2.00001Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9.25 4.00001L11.8333 6.58334" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2.66667 13.3333L6.33333 12.6667L9.91667 9.08334C10.0872 8.91278 10.2204 8.70119 10.3088 8.46965C10.3972 8.23811 10.4389 7.99127 10.4313 7.74352C10.4237 7.49577 10.3669 7.25211 10.2643 7.02719C10.1617 6.80227 10.0155 6.60065 9.83467 6.43451L8.25 4.85001C8.07943 4.67945 7.86785 4.54624 7.63631 4.45786C7.40477 4.36948 7.15793 4.32772 6.91018 4.3353C6.66243 4.34288 6.41877 4.39968 6.19385 4.50228C5.96893 4.60488 5.76731 4.75108 5.60117 4.93184L4.01667 6.51634L3.33333 10.1833L2.66667 13.3333Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2.66667 13.3333L5.83333 12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Edit Profile
                  </button>
                </div>

                <div className="profile-content">
                  {/* Profile Header */}
                  <div className="profile-header">
                    <div className="profile-avatar-large">
                      {user.profileImage ? (
                        <img src={user.profileImage} alt={user.name} />
                      ) : (
                        <span>{user.name.charAt(0).toUpperCase()}</span>
                      )}
                    </div>
                    <div className="profile-header-info">
                      <h1 className="profile-name-large">
                        {user.name}
                        <span className="verified-badge-large">✓</span>
                      </h1>
                      <p className="profile-role-large">{user.role}</p>
                      <p className="profile-location-large">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginRight: '6px' }}>
                          <path d="M8 8C9.10457 8 10 7.10457 10 6C10 4.89543 9.10457 4 8 4C6.89543 4 6 4.89543 6 6C6 7.10457 6.89543 8 8 8Z" stroke="currentColor" strokeWidth="1.5"/>
                          <path d="M8 14.6667C10.6667 12 13.3333 9.33333 13.3333 6C13.3333 3.29543 11.1046 1.06667 8.4 1.06667C5.69543 1.06667 3.46667 3.29543 3.46667 6C3.46667 9.33333 6.13333 12 8.8 14.6667" stroke="currentColor" strokeWidth="1.5"/>
                        </svg>
                        {user.location}
                      </p>
                    </div>
                  </div>

                  {/* Profile Details */}
                  <div className="profile-details-grid">
                   

                    <div className="profile-detail-card">
                      <h3 className="profile-detail-title">About</h3>
                      <p className="profile-bio">{user.bio}</p>
                    </div>

                    <div className="profile-detail-card">
                      <h3 className="profile-detail-title">Experience</h3>
                      <div className="profile-detail-item">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M10 18.3333C14.6024 18.3333 18.3333 14.6024 18.3333 10C18.3333 5.39763 14.6024 1.66667 10 1.66667C5.39763 1.66667 1.66667 5.39763 1.66667 10C1.66667 14.6024 5.39763 18.3333 10 18.3333Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M10 5V10L13.3333 11.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <div>
                          <span className="profile-detail-label">Years of Experience</span>
                          <span className="profile-detail-value">{user.experience}</span>
                        </div>
                      </div>
                    </div>

                    <div className="profile-detail-card">
                      <h3 className="profile-detail-title">Skills</h3>
                      <div className="profile-skills-list">
                        {user.skills.map((skill, index) => (
                          <span key={index} className="profile-skill-tag">{skill}</span>
                        ))}
                      </div>
                    </div>

                    <div className="profile-detail-card">
                      <h3 className="profile-detail-title">Education</h3>
                      <div className="profile-detail-item">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M10 2.5L3.33333 6.66667L10 10.8333L16.6667 6.66667L10 2.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M3.33333 6.66667V13.3333L10 17.5L16.6667 13.3333V6.66667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <div>
                          <span className="profile-detail-label">Degree</span>
                          <span className="profile-detail-value">{user.education}</span>
                        </div>
                      </div>
                    </div>
                   
                    <div className="profile-detail-card">
                      <h3 className="profile-detail-title">Certifications</h3>
                      <div className="profile-certifications-list">
                        {user.certifications && user.certifications.length > 0 ? (
                          user.certifications.map((cert, idx) => (
                            <div key={idx} className="profile-certification-item">
                              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ marginRight: 8 }}>
                                <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5"/>
                                <path d="M7 10.5L9 12.5L13 8.5" stroke="#4BB543" strokeWidth="2" strokeLinecap="round"/>
                              </svg>
                              <span className="profile-certification-name">{cert.name}</span>
                              {cert.issuer && (
                                <span className="profile-certification-issuer"> — {cert.issuer}</span>
                              )}
                              {cert.year && (
                                <span className="profile-certification-year"> ({cert.year})</span>
                              )}
                            </div>
                          ))
                        ) : (
                          <span className="profile-certification-none">No certifications listed.</span>
                        )}
                      </div>
                    </div>

                    <div className="profile-detail-card">
                      <h3 className="profile-detail-title">Contact Information</h3>
                      <div className="profile-detail-item">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M2.5 6.66667L10 11.6667L17.5 6.66667M3.33333 15H16.6667C17.5871 15 18.3333 14.2538 18.3333 13.3333V6.66667C18.3333 5.74619 17.5871 5 16.6667 5H3.33333C2.41286 5 1.66667 5.74619 1.66667 6.66667V13.3333C1.66667 14.2538 2.41286 15 3.33333 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <div>
                          <span className="profile-detail-label">Email</span>
                          <span className="profile-detail-value">{user.email}</span>
                        </div>
                      </div>
                      <div className="profile-detail-item">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M17.5 14.1667V16.6667C17.5 17.5871 16.7538 18.3333 15.8333 18.3333H4.16667C3.24619 18.3333 2.5 17.5871 2.5 16.6667V14.1667M17.5 14.1667L13.3333 10M17.5 14.1667L13.3333 18.3333M2.5 14.1667L6.66667 10M2.5 14.1667L6.66667 18.3333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <div>
                          <span className="profile-detail-label">Phone</span>
                          <span className="profile-detail-value">{user.phone}</span>
                        </div>
                      </div>
                    </div>

                    <div className="profile-detail-card">
                      <h3 className="profile-detail-title">Resume</h3>
                      {user.resume || resumeFile ? (
                        <>
                          <div className="resume-display">
                            <div className="resume-file-info">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                              <div className="resume-file-details">
                                <span className="resume-file-name">{user.resume || resumeFile?.name}</span>
                                <span className="resume-file-size">
                                  {resumeFile ? `(${(resumeFile.size / 1024).toFixed(1)} KB)` : user.resume ? '(240 KB)' : ''}
                                </span>
                              </div>
                            </div>
                            <div className="resume-actions">
                              <button className="btn-resume-view" onClick={() => {
                                if (resumeFile && resumePreviewUrl) {
                                  window.open(resumePreviewUrl, '_blank');
                                } else if (resumeFile) {
                                  const url = URL.createObjectURL(resumeFile);
                                  window.open(url, '_blank');
                                }
                              }}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginRight: '6px' }}>
                                  <path d="M8 13.3333C11.3137 13.3333 14 10.647 14 7.33334C14 4.01963 11.3137 1.33334 8 1.33334C4.68629 1.33334 2 4.01963 2 7.33334C2 10.647 4.68629 13.3333 8 13.3333Z" stroke="currentColor" strokeWidth="1.5"/>
                                  <path d="M8 5.33334C8.73638 5.33334 9.33333 5.93029 9.33333 6.66667C9.33333 7.40305 8.73638 8 8 8C7.26362 8 6.66667 7.40305 6.66667 6.66667C6.66667 5.93029 7.26362 5.33334 8 5.33334Z" stroke="currentColor" strokeWidth="1.5"/>
                                </svg>
                                View
                              </button>
                              <button className="btn-resume-download" onClick={() => {
                                if (resumeFile) {
                                  const url = resumePreviewUrl || URL.createObjectURL(resumeFile);
                                  const link = document.createElement('a');
                                  link.href = url;
                                  link.download = resumeFile.name;
                                  document.body.appendChild(link);
                                  link.click();
                                  document.body.removeChild(link);
                                  if (!resumePreviewUrl) {
                                    URL.revokeObjectURL(url);
                                  }
                                }
                              }}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginRight: '6px' }}>
                                  <path d="M8 11.3333L5.33333 8.66667M8 11.3333L10.6667 8.66667M8 11.3333V2.66667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                  <path d="M13.3333 13.3333H2.66667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                </svg>
                                Download
                              </button>
                              <button className="btn-resume-remove" onClick={handleResumeRemove}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginRight: '6px' }}>
                                  <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                </svg>
                                Remove
                              </button>
                            </div>
                          </div>
                          
                          {/* PDF Preview */}
                          {resumeFile && resumeFile.type === 'application/pdf' && resumePreviewUrl && (
                            <div className="resume-preview-container">
                              <div className="resume-preview-header">
                                <h4 className="resume-preview-title">Resume Preview</h4>
                              </div>
                              <div className="resume-preview-wrapper">
                                <iframe
                                  src={resumePreviewUrl}
                                  className="resume-preview-iframe"
                                  title="Resume Preview"
                                />
                              </div>
                            </div>
                          )}
                        </>
                      ) : (
                        <div className="resume-upload-area">
                          <input
                            type="file"
                            id="resume-upload"
                            accept=".pdf,.doc,.docx"
                            onChange={handleResumeUpload}
                            style={{ display: 'none' }}
                          />
                          <label htmlFor="resume-upload" className="resume-upload-label">
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                              <rect x="8" y="8" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="2" fill="none"/>
                              <path d="M16 24H32M24 16V32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                            <div className="resume-upload-text">
                              <span className="resume-upload-title">Upload your resume</span>
                              <span className="resume-upload-subtitle">PDF or Word document (Max 5MB)</span>
                            </div>
                          </label>
                        </div>
                      )}
                    </div>

                    
                  </div>
                </div>
              </section>
            )}
         
            {activeView === 'career-insights' && (
              <section className="career-insights-section">
                <div className="section-header">
                  <h2 className="section-title">My Career Insights</h2>
                  <p className="section-subtitle">Track your career progress and opportunities</p>
                </div>
                <div className="career-insights-content">
                  <p>Career insights coming soon...</p>
                </div>
              </section>
            )}
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default UserDashboard;

