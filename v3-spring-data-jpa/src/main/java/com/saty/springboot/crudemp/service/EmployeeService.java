package com.saty.springboot.crudemp.service;

import java.util.List;

import com.saty.springboot.crudemp.entity.Employee;

public interface EmployeeService {
	
	public List<Employee> findAll();
	
	public Employee findById(int theId);
	
	public void save(Employee theEmployee);
	
	public void deleteById(int theId);

	
}
