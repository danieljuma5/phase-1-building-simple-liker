// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Adding hidden class element
  document.getElementById('modal').classList.add('hidden')
//Event listeners for all empty hearts
const emptyHeart = document.getElementsByClassName('like-glyph');
for(element of emptyHeart) {
  element.addEventListener('click', (e) => {
    const heart = e.target
    mimicServerCall()
    .then(() => {
      element = heart
      element.innerHTML = FULL_HEART
      element.classList.add("activated-heart")
      element.classList.remove("like-glyph")

      
      
    })
    .catch((error) => {
      alert("Random server error. Try again.")
      document.getElementById('modal').classList.remove('hidden')
      document.getElementById('modal').innerHTML = error
  
  
      setTimeout(function() {
        document.getElementById('modal').classList.add('hidden')
        
  
      },3000)
      console.log(error.message)
    })
    })
  }
//When a user clicks on a full heart
document.addEventListener("click", (e) => {   
      const heart = e.target
      element = heart
      element.innerHTML = EMPTY_HEART
      element.classList.remove("activated-heart")
      element.classList.add("like-glyph")
});

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
