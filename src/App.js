import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import CompaniesList from './components/CompaniesList';
import CompanyDetail from './components/CompanyDetail';
import JobsList from './components/JobsList';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import ProfileForm from './components/ProfileForm';
import ProtectedRoute from './components/ProtectedRoute'; // Ensure this component is created as per instructions

function App() {
  return (
    <UserProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/companies" element={<CompaniesList />} />
          <Route path="/companies/:companyName" element={
            <ProtectedRoute>
              <CompanyDetail />
            </ProtectedRoute>
          } />
          <Route path="/jobs" element={<JobsList />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/profile" element={
            <ProtectedRoute>
              <ProfileForm />
            </ProtectedRoute>
          } />
          {/* Add more routes as necessary */}
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
