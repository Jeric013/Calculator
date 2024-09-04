let displayValue = '';

function updateDisplay() {
    const display = document.getElementById('display');
    display.innerText = displayValue || '0';
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

function appendOperator(operator) {
    // Prevent appending an operator if the display is empty or ends with an operator
    if (displayValue && !/[+\-*/.]$/.test(displayValue)) {
        displayValue += operator;
    }
    updateDisplay();
}

function calculate() {
    try {
        displayValue = eval(displayValue).toString();
    } catch {
        displayValue = 'Error';
    }
    updateDisplay();
}
