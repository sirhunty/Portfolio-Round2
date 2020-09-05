// Get the modal
let modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
let img = $('.myImg');
let modalImg = $("#img01");
let captionText = document.getElementById("caption");
$('.myImg').click(function(){
    modal.style.display = "block";
    let newSrc = this.src;
    modalImg.attr('src', newSrc);
    captionText.innerHTML = this.alt;
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeModal")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }