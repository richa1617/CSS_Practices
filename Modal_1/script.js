
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");



// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on negative space 
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }