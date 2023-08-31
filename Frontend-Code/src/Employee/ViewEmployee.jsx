import React, { useEffect, useState } from 'react';
import './ViewEmployee.css'

const EmployeeTable = () => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  const [searchId, setSearchId] = useState('');

  useEffect(() => {
    fetchEmployees();
  }, []);



  const fetchEmployees = async () => {
    try {
      let url = 'http://localhost:8081/api/employees/viewAllEmployees';

      if (searchTerm) {
        if (!isNaN(searchTerm)) {
          url = `http://localhost:8081/api/employees/${searchTerm}`;
        } else {
          url = `http://localhost:8081/api/employees/searchByName?name=${searchTerm}`;
        }
      }

      const response = await fetch(url);
      const data = await response.json();

      if (Array.isArray(data)) {
        setEmployees(data);
      } else if (data) {
        setEmployees([data]);
      } else {
        setEmployees([]);
      }
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const handleInputChange = event => {
    setSearchTerm(event.target.value);
  };
  
  
 

  return (
    <div>
      <h1 className='empHeading'>Employee List</h1>

<input
  type="text"
  placeholder="Search by name, id"
  value={searchTerm}
  onChange={handleInputChange}
/>
<button className='searchbtn' onClick={fetchEmployees}>Search</button>
<br />

      {employees.length > 0 ? (
         
        <table>
         
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Full Name</th>
              <th>Email Id</th>
              <th>Phone No</th>
              <th>Gender</th>
              <th>Date of Birth</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {employees.map(employee => (
              <tr key={employee.id}>
                <td>{employee.employeeId}</td>
                <td>{employee.fullName}</td>
                <td>{employee.emailId}</td>
                <td>{employee.phoneNo}</td>
                <td>{employee.gender}</td>
                <td>{employee.dateOfBirth}</td>
                <td>{employee.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No employees found.</p>
      )}

      

      
    </div>
  );
};

export default EmployeeTable;


