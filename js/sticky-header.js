(function() {
  
  var pageHeader = document.querySelector(".nav_bar");
  var pageHeaderHeight = pageHeader.getBoundingClientRect().bottom + window.pageYOffset;
  
  window.addEventListener("scroll", function() {
    
    if (pageHeader.classList.contains("nav_bar-sticky") && (window.pageYOffset < pageHeaderHeight)) {
        
      pageHeader.classList.remove("nav_bar-sticky");
        
    } else if (window.pageYOffset > pageHeaderHeight) {
        
      pageHeader.classList.add("nav_bar-sticky");
        
    }
    
  }, false);
  
})();