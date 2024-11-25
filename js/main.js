// Add image loading optimization
document.addEventListener('DOMContentLoaded', function() {
    const profileImage = document.querySelector('.profile-photo');
    
    if (profileImage) {
        // Add loading animation
        profileImage.style.opacity = '0';
        
        profileImage.onload = function() {
            profileImage.style.opacity = '1';
        };
        
        // Add error handling
        profileImage.onerror = function() {
            // If image fails to load, show initials or placeholder
            profileImage.style.display = 'none';
            const parent = profileImage.parentElement;
            const placeholder = document.createElement('div');
            placeholder.className = 'profile-photo-placeholder';
            placeholder.textContent = 'ZC'; // Your initials
            parent.appendChild(placeholder);
        };
    }
}); 

// Add this JavaScript for mobile menu toggle
function toggleMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('show');
}

// Add event listener when document loads
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.createElement('button');
    menuButton.className = 'menu-toggle';
    menuButton.innerHTML = '☰';
    menuButton.onclick = toggleMenu;
    
    const nav = document.querySelector('nav');
    nav.insertBefore(menuButton, nav.firstChild);
}); 

// Add mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    // Create and add hamburger menu button
    const navbar = document.querySelector('.navbar');
    const menuToggle = document.createElement('div');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;
    navbar.appendChild(menuToggle);

    // Add click event for mobile menu
    const navLinks = document.querySelector('.nav-links');
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navbar.contains(e.target)) {
            navLinks.classList.remove('active');
        }
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('active');
        }
    });
}); 