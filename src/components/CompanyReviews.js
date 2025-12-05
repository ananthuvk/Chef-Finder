import React, { useState } from 'react';
import './CompanyReviews.css';
import Header from './Header';
import Footer from './Footer';

function CompanyReviews() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCompany, setSelectedCompany] = useState(null);

  const companies = [
    {
      id: 1,
      name: 'Fine Dining Restaurant',
      location: 'New York, NY',
      rating: 4.5,
      reviewCount: 128,
      logo: '🍽️',
      industry: 'Fine Dining',
      description: 'Award-winning fine dining restaurant known for innovative cuisine and exceptional service.',
      reviews: [
        {
          id: 1,
          author: 'John D.',
          rating: 5,
          date: '2 weeks ago',
          title: 'Excellent work environment',
          content: 'Great place to work! The management is supportive and the team is professional. Good work-life balance and competitive compensation.',
          pros: ['Great management', 'Good benefits', 'Professional team'],
          cons: ['Long hours during peak season']
        },
        {
          id: 2,
          author: 'Sarah M.',
          rating: 4,
          date: '1 month ago',
          title: 'Good experience overall',
          content: 'I worked here for 2 years and learned a lot. The kitchen is well-equipped and the staff is friendly. Some long hours but worth it.',
          pros: ['Learning opportunities', 'Modern kitchen', 'Friendly staff'],
          cons: ['Long hours']
        }
      ]
    },
    {
      id: 2,
      name: 'Modern Bistro',
      location: 'Los Angeles, CA',
      rating: 4.2,
      reviewCount: 95,
      logo: '🥘',
      industry: 'Casual Fine Dining',
      description: 'Contemporary bistro offering French-inspired cuisine in a relaxed atmosphere.',
      reviews: [
        {
          id: 1,
          author: 'Michael T.',
          rating: 4,
          date: '3 weeks ago',
          title: 'Great team culture',
          content: 'The team here is amazing. Management values your input and there are opportunities for growth.',
          pros: ['Team culture', 'Growth opportunities', 'Good pay'],
          cons: ['Busy weekends']
        }
      ]
    },
    {
      id: 3,
      name: 'Artisan Bakery',
      location: 'San Francisco, CA',
      rating: 4.7,
      reviewCount: 67,
      logo: '🥖',
      industry: 'Bakery & Pastry',
      description: 'Artisan bakery specializing in handcrafted breads and pastries using traditional methods.',
      reviews: [
        {
          id: 1,
          author: 'Emily R.',
          rating: 5,
          date: '1 week ago',
          title: 'Best bakery to work for',
          content: 'Love working here! The owners are passionate about quality and treat employees well. Early mornings but very rewarding.',
          pros: ['Passionate owners', 'Quality focus', 'Good benefits'],
          cons: ['Early start times']
        }
      ]
    },
    {
      id: 4,
      name: 'Luxury Hotel',
      location: 'Miami, FL',
      rating: 4.3,
      reviewCount: 203,
      logo: '🏨',
      industry: 'Hospitality',
      description: 'Five-star luxury hotel with multiple dining outlets and world-class culinary team.',
      reviews: [
        {
          id: 1,
          author: 'David L.',
          rating: 4,
          date: '2 months ago',
          title: 'Prestigious workplace',
          content: 'Working at this hotel has been a great experience. The facilities are top-notch and the standards are high.',
          pros: ['Prestigious', 'Great facilities', 'High standards'],
          cons: ['High pressure', 'Long hours']
        }
      ]
    },
    {
      id: 5,
      name: 'Michelin Star Restaurant',
      location: 'Las Vegas, NV',
      rating: 4.8,
      reviewCount: 156,
      logo: '⭐',
      industry: 'Fine Dining',
      description: 'Renowned Michelin-starred restaurant offering exceptional culinary experiences.',
      reviews: [
        {
          id: 1,
          author: 'Chef James K.',
          rating: 5,
          date: '1 month ago',
          title: 'Dream workplace for chefs',
          content: 'This is where culinary dreams come true. Working with world-class ingredients and techniques. Highly competitive but incredibly rewarding.',
          pros: ['World-class ingredients', 'Learning opportunities', 'Prestigious'],
          cons: ['Very competitive', 'Intense environment']
        }
      ]
    }
  ];

  const filteredCompanies = companies.filter(company =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    company.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    company.industry.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="star-rating">
        {[...Array(fullStars)].map((_, i) => (
          <span key={i} className="star filled">★</span>
        ))}
        {hasHalfStar && <span className="star half">★</span>}
        {[...Array(emptyStars)].map((_, i) => (
          <span key={i} className="star empty">★</span>
        ))}
        <span className="rating-number">{rating}</span>
      </div>
    );
  };

  if (selectedCompany) {
    const company = companies.find(c => c.id === selectedCompany);
    return (
      <div className="company-reviews-page">
        <Header />
        <div className="company-reviews-container">
          <button className="back-button" onClick={() => setSelectedCompany(null)}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
              <path d="M10 12L6 8L10 4"/>
            </svg>
            Back to Reviews
          </button>

          <div className="company-header">
            <div className="company-logo-large">{company.logo}</div>
            <div className="company-info">
              <h1 className="company-name-large">{company.name}</h1>
              <p className="company-location-large">{company.location}</p>
              <div className="company-rating-large">
                {renderStars(company.rating)}
                <span className="review-count-large">({company.reviewCount} reviews)</span>
              </div>
              <p className="company-description">{company.description}</p>
            </div>
          </div>

          <div className="reviews-section">
            <h2 className="reviews-section-title">Reviews</h2>
            {company.reviews.map(review => (
              <div key={review.id} className="review-card">
                <div className="review-header">
                  <div className="review-author-info">
                    <div className="review-author-avatar">{review.author.charAt(0)}</div>
                    <div>
                      <div className="review-author-name">{review.author}</div>
                      <div className="review-date">{review.date}</div>
                    </div>
                  </div>
                  <div className="review-rating">{renderStars(review.rating)}</div>
                </div>
                <h3 className="review-title">{review.title}</h3>
                <p className="review-content">{review.content}</p>
                {review.pros && review.pros.length > 0 && (
                  <div className="review-pros-cons">
                    <div className="pros">
                      <strong>Pros:</strong> {review.pros.join(', ')}
                    </div>
                  </div>
                )}
                {review.cons && review.cons.length > 0 && (
                  <div className="review-pros-cons">
                    <div className="cons">
                      <strong>Cons:</strong> {review.cons.join(', ')}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="write-review-section">
            <button className="write-review-btn">Write a Review</button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="company-reviews-page">
      <Header />
      
      <div className="company-reviews-hero">
        <div className="container">
          <h1 className="reviews-hero-title">Company Reviews</h1>
          <p className="reviews-hero-subtitle">Read reviews from chefs and culinary professionals about their workplace experiences</p>
        </div>
      </div>

      <div className="company-reviews-container">
        <div className="search-section">
          <div className="search-box">
            <svg className="search-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M9 16C12.866 16 16 12.866 16 9C16 5.13401 12.866 2 9 2C5.13401 2 2 5.13401 2 9C2 12.866 5.13401 16 9 16Z" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18 18L14 14" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <input
              type="text"
              className="search-input"
              placeholder="Search companies by name, location, or industry..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="companies-grid">
          {filteredCompanies.map(company => (
            <div key={company.id} className="company-card" onClick={() => setSelectedCompany(company.id)}>
              <div className="company-card-header">
                <div className="company-logo">{company.logo}</div>
                <div className="company-card-info">
                  <h3 className="company-card-name">{company.name}</h3>
                  <p className="company-card-location">{company.location}</p>
                </div>
              </div>
              <div className="company-card-rating">
                {renderStars(company.rating)}
                <span className="company-card-review-count">{company.reviewCount} reviews</span>
              </div>
              <p className="company-card-industry">{company.industry}</p>
              <div className="company-card-footer">
                <span className="view-reviews-link">View Reviews →</span>
              </div>
            </div>
          ))}
        </div>

        {filteredCompanies.length === 0 && (
          <div className="no-results">
            <p>No companies found matching your search.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default CompanyReviews;

