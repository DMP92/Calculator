let eventArray = [];
let allComputations = [];
let runningTotal = [];
let method = []; 
let para = document.querySelector('.results');


// keyboard support 

window.addEventListener('keydown', function(e){
    const button = document.querySelector(`button[data-key="${e.keyCode}"`);
    if(!button) return;
    eventArray.unshift(`${e.keyCode}`);
    console.log(eventArray);
    button.classList.add('pressed');
    para = document.querySelector('.results');
    if(!button) return;

    switch(true) {
        case `${e.keyCode}` === "48":
            print(0);
        break;
    
    case `${e.keyCode}` === "49":
            print(1);
    break;

    case `${e.keyCode}` === "50":
            print(2);
    break;

    case `${e.keyCode}` === "51":
            print(3);
    break;

    case `${e.keyCode}` === "52":
            print(4);

    break;

    case `${e.keyCode}` === "53":
            print(5);
    break;

    case `${e.keyCode}` === "54":
            print(6);
    break;

    case `${e.keyCode}` === "55":
            print(7);
    break;

    case `${e.keyCode}` === "56":
            print(8);
    break;

    case `${e.keyCode}` === "57":
            print(9);
    break;

    case `${e.keyCode}` === "13":
            equalsButton();
    break;

    case `${e.keyCode}` === "189":
        if (para.textContent === '') {
            print('-');
        } else if (para.textContent === '-') {

        } else {
        minusButton();
        }
    break;
    
    case `${e.keyCode}` === "187":
            plusButton();

    break;

    case `${e.keyCode}` === "190":
            periodButton()
    break;

    case `${e.keyCode}` === "191":
            divisionButton()
    break;

    case `${e.keyCode}` === "27":
            allClearButton();
    break;

    case `${e.keyCode}` === "88":
        multiButton();
    break;

    case `${e.keyCode}` === "8":
            clearFunction();
    break;

    case `${e.keyCode}` === "110":
        periodButton();
    break;

    case `${e.keyCode}` === "106":
        multiButton();
    break;

    case `${e.keyCode}` === "111":
        divisionButton();
    break;

    case `${e.keyCode}` === "109":
        minusButton();
    break;

    case `${e.keyCode}` === "107":
        plusButton();
    break;

}});

window.addEventListener('keyup', function(e) {
    const button = document.querySelector(`button[data-key="${e.keyCode}"`);
    if(!button) return;
    button.classList.remove('pressed');
    eventArray.pop();
    console.log(eventArray);
    
    
})




// Numerical identifiers & event listeners



const zero = document.querySelector('.zero');
zero.addEventListener('click', () => {
    print(0);
})

const one = document.querySelector('.one');
one.addEventListener('click', () => {
    print(1);
})

const two = document.querySelector('.two');
two.addEventListener('click', () => {
    print(2);
})

const three = document.querySelector('.three');
three.addEventListener('click', () => {
    print(3);
})


const four = document.querySelector('.four');
four.addEventListener('click', () => {
    print(4);
})


const five = document.querySelector('.five');
five.addEventListener('click', () => {
    
    print(5);
})


const six = document.querySelector('.six');
six.addEventListener('click', () => {
    print(6);
})


const seven = document.querySelector('.seven');
seven.addEventListener('click', () => {
    print(7);
})


const eight = document.querySelector('.eight');
eight.addEventListener('click', () => {
    print(8);
})


const nine = document.querySelector('.nine');
nine.addEventListener('click', () => {
    print(9);

})




// Mathematic identifiers and event listeners
const minus = document.querySelector('.minus');
minus.addEventListener('click', () => {
    if (para.textContent === '') {
        print('-');
    } else if (para.textContent === '-') {

    } else {
    minusButton();
    }
});


    function minusButton() {
        if (runningTotal.length === 0 && para.textContent === '') {
           
        } else if (para.textContent === '') {
            print('-');
        } else {
            para = document.querySelector('.results');
    
        if(method[0] !== '') {
            console.log(true)
            operate();
            method.shift();
        method.pop();
        method.push('-');
        subtraction();
        
        } else if (method[0] == '') { 
            console.log(false)
        method.shift();
        method.pop();
        method.push('-');
        subtraction();
        }
    }
}

