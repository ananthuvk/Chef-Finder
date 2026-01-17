import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import SearchSection from '../components/SearchSection.jsx';
import logo from '../assets/images/CHEF_FINDER.png';
import '../App.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <Header />
      <SearchSection />

      <main className="main-content py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <div className="text-center">
                <div className="logo-large mb-4">
                  <img src={logo} alt="logo" className="img-fluid" style={{ maxHeight: '120px' }} />
                </div>
                <h1 className="main-heading mb-3">Find Exceptional Culinary Professionals
                </h1>
                <p className="main-subtitle mb-4">Join our network to hire or get hired as an executive chef, sous chef, pastry chef, and more.</p>
                <button className="btn-get-started mb-4 me-2" onClick={() => navigate('/register')}>
                  Register Now
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ marginLeft: '8px' }}>
                    <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button className="btn-browse-chefs mb-4" onClick={() => navigate('/jobs')}>
                Browse Chefs Now
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ marginLeft: '8px' }}>
                    <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <div className="post-resume mb-3">
                  <a href="#post-resume" className="post-resume-link">Post your resume</a>
                  <span className="post-resume-text"> - It only takes a few seconds</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Home;

