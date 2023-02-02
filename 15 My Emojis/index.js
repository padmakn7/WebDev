const myEmojis = ["👨‍💻", "⛷", "🍲"];
const container = document.getElementById("emoji-container");
const addEndBtn = document.getElementById("add-end");
const addBeginningBtn = document.getElementById("add-beginning");
const removeEndBtn = document.getElementById("remove-end");
const removeBeginningBtn = document.getElementById("remove-beginning");
const inputEl = document.getElementById("emoji-input");

function renderEmojis(){
  container.innerHTML = "";
  for(let i=0; i<myEmojis.length; i++){
    const emoji = document.createElement("span");
    emoji.textContent = myEmojis[i];
    container.append(emoji);
  }
}

renderEmojis();

addEndBtn.addEventListener("click", function(){
  if(inputEl.value){
    myEmojis.push(inputEl.value);
    inputEl.value="";
    renderEmojis();
  }
});


addBeginningBtn.addEventListener("click", function(){
  if(inputEl.value){
    myEmojis.unshift(inputEl.value);
    inputEl.value="";
    renderEmojis();
  }
});

removeEndBtn.addEventListener("click", function(){
  myEmojis.pop();
  renderEmojis();
});

removeBeginningBtn.addEventListener("click", function(){
  myEmojis.shift();
  renderEmojis();
});