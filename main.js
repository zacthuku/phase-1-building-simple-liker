// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorModal = document.getElementById("error-modal");
const modalMessage = document.getElementById("modal-message");

const likeGlyphs = document.querySelectorAll(".like-glyph");
likeGlyphs.forEach(glyph => {
  glyph.addEventListener("click", () => {
    mimicServerCall()
      .then(() => {
        if (glyph.innerText === EMPTY_HEART) {
          glyph.innerText = FULL_HEART;
          glyph.classList.add("activated-heart");
        } else {
          glyph.innerText = EMPTY_HEART;
          glyph.classList.remove("activated-heart");
        }
      })
      .catch(error => {
     
        modalMessage.innerText = error;
        errorModal.classList.remove("hidden");

        
        setTimeout(() => {
          errorModal.classList.add("hidden");
        }, 3000);
      });
  });
});

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
     
      Math.random() < 0.2 ? reject("Random server error. Try again!") : resolve("Pretend remote server notified of action!");
    }, 300);
  });
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
