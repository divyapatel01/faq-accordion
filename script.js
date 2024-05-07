var accordions = document.querySelectorAll(".accordion");

accordions.forEach(function (accordion) {
  var header = accordion.querySelector(".accordion-header");

  header.addEventListener("click", function () {
    accordion.classList.toggle("collapse");
  });
});
