import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import SignIn from './components/SignIn.jsx';
import Register from './components/Register.jsx';
import Jobs from './components/Jobs.jsx';
import JobDetails from './components/JobDetails.jsx';
import Employers from './components/Employers.jsx';
import CompanyReviews from './components/CompanyReviews.jsx';
import SalaryGuide from './components/SalaryGuide.jsx';
import EmployerDashboard from './components/EmployerDashboard.jsx';
import UserDashboard from './components/UserDashboard.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/register" element={<Register />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/jobs/:id" element={<JobDetails />} />
      <Route path="/employers" element={<Employers />} />
      <Route path="/company-reviews" element={<CompanyReviews />} />
      <Route path="/salary-guide" element={<SalaryGuide />} />
      <Route path="/employer-dashboard" element={<EmployerDashboard />} />
      <Route path="/user-dashboard" element={<UserDashboard />} />
    </Routes>
  );
}

export default App;
