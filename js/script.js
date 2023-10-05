var typed = new Typed(".typing",{
    strings:["Web Designer" , "Web Developer","Baller!"],
    typespeed:50,
    Backspeed:50,
    loop:true
})
// script.js
// Get all the navigation links
const navLinks = document.querySelectorAll('.nav-link');

// Loop through the links and add a click event listener
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        // Prevent the default link behavior (e.g., navigating to a new page)
        event.preventDefault();
        
        // Remove the "active" class from all links
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        
        // Add the "active" class to the clicked link
        this.classList.add('active');
    });
});


