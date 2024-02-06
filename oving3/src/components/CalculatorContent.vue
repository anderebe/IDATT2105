<template>
    <h1>Oving 2: Kalkulator</h1>
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
        <div @click="dot()" class = "btn">.</div>
        <div @click="answer()" class = "btn">ans</div>
        <div @click="equal" class = "btn operator equal">=</div>
      </div>
      <div class="log">
        <h1>Log</h1>
        <div class="equation-wall" ref="equationWall">
          <div v-for="equation in equations" :key="equation" class="equation">{{ equation }}</div>
        </div>
      </div>
    </div>
    <div @click="toFeedback()" class ="feedback">FEEDBACK</div>
    
</template>
  
<script scoped>
  export default {
      mounted() {
        window.addEventListener('keydown', this.listenBackspace);
      },

      beforeUnmount() {
        window.removeEventListener('keydown', this.listenBackspace);
      },

      data() {
        return {
          current: '0',
          equations: [], 
          solution: null,
          ans: null,
        }
      },
      methods: {
        listenBackspace(event) {
            if (event.keyCode === 8 || event.keyCode === 46) {
                this.current = this.current.slice(0, -1);
            }
        },
        
        clear() {
          this.current = '0';
          this.equations = [];
          this.solution = null;
        },
        append(number) {
            if((this.current === '0' && number !== '.') 
              || this.current.includes('Error') 
              || this.current.includes('NaN')
              || this.current === this.solution) {
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
              throw new Error('Invalid input');
            }
        },
        dot() {
          if(this.current === '0') {
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
            if(this.current.includes('ans')) {
              this.current = this.current.replace('ans', this.solution);
            }
            const result = eval(this.current);
            if (result === Infinity || result === -Infinity) {
              throw new Error('Division by zero');
            }
            const equation = this.current + ' = ' + result;
            this.equations.unshift(equation);
            this.current = result + '';
            this.solution = this.current;
            this.ans = this.solution
          } catch (error) {
            this.current = 'Error: ' + error.message;
          }
        },
        answer() {
          if(this.solution !== null) {
            this.current = 'ans';
          }
        },
        toFeedback() {
            this.$emit('goFeedback');
        },
      },
    }
  </script>  

  <style scoped>
  
    h1{
      margin-top: 15%;
      color: white;
      font-weight: 700;
      transition-duration: 0.5s;
      cursor: default;
    }

    .container {
      display: flex;
      justify-content: center;
      flex-flow: row;
      width: 100%;
    }
  
    .log {
      width: 400px;
      color: #fff;
      background-color: #424242;
      margin: 1%;
      border-radius: 10px;
      max-height: 400px; 
      align-items: center;
      cursor: default
    }
    .equation-wall {
      margin-top: 5%;
      margin-bottom: 5%;
      flex-flow: column;
      justify-content: center;
      height: 70%;
      overflow: hidden;
      overflow-y: scroll;
    }
    .calculator {
      margin: 0 auto;
      width: 400px;
      font-size: 50px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-auto-rows: minmax(0, auto);
      margin: 1%;
      max-height: 400px; 
    }
  
    .display {
        cursor: default;
        grid-column: 1 / 5;
        background-color: #424242;
        color: #fff;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        font-size: auto;
    }

    .zero {
      grid-column: 1 / 1;
      border-bottom-left-radius: 10px;
    }
  
    .btn {
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
    .btn:active {
      background-color: #999999;
    }
  
    .operator {
      background-color: #FF9500;
    }
    .operator:hover {
      background-color: #FFA500;
    }
    .operator:active {
      background-color: #FF8C00;
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
    .options:active {
      background-color: #6d6d6d;
    }

    .feedback {
      text-decoration: none;
      margin-top: 5%;
      margin-bottom: 5%;
      text-align: center;
      color: white;
      font-size: 20px;
      cursor: pointer;
      transition: color 0.5s ease-in-out, -webkit-text-stroke 0.5s ease-in-out;
      align-items: center;
      position: relative; /* Added */
      display: inline-block; /* Added */
    }
  
    .feedback::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: -2px;
      left: 0;
      background-color: white;
      transform: scaleX(0);
      transition: transform 0.3s ease-in-out;
    }

    .feedback:hover::after {
      transform: scaleX(1);
    }
  </style>
  