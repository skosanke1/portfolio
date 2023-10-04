// Get a reference to the scroll-to-top button
const scrollToTopButton = document.getElementById("scroll-to-top");

// Function to check if the user has scrolled enough to display the button
function checkScroll() {
    if (window.pageYOffset > 100) {
        // If scrolled down more than 100 pixels, show the button
        scrollToTopButton.style.opacity = "1";
    } else {
        // Otherwise, hide the button
        scrollToTopButton.style.opacity = "0";
    }
}

// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Add an event listener to the button for scrolling to the top
scrollToTopButton.addEventListener("click", scrollToTop);

// Add an event listener to the window for checking the scroll position
window.addEventListener("scroll", checkScroll);

// Initially check the scroll position to determine whether to show the button
checkScroll();


