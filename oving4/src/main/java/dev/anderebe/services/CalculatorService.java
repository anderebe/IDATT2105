package dev.anderebe.services;

import java.util.ArrayDeque;
import java.util.Deque;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class CalculatorService {
    private static final Logger logger = LoggerFactory.getLogger(CalculatorService.class);
    public static double solve(String expression) {
        try {
            expression = expression.replaceAll("\\s+", ""); // Remove all whitespace and unwanted characters
            expression = expression.replaceAll("[^0-9+\\-*/.]", ""); // Remove all characters that are not numbers or operators
            logger.info("Solving expression: " + expression);
            char[] tokens = expression.toCharArray();
            Deque<Double> values = new ArrayDeque<>();
            Deque<Character> operators = new ArrayDeque<>();

            StringBuilder sb = new StringBuilder();

            for (char token : tokens) {
                if (Character.isDigit(token)) {
                    sb.append(token);
                } else {
                    if (sb.length() > 0) {
                        values.push(Double.parseDouble(sb.toString()));
                        sb.setLength(0); // Clear StringBuilder for the next number
                    }

                    while (!operators.isEmpty() && hasPrecedence(token, operators.peek())) {
                        values.push(applyOperator(operators.pop(), values.pop(), values.pop()));
                    }

                    operators.push(token);
                }
            }

            if (sb.length() > 0) {
                values.push(Double.parseDouble(sb.toString())); // Add the last number
            }

            while (!operators.isEmpty()) {
                values.push(applyOperator(operators.pop(), values.pop(), values.pop()));
            }

            return values.pop();
        } catch (Exception e) {
            if (e.getMessage() != null && e.getMessage().equals("Division by zero is not allowed!")) {
                throw new ArithmeticException("Division by zero is not allowed!");
            } else {
                throw new ArithmeticException("Invalid expression!");
            }
        }
    }

    private static boolean hasPrecedence(char op1, char op2) {
        int precedence1 = getPrecedence(op1);
        int precedence2 = getPrecedence(op2);
        return precedence2 >= precedence1;
    }

    private static int getPrecedence(char operator) {
        return switch (operator) {
            case '*', '/' -> 2;
            case '+', '-' -> 1;
            default -> 0;
        };
    }

    private static double applyOperator(char operator, double b, double a) {
        return switch (operator) {
            case '+' -> a + b;
            case '-' -> a - b;
            case '*' -> a * b;
            case '/' -> {
                if (b == 0)
                    throw new ArithmeticException("Division by zero is not allowed!");
                yield a / b;
            }
            default -> 0;
        };
    }
}
