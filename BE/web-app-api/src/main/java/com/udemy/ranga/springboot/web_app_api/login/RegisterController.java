package com.udemy.ranga.springboot.web_app_api.login;

import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.udemy.ranga.springboot.web_app_api.model.User;
import com.udemy.ranga.springboot.web_app_api.repository.UserRepository;

@Controller
public class RegisterController {

	private final UserRepository userRepository;

	public RegisterController(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	// Handle registration form submission
	@PostMapping("/register")
	public ResponseEntity<?> handleRegister(@RequestBody Map<String, String> registerData) {
		String username = registerData.get("username");
		String password = registerData.get("password");

		// Check if the user already exists
		if (userRepository.findByUsername(username) != null) {
			return ResponseEntity.status(400)
					.body(Map.of("errorMessage", "Username already exists. Please try again."));
		}

		// Save new user to the database
		User newUser = new User();
		newUser.setUsername(username);
		newUser.setPassword(password);
		userRepository.save(newUser);

		return ResponseEntity.ok(Map.of("redirectUrl", "/SignIn"));
	}
}
