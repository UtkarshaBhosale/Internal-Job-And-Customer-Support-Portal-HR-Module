import React, { useState } from "react";
import axios from "axios";

const EmployeeForm = () => {
  const [employee, setEmployee] = useState({
    fullName: "",
    emailId: "",
    phoneNo: "",
    gender: "",
    dateOfBirth: "",
    address: "",
    dateOfJoining: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value,
    }));
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8081/api/employees/registerEmployee", employee)
      .then((response) => {
       
        alert("Employee details added successfully")
      })
      .catch((error) => {
   
        console.error(error);
      });
  };

  return (
    <div>
    <h1 className="title">Enter Employee Details!</h1>
    <form onSubmit={handleSubmit}>
      <label>Full Name:</label>
      <input
        type="text"
        name="fullName"
        value={employee.fullName}
        onChange={handleChange}
        required
      />

      <label>Email:</label>
      <input
        type="text"
        name="emailId"
        value={employee.emailId}
        onChange={handleChange}
      />

      <label>Phone Number:</label>
      <input
        type="text"
        name="phoneNo"
        value={employee.phoneNo}
        onChange={handleChange}
      />

      <label>Gender:</label>
      <input
        type="text"
        name="gender"
        value={employee.gender}
        onChange={handleChange}
      />

      <label>Date of Birth:</label>
      <input
        type="date"
        name="dateOfBirth"
        value={employee.dateOfBirth}
        onChange={handleChange}
      />

      <label>Address:</label>
      <input
        type="text"
        name="address"
        value={employee.address}
        onChange={handleChange}
      />

      <label>Date of Joining:</label>
      <input
        type="date"
        name="dateOfJoining"
        value={employee.dateOfJoining}
        onChange={handleChange}
      />

      <label className="password">Password:</label>
      <input
        type="text"
        name="password"
        value={employee.password}
        onChange={handleChange}
      />

      <br />

      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default EmployeeForm;
