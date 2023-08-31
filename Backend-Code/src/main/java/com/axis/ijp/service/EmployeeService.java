package com.axis.ijp.service;

import com.axis.ijp.entity.Employee;
import com.axis.ijp.enums.EmployeeRole;
import com.axis.ijp.enums.JobApplicationStatus;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service; 

@Service
public interface EmployeeService {
	
	Employee createEmployee(Employee employee);

	List<Employee> getAllEmployees(int page, int pageSize);
	
	Employee getEmployeeById(int employeeId);
	
	List<Employee> searchEmployeesByName(String name);
	
	void deleteEmployee(int employeeId);
	
	

	List<Employee> getEmployeesByRole(EmployeeRole role);

	ResponseEntity<Void> saveEmployee(Employee employee);

	ResponseEntity<Void> deactivateEmployee(int id);

	ResponseEntity<Void> updateEmployee(int id, Employee updatedEmployee);

	
}
