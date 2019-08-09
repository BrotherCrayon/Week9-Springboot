package com.qa.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.qa.entity.Account;

//creates the queries for SQL
//Interfaces are abstract classes that template to layout the structure of objects, can set/lay out commands for springboot
@Repository
public interface AccountRepo extends JpaRepository<Account, Integer>{
	
	
	
}
