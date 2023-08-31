import React, { useState } from 'react';
import './UpdateStatus.css';

function App() {
  const [employeeId, setEmployeeId] = useState('');
  const [applicationId, setApplicationId] = useState('');
  const [newStatus, setNewStatus] = useState('APPLIED'); 
  const isFormValid = employeeId && applicationId && newStatus;

  const updateStatus = async () => {
    try {
      const response = await fetch('http://localhost:8081/api/job-applications/update-status', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          employeeId: parseInt(employeeId),
          applicationId: parseInt(applicationId),
          newStatus: newStatus,
        }),
      });

      if (response.status === 200) {
        alert('Job application status updated successfully');
      
      }
    } catch (error) {
      alert('Error updating job application status:', error);
    }
  };

  return (
    <div>
      <label className='updateId'>Employee ID</label>
      <input
        type="number"
        placeholder="Employee ID"
        value={employeeId}
        onChange={(e) => setEmployeeId(e.target.value)}
      />
      <label className="updateId">Application ID</label>
      <input
        type="number"
        placeholder="Application ID"
        value={applicationId}
        onChange={(e) => setApplicationId(e.target.value)}
      />
      <label htmlFor="">Select Status</label>
      <select value={newStatus} onChange={(e) => setNewStatus(e.target.value)}>
        <option value="APPLIED">Applied</option>
        <option value="IN_PROGRESS">In Progress</option>
        <option value="SELECTED_FOR_INTERVIEW">Selected for Interview</option>
        <option value="ACCEPTED">Accepted</option>
        <option value="REJECTED">Rejected</option>
        <option value="EXPIRED">Expired</option>
      </select>
      <button className="updateStatus"onClick={updateStatus} disabled={!isFormValid}>
        Update Status
      </button>
    </div>
  );
}

export default App;



