package com.h24han.springboot.personalspringpro.helloworld;

public class HelloWorldBean {
	private String message;

	public HelloWorldBean(String message) {
		this.message = message;
	}
	
	@Override
	public String toString() {
		return "HelloWorldBean [message=" + message + "]";
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
}
