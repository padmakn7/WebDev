let count=0;
let countEl = document.getElementById('count-el');
let entriesEl = document.getElementById('entries-el');

function increment(){
  count=count+1;
  countEl.textContent = count;
}

function save(){
  entriesEl.textContent += count + ' - '
  count=0;
  countEl.textContent = 0;
}

console.log("let's count people on the subway!");