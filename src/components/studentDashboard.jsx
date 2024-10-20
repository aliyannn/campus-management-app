import React from 'react';
import { useNavigate } from 'react-router-dom';

function StudentDashboard() {
  const navigate = useNavigate();

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='text-center'>
        <div className='text-3xl font-bold mb-6'>Welcome to the Student Panel</div>
        <button
          onClick={() => navigate(-1)}
          className='bg-blue-500 text-white p-2 rounded hover:bg-blue-600'
        >
          Go Back to Login
        </button>
      </div>
    </div>
  );
}

export default StudentDashboard;
