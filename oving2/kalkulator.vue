<template>
    <div class="calculator">
        <div class="display">{{ displayValue }}</div>
        <div class="buttons">
            <button v-for="button in buttons" :key="button" @click="handleButtonClick(button)">
                {{ button }}
            </button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            displayValue: "",
            buttons: ["1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*", "0", ".", "=", "/"],
        };
    },
    methods: {
        handleButtonClick(button) {
            if (button === "=") {
                this.calculate();
            } else {
                this.displayValue += button;
            }
        },
        calculate() {
            try {
                this.displayValue = eval(this.displayValue);
            } catch (error) {
                this.displayValue = "Error";
            }
        },
    },
};
</script>

<style scoped>
.calculator {
    width: 200px;
    margin: 0 auto;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.display {
    margin-bottom: 10px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 3px;
    text-align: right;
}

.buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 5px;
}

button {
    padding: 5px;
}
</style>
