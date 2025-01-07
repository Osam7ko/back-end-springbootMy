package com.udemy.ranga.springboot.web_app_api.product;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/users/{username}/product")
public class ProductController {

	@Autowired
	private ProductRepository productRepository;

	// ✅ استرجاع كل المنتجات
	@GetMapping
	public List<Product> getAllProducts() {
		return productRepository.findAll();
	}

	// ✅ استرجاع منتج واحد بناءً على الـ id
	@GetMapping("/{id}")
	public Product getProductById(@PathVariable Long id) {
		Optional<Product> product = productRepository.findById(id);
		if (product.isPresent()) {
			return product.get();
		} else {
			throw new RuntimeException("Product not found with id " + id);
		}
	}

	// ✅ إنشاء منتج جديد
	@PostMapping
	public Product createProduct(@RequestBody Product product) {
		return productRepository.save(product);
	}

	// ✅ تعديل منتج بناءً على الـ id
	@PutMapping("/{id}")
	public Product updateProduct(@PathVariable Long id, @RequestBody Product updatedProduct) {
		Product product = productRepository.findById(id)
				.orElseThrow(() -> new RuntimeException("Product not found with id " + id));
		product.setName(updatedProduct.getName());
		product.setOriginalPrice(updatedProduct.getOriginalPrice());
		product.setSellPrice(updatedProduct.getSellPrice());
		return productRepository.save(product);
	}

	// ✅ حذف منتج بناءً على الـ id
	@DeleteMapping("/{id}")
	public void deleteProduct(@PathVariable Long id) {
		productRepository.deleteById(id);
	}
}
