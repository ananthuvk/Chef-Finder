import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './components/SignIn';
import Register from './components/Register';
import Jobs from './components/Jobs';
import JobDetails from './components/JobDetails';
import Employers from './components/Employers';
import CompanyReviews from './components/CompanyReviews';
import SalaryGuide from './components/SalaryGuide';
import EmployerDashboard from './components/EmployerDashboard';
import UserDashboard from './components/UserDashboard';

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
