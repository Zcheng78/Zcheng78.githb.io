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