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

  ///////////////////////////////////////////////////////////////////////////////////* Set current year*/
  const yearEl = document.querySelector(".year");
  const currentYear = new Date().getFullYear();
  yearEl.textContent = currentYear;

  ////----sub menu

  $(".menu-item-has-children").on("click", function () {
    if ($(document).width() < 944) {
      $(this).children(".sub-menu").slideToggle("fast");
    }
  });
});
