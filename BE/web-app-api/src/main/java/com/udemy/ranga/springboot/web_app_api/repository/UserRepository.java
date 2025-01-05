package com.udemy.ranga.springboot.web_app_api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.udemy.ranga.springboot.web_app_api.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
	User findByUsername(String username);
}
