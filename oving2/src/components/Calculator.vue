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
      <div @click="equal" class = "btn operator equal">=</div>
    </div>
    <div class="log">
      <h1>Log</h1>
      <p>Previous: {{ previous }}</p>
      <p>Current: {{ current }}</p>
      <p>Operator: {{ operator }}</p>
      <p>Operator Clicked: {{ operatorClicked }}</p>
      <p>Memfirst: {{ memfirst }}</p>
      <p>Memsecond: {{ memsecond }}</p>
      <p>Previous Operator: {{ previousOperator }}</p>
      <p>Solution: {{ solution }}</p>
    </div>
  </div>
</template>

<script scoped>
export default {
  data() {
    return {
      current: '0',
      previous: null,
      operator: null,
      operatorClicked: false,
      solution: null,

      equalBool: false,
      memfirst: null,
      memsecond: null,
      previousOperator: null,

    }
  },
    methods: {
      clear() {
        this.current = '0',
        this.previous = null,
        this.operator = null,
        this.operatorClicked = false,
        this.solution = null,
      
        this.equalBool = false,
        this.memfirst = null,
        this.memsecond = null,
        this.previousOperator = null
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
        if((this.current === '0' && number !== ',') || (this.current === this.previous && this.operatorClicked === false)) {
          this.current = '';
        }
        if(this.equalBool) {
          this.current = '';
          this.equalBool = false;
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
        if(this.operatorClicked === false && this.previousOperator !== null && this.solution === null){
          this.solution = `${this.previousOperator(parseFloat(this.current), parseFloat(this.previous))}`
          this.previous = this.solution;
        } else if(this.solution !== null && this.operatorClicked === false && this.previous !== this.solution) {
          this.solution = `${this.previousOperator(parseFloat(this.solution), parseFloat(this.current))}`
          this.previous = this.solution;
        } else {
          this.previous = this.current;
        }
        this.previousOperator = this.operator;
        this.operatorClicked = true;
        
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
        if(this.previous === null && this.equalBool === false) {
          return;
        }

        if(this.equalBool) {
          this.memfirst = this.current;
          this.current = `${this.previousOperator( parseFloat(this.current), parseFloat(this.memsecond))}`
        } else {
          this.memfirst = this.previous;
          this.memsecond = this.current;
          this.previousOperator = this.operator;
          
          this.current = `${this.operator(
            parseFloat(this.previous),
            parseFloat(this.current)
          )}`
          this.previous = null;
          this.equalBool = true;
        }
      }
    }
  }
</script>

<style scoped>

  .container {
    display: flex;
    justify-content: center;
    flex-flow: row;;
    width: 100%;;
  }

  .log {
    margin: 0 auto;
    width: 400px;
    color: #fff;
    background-color: #424242;
    margin: 1%;
    border-radius: 10px;
  }

  .calculator {
    margin: 0 auto;
    width: 400px;
    font-size: 60px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(0, auto);
    margin: 1%;
  }

  .display {
    grid-column: 1 / 5;
    background-color: #424242;
    color: #fff;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .zero {
    grid-column: 1 / 3;
    border-bottom-left-radius: 10px;
  }

  .btn {
    display: flex;
    justify-content: center;
    color: #fff;
    background-color: #a6a6a6;
    border: 0.5px solid #000;
    cursor: pointer;
    text-align: center;
  }
  .btn:hover {
    background-color: #b3b3b3;
  }

  .operator {
    background-color: #FF9500;
  }
  .operator:hover {
    background-color: #FFA500;
  }

  .equal {
    border-bottom-right-radius: 10px;
  }

  .options {
    background-color: #757575;
  }
  .options:hover {
    background-color: #808080;
  }

</style>
