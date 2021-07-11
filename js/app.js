$(document).ready(() => {
  $("#profile__ripple").ripples({
    resolution: 512,
    dropRadius: 10,
  });
  $(document).ready(function (e) {
    $("#btnDownload").click(function (e) {
      e.preventDefault();
      window.location.href = "salim_resume.pdf";
    });
  });

  const bars = document.querySelectorAll(".progress__bar");
  bars.forEach(function (bar) {
    let percentage = bar.dataset.percent;
    let tooltip = bar.children[0];
    tooltip.innerText = percentage + "%";
    bar.style.width = percentage + "%";
  });

  //image filter
  var $wrapper = $(".portfolio__wrapper");
  $wrapper.isotope({
    filter: "*",
    layoutMode: "masonry",
    animationOptions: {
      duration: 750,
      easing: "linear",
    },
  });
  let links = document.querySelectorAll(".tabs a");
  links.forEach((link) => {
    let selector = link.dataset.filter;

    link.addEventListener("click", function (e) {
      e.preventDefault();

      $wrapper.isotope({
        filter: selector,
        layoutMode: "masonry",
        animationOptions: {
          duration: 750,
          easing: "linear",
        },
      });

      links.forEach((link) => {
        link.classList.remove("active");
      });
      e.target.classList.add("active");
    });
  });

  //manify popup
  $(".manify").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
    zoom: {
      enable: true,
    },
  });
  //slider
  $(".slider").slick({
    arrows: false,
    // autoplay: true,
    autoplay: true,
  });
});
