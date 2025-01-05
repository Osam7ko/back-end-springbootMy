package com.udemy.ranga.springboot.web_app_api.hello;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller // هي اول خطوة تسويها حتى تبدأ اي مشروع انك تسوي كنترولر
public class SayHelloController {

	@RequestMapping("/say-hello")
	@ResponseBody // البودي للاي امر : جرب بدونه ماراح يطلع النتايج وبيطلع ايرور
	public String sayHello() {
		return "Hello! What are you learning today";
	}

	@RequestMapping("/say-hello-html")
	@ResponseBody // البودي للاي امر : جرب بدونه ماراح يطلع النتايج وبيطلع ايرور
	public String sayHelloHtml() {
		StringBuffer sb = new StringBuffer();
		sb.append("<html>");
		sb.append("<head>");
		sb.append("<title> My firts HTML Page </title>");
		sb.append("</head>");
		sb.append("<body>");
		sb.append("My first html page with body");
		sb.append("</body>");
		sb.append("</html>");

		return sb.toString();
	}

	// /src/main/resources/META-INF/resources/WEB-INF/jsp/sayHello.jsp == الملفات
	// الي لازم تسويها
	@RequestMapping("/say-hello-jsp")
	public String sayHelloJsp() {
		return "sayHello";
	}

}
