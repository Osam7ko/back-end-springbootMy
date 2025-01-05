package com.udemy.ranga.springboot.web_app_api.todo;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TodoService {
	private static List<Todo> todos = new ArrayList<>();
	static {
		todos.add(new Todo(1, "osama", "learnJava", LocalDate.now().plusYears(1), false));
		todos.add(new Todo(2, "osama", "learnFullStack", LocalDate.now().plusYears(1), false));
		todos.add(new Todo(3, "osama", "learnDevOps", LocalDate.now().plusYears(1), false));

	}

	public List<Todo> findByUserame(String username) {
		return todos;
	}
}
