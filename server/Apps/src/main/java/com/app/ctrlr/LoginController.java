package com.app.ctrlr;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {
	
	@RequestMapping("/hi")
	public String sayHello() {
		return "Hello !!";
	}

}
