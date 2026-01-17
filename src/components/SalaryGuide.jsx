import React, { useState } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import './SalaryGuide.css';

function SalaryGuide() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const salaryData = [
    {
      id: 1,
      title: 'Executive Chef',
      category: 'executive',
      location: 'National Average',
      minSalary: 80000,
      maxSalary: 120000,
      medianSalary: 95000,
      experience: '10+ years',
      description: 'Top-level chef responsible for overall kitchen operations, menu development, and staff management.',
      skills: ['Leadership', 'Menu Development', 'Cost Control', 'Staff Management'],
      trends: '+5.2%',
      trendDirection: 'up'
    },
    {
      id: 2,
      title: 'Sous Chef',
      category: 'management',
      location: 'National Average',
      minSalary: 50000,
      maxSalary: 70000,
      medianSalary: 60000,
      experience: '5-10 years',
      description: 'Second-in-command chef who assists the executive chef and manages daily kitchen operations.',
      skills: ['Kitchen Management', 'Food Preparation', 'Team Leadership'],
      trends: '+3.8%',
      trendDirection: 'up'
    },
    {
      id: 3,
      title: 'Pastry Chef',
      category: 'specialty',
      location: 'National Average',
      minSalary: 45000,
      maxSalary: 65000,
      medianSalary: 55000,
      experience: '3-7 years',
      description: 'Specialized chef focused on creating desserts, pastries, and baked goods.',
      skills: ['Baking', 'Dessert Design', 'Pastry Techniques', 'Confectionery'],
      trends: '+4.1%',
      trendDirection: 'up'
    },
    {
      id: 4,
      title: 'Head Chef',
      category: 'executive',
      location: 'National Average',
      minSalary: 70000,
      maxSalary: 100000,
      medianSalary: 85000,
      experience: '8-12 years',
      description: 'Senior chef responsible for kitchen operations, menu planning, and culinary direction.',
      skills: ['Culinary Leadership', 'Menu Planning', 'Quality Control'],
      trends: '+4.5%',
      trendDirection: 'up'
    },
    {
      id: 5,
      title: 'Line Cook',
      category: 'entry',
      location: 'National Average',
      minSalary: 35000,
      maxSalary: 45000,
      medianSalary: 40000,
      experience: '1-3 years',
      description: 'Entry-level position responsible for food preparation and cooking on specific stations.',
      skills: ['Food Preparation', 'Knife Skills', 'Kitchen Safety'],
      trends: '+2.5%',
      trendDirection: 'up'
    },
    {
      id: 6,
      title: 'Chef de Cuisine',
      category: 'management',
      location: 'National Average',
      minSalary: 90000,
      maxSalary: 130000,
      medianSalary: 110000,
      experience: '10+ years',
      description: 'Head chef of a specific restaurant or kitchen, responsible for all culinary operations.',
      skills: ['Fine Dining', 'Culinary Innovation', 'Team Management'],
      trends: '+5.8%',
      trendDirection: 'up'
    },
    {
      id: 7,
      title: 'Private Chef',
      category: 'specialty',
      location: 'National Average',
      minSalary: 60000,
      maxSalary: 90000,
      medianSalary: 75000,
      experience: '5-10 years',
      description: 'Personal chef providing customized meal services for private clients or families.',
      skills: ['Meal Planning', 'Dietary Restrictions', 'Private Service'],
      trends: '+6.2%',
      trendDirection: 'up'
    },
    {
      id: 8,
      title: 'Catering Chef',
      category: 'specialty',
      location: 'National Average',
      minSalary: 55000,
      maxSalary: 85000,
      medianSalary: 70000,
      experience: '4-8 years',
      description: 'Chef specializing in large-scale food preparation for events and catering services.',
      skills: ['Event Planning', 'Large-scale Production', 'Menu Engineering'],
      trends: '+4.3%',
      trendDirection: 'up'
    },
    {
      id: 9,
      title: 'Banquet Chef',
      category: 'management',
      location: 'National Average',
      minSalary: 60000,
      maxSalary: 90000,
      medianSalary: 75000,
      experience: '6-10 years',
      description: 'Chef responsible for planning and executing banquet and event menus.',
      skills: ['Event Management', 'Large-scale Cooking', 'Menu Planning'],
      trends: '+3.9%',
      trendDirection: 'up'
    },
    {
      id: 10,
      title: 'Prep Cook',
      category: 'entry',
      location: 'National Average',
      minSalary: 30000,
      maxSalary: 38000,
      medianSalary: 34000,
      experience: '0-2 years',
      description: 'Entry-level position focused on food preparation and basic kitchen tasks.',
      skills: ['Food Prep', 'Kitchen Basics', 'Safety Standards'],
      trends: '+2.1%',
      trendDirection: 'up'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Positions' },
    { id: 'executive', name: 'Executive' },
    { id: 'management', name: 'Management' },
    { id: 'specialty', name: 'Specialty' },
    { id: 'entry', name: 'Entry Level' }
  ];

  const filteredData = salaryData.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="salary-guide-page">
      <Header />
      
      <div className="salary-guide-hero">
        <div className="container">
          <h1 className="salary-hero-title">Chef Salary Guide</h1>
          <p className="salary-hero-subtitle">
            Explore salary ranges and compensation insights for culinary professionals across different positions and experience levels
          </p>
        </div>
      </div>

      <div className="salary-guide-container">
        <div className="salary-filters">
          <div className="search-box">
            <svg className="search-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M9 16C12.866 16 16 12.866 16 9C16 5.13401 12.866 2 9 2C5.13401 2 2 5.13401 2 9C2 12.866 5.13401 16 9 16Z" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18 18L14 14" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <input
              type="text"
              className="search-input"
              placeholder="Search by position or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="category-filters">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="salary-stats">
          <div className="stat-card">
            <div className="stat-icon">📊</div>
            <div className="stat-content">
              <div className="stat-value">{filteredData.length}</div>
              <div className="stat-label">Positions Listed</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">💰</div>
            <div className="stat-content">
              <div className="stat-value">
                {formatCurrency(
                  Math.round(
                    filteredData.reduce((sum, item) => sum + item.medianSalary, 0) / filteredData.length || 0
                  )
                )}
              </div>
              <div className="stat-label">Average Median Salary</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">📈</div>
            <div className="stat-content">
              <div className="stat-value">+4.2%</div>
              <div className="stat-label">Average Growth Rate</div>
            </div>
          </div>
        </div>

        <div className="salary-list">
          {filteredData.map(item => (
            <div key={item.id} className="salary-card">
              <div className="salary-card-header">
                <div className="salary-title-section">
                  <h3 className="salary-title">{item.title}</h3>
                  <span className={`salary-category ${item.category}`}>
                    {categories.find(c => c.id === item.category)?.name || item.category}
                  </span>
                </div>
                <div className={`salary-trend ${item.trendDirection}`}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 2L12 6H9V12H7V6H4L8 2Z" fill="currentColor"/>
                  </svg>
                  <span>{item.trends}</span>
                </div>
              </div>

              <div className="salary-range">
                <div className="salary-range-item">
                  <span className="salary-label">Median</span>
                  <span className="salary-value median">{formatCurrency(item.medianSalary)}</span>
                </div>
                <div className="salary-range-item">
                  <span className="salary-label">Range</span>
                  <span className="salary-value range">
                    {formatCurrency(item.minSalary)} - {formatCurrency(item.maxSalary)}
                  </span>
                </div>
              </div>

              <div className="salary-details">
                <div className="salary-detail-item">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor">
                    <path d="M8 0.999999C5.0928 0.999999 2.75 3.3428 2.75 6.25C2.75 9.91667 8 15 8 15C8 15 13.25 9.91667 13.25 6.25C13.25 3.3428 10.9072 0.999999 8 0.999999Z"/>
                    <path d="M8 8.5C9.24264 8.5 10.25 7.49264 10.25 6.25C10.25 5.00736 9.24264 4 8 4C6.75736 4 5.75 5.00736 5.75 6.25C5.75 7.49264 6.75736 8.5 8 8.5Z"/>
                  </svg>
                  <span>{item.location}</span>
                </div>
                <div className="salary-detail-item">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor">
                    <path d="M2 2H14V14H2V2Z"/>
                    <path d="M2 6H14"/>
                    <path d="M6 2V14"/>
                  </svg>
                  <span>{item.experience}</span>
                </div>
              </div>

              <p className="salary-description">{item.description}</p>

              <div className="salary-skills">
                {item.skills.map((skill, index) => (
                  <span key={index} className="salary-skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {filteredData.length === 0 && (
          <div className="no-results">
            <p>No salary information found matching your search.</p>
          </div>
        )}

        <div className="salary-disclaimer">
          <h3>About This Salary Guide</h3>
          <p>
            The salary information provided is based on national averages and industry data. Actual salaries may vary based on 
            location, company size, experience level, and other factors. This guide is intended for informational purposes only 
            and should be used as a reference point when negotiating compensation.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default SalaryGuide;

