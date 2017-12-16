package com.app.ctrlr;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.vo.CustomResponse;
import com.app.vo.User;


@RestController
public class LoginController {
	
	private static final String URL_CROSS = "*";
	
	@CrossOrigin(origins=URL_CROSS)
	@PostMapping("/authUser")
	public CustomResponse authenticateUser(@RequestBody User user) {
		String message = "";
		if(user.getUsername().equals("Admin") && user.getPassword().equals("admin")){
			message = "Success";
		}else{
			message = "Failure";
		}
		return new CustomResponse(message);
	}

}
