package com.h24han.springboot.personalspringpro.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class SampleController {

		@GetMapping( path ="/hello-world")
		public  String HelloWorld() {
			return "Hello World";
		}
		
		@GetMapping( path ="/hello-world-bean")
		public  HelloWorldBean  helloWorldBean() {
		//	throw new RuntimeException("Some Error Has Happened! Do not contact support : )");
			return new HelloWorldBean("Welcome to my app.");
		}
		
		
		@GetMapping( path ="/hello-world/path-variable/{name}")
		public  HelloWorldBean  helloWorldPathVariable(@PathVariable String name) {
			return new HelloWorldBean(String.format("Welcome to my application, %s",name));
		}
}





