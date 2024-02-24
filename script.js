//variables for calculations
let input = '';
let operatorValue = '';
let operatorState = false;
let valTest = 0;
let valTest2 = 0;
i = 0;
let opResult = 0;


//display selected value
const display = document.querySelector('.display');
const value = document.querySelector('.numbers');
const operator = document.querySelector('.operators');

//add operation
function add(a, b){
    let result = a + b;
    console.log(result);
    return opResult = result;
}

//subtract operation
function subtract(a, b){
    let result = a - b;
    console.log(result);
    return opResult = result;
}

//multiply operation
function multiply(a, b){
    let result = a * b;
    console.log(result);
    return opResult = result;
}

//divide operation
function divide(a, b){
    let result = a / b;
    console.log(result);
    return opResult = result;
}



operate();

//operate on 2 values
function operate(){
    const equals = operator.querySelector('#equals');
    equals.addEventListener('click', (event) => {
        console.log('equals has been pressed');
        console.log(valTest.length, input.length);
        console.log(input.slice(valTest.length + 1));
//get second input number
        valTest2 = input.slice(valTest.length + 1);
// convert second input to int
        let toNum2 = +valTest2;
//covert array to string
        let toString = valTest.join('');
//convert string to int
        let toNum = +toString;
        console.log(toNum, toNum2);
//switch statement depending on operator selected
        switch (operatorValue) {
            case '+':
                add(toNum, toNum2);
                display.textContent = opResult;
                break;
            case '-':
                subtract(toNum, toNum2);
                display.textContent = opResult;
                break;
            case 'x':
                multiply(toNum, toNum2);
                display.textContent = opResult;
                break;
            case '/':
                divide(toNum, toNum2);
                display.textContent = opResult;
                break;
        }
    })
}


//select first value from click on numbers


value.addEventListener('click', (event) => {
    target = event.target.textContent; 
    display.textContent += +target;
    input = display.textContent;
    console.log(target);
});


//select operator from clicks on operator

operator.addEventListener('click', (event) => {
    target = event.target.textContent;

    switch (target) {
        case '=':
            break;
        case '+':
            defCase();
            break;
        case '-':
            defCase();
            break;
        case 'x':
            defCase();
            break;
        case '/':
                defCase();
                break;
        case 'Clr':
            clearVars();
            display.textContent = '';
    }
    
});

///op state function

function opState(i){
    if (input !== '' && i < 1) {
        console.log(input.split(''));
        return valTest = input.split('');
    }};
    
//clear vars function
function clearVars(){
    input = '';
    operatorValue = '';
    operatorState = false;
    valTest = 0;
    valTest2 = 0;
    i = 0;
    opResult = 0;
}

//default case operation
function defCase() {
    operatorValue = target;
    console.log(operatorValue);
    display.textContent += operatorValue;
    operatorState = true;
    opState(i);
    i++;
}