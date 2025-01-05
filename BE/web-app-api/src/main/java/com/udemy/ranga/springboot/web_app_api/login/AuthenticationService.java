package com.udemy.ranga.springboot.web_app_api.login;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {

	private Map<String, String> users = new HashMap<>();

	@Autowired
	private JavaMailSender mailSender;

	// Authenticate existing user
	public boolean authenticate(String username, String password) {
		return users.containsKey(username) && users.get(username).equals(password);
	}

	// Register new user
	public boolean registerUser(String username, String password, String email) {
		if (users.containsKey(username)) {
			return false; // User already exists
		}

		users.put(username, password);
		sendConfirmationEmail(email);
		return true;
	}

	// Send confirmation email
	private void sendConfirmationEmail(String email) {
		SimpleMailMessage message = new SimpleMailMessage();
		message.setTo(email);
		message.setSubject("Account Confirmation");
		message.setText("Your account has been successfully created. Please verify your email address.");
		mailSender.send(message);
	}
}
