const display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    const expression = display.value.trim();
    if (!expression) {
        return;
    }

    const validPattern = /^[0-9+\-*/%.() ]+$/;
    if (!validPattern.test(expression)) {
        display.value = "Error";
        return;
    }

    try {
        display.value = Function("return " + expression)();
    } catch {
        display.value = "Error";
    }
}