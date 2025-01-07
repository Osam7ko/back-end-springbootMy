package com.udemy.ranga.springboot.web_app_api.sales;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/users/{username}/sales")
public class SaleTransactionController {

	@Autowired
	private SaleTransactionRepository saleTransactionRepository;

	// Get all sales for a user
	@GetMapping
	public List<SaleTransaction> getAllSales(@PathVariable String username) {
		return saleTransactionRepository.findAll();
	}

	// Save a new sale
	@PostMapping
	public SaleTransaction saveSale(@PathVariable String username, @RequestBody SaleTransaction saleTransaction) {
		saleTransaction.setUsername(username);
		return saleTransactionRepository.save(saleTransaction);
	}
}
