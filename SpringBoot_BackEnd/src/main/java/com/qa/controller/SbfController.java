package com.qa.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.qa.entity.Account;
import com.qa.repo.AccountRepo;

//Sbf - SpringBootfirst 
@RestController
@CrossOrigin
public class SbfController {

	private AccountRepo repo;
	
	public SbfController(AccountRepo repo) {
		super();
		this.repo = repo;
	}

	@RequestMapping(value = "/show/{id}", method = RequestMethod.GET)
	public String ShowRecord(@PathVariable("id") int id) {
		Optional<Account> p = repo.findById(id);
		if (p.isPresent()) {
			Account user = p.get();
			return "Record found: " + user.getUsername() + " from " + user.getCity();
		} else {
			return "Cannot find account";
		}
	}

	@RequestMapping(value = "/showall", method = RequestMethod.GET)
	public List<Account> ShowRecord() {
		List<Account> records=repo.findAll();
		return records;
	}
	
	@RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
	public String DeleteRecord(@PathVariable("id") int id) {
		Optional<Account> p = repo.findById(id);
		if (p.isPresent()) {
			Account user = p.get();
			repo.delete(user);
			return "Delete succeeded";
		} else {
			return "Cannot find account";
		}
	}
	
//	@RequestMapping(value = "/createrecord", method = RequestMethod.GET)
//	public String saveRecord() {
//		
//	}
	
	@PostMapping(value = "/saverecord")
	public String createRecord(@RequestBody Account account) {
		System.out.println(account.getUsername());
		repo.save(account);
		return "create succeeded";
	}
	
	@RequestMapping(value = "/updaterecord/{id}", method = RequestMethod.POST)
	public String updateRecord(@PathVariable("id")int id, @RequestBody Account account) {
		Optional<Account> a = repo.findById(id);
		
		if(a.isPresent()) {
			Account acc = a.get();
			acc.setUsername(account.getUsername());
			acc.setCity(account.getCity());
			repo.save(acc);
			return "create succeeded";
		} else {
			return "not a do";
		}
	}
}
