document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item'); // Select all navigation items

    navItems.forEach((item) => {
        const dropdown = item.querySelector('.absolute'); // Find the dropdown menu within the nav-item
        if (dropdown) { // Check if the dropdown exists
            item.addEventListener('mouseenter', () => {
                dropdown.classList.remove('hidden'); // Show the dropdown on mouse enter
            });
            item.addEventListener('mouseleave', () => {
                dropdown.classList.add('hidden'); // Hide the dropdown on mouse leave
            });
        }
    });
});