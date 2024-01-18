/* When the user clicks on the button, 
  toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// Function to scroll to the top of the page with smooth animation
function scrollToTop() {
  const scrollToTopText = document.getElementById("scrollToTopText");

  if ("scrollBehavior" in document.documentElement.style) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  } else {
    // For browsers that don't support smooth scrolling, instantly scroll to the top
    window.scrollTo(0, 0);
  }
}

// Show/hide the text based on scroll position
window.onscroll = function () {
  const scrollToTopText = document.getElementById("scrollToTopText");

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopText.style.display = "block";
  } else {
    scrollToTopText.style.display = "none";
  }
};
