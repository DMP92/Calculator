let allComputations = [];
let runningTotal = [];


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
const x = document.querySelector('.c2r1Bd');


const period = document.querySelector('.period');


const equals = document.querySelector('.equalButt');
equals.addEventListener('click', equalButton);

const divide = document.querySelector('.c1r1Bc');


const clear = document.querySelector('.c1r1Bb');


const allClear = document.querySelector('.c1r1Ba');


const minus = document.querySelector('.minus');


const plus = document.querySelector('.plus');
plus.addEventListener('click', addition);




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

function addition(a, b) {
    let para = document.querySelector('.results');
    para.style.innerHTML = "font-size: 35px; color: white; ";

    runningTotal.push(para.innerHTML);
    filler();
    let numeric = runningTotal.map((i) => Number(i));
    console.log(numeric);
    
    numeric.reduce((a, b) => {
        let total = a + b;
        
        livePrint(`${a} + ${b} = ${total}`);
        filler()
        runningTotal.unshift(total);
        runningTotal.pop();
        runningTotal.pop();
        console.log(runningTotal);
        
    })
   
}

function equalButton() {
    filler();
    total = runningTotal.join('');
    filterInt(runningTotal[0]);
    filterInt(runningTotal[1]);
    addition(runningTotal[0], runningTotal[1]);    
    console.log(addition(runningTotal[0], runningTotal[1]));
}