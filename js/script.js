$('.slider').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {

    $(".num").text(slick.slickCurrentSlide() + 1)
    $(".amnt").text(slick.slideCount)
  
  });
  
  
  
  $(document).ready(function () {
  
    $('.products-slider').slick({
      centerMode: true,
      centerPadding: '0',
      slidesToShow: 3,
      appendArrows: ".products-slider__navigation",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            arrows: true,
            centerMode: false,
            slidesToShow: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            centerMode: false,
            slidesToShow: 1
          }
        }
      ]
    });
  
  
  /*install counter*/
  $('.products-slider').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
    let counter = slick.slickCurrentSlide() + 1 + " / " + slick.slideCount;
    $(".products-slider__counter").text(counter);
  });
  
  });

  function openModal() {
    document.getElementById('auth-modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('auth-modal').style.display = 'none';
}

function toggleForms() {
    let registerForm = document.getElementById('register-form');
    let loginForm = document.getElementById('login-form');
    let modalTitle = document.getElementById('modal-title');
    let switchText = document.getElementById('switch-text');

    if (registerForm.style.display === "none") {
        registerForm.style.display = "block";
        loginForm.style.display = "none";
        modalTitle.innerText = "Create an account";
        switchText.innerHTML = 'Already have an account? <a href="javascript:void(0);" onclick="toggleForms()">Login</a>';
    } else {
        registerForm.style.display = "none";
        loginForm.style.display = "block";
        modalTitle.innerText = "Login";
        switchText.innerHTML = 'Dont have an account? <a href="javascript:void(0);" onclick="toggleForms()">Create an account</a>';
    }
}

$(document).ready(function(){
  $('.gallery-sec').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    arrows: true
  });
});
