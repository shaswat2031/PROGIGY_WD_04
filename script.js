const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');
const menu = document.querySelector('.menu');



function animateSkills() {
    const skillsBars = document.querySelectorAll('.skills-bar span');
    skillsBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0'; // Reset width to 0
        setTimeout(() => {
            bar.style.width = width;
        }, 500); // Delay animation by 500ms
    });
}

const themeCheckbox = document.getElementById('theme');
const body = document.body;

// Function to toggle dark/light mode
function toggleTheme() {
    if (themeCheckbox.checked) {
        body.classList.add('dark'); // Add 'dark' class for dark mode styles
    } else {
        body.classList.remove('dark'); // Remove 'dark' class for light mode styles
    }
}

// Add event listener to the checkbox
themeCheckbox.addEventListener('change', toggleTheme);

// Check initial state and apply styles if dark mode is already selected
if (themeCheckbox.checked) {
    body.classList.add('dark');
}



// Call the function when the page is loaded
window.addEventListener('load', animateSkills);


