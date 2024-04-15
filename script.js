
//Calculadora

/*
document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    const calculator = document.getElementById("calculator");

    const buttons = [
        '7', '8', '9', '/',
        '4', '5', '6', 'x',
        '1', '2', '3', '-',
        '0', '.', '=', '+', 'AC', 'DEL'
    ];

    buttons.forEach(button => {
        const btn = document.createElement("button");
        btn.textContent = button;
        calculator.appendChild(btn);
    });

    calculator.addEventListener("click", function(event) {
        const value = event.target.textContent;

        if (value === "=") {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = "Error";
            }
        } else if (value === "AC") {
            display.value = "";
        } else if (value === "DEL") {
            display.value = display.value.slice(0, -1); 
        } else {
            display.value += value;
        }
    });
});
*/

document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    const calculator = document.getElementById("calculator");

    const buttons = [
        '7', '8', '9', '/',
        '4', '5', '6', 'x',
        '1', '2', '3', '-',
        '0', '.', '=', '+', 'AC', 'DEL'
    ];

    buttons.forEach(button => {
        const btn = document.createElement("button");
        btn.textContent = button;
        calculator.appendChild(btn);
    });

    calculator.addEventListener("click", function(event) {
        const value = event.target.textContent;

        if (value === "=") {
            try {
                const result = eval(display.value);
                if (result === Infinity || result === -Infinity) {
                    throw new Error("Error Matematico : [AC] Cancelar");
                }
                display.value = result;
            } catch (error) {
                display.value = error.message;
            }
        } else if (value === "AC") {
            display.value = "";
        } else if (value === "DEL") {
            display.value = display.value.slice(0, -1); 
        } else {
            display.value += value;
        }
    });
});


// Mostar u ocultar  ejemplo de operaciones basicas

// suma
const sum = document.getElementById('sum');
const exampleSum = document.getElementById('suma');

sum.addEventListener('click', function() {
    
    if (exampleSum.style.display === 'none') {
        exampleSum.style.display = 'block';
    } else {
        exampleSum.style.display = 'none';
    }
});


// resta
const res = document.getElementById('res');
const ejemploRes = document.getElementById('resta');

res.addEventListener('click', function() {
    
    if (ejemploRes.style.display === 'none') {
        ejemploRes.style.display = 'block';
    } else {
        ejemploRes.style.display = 'none';
    }
});

// multiplicacion
const mul = document.getElementById('mul');
const ejemploMul = document.getElementById('multi');

mul.addEventListener('click', function() {
   
    if (ejemploMul.style.display === 'none') {
        ejemploMul.style.display = 'block';
    } else {
        ejemploMul.style.display = 'none';
    }
});

// diviion
const div = document.getElementById('div');
const ejemploDiv = document.getElementById('divi');

div.addEventListener('click', function() {
   
    if (ejemploDiv.style.display === 'none') {
        ejemploDiv.style.display = 'block';
    } else {
        ejemploDiv.style.display = 'none';
    }
});