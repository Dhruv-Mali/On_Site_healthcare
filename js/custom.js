(function ($) {
  "use strict";
  if ($(window).width() < 767) {
    $(".mainMenu > ul").append(
      '<li id=contactUs" ><a href="contact.html">Contact Us</a></li>'
    );
  } else {
    $(".mainMenu > ul").remove("#contactUs");
  }
})(jQuery);

document.addEventListener("DOMContentLoaded", function () {
  const video = document.querySelector("#heroVdo .herovideo");
  // Only load video on non-mobile devices
  if (window.innerWidth > 480) {
    const source = document.createElement("source");
    source.src = "images/home1/Connote-compressed.mp4"; // compressed video
    source.type = "video/mp4";
    video.appendChild(source);
    video.load(); // start loading video after DOM is ready
    video.play(); // ensure autoplay starts after source is loaded
  }
});
