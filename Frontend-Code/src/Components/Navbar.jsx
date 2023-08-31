import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <img src="logo-white.png" alt="Logo" />
        </div>
        <div className="menu-link">
          <ul>
           
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/JobPostingForm">Post Job Openings</Link>
              
            </li>
            <li>
              <Link to="/ViewJobs">View Jobs</Link>
            </li>
            <li>
              <Link to="/RegisterEmployee">Add Employee</Link>
            </li>

            <li>
              <a href="/ViewEmployee">View Employee</a>
            </li>

            <li>
              <a href="/UpdateStatus">Update Status</a>
            </li>
               
          </ul>
        </div>
      </nav>

    </>
  );
};

export default Navbar;



