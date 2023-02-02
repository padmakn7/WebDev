const modalChoiceBtns = document.getElementById('modal-choice-btns');
const declineBtn = document.getElementById('decline-btn');
const consentForm = document.getElementById('consent-form');
const modalContainer = document.getElementById('modal-container');
const modalCloseBtn = document.getElementById('modal-close-btn');
const modalText = document.getElementById('modal-text');

setTimeout(function(){
  modalContainer.style.display = 'inline';
},1500)  //execute function after 1.5 sec

modalCloseBtn.addEventListener("click", function(){
  modalContainer.style.display = 'none';
})

consentForm.addEventListener("submit", function(e){
  e.preventDefault();
  console.log("form submitted");

  const formData = new FormData(consentForm);
  const fullName = formData.get('fullName');
  console.log(fullName);

  modalText.innerHTML = `
    <div class="modal-inner-loading">
      <img src="images/loading.svg" class="loading">
      <p id="upload-text">Uploading your data to the dark web...</p>
    </div>`

  setTimeout(function(){
    document.getElementById('upload-text').innerText = `
      Making the sale...`
  }, 1500)

  setTimeout(function(){
    document.getElementById('modal-inner').innerHTML = `
      <h2>Thanks <span class="modal-display-name">${fullName}</span>, you sucker! </h2>
      <p>We just sold the rights to your eternal soul.</p>
      <div class="idiot-gif">
        <img src="images/pirate.gif">
      </div>
      `
      modalCloseBtn.disabled = false;

  }, 3000);


});


declineBtn.addEventListener("click", function(){
  modalChoiceBtns.classList.toggle('modal-choice-btns-reverse');
});

