let input = document.getElementById('inputBox');
let button = document.querySelectorAll('button');

let string = "";
let arr = Array.from(button);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerText == '=') {
            try {
                // Handle power operation when input contains "^"
                if (string.includes('^')) {
                    let parts = string.split('^');
                    if (parts.length === 2) {
                        let base = parseFloat(parts[0]);
                        let exponent = parseFloat(parts[1]);
                        let result = Math.pow(base, exponent);
                        input.value = result;
                        string = result.toString();
                    } else {
                        throw new Error("Invalid input for power operation");
                    }
                } else {
                    // Evaluate the expression and display the result
                    string = eval(string);
                    input.value = string;
                }
            } catch (error) {
                input.value = "Error";
            }
        } else if (e.target.innerText == 'AC') {
            // Clear the input
            string = "";
            input.value = string;
        } else if (e.target.innerText == 'DEL') {
            // Remove the last character from the input
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else if (e.target.innerText == '!') {
            // Factorial
            try {
                let num = parseFloat(string);
                let result = 1;
                for (let i = 1; i <= num; i++) {
                    result *= i;
                }
                input.value = result;
                string = result.toString();
            } catch (error) {
                input.value = "Error";
            }
        } else if (e.target.innerText == '√') {
            // Square root
            try {
                let num = parseFloat(string);
                if (num < 0) {
                    throw new Error("Invalid input for square root");
                } else {
                    let result = Math.sqrt(num);
                    input.value = result;
                    string = result.toString();
                }
            } catch (error) {
                input.value = "Error";
            }
        } else if (e.target.innerText == 'sin') {
            // Sine
            try {
                let angle = parseFloat(string);
                let result = Math.sin(angle * Math.PI / 180); // Convert to radians
                input.value = result;
                string = result.toString();
            } catch (error) {
                input.value = "Error";
            }
        } else {
            // Append the clicked button's value to the input
            string += e.target.innerText;
            input.value = string;
        }
    });
});
