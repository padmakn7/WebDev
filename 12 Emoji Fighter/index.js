
let fighters = ["😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "😊", "😇", "🙂", "🙃", "😉", "😌", 
"😍", "😛", "😝", "😜", "🤪"];

 let stageEl = document.getElementById("stage-el");
 let pickEl = document.getElementById("pick-el");

 pickEl.addEventListener("click", function(){
  let randomIndex1 = Math.floor(Math.random() * fighters.length);
  let randomIndex2 = Math.floor(Math.random() * fighters.length);
  stageEl.textContent = fighters[randomIndex1] + " VS " + fighters[randomIndex2];
 })

 