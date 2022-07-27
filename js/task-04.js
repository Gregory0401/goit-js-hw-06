const counterDisplayElem = document.querySelector("#value");
const counterMinusElem = document.querySelector('[data-action="decrement"]');
const counterPlusElem = document.querySelector('[data-action="increment"]');

let counterValue = 0;

updateDisplay();

counterPlusElem.addEventListener("click",()=>{
    counterValue++;
    updateDisplay();
}) ;

counterMinusElem.addEventListener("click",()=>{
    counterValue--;
    updateDisplay();
});

function updateDisplay(){
    counterDisplayElem.innerHTML = counterValue;
};