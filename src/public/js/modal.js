// Get the modal
let modal = document.getElementById("trailModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
let img = document.getElementById("trailImg");
let modalImg = document.getElementById("img02");
let captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("closeModal")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}