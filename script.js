
const input = Array.from(document.getElementsByClassName('input-area'));
const outputArea = document.querySelector('.output-area');
const btn = document.querySelector('#btn');
const pnlImage = document.querySelector('.pnl-image');
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
            pnlImage.setAttribute('style','display:block');
            pnlImage.setAttribute('src','/img/profit.svg');
            outputArea.innerHTML = `Your<span class="highlighted-text"> Profit </span>is <span class="highlighted-text">Rs. ${resultAmount}</span> or <span class="highlighted-text">${resultPercentage}%</span>`;
        }else if(resultAmount < 0){
            pnlImage.setAttribute('style','display:block');
            pnlImage.setAttribute('src','/img/loss.svg');
            outputArea.innerHTML = `Your<span class="highlighted-text"> Loss </span>is <span class="highlighted-text">Rs. ${resultAmount}</span> or <span class="highlighted-text">${resultPercentage}%</span>`;
        }else if(resultAmount == 0){
            pnlImage.setAttribute('style','display:none');
            outputArea.innerHTML = `<span class="highlighted-text"> No Profit No Loss </span>`;
        } 
    }else {
        outputArea.textContent = 'All fields are required';
    }
}

btn.addEventListener('click',displayResult);

