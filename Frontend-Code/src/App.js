import './App.css';
import EmployeeForm from './Employee/RegisterEmployee';
import JobDetailsComponent from './Job-Details/JobPostingForm';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';
import JobDetailsTable from './Job-Details/ViewJobs';
import EmployeeTable from './Employee/ViewEmployee';
import JobApplicationTable from './Employee/UpdateStatus';
import HomePage from './Components/Home';
import Footer from './Components/Footer';
import Login from './Components/Login';
function App() {
  return (
  
    <BrowserRouter>
           <Navbar/>
           <Routes>
  <Route path='/JobPostingForm' element={<JobDetailsComponent />} />
  <Route path='/RegisterEmployee' element={<EmployeeForm />} />
  <Route path='/ViewJobs' element={<JobDetailsTable/>}/>
  <Route path='/UpdateStatus' element={<JobApplicationTable/> }/>
  <Route path='/ViewEmployee' element={<EmployeeTable/>}/>
  <Route path='/Home' element={<HomePage/>}/>
  <Route path='/Login' element={<Login/>}/>
</Routes>

{/* <Footer/> */}

    

   
    </BrowserRouter>
    );
}

export default App;
