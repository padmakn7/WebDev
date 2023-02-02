// const emojis = ['🐥','🐯','🐼']
// console.log(emojis.includes('🐴'))
let items = [];
const addItemBtn = document.getElementById('add-item-btn');
const itemInput = document.getElementById('item');
const itemsUl = document.getElementById('items-ul');


addItemBtn.addEventListener("click", function(){
  if(items.includes(itemInput.value)){
    console.log("no duplicates");
  }
  else{
    items.push(itemInput.value);
    renderItems();
  }
  
  itemInput.value = "";
  
});

function renderItems(){
  let html= ``;
  for(let item of items){
    html += `<li class="list-item">${item}</li>`
  }
  itemsUl.innerHTML = html;
}