package com.axis.ijp.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;
import com.axis.ijp.entity.Employee;
import com.axis.ijp.enums.JobApplicationStatus;
import com.axis.ijp.service.EmployeeService;
import java.util.List;

@RestController
@RequestMapping("/api/employees")
@CrossOrigin(origins = "http://localhost:3000")
public class EmployeeController {

	private final EmployeeService employeeService;

    @Autowired
    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    /**
     * Register Employee Details.
     * Author: Utkarsha Bhosale
     */
    @PostMapping("/registerEmployee")
    public Employee createEmployee(@RequestBody Employee employee) {
        return employeeService.createEmployee(employee);
    }

    /**
     * View Employee By Id.
     * Author: Utkarsha Bhosale
     */
    @GetMapping("/{employeeId}")
    public Employee getEmployeeById(@PathVariable int employeeId) {
        return employeeService.getEmployeeById(employeeId);
    }

    /**
     * View All Employees.
     * Author: Utkarsha Bhosale
     */
    @GetMapping("/viewAllEmployees")
	public List<Employee> getAllEmployees(@RequestParam(defaultValue = "0") int page) {
	    int pageSize = 10; // Number of records per page
	    return employeeService.getAllEmployees(page, pageSize);
	}
    /**
     * Search for employees by name.
     * Author: Utkarsha Bhosale
     */
    @GetMapping("/searchByName")
    public List<Employee> searchEmployeesByName(@RequestParam String name) {
        return employeeService.searchEmployeesByName(name);
    }
   

}
