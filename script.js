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
    slidesToShow: 1,
  });
}); 

$(document).ready(function(){
  $('.products-slider').slick({
    slidesToScroll: 1,
    slidesToShow: 4,
    autoplay: false,
    autoplaySpeed: 5000,
  });
});

$(document).ready(function(){
  $('.product-page-slider').slick({
  });
}); 