//chrome://extensions/
let myLeads = []
const inputEl=document.getElementById("input-el");
const saveInputBtn = document.getElementById("save-input");
const saveTabBtn = document.getElementById("save-tab");
const deleteAllBtn = document.getElementById("delete-all");
const ulEl = document.getElementById("ul-el");

const leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"));

if(leadsFromLocalStorage){
  myLeads = leadsFromLocalStorage; //push
  render(myLeads);
}

function render(leads){
  let listItems = "";
  for(let i=0;i<leads.length;i++){
    listItems += `<li>
       <a target='_blank' href='${leads[i]}'> 
          ${leads[i]}
       </a>
    </li>`;
  }
  ulEl.innerHTML = listItems;  //comes with a cost, so done only once
}

saveInputBtn.addEventListener("click", function(){
  myLeads.push(inputEl.value);
  inputEl.value="";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
  
})


saveTabBtn.addEventListener("click", function(){
  chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  })
})


deleteAllBtn.addEventListener("click", function(){
  localStorage.clear();
  myLeads = [];
  render(myLeads);
})