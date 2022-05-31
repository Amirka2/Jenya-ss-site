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

$(document).ready(function(){
  $('.product-photo-slider').slick({
  });
}); 

$(document).ready(function(){
  $('.products-slider').slick({
    slidesToScroll: 1,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 5000,
  });
});