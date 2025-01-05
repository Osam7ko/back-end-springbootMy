package com.udemy.ranga.springboot.web_app_api.login;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import jakarta.annotation.PostConstruct;

@Controller
public class RegisterController {

	// In-Memory Storage for users
	private final Map<String, String> users = new HashMap<>();

	// Handle registration form submission
	@PostMapping("/register")
	public ResponseEntity<?> handleRegister(@RequestParam String username, @RequestParam String password) {
		if (users.containsKey(username)) {
			return ResponseEntity.status(400)
					.body(Map.of("errorMessage", "Username already exists. Please try again."));
		}

		// Store username and password
		users.put(username, password);

		return ResponseEntity.ok(Map.of("redirectUrl", "/SignIn"));
	}

	@PostConstruct
	public void initUsers() {
		users.put("osama", "12345"); // Example user
	}

	// Helper method to check if the user exists
	public boolean userExists(String username, String password) {
		return users.containsKey(username) && users.get(username).equals(password);
	}
}
