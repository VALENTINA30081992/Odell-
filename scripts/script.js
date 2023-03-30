///////////////////////////////////////////////////////////
jQuery(document).ready(function ($) {
  // go-top

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 800) {
      $(".back-top").show();
    } else {
      $(".back-top").hide();
    }
  });

  $(".back-top").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

  ////----sub menu

  $(".menu-item-has-children").on("click", function () {
    if ($(document).width() < 1023) {
      $(this).children(".sub-menu").slideToggle("fast");
    }
  });

  ///////////////////////////////////////////////////////////////////////////////////* Set current year*/
  const yearEl = document.querySelector(".year");
  const currentYear = new Date().getFullYear();
  yearEl.textContent = currentYear;
});
/* Make mobile navigation work*/

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".dropdown");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

/////////////////////////////////////////////////////
/*Scroll back to top*/
const goTop = document.querySelector(".back-top");
window.onscroll = () => {
  if (window.pageYOffset < 700) {
    goTop.style.display = "none";
  } else {
    goTop.style.display = "block";
  }
};