const plus = document.querySelector('.plus');
plus.addEventListener('click', () => {
    plusButton();
});

function plusButton() {
    if (runningTotal.length === 0 && para.textContent === '') {

    } else {
    para = document.querySelector('.results');

    if(method.length == 1) {
    operate();
    method.shift();
    method.pop();
    method.push('+');
    addition();
    } else {
        method.shift();
        method.pop();
        method.push('+');
        addition();
    }
}
}


const x = document.querySelector('.c2r1Bd');
x.addEventListener('click', () => {
    multiButton();
});

function multiButton() {
    if (runningTotal.length === 0 && para.textContent === '') {

    } else {

        if(method.length == 1) {
            operate();
        method.shift();
        method.pop();
        method.push('*');
        multiplication();
        } else {
            method.shift();
            method.pop();
            method.push('*');
            multiplication();
        }
    }
}

const divide = document.querySelector('.c1r1Bc');
divide.addEventListener('click', () => {
    divisionButton();
});

function divisionButton() {
    if (runningTotal.length === 0 && para.textContent === '') {

    } else {
        if(method.length == 1) {
            operate();
        method.shift();
        method.pop();
        method.push('/');
        division();
        } else {
            method.shift();
            method.pop();
            method.push('/');
            division();
        }
}
}

const period = document.querySelector('.period');
period.addEventListener('click', () => {
    periodButton();
})

function periodButton() {
    let para = document.querySelector('.results');
    if( para.textContent.includes('.') ) {

    } else {
        print('.');

    }
}

const equals = document.querySelector('.equalButt');
equals.addEventListener('click', () => {
   equalsButton();
   
    
});    

function equalsButton() {
    let para = document.querySelector('.results');
    let a = runningTotal[0];
    let b = para.textContent;
    let c = method[0];
    operate(a, b, c);
}

// Erasing features 


const clear = document.querySelector('.c1r1Bb');
clear.addEventListener('click', () => {
    clearFunction();
})    

function clearFunction() {
    let para = document.querySelector('.results');
    let w = para.textContent;
    const x = w.toString().split('').slice(0, -1).join('');
    const y = Number(x);
    para.textContent = x;
    
}    

const allClear = document.querySelector('.c1r1Ba');
allClear.addEventListener('click', () => {
    allClearButton();
})    

function allClearButton() {
    let liveComp = document.querySelector('.liveComputation');

    runningTotal.pop();
    runningTotal.shift();
    filler();
    liveComp.innerHTML = '';
}


// Screen Printing 



function filler() {
    let para = document.querySelector('.results').innerHTML = '';
    allComputations = [];

}

function print(text) {
    let para = document.querySelector('.results');
    para.textContent += `${text}`;
    para.style.cssText = "font-size: 35px; color: white; ";
    allComputations.push(text); 
}
   

function livePrint(text) {
    let liveComp = document.querySelector('.liveComputation');
    liveComp.innerHTML = text;
}

function addition(a, b, c) {
    let para = document.querySelector('.results');
    para.style.innerHTML = "font-size: 35px; color: white; ";
    if(para.innerHTML == '') {

    } else {
        runningTotal.push(para.innerHTML);
    }
    filler();
    let numeric = runningTotal.map((i) => Number(i));
    console.log(numeric);
    
    numeric.reduce((a, b) => {
        let total = a + b;
        
        switch(true) {
            case total % 1 != 0:
                livePrint(`${a} + ${b} = ${total.toFixed(10)}`);
                filler();
                runningTotal.unshift(total.toFixed(10)); 
            break;
            case total % 1 == 0:
                livePrint(`${a} + ${b} = ${total}`);
                filler();
                runningTotal.unshift(total); 

        }
        runningTotal.pop();
        runningTotal.pop();
        console.log(runningTotal);
        console.log(a + b);
        c = '+';
    })
   
}

