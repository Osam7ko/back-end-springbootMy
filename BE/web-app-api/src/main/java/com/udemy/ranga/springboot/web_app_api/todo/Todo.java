package com.udemy.ranga.springboot.web_app_api.todo;

import java.time.LocalDate;

// need a DataBase
// 1) list of todos => database (h2,mysql)

public class Todo {
	private int id;
	private String userName;
	private String description;
	private LocalDate targetDate;
	private boolean done;

	public Todo(int id, String userName, String description, LocalDate targetDate, boolean done) {
		super();
		this.id = id;
		this.userName = userName;
		this.description = description;
		this.targetDate = targetDate;
		this.done = done;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public LocalDate getTargetDate() {
		return targetDate;
	}

	public void setTargetDate(LocalDate targetDate) {
		this.targetDate = targetDate;
	}

	public boolean isDone() {
		return done;
	}

	public void setDone(boolean done) {
		this.done = done;
	}

	@Override
	public String toString() {
		return "Todo [id=" + id + ", userName=" + userName + ", description=" + description + ", targetDate="
				+ targetDate + ", done=" + done + "]";
	}

}
