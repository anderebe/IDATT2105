<template>
  <div class ="container">
    <div class="calculator">
      <div class="display">{{ current || '0' }}</div>
      <div @click="clear" class = "btn options">c</div>
      <div @click="sign" class = "btn options">+/-</div>
      <div @click="percent" class = "btn options">%</div>
      <div @click="divide" class = "btn operator">&divide;</div>
      <div @click="append('7')" class = "btn">7</div>
      <div @click="append('8')" class = "btn">8</div>
      <div @click="append('9')" class = "btn">9</div>
      <div @click="multiply" class = "btn operator">x</div>
      <div @click="append('4')" class = "btn">4</div>
      <div @click="append('5')" class = "btn">5</div>
      <div @click="append('6')" class = "btn">6</div>
      <div @click="subtract" class = "btn operator">-</div>
      <div @click="append('1')" class = "btn">1</div>
      <div @click="append('2')" class = "btn">2</div>
      <div @click="append('3')" class = "btn">3</div>
      <div @click="add" class = "btn operator">+</div>
      <div @click="append('0')" class = "btn zero">0</div>
      <div @click="dot()" class = "btn">,</div>
      <div @click="equal" class = "btn operator">=</div>
    </div>
  </div>
</template>

<script scoped>
export default {
  data() {
    return {
      previous: null,
      memfirst: null,
      memsecond: null,
      current: '0',
      operator: null,
      previousOperator: null,
      operatorClicked: false,
    }
  },
    methods: {
      clear() {
        this.current = ''
      },
      sign() {
        if(this.current !== '0') {
          this.current = this.current.charAt(0) === '-' ? 
            this.current.slice(1) : '-' + this.current
        }
      },
      percent() {
        this.current = `${parseFloat(this.current) / 100}`
      },
      append(number) {
        if(this.operatorClicked) {
          this.current = ''
          this.operatorClicked = false;
        }
        if(this.current === '0' && number !== ',') {
          this.current = '';
        }
        this.current = `${this.current}${number}`
      },
      dot() {
        if(this.current.indexOf(',') === -1) {
          this.append(',')
        } else {
          this.append(',')
        }
      },
      setPrevious(){
        if(this.previous !== null) {
          this.previous = `${this.previousOperator(
            parseFloat(this.previous),
            parseFloat(this.current)
          )}`
          this.operatorClicked = true;
        } else {
          this.previous = this.current;
          this.previousOperator = this.operator;
          this.operatorClicked = true;
        }
      },
      divide(){
        this.operator = (a, b) => a / b;
        this.setPrevious(); 
      },
      multiply(){
        this.operator = (a, b) => a * b;
        this.setPrevious(); 
      },
      subtract(){
        this.operator = (a, b) => a - b;
        this.setPrevious(); 
      },
      add(){
        this.operator = (a, b) => a + b;
        this.setPrevious(); 
      },
      equal(){
        if(this.previous === null) {
          return;
        }
        this.memfirst = this.previous;
        this.memsecond = this.current;
        this.previousOperator = this.operator;
        
        this.current = `${this.operator(
          parseFloat(this.previous),
          parseFloat(this.current)
        )}`
        this.previous = null;
        
      }
    }
  }
</script>

<style scoped>
  .container {
    align-items: center;
    display: flex;
    width: 100%;
    height: calc(100% * 1.5);
  }

  .calculator {
    margin: 0 auto;
    font-size: 60px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(18%, auto);
    border-radius: 10px;
  }

  .display {
    grid-column: 1 / 5;
    background-color: #424242;
    color: #fff;
  }

  .zero {
    grid-column: 1 / 3;
  }

  .btn {
    color: #fff;
    background-color: #a6a6a6;
    border: 0.5px solid #000;
    cursor: pointer;
  }

  .operator {
    background-color: #FF9500;
  }

  .options {
    background-color: #757575;
  }

</style>
