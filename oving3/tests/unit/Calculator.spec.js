import { shallowMount } from "@vue/test-utils";
import CalculatorContent from "@/components/CalculatorContent.vue";

describe("CalculatorContent", () => {
  it("renders the component correctly", () => {
    const wrapper = shallowMount(CalculatorContent);
    expect(wrapper.exists()).toBe(true);
  });

  it("initializes with correct default data", () => {
    const wrapper = shallowMount(CalculatorContent);
    expect(wrapper.vm.current).toBe("0");
    expect(wrapper.vm.equations).toEqual([]);
    expect(wrapper.vm.solution).toBeNull();
    expect(wrapper.vm.ans).toBeNull();
  });

  it("updates current value when append method is called", () => {
    const wrapper = shallowMount(CalculatorContent);
    wrapper.vm.append("5");
    expect(wrapper.vm.current).toBe("5");
    wrapper.vm.append("0");
    expect(wrapper.vm.current).toBe("50");
    wrapper.vm.append(".");
    expect(wrapper.vm.current).toBe("50.");
  });

  it("clears the current value and equations when clear method is called", () => {
    const wrapper = shallowMount(CalculatorContent);
    wrapper.vm.append("5");
    wrapper.vm.append("0");
    wrapper.vm.clear();
    expect(wrapper.vm.current).toBe("0");
    expect(wrapper.vm.equations).toEqual([]);
    expect(wrapper.vm.solution).toBeNull();
  });

  it("updates the current value when sign method is called", () => {
    const wrapper = shallowMount(CalculatorContent);
    wrapper.vm.append("5");
    wrapper.vm.sign();
    expect(wrapper.vm.current).toBe("-5");
    wrapper.vm.sign();
    expect(wrapper.vm.current).toBe("5");
  });

  it("updates the current value when dot method is called", () => {
    const wrapper = shallowMount(CalculatorContent);
    wrapper.vm.append("5");
    wrapper.vm.dot();
    expect(wrapper.vm.current).toBe("5");
    wrapper.vm.dot();
    expect(wrapper.vm.current).toBe("5");
  });

  it("updates the current value when percent method is called", () => {
    const wrapper = shallowMount(CalculatorContent);
    wrapper.vm.append("50");
    wrapper.vm.percent();
    expect(wrapper.vm.current).toBe("0.5");
  });

  it("updates the current value when divide method is called", () => {
    const wrapper = shallowMount(CalculatorContent);
    wrapper.vm.append("10");
    wrapper.vm.divide();
    expect(wrapper.vm.current).toBe("10/");
    wrapper.vm.divide();
    expect(wrapper.vm.current).toBe("10/");
  });

  it("updates the current value when multiply method is called", () => {
    const wrapper = shallowMount(CalculatorContent);
    wrapper.vm.append("10");
    wrapper.vm.multiply();
    expect(wrapper.vm.current).toBe("10*");
    wrapper.vm.multiply();
    expect(wrapper.vm.current).toBe("10*");
  });

  it("updates the current value when subtract method is called", () => {
    const wrapper = shallowMount(CalculatorContent);
    wrapper.vm.append("10");
    wrapper.vm.subtract();
    expect(wrapper.vm.current).toBe("10-");
    wrapper.vm.subtract();
    expect(wrapper.vm.current).toBe("10-");
  });

  it("updates the current value when add method is called", () => {
    const wrapper = shallowMount(CalculatorContent);
    wrapper.vm.append("10");
    wrapper.vm.add();
    expect(wrapper.vm.current).toBe("10+");
    wrapper.vm.add();
    expect(wrapper.vm.current).toBe("10+");
  });

  it("updates the current value and equations when equal method is called", () => {
    const wrapper = shallowMount(CalculatorContent);
    wrapper.vm.append("10");
    wrapper.vm.add();
    wrapper.vm.append("5");
    wrapper.vm.equal();
    expect(wrapper.vm.current).toBe("15");
    expect(wrapper.vm.equations).toEqual(["10+5 = 15"]);
  });

  it("updates the current value when answer method is called", () => {
    const wrapper = shallowMount(CalculatorContent);
    wrapper.vm.solution = "15";
    wrapper.vm.answer();
    expect(wrapper.vm.current).toBe("ans");
  });
});
