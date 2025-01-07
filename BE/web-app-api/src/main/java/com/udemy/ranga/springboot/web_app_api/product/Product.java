package com.udemy.ranga.springboot.web_app_api.product;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Product {

	@Id
	@GeneratedValue
	private Long id;
	private String name;
	private double originalPrice;
	private double sellPrice;

	// Constructors
	public Product() {
	}

	public Product(Long id, String name, double originalPrice, double sellPrice) {
		this.id = id;
		this.name = name;
		this.originalPrice = originalPrice;
		this.sellPrice = sellPrice;
	}

	// Getters and Setters
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public double getOriginalPrice() {
		return originalPrice;
	}

	public void setOriginalPrice(double originalPrice) {
		this.originalPrice = originalPrice;
	}

	public double getSellPrice() {
		return sellPrice;
	}

	public void setSellPrice(double sellPrice) {
		this.sellPrice = sellPrice;
	}
}
