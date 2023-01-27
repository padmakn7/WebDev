import { tweetsData } from './data.js'; 
//https://github.com/uuidjs/uuid
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

/*Stretch Goals 
1.Add the ability to reply to a specific tweet
2.Save tweets, likes, tweets to localStorage
3.Allow a user to delete a tweet
4.Your own idea!
*/


document.addEventListener('click', function(e){
  if(e.target.dataset.reply){
    handleReplyClick(e.target.dataset.reply);
  }
  else if(e.target.dataset.like){
    handleLikeClick(e.target.dataset.like);
  }
  else if(e.target.dataset.retweet){
    handleRetweetClick(e.target.dataset.retweet);
  }
  else if(e.target.id == 'tweet-btn'){
    handleTweetBtnClick();
  }

});


function handleReplyClick(replyId){
  document.getElementById(`replies-${replyId}`).classList.toggle('hidden');
}

function handleLikeClick(likeId){
  const targetObj = tweetsData.filter(function(tweet){
    return tweet.uuid === likeId;
  })[0];

  if(targetObj.isLiked){
    targetObj.likes--;
  }
  else{
    targetObj.likes++;
  }

  targetObj.isLiked = !targetObj.isLiked;
  renderFeed();
}

function handleRetweetClick(retweetId){
  const targetObj = tweetsData.filter(function(tweet){
    return tweet.uuid === retweetId;
  })[0];

  if(targetObj.isRetweeted){
    targetObj.retweets--;
  }
  else{
    targetObj.retweets++;
  }

  targetObj.isRetweeted = !targetObj.isRetweeted;
  renderFeed();
}


function handleTweetBtnClick(){
  const tweetInput = document.getElementById('tweet-input');

  if(tweetInput.value){
    tweetsData.unshift({
      handle: `@Scrimba`,
      profilePic: `images/scrimbalogo.png`,
      likes: 0,
      retweets: 0,
      tweetText: tweetInput.value,
      replies: [],
      isLiked: false,
      isRetweeted: false,
      uuid: uuidv4()
    })
    renderFeed();
    tweetInput.value = '';
  }
}

function getFeedHtml(){

  let feedHtml = ``;

  

  //https://fontawesome.com/ - for icons
  tweetsData.forEach(function(tweet){

    let likeIconClass = '';
    let retweetIconClass= '';

    if(tweet.isLiked){
      likeIconClass = 'liked';
    }
  
    if(tweet.isRetweeted){
      retweetIconClass = 'retweeted';
    }


    let repliesHtml = ``;
    if(tweet.replies.length > 0){
      tweet.replies.forEach(function(reply){
        repliesHtml += `
          <div class="tweet-replies">
            <div class="tweet-inner">
              <img src="${reply.profilePic}" class="profile-pic">
              <div class="reply-text">
                <p class="handle">${reply.handle}</p>
                <p class="tweet-text">${reply.tweetText}</p>
              </div>
            </div>
          </div>
        `;
      });
    }

    feedHtml += `
      <div class="tweet">
        <div class="tweet-inner">
          <img src="${tweet.profilePic}" class="profile-pic">
          <div class="tweet-info">
            <p class="handle">${tweet.handle}</p>
            <p class="tweet-text">${tweet.tweetText}</p>
            <div class="tweet-details">
              <span class="tweet-detail">
                <i class="fa-regular fa-comment-dots" data-reply="${tweet.uuid}"></i>
                ${tweet.replies.length}
              </span>
              <span class="tweet-detail">
                <i class="fa-solid fa-heart ${likeIconClass}" data-like="${tweet.uuid}"></i>
                ${tweet.likes}
              </span>
              <span>
                <i class="fa-solid fa-retweet ${retweetIconClass}" data-retweet="${tweet.uuid}"></i>
                ${tweet.retweets}
              </span>
            </div>
          </div>
        </div>
        <div class="hidden" id="replies-${tweet.uuid}">
          ${repliesHtml}
        </div>
      </div>
    `
  });
  return feedHtml;
}


function renderFeed(){
  document.getElementById('feed').innerHTML =  getFeedHtml();
}

renderFeed();