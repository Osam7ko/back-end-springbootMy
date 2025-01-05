package com.udemy.ranga.springboot.web_app_api.login;

import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.udemy.ranga.springboot.web_app_api.model.User;
import com.udemy.ranga.springboot.web_app_api.repository.UserRepository;

@Controller
public class LoginController {

	private final UserRepository userRepository;

	public LoginController(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	// Handle POST request for sign-in
	@RequestMapping(value = "signin", method = RequestMethod.POST)
	public ResponseEntity<?> handleSignIn(@RequestBody Map<String, String> loginData, ModelMap model) {
		String username = loginData.get("username");
		String password = loginData.get("password");

		// Fetch user from the database
		User user = userRepository.findByUsername(username);

		if (user != null && user.getPassword().equals(password)) {
			model.put("name", username);
			return ResponseEntity.ok(Map.of("redirectUrl", "/Welcome/" + username));
		} else {
			return ResponseEntity.status(401).body(Map.of("errorMessage", "Invalid credentials! Please try again."));
		}
	}
}
