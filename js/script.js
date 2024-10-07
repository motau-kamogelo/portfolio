document.getElementById('hamburger').addEventListener('click', function () {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});

// Collapse the mobile menu when a link is clicked
document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', function () {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.remove('active');
    });
});
