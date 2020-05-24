package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class routerController {
    @GetMapping("/")
    public String getIndexPage()
    {
        return "index";
    }

    @GetMapping("/login")
    public String getLoginPage()
    {
        return "login";
    }

    @GetMapping("/register")
    public String getRegisterPage()
    {
        return "register";
    }

    @GetMapping("/goodDetail")
    public String getGoodDetailPage()
    {
        return "goodDetail";
    }

    @GetMapping("/order")
    public String getOrderPage()
    {
        return "order";
    }

    @GetMapping("/trolley")
    public String getTrolleyPage()
    {
        return "trolley";
    }
}
