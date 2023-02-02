let fruits = ["🍎", "🍊", "🍎", "🍎", "🍊"];
let appleEl = document.getElementById('apple-shelf');
let orangeEl = document.getElementById('orange-shelf');

function sortFruits(){
  for(let i=0;i<fruits.length;i++){
    if(fruits[i] === "🍎"){
      appleEl.textContent += fruits[i];
    }
    else{
      orangeEl.textContent += fruits[i];
    }
  }
}

sortFruits();
