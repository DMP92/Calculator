const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const zero = document.querySelector('.zero');

const x = document.querySelector('.c2r1Bd');
const period = document.querySelector('.period');
const equals = document.querySelector('.equalButt');
const divide = document.querySelector('.c1r1Bc');
const clear = document.querySelector('.c1r1Bb');
const allClear = document.querySelector('.c1r1Ba');
const minus = document.querySelector('.minus');
const plus = document.querySelector('.plus');


const one = document.querySelector('.one');
one.addEventListener('click', () => {
    print(1);
})
two.addEventListener('click', () => {
    print(2);
})
three.addEventListener('click', () => {
    print(3);
})
four.addEventListener('click', () => {
    print(4);
})
five.addEventListener('click', () => {
    print(5);
})
six.addEventListener('click', () => {
    print(6);
})
seven.addEventListener('click', () => {
    print(7);
})
eight.addEventListener('click', () => {
    print(8);
})
nine.addEventListener('click', () => {
    print(9);
})

zero.addEventListener('click', () => {
    print(0);
})



function print(text) {
    const screen = document.querySelector('.screen');
    let para = document.createElement('p');
    para.textContent = `${text}`;
    para.style.cssText = "font-size: 30px; margin-bottom: 7px; color: white;"
        screen.appendChild(para);
}

