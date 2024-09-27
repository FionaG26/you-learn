import React, { useState } from 'react';
import axios from 'axios';

const AddCourse = () => {
  const [courseName, setCourseName] = useState('');

  const handleAddCourse = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:5000/add_course', { name: courseName }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setCourseName(''); // Clear input after adding
    } catch (error) {
      console.error("Error adding course:", error);
    }
  };

  return (
    <div>
      <h2>Add Course</h2>
      <form onSubmit={handleAddCourse}>
        <input
          type="text"
          placeholder="Course Name"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          required
        />
        <button type="submit">Add Course</button>
      </form>
    </div>
  );
};

export default AddCourse;

