import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import Register from './components/Register';
import Login from './components/Login';
import CourseList from './components/CourseList';
import AddCourse from './components/AddCourse';

// Check if the token is expired
const isTokenExpired = (token) => {
  if (!token) return true;
  const decoded = jwtDecode(token); // Use jwtDecode consistently
  return decoded.exp * 1000 < Date.now();
};

const App = () => {
  const token = localStorage.getItem('token');
  const isAuthenticated = token && !isTokenExpired(token);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/courses"
          element={isAuthenticated ? <CourseList /> : <Navigate to="/login" />}
        />
        <Route
          path="/add-course"
          element={isAuthenticated ? <AddCourse /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;

