let allComputations = [];
let runningTotal = [];
let method = []; 
let para = document.querySelector('.results');

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
    if (runningTotal.length === 0 && para.textContent === '') {

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
});


const plus = document.querySelector('.plus');
plus.addEventListener('click', () => {
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
});


const x = document.querySelector('.c2r1Bd');
x.addEventListener('click', () => {
    if (runningTotal.length === 0 && para.textContent === '') {

    } else {

    if(method[0] != '') {
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
});

const divide = document.querySelector('.c1r1Bc');
divide.addEventListener('click', () => {
    if (runningTotal.length === 0 && para.textContent === '') {

    } else {
    if(method[0] != '') {
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
});


const period = document.querySelector('.period');
period.addEventListener('click', () => {
    let para = document.querySelector('.results');
    if( para.textContent.includes('.') ) {

    } else {
        print('.');

    }
})


const equals = document.querySelector('.equalButt');
equals.addEventListener('click', () => {
    let para = document.querySelector('.results');
    let a = runningTotal[0];
    let b = para.textContent;
    let c = method[0];
    operate(a, b, c);
   
    
});    




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
    let liveComp = document.querySelector('.liveComputation');

    runningTotal.pop();
    runningTotal.shift();
    filler();
    liveComp.innerHTML = '';
})    




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
        
        livePrint(`${a.toFixed(2)} + ${b.toFixed(2)} = ${total.toFixed(2)}`);
        filler()
        runningTotal.unshift(total);
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
    if(para.innerHTML == '') {

    } else {
        runningTotal.push(para.innerHTML);
    }    
    filler();
    let numeric = runningTotal.map((i) => Number(i));
    console.log(numeric);
    
    numeric.reduce((a, b) => {
        let total = a - b;
        
        livePrint(`${a.toFixed(2)} - ${b.toFixed(2)} = ${total.toFixed(2)}`);
        filler()
        runningTotal.unshift(total);
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
        if (a == 0 && b == 0) {
            livePrint('0% of \'0\' is nothing...');
        } else {
        let total = a / b;
        
        livePrint(`${a.toFixed(2)} / ${b.toFixed(2)} = ${total.toFixed(2)}`);
        filler()
        runningTotal.unshift(total);
        runningTotal.pop();
        runningTotal.pop();
        console.log(runningTotal);
        console.log(a / b);
        c = '/';
        }
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
    
    numeric.reduce((a, b) => {
        let total = a * b;
        
        livePrint(`${a.toFixed(2)} * ${b.toFixed(2)} = ${total.toFixed(2)}`);
        filler()
        runningTotal.unshift(total);
        runningTotal.pop();
        runningTotal.pop();
        console.log(runningTotal);
        console.log(a * b);
        c = '*';
    })
}

function equalButton() {
    filler();
    print(livePrint);
}


function operate(a, b, c) {
    let para = document.querySelector('.results');
    c = method[0];
    a = runningTotal[0];
    b = para.textContent;
    
    switch(true) {
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