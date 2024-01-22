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
        <div class="equation-wall" ref="equationWall">
            <div v-for="equation in equations" :key="equation" class="equation">{{ equation }}</div>
        </div>
      </div>
    </div>
</template>
  
<script scoped>
  export default {
        data() {
      return {
        current: '0',
        equations: [], 
        solution: null,
      }
        },
      methods: {
        clear() {
          this.current = '0';
          this.equations = [];
          this.solution = null;
        },
        append(number) {
            if(this.current === '0' || this.current === this.solution) {
                this.current = '';
            }
            this.current = this.current + number;
        },
        sign() {
            try {
              if (this.current !== '0') {
                const lastNumber = this.current.match(/\d+$/)[0];
                const sign = lastNumber.startsWith('-') ? '' : '-';
                this.current = this.current.replace(/\d+$/, sign + lastNumber);
                this.solution = this.current;
              } 
            } catch {
              this.current = 'Error';
            }
        },
        dot() {
          if(this.current === '0' || this.current !== this.solution) {
            if(this.current.indexOf('.') === -1) {
            this.append('.')
            } else {
            this.append('.')
            }
          }
        },
        percent() {
            const lastNumber = this.current.match(/\d+$/)[0];
            const decimal = parseFloat(lastNumber) / 100;
            this.current = this.current.replace(/\d+$/, decimal);
        },
        divide() {
            if (this.current.endsWith('/') || this.current.endsWith('*') || this.current.endsWith('-') || this.current.endsWith('+')) {
                this.current = this.current.slice(0, -1) + '/';
            } else {
                this.current = this.current + '/';
            }
        },
        multiply() {
            if (this.current.endsWith('/') || this.current.endsWith('*') || this.current.endsWith('-') || this.current.endsWith('+')) {
                this.current = this.current.slice(0, -1) + '*';
            } else {
                this.current = this.current + '*';
            }
        },
        subtract() {
            if (this.current.endsWith('/') || this.current.endsWith('*') || this.current.endsWith('-') || this.current.endsWith('+')) {
                this.current = this.current.slice(0, -1) + '-';
            } else {
                this.current = this.current + '-';
            }
        },
        add() {
            if (this.current.endsWith('/') || this.current.endsWith('*') || this.current.endsWith('-') || this.current.endsWith('+')) {
                this.current = this.current.slice(0, -1) + '+';
            } else {
                this.current = this.current + '+';
            }
        },
        equal() {
            try {
                const equation = this.current + ' = ' + eval(this.current);
                this.equations.push(equation);
                this.current = eval(this.current);
                this.solution = this.current;
            } catch {
                this.current = 'Error';
            }
        },
      }
    }
  </script>
  
  <style scoped>
  
    .container {
      display: flex;
      justify-content: center;
      flex-flow: row;
      width: 100%;;
    }
  
    .log {
      width: 400px;
      color: #fff;
      background-color: #424242;
      margin: 1%;
      border-radius: 10px;
      max-height: 400px; 
      align-items: center;
    }

    .equation-wall {
      margin-top: 5%;
      margin-bottom: 5%;
      flex-flow: column;
      justify-content: center;
      height: 80%;
    }
    .calculator {
      margin: 0 auto;
      width: 400px;
      font-size: 60px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-auto-rows: minmax(0, auto);
      margin: 1%;
      max-height: 400px; 
    }
  
    .display {
        cursor: pointer;
        grid-column: 1 / 5;
        background-color: #424242;
        color: #fff;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        font-size: auto;
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
  