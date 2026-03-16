// Academic Research Video Page - JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('research-video');
    
    // Video event listeners
    if (video) {
        // Log video interactions (useful for research purposes)
        video.addEventListener('play', function() {
            console.log('Video started playing');
        });
        
        video.addEventListener('pause', function() {
            console.log('Video paused at:', this.currentTime);
        });
        
        video.addEventListener('ended', function() {
            console.log('Video completed');
        });
        
        // Enhanced mobile experience
        video.addEventListener('loadstart', function() {
            console.log('Video loading started');
        });
        
        video.addEventListener('loadeddata', function() {
            console.log('Video data loaded');
        });
        
        // Add custom controls for better academic presentation
        video.addEventListener('click', function() {
            if (this.paused) {
                this.play();
            } else {
                this.pause();
            }
        });
        
        // Preload video on mobile for better QR code experience
        if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            video.preload = 'metadata';
        }
    }
    
    // Logo hover effects
    const logos = document.querySelectorAll('.logo, .partner-logo');
    logos.forEach(logo => {
        logo.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        logo.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Smooth scroll for mobile
    if (window.innerWidth <= 768) {
        const container = document.querySelector('.container');
        container.style.overflowX = 'hidden';
    }
    
    // Analytics tracking (optional)
    function trackEvent(action, label) {
        // Replace with your analytics code if needed
        console.log('Event:', action, label);
    }
    
    // Track page load
    trackEvent('page_load', 'research_video_page');
});

// Handle video errors gracefully
window.addEventListener('error', function(e) {
    if (e.target.tagName === 'VIDEO') {
        console.error('Video loading error:', e);
        const videoContainer = document.querySelector('.video-container');
        if (videoContainer) {
            videoContainer.innerHTML = `
                <div style="padding: 40px; text-align: center; background: #f8f9fa;">
                    <p style="color: #6c757d; font-style: italic;">
                        Video temporarily unavailable. Please try refreshing the page.
                    </p>
                </div>
            `;
        }
    }
});

// Optimize for QR code scanning experience
if (document.referrer === '' && /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // Likely came from QR code scan
    trackEvent('qr_scan', 'mobile_access');
    
    // Add slight delay to ensure everything is loaded
    setTimeout(() => {
        const video = document.getElementById('research-video');
        if (video && video.readyState >= 2) {
            // Video is ready to play
            video.focus();
        }
    }, 1000);
}