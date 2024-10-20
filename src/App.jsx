import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import AdminDashboard from './components/AdminDashboard';
import StudentDashboard from './components/StudentDashboard';
import './index.css'


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/admin" element={<AdminDashboard />}></Route>
        <Route path="/student" element={<StudentDashboard />}></Route>
      </Routes>
    </Router>
  )
}

export default App
