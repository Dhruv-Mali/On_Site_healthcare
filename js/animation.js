(function ($) {
  "use strict";

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("_show");
        // Use classList for modern approach
      } 
      // else {
      //   entry.target.classList.remove("_show");
      // }
    });
  });

  const hiddenElements = document.querySelectorAll("._hidden"); // More efficient selector
  hiddenElements.forEach((el) => observer.observe(el));
})(jQuery);
