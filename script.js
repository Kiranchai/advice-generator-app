const rollBtn = document.getElementById('roll-btn');
const adviceQuote = document.querySelector('.advice-quote');
const adviceID = document.querySelector('.advice-id');

const fetchQuote = function(){ 
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(slip => displayQuote(slip));
}

function displayQuote(slip){
    adviceQuote.textContent = slip.slip.advice;
    adviceID.textContent = `Advice #${slip.slip.id}`;
}

fetchQuote();
rollBtn.addEventListener('click', fetchQuote)