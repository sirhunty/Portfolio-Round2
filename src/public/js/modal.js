// Get the modal
let modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
let galleryItem = $('.item');
let img = $('.myImg');
let text = $('.modalInfo');
let modalImg = $("#img01");
let modalDesc = $("#modalDesc");
let modalText = document.getElementsByClassName("modalInfo");
let captionText = document.getElementById("caption");
$('.myImg').click(function(){
    modal.style.display = "block";
    let newSrc = this.src;
    modalImg.attr('src', newSrc);
    captionText.innerHTML = this.alt;
    var description = $(this).parent().children(".modalInfo")[0].innerHTML;
    modalDesc.text(description);
});

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("closeModal")[0];

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