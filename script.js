let displayResult = '' ;
let firstnumber = '';
let operator = ''
let secondnumber = '';


function updateResult(value){
    document.getElementById('result').innerHTML = value;
}

function appendnumber(num){
   if ( operator === ''){
        firstnumber += num;
        updateResult(firstnumber);
   }else{
        secondnumber += num;
        updateResult(secondnumber);
    }   
}

function setOperator(op){
    operator = op;
    updateResult(operator);
}

function allclear(){
    firstnumber = '';
    secondnumber = '';
    operator = '';
    displayResult = '';
    updateResult(displayResult);
}

function backspace(){
    if (firstnumber !== ''){
        firstnumber = firstnumber.slice(0,-1);
        updateResult(firstnumber);
    }
    else if(operator !== ''){
        operator = '';
        updateResult(operator);
    }
    else if(secondnumber !== ''){
        secondnumber = secondnumber.slice(0,-1);
        updateResult(secondnumber);
    }
}

function add(a,b) {
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}
function percent(a,b){
    return (a/100)*b;
}



function operate (){
    
    let a = parseFloat(firstnumber);
    let b = parseFloat(secondnumber);
    let result =0;

    if (operator === '+') {
        result = add(a, b)
    }
    else if (secondnumber == '0'){
        result = 'You\'re a noob';
    }
    else if(operator === '-'){
        result = subtract(a, b)
    }
    else if(operator === '*'){
        result = multiply(a, b)
    }
    else if(operator === '/'){
        result = divide(a, b)
    }
    else if(operator === '%'){
        result = percent(a, b)
    }
    else {
        result = firstnumber;
    }
    updateResult(result)
    firstnumber = result.toString();
    secondnumber= '';
    operator ='';
}


