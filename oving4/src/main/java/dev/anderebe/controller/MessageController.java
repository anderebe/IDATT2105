package dev.anderebe.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/messages")
public class MessageController {
    
    @GetMapping("/")
    public String intro() {
        return "Welcome to the message API!";
    }
    
    @GetMapping("/hello")
    public String hello() {
        return "Hello, World!";
    }
}
