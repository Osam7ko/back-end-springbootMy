package com.udemy.ranga.springboot.web_app_api.login;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		http.cors(cors -> cors.configurationSource(request -> {
			var corsConfig = new org.springframework.web.cors.CorsConfiguration();
			corsConfig.addAllowedOrigin("http://localhost:3000");
			corsConfig.addAllowedMethod("*");
			corsConfig.addAllowedHeader("*");
			corsConfig.setAllowCredentials(true);
			return corsConfig;
		})).csrf(csrf -> csrf.disable()).authorizeHttpRequests(
				auth -> auth.requestMatchers("/", "/register", "/signin").permitAll().anyRequest().authenticated());
		return http.build();
	}
}
