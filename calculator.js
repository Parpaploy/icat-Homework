let formula = '';
let operation = '';
let num1 = 0;
let num2 = 0;

// let history = [];
// let previousResult = null;

function addFormula(x) {
    formula = formula + x;
    document.getElementById('result').innerHTML = formula;
}

document.getElementById('equal').addEventListener('click', function() {
    let result = calculateResult();
    document.getElementById('result').innerHTML = result;
    console.log('num1: ' + num1);
    console.log('num2: '+ num2);
});

document.getElementById('clear').addEventListener('click', function() {
    formula = '';
    document.getElementById('result').innerHTML = "0";
});

/* Operators */

document.getElementById('plus').addEventListener('click', function() {
    num1 = parseFloat(formula);
    formula = '';
    operation = '+';
});
document.getElementById('minus').addEventListener('click', function() {
    num1 = parseFloat(formula);
    formula = '';
    operation = '-';
});
document.getElementById('multi').addEventListener('click', function() {
    num1 = parseFloat(formula);
    formula = '';
    operation = '*';
});
document.getElementById('devide').addEventListener('click', function() {
    num1 = parseFloat(formula);
    formula = '';
    operation = '/';
});

function calculateResult() {
    num2 = parseFloat(formula);
    let result;
    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                result = "Cannot divide by zero";
            } else {
                result = num1 / num2;
            }
            break;
        default:
            result = "Invalid operation";
    }
    formula = result.toString(); 
    // previousResult = result
    return result;
}

// function showHistory() {
//     if (history.length > 0) {
//         document.getElementById('history').innerHTML = history.join('<br>');
//     } else {
//         document.getElementById('history').innerHTML = "No history available";
//     }
    
//     if (formula !== '') {
//         let displayResult = previousResult !== null ? previousResult : formula;
//         history.push(`${num1} ${operation} ${num2} = ${displayResult}`);
//         document.getElementById('history').innerHTML = history.join('<br>');
//     }
// }

// document.getElementById('historyButton').addEventListener('click', function() {
//     clearHistory();
//     showHistory();
// });

// function clearHistory() {
//     history = [];
//     document.getElementById('history').innerHTML = "No history available";
// }
