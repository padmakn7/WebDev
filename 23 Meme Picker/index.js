import { catsData } from "./data.js";  //leading ./ is optional, will work if you write /data.js


const emotionsContainer = document.getElementById('emotions-container');
const gifsOnlyOption = document.getElementById('gifs-only-option');
const getImage = document.getElementById('get-image');
const memeModal = document.getElementById('meme-modal');
const memeModalCloseBtn = document.getElementById('meme-modal-close-btn');
const memeModalInner = document.getElementById('meme-modal-inner');

emotionsContainer.addEventListener('change', highlightCheckedRadios);
 
memeModalCloseBtn.addEventListener('click', closeModalBox);

getImage.addEventListener('click', renderCat);

function highlightCheckedRadios(e){
  const radios = document.getElementsByClassName("radio");
  for(let radio of radios){
    radio.classList.remove('highlight');
  }
  document.getElementById(e.target.id).parentElement.classList.add('highlight');
}


function closeModalBox(){
  memeModal.style.display = 'none';
}





function getMatchingCatsArray(){
  if(document.querySelector('input[type="radio"]:checked')){
    const selectedEmotion = document.querySelector('input[type="radio"]:checked').value;
    const isGif = gifsOnlyOption.checked;

    const matchingCatsArray = catsData.filter(function(cat){
      if(isGif){
        return cat.emotionTags.includes(selectedEmotion) && cat.isGif
      }
      else{
        return cat.emotionTags.includes(selectedEmotion)
      }
    });
    return matchingCatsArray;
  }
}

function getSingleCatObject(){
  const catsArray = getMatchingCatsArray();

  if(catsArray.length === 1){
    return catsArray[0];
  }
  else{
    const randomNumber = Math.floor(Math.random() * catsArray.length);
    return catsArray[randomNumber];
  }
}


function renderCat(){
  const catObject = getSingleCatObject();
  memeModalInner.innerHTML = `
                          <img 
                          class="cat-img" 
                          src="${catObject.image}"
                          alt="${catObject.alt}"
                          >
                        `;
  memeModal.style.display = 'flex';
} 


function getEmotionsArray(cats){
  const emotionsArray = [];
  for(let cat of cats){
    for(let emotion of cat.emotionTags){
      if(!emotionsArray.includes(emotion)){
        emotionsArray.push(emotion);
      }
    }
  }
  return emotionsArray;
}



function renderEmotionsRadios(cats){
  const emotions = getEmotionsArray(cats);
  let radioItems = ``;
  for(let emotion of emotions){
    radioItems += `<div class="radio">
                    <label for="${emotion}">${emotion}</label>
                    <input type="radio" id=${emotion} name="emotions" value="${emotion}">
                   </div> `;
  }
    emotionsContainer.innerHTML = radioItems;

}

renderEmotionsRadios(catsData);