function subtraction(a, b, c) {
    let para = document.querySelector('.results');
    para.style.innerHTML = "font-size: 35px; color: white; ";
    if(para.textContent === '') {
            print('-');
    } else {
        runningTotal.push(para.innerHTML);
    }    
    filler();
    let numeric = runningTotal.map((i) => Number(i));
    console.log(numeric);
    
    numeric.reduce((a, b) => {
        let total = a - b;
        
        switch(true) {
            case total % 1 != 0:
                livePrint(`${a} - ${b} = ${total.toFixed(10)}`);
                filler();
                runningTotal.unshift(total.toFixed(10)); 
            break;
            case total % 1 == 0:
                livePrint(`${a} - ${b} = ${total}`);
                filler();
                runningTotal.unshift(total); 

        }
        runningTotal.pop();
        runningTotal.pop();
        console.log(runningTotal);
        console.log(a - b);
        c = '-';
    })
   
}

function division(a, b, c) {
    let para = document.querySelector('.results');
    para.style.innerHTML = "font-size: 35px; color: white; ";
    if(para.innerHTML == '') {

    } else {
        runningTotal.push(para.innerHTML);
    }
    filler();
    let numeric = runningTotal.map((i) => Number(i));
    console.log(numeric);
    
    numeric.reduce((a, b) => {
        let total = a / b;
        switch(true) {
            case total % 1 != 0:
                livePrint(`${a} / ${b} = ${total.toFixed(10)}`);
                filler();
                runningTotal.unshift(total.toFixed(10)); 
            break;
            case total % 1 == 0:
                livePrint(`${a} / ${b} = ${total}`);
                filler();
                runningTotal.unshift(total); 

        }
       
        runningTotal.pop();
        runningTotal.pop();
        console.log(runningTotal);
        console.log(a / b);
        c = '/';
        
    })
}

function multiplication(a, b, c) {
    
    let para = document.querySelector('.results');
    para.style.innerHTML = "font-size: 35px; color: white; ";
    if(para.innerHTML == '') {

    } else {
        runningTotal.push(para.innerHTML);
    }
    filler();
    let numeric = runningTotal.map((i) => Number(i));
    console.log(numeric);
    
    

    numeric.reduce((a, b) => { //a = undefined, b = 5
        let total = a * b; 
    // total = NaN
        switch(true) {
            case total % 1 != 0:
                livePrint(`${a} * ${b} = ${total.toFixed(10)}`);
                filler();
                runningTotal.unshift(total.toFixed(10)); 
            break;
            case total % 1 == 0:
                livePrint(`${a} * ${b} = ${total}`);
                filler();
                runningTotal.unshift(total); 

        }
       
        
        runningTotal.pop();
        runningTotal.pop();
        console.log(runningTotal);
        console.log(a * b);
        c = '*';
        
        
    })
}



function operate(a, b, c) {
    let para = document.querySelector('.results');
    c = method[0];
    a = runningTotal[0];
    b = para.textContent;
    
    switch(true) {
        case para.textContent === '-':
        break;
        case c === '+' :
            if(runningTotal.length == 0) {

            } else if (runningTotal.length == 1) {
                addition(a, b);
            }
        break;   
        
        case c === '-' :
            if(runningTotal.length == 0) {

            } else if (runningTotal.length == 1) {
                subtraction(a, b);
            }    
        break;

        case c === '/' :
            if(runningTotal.length == 0) {
                
            } else if (runningTotal.length == 1) {
                division(a, b);
            }
                
        break;

        case c === '*':
            if(runningTotal.length == 0) {

            } else if (runningTotal.length == 1) {
                multiplication(a, b);
            }    
        
        break;
    }            
}



