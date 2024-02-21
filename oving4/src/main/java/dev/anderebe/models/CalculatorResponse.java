package dev.anderebe.models;

public class CalculatorResponse {
    private String expression;
    private double result;

    public CalculatorResponse(String expression, double result) {
        this.expression = expression;
        this.result = result;
    }

    public String getExpression() {
        return expression;
    }

    public void setExpression(String expression) {
        this.expression = expression;
    }

    public double getResult() {
        return result;
    }

    public void setResult(double result) {
        this.result = result;
    }
    
    
}
