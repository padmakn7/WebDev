document.addEventListener('click', function(e){
  console.log(e.target.id);
  //document.getElementById(e.target.id).classList.add('read');
  document.getElementById(e.target.id).parentElement.classList.add('read');
  document.getElementById(e.target.id).parentElement.classList.remove('unread');

});