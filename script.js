
const input = Array.from(document.getElementsByClassName('input-area'));
const outputArea = document.querySelector('.output-area');
const btn = document.querySelector('#btn');
let resultAmount = 0;
let resultPercentage = 0;

function calculateResult(){
    let totalBuy = input[0].value * input[1].value;
    let totalSell = input[0].value * input[2].value;
    
    resultAmount = totalSell - totalBuy;
    resultPercentage = (resultAmount/totalBuy * 100).toFixed(2);
}
function displayResult(){
    if(input[0].value != '' && input[1].value != '' && input[2].value != ''){
        calculateResult();
        if(resultAmount > 0){
            outputArea.innerHTML = `Your<span class="highlighted-text"> Profit </span>is <span class="highlighted-text">Rs.${resultAmount} or ${resultPercentage}%</span>`;
        }else if(resultAmount < 0){
            outputArea.innerHTML = `Your<span class="highlighted-text"> Loss </span>is ${result}`;
        }else if(resultAmount == 0){
            outputArea.innerHTML = `<span class="highlighted-text"> No Profit No Loss </span>`;
        } 
    }else {
        outputArea.textContent = 'All fields are required';
    }
}

btn.addEventListener('click',displayResult);
