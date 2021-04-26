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

let allComputations = [];
let runningTotal = [];


function filler() {
    let para = document.querySelector('.results').innerHTML = '';
    runningTotal.push(allComputations.join(''));
    allComputations = [];

}

function print(text) {
    let para = document.querySelector('.results');
    para.textContent += `${text}`;
    para.style.cssText = "font-size: 35px; color: white; margin-bottom: -1px;";
    allComputations.push(text);
    
}
    
function addition() {
    
    console.log(runningTotal);
    let para = document.querySelector('.results');
    para.style.cssText = "font-size: 35px; color: white; margin-bottom: -1px;";
    runningTotal.push(' + ');
    total = runningTotal.join('');
    let b = runningTotal.length - 1;
    let c = para.textContent;
    filler();
    let sum = b + c;
    para.textContent = `${sum}`;
}

function equalButton() {
    let para = document.querySelector('.results');
    runningTotal.push(para.textContent);
    total = runningTotal.join('');
    para.innerHTML = '';
    console.log(`${total}`);


}