package com.saty.springboot.crudemp.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.saty.springboot.crudemp.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
	
	//that's it..no need to write any code
	
}
