let contacts = document.getElementById("call-button");
contacts.addEventListener("click", () => {
  document.getElementById('contacts').classList.toggle("visible")
})

$(document).ready(function(){
  $('.slider').slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});