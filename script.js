//variables for calculations
let input = '';
let operatorValue = '';
i = 0;
let opResult = 0;
let arr =[];
let globArr = [];
let storedSum = 0;
let plus = [];
let minus = [];
let multiply = [];
let divide = [];
const signPl = '+';
const signMin = '-';
const signMul = '*';
const signDiv = '/';
let dontPrint = false;


//display selected value
const display = document.querySelector('.display');
const value = document.querySelector('.numbers');
const operator = document.querySelector('.operators');






//functions checking for signs and take those signs out


function allPos(signArg, arrayArg) {
    let positions = arr.indexOf(signArg);
    while (positions !== -1) {
      arrayArg.push(positions);
      positions = arr.indexOf(signArg, positions + 1);
    }
    console.log(arrayArg);
  }

//split array based on indexes



const result = document.querySelector('#equals');
    result.addEventListener('click', (event) => {
        allPos(signPl, plus);
        allPos(signMin, minus);
        allPos(signMul, multiply);
        allPos(signDiv, divide);
        
//create a new array which holds position of every sign
        let newArr = plus.concat(minus).concat(multiply).concat(divide);
        newArr.sort(function(a, b){return a-b});
        globArr = newArr;
        console.log('global arr', globArr);
        console.log(newArr);

//check if only one variable was inputted
        if (newArr.length === 0) {
            let tempSum = +arr.join('');
            alert(`operation error, you have only selected one value/item: ${tempSum}`);
            clearAllVars();
        }else
        {
//if two operators such as ++ // +/ etc were entered, error is thrown and calculator is reset               
        for (let i = 0; i < newArr.length; i++){
            if (newArr[0] === 0){
                    alert('Invalid operation, please make sure operators follow a number');
                    clearAllVars();
                    console.log('after cleared', arr);
                    return;
                    } else if (newArr[i] + 1 === newArr[i + 1]) 
                    {
                        alert('Invalid operation, please make sure operators follow a number');
                        clearAllVars();
                        return;
                    } 
                };
//if two .. were pressed at any point throw an error
        for (let i = 0; i < arr.length; i++){
            if (arr[0] === '.'){
                    alert('Invalid operation, please make sure operators follow a number');
                    clearAllVars();
                    console.log('after cleared', arr);
                    return;
                    } else if (arr[i] === '.' && arr[i + 1] === '.') 
                    {
                    alert('Invalid operation, please make sure operators follow a number');  
                    return;
                    } 
                };
 //main operation of calculator - the calculation is done from left to right ignoring BIDMAS       
        for (let i = 0; i < globArr.length; i++){
            if (i === 0) {
                    let p1 = arr.slice(i, globArr[i]);
                        let tempSum = +p1.join('');
                        console.log(tempSum);
                        let sum = +tempSum;
                        storedSum = sum;
                        console.log(sum);
                        operation(i);
                    } else { 
                        operation(i);
            }
            };
            
            display.textContent += ' = ' + storedSum;
        }
    });
    
//operation function for calculating the result based on inputs selected by user
function operation(i){
    let p2 = arr.slice(globArr[i]+1, globArr[i+1]);
        console.log(p2);
          p2 = +p2.join('');
          
          console.log(p2);
          let sign = arr[globArr[i]]
          getSign = sign;
          console.log(getSign);
  
          switch (getSign) {
            case ('+'):
              storedSum += +p2;
              console.log(storedSum);
              break;
            case ('-'):
              storedSum -= +p2;
              console.log(storedSum);
              break;
            case ('*'):
              storedSum *= +p2;
              console.log(storedSum);
              break;
            case ('/'):
              storedSum /= +p2;
              console.log(storedSum);
              break;
            
          }
  } 


        

//select first value from click on numbers


value.addEventListener('click', (event) => {
        target = event.target.textContent; 
        arr.push(target);
        console.log(arr);
        display.textContent += +target;
        input = display.textContent;
        console.log(target);
    });


//select operator from clicks on operator

operator.addEventListener('click', (event) => {
    target = event.target.textContent;
    display.textContent += target;
   
    console.log(target);
    
    
    arr.push(target);
//clear variables;
    switch (target) {
        case 'CLR':
            console.log('Clr pressed');
            input = '';
            operatorValue = '';
            i = 0;
            opResult = 0;
            arr =[];
            globArr = [];
            storedSum = 0;
            plus = [];
            minus = [];
            multiply = [];
            divide = [];
            display.textContent = '';
            break;
    }
});

function clearAllVars() {
        console.log('Clr pressed');
        input = '';
        operatorValue = '';
        i = 0;
        opResult = 0;
        arr =[];
        globArr = [];
        storedSum = 0;
        plus = [];
        minus = [];
        multiply = [];
        divide = [];
        display.textContent = '';    
}


const delLast = document.querySelector('#delete');
    delLast.addEventListener('click', e => {
        console.log('del was clicked');
        console.log(arr);
        arr.pop(arr.length -1);
        display.textContent = arr.join('');
        console.log(arr);
    })



