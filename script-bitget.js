document.addEventListener('DOMContentLoaded', () => {
    let initialAnimationComplete = false;

    // Initial animation for letters
    anime.timeline({
        loop: false
    })
    .add({
        targets: '.letter',
        translateY: [-20, 0],
        rotateX: [-90, 0],
        opacity: [0, 1],
        color: ['#ffffff', '#03AAC1'],
        easing: "easeOutExpo",
        duration: 1000,
        delay: (el, i) => 70 * i,
        complete: function(anim) {
            initialAnimationComplete = true;
            startContinuousAnimations();
        }
    });

    function startContinuousAnimations() {
        const letters = document.querySelectorAll('.letter');
        letters.forEach((letter, index) => {
            // Floating animation
            anime({
                targets: letter,
                translateY: [-2, 2],
                rotateZ: [-1, 1],
                scale: [0.98, 1.02],
                duration: 2000 + (index * 100),
                direction: 'alternate',
                loop: true,
                easing: 'easeInOutSine',
                delay: index * 50
            });

            // Color animation
            anime({
                targets: letter,
                color: [
                    { value: '#03AAC1', duration: 500 },
                    { value: '#ffffff', duration: 500 },
                    { value: '#03AAC1', duration: 500 }
                ],
                loop: true,
                delay: index * 50,
                easing: 'easeInOutSine'
            });
        });
    }

    // Logo 3D animation
    function startLogoAnimation() {
        anime({
            targets: '.logo-3d',
            keyframes: [
                { rotateX: 20, rotateY: 15, translateZ: 20, duration: 2000 },
                { rotateX: 25, rotateY: -15, translateZ: 30, duration: 2000 },
                { rotateX: 15, rotateY: 20, translateZ: 25, duration: 2000 },
                { rotateX: 20, rotateY: 0, translateZ: 30, duration: 2000 }
            ],
            easing: 'easeInOutSine',
            loop: true,
            direction: 'alternate'
        });

        anime({
            targets: '.hero-logo',
            translateY: [-5, 5],
            duration: 4000,
            direction: 'alternate',
            loop: true,
            easing: 'easeInOutQuad'
        });
    }

    startLogoAnimation();
});

// Copy referral code function
function copyRefCode(location = '') {
    const elementId = location === 'footer' ? 'refCodeFooter' : 'refCode';
    const code = document.getElementById(elementId).innerText;
    
    navigator.clipboard.writeText(code).then(() => {
        const referralCode = document.getElementById(elementId).closest('.referral-code');
        const button = referralCode.querySelector('.copy-button i');
        const originalIcon = button.className;
        
        button.className = 'fas fa-check';
        referralCode.style.borderColor = '#03AAC1';
        
        setTimeout(() => {
            button.className = originalIcon;
            referralCode.style.borderColor = '';
        }, 2000);
    });
} 