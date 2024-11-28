// Combine the mobile menu functionality into one clean implementation
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    
    // Create single menu toggle button
    const menuToggle = document.createElement('div');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;
    navbar.appendChild(menuToggle);

    // Single click handler for menu toggle
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navbar.contains(e.target)) {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });

    // Keep the image loading optimization
    const profileImage = document.querySelector('.profile-photo');
    if (profileImage) {
        profileImage.style.opacity = '0';
        profileImage.onload = () => profileImage.style.opacity = '1';
        profileImage.onerror = () => {
            profileImage.style.display = 'none';
            const parent = profileImage.parentElement;
            const placeholder = document.createElement('div');
            placeholder.className = 'profile-photo-placeholder';
            placeholder.textContent = 'ZC';
            parent.appendChild(placeholder);
        };
    }
}); 