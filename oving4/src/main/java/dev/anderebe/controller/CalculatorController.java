package dev.anderebe.controller;

import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;

import dev.anderebe.models.CalculatorResponse;
import dev.anderebe.services.CalculatorService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("api/calculator")
public class CalculatorController {
    private static final Logger logger = LoggerFactory.getLogger(CalculatorController.class);
    private final ObjectMapper objectMapper = new ObjectMapper();

    @GetMapping("")
    public String intro() {
        return "Welcome to the calculator API!";
    }
    
    @PostMapping("/solve")
    public ResponseEntity<String> solve(@RequestBody String input, HttpServletRequest request) {
        try {
            logger.info("Request received from " + request.getRemoteAddr());
            logger.info("Request body: " + input);
            Double result = CalculatorService.solve(input);
            CalculatorResponse response = new CalculatorResponse(input, result);
            String jsonResponse = objectMapper.writeValueAsString(response);
            logger.info("Returned calculated expression: " + input + " = " + result + ", to:" + request.getRemoteAddr());
            return ResponseEntity.ok(jsonResponse);
        } catch (Exception e) {
            logger.error("Error: " + e.getMessage());
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
