import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchSection.css';

function SearchSection() {
  const [what, setWhat] = useState('');
  const [where, setWhere] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/jobs');
  };

  return (
    <section className="search-section py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <form className="search-form" onSubmit={handleSubmit}>
              <div className="row g-0">
                <div className="col-12 col-md-5">
                  <div className="search-input-wrapper">
                    <svg className="search-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M9 16C12.866 16 16 12.866 16 9C16 5.13401 12.866 2 9 2C5.13401 2 2 5.13401 2 9C2 12.866 5.13401 16 9 16Z" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M18 18L14 14" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <input
                      type="text"
                      className="search-input"
                      placeholder="Job title, keywords, or company"
                      value={what}
                      onChange={(e) => setWhat(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-12 col-md-5">
                  <div className="search-input-wrapper">
                    <svg className="search-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M10 10C11.3807 10 12.5 8.88071 12.5 7.5C12.5 6.11929 11.3807 5 10 5C8.61929 5 7.5 6.11929 7.5 7.5C7.5 8.88071 8.61929 10 10 10Z" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 18.3333C13.3333 15 16.6667 11.6667 16.6667 7.5C16.6667 4.11929 13.8807 1.33333 10.5 1.33333C7.11929 1.33333 4.33333 4.11929 4.33333 7.5C4.33333 11.6667 7.66667 15 11 18.3333" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <input
                      type="text"
                      className="search-input"
                      placeholder='City, state, zip code, or "remote"'
                      value={where}
                      onChange={(e) => setWhere(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-12 col-md-2">
                  <button type="submit" className="search-button w-100">Find jobs</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchSection;

