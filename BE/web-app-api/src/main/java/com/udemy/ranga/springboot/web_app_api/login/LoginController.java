package com.udemy.ranga.springboot.web_app_api.login;

import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class LoginController {

	private final RegisterController registerController;

	public LoginController(RegisterController registerController) {
		this.registerController = registerController;
	}

	// Handle POST request for sign-in
	@RequestMapping(value = "signin", method = RequestMethod.POST)
	public ResponseEntity<?> handleSignIn(@RequestBody Map<String, String> loginData) {
		String username = loginData.get("username");
		String password = loginData.get("password");

		if (registerController.userExists(username, password)) {
			return ResponseEntity.ok(Map.of("message", "Login successful!", "redirectUrl", "/Welcome/" + username));
		} else {
			return ResponseEntity.status(401).body(Map.of("errorMessage", "Invalid credentials! Please try again."));
		}
	}
}
