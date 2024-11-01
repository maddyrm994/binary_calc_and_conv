// Base Converter Function
function convertNumber() {
    const number = document.getElementById("number").value;
    const base = parseInt(document.getElementById("base").value);

    // Parse the number from the input base
    let decimalValue;
    try {
        decimalValue = parseInt(number, base);
        if (isNaN(decimalValue)) throw new Error("Invalid input");
    } catch {
        alert("Invalid input. Please check your number and base.");
        return;
    }

    // Convert to other bases
    document.getElementById("binary-output").textContent = decimalValue.toString(2);
    document.getElementById("decimal-output").textContent = decimalValue.toString(10);
    document.getElementById("octal-output").textContent = decimalValue.toString(8);
    document.getElementById("hex-output").textContent = decimalValue.toString(16).toUpperCase();
}

// Binary Calculator Function
function calculateBinary() {
    const num1 = document.getElementById("binary-num1").value;
    const num2 = document.getElementById("binary-num2").value;
    const operation = document.getElementById("operation").value;

    // Validate that inputs are binary
    if (!/^[01]+$/.test(num1) || !/^[01]+$/.test(num2)) {
        alert("Please enter valid binary numbers.");
        return;
    }

    // Convert binary inputs to decimal for calculation
    const decimalNum1 = parseInt(num1, 2);
    const decimalNum2 = parseInt(num2, 2);
    let resultDecimal;

    // Perform selected operation
    switch (operation) {
        case "add":
            resultDecimal = decimalNum1 + decimalNum2;
            break;
        case "subtract":
            resultDecimal = decimalNum1 - decimalNum2;
            break;
        case "multiply":
            resultDecimal = decimalNum1 * decimalNum2;
            break;
        case "divide":
            if (decimalNum2 === 0) {
                alert("Cannot divide by zero.");
                return;
            }
            resultDecimal = Math.floor(decimalNum1 / decimalNum2); // Use integer division
            break;
        default:
            alert("Invalid operation selected.");
            return;
    }

    // Convert result back to binary
    document.getElementById("binary-result").textContent = resultDecimal.toString(2);
}
