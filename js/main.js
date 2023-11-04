document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector(".header-top").classList.toggle("open")
    })
})
function fullVHfix() {
    const fullScreens = document.querySelectorAll("[data-fullscreen]");
    if (fullScreens.length && isMobile.any()) {
      window.addEventListener("resize", fixHeight);
      function fixHeight() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", ${vh}px);
      }
      fixHeight();
    }
  }