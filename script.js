
/**
 * Devendra Prajapat Portfolio - Immersive Graphic Engine & Interactions
 */

document.addEventListener("DOMContentLoaded", () => {
    
    // Core functional activations
    generateInstagramQR();
    initScrollRevelations();
    initParticleEngine();
    
});

/**
 * Generates a clean custom QR Code targeting the Instagram profile
 */
function generateInstagramQR() {
    const qrContainer = document.getElementById("qrcode-container");
    const targetUrl = "https://instagram.com/devendra.p_07";

    if (qrContainer) {
        new QRCode(qrContainer, {
            text: targetUrl,
            width: 135,
            height: 135,
            colorDark: "#06070d",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
    }
}

/**
 * Triggers clean cascading sequential loading transitions
 * for all elements mapped inside the portfolio interface card container.
 */
function initScrollRevelations() {
    const revealElements = document.querySelectorAll(".element-reveal");
    
    revealElements.forEach((element, index) => {
        // Build crisp sequential calculation thresholds
        setTimeout(() => {
            element.classList.add("active");
        }, index * 80); // 80ms delay intervals for standard card layout cascade
    });
}

/**
 * Creates an elegant, lightweight digital particle system
 * that floats dynamically behind the portfolio window glass card.
 */
function initParticleEngine() {
    const canvas = document.getElementById("particle-canvas");
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    let particlesArray = [];
    const numberOfParticles = 45; // Keeping thread counts lightweight for peak mobile performance
    
    // Configure dimension match parameters
    function setCanvasDimensions() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);

    // Particle structural blueprint object
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5; // Fine node star sizing scale
            this.speedX = Math.random() * 0.4 - 0.2; // Slow, drift velocities
            this.speedY = Math.random() * 0.4 - 0.2;
            this.opacity = Math.random() * 0.5 + 0.1;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            // Loop coordinate space values at board borders
            if (this.x > canvas.width) this.x = 0;
            else if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            else if (this.y < 0) this.y = canvas.height;
        }
        
        draw() {
            ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // Populate operational arrays
    function populateSystem() {
        particlesArray = [];
        for (let i = 0; i < numberOfParticles; i++) {
            particlesArray.push(new Particle());
        }
    }
    populateSystem();

    // Constant frame loop cycle update rendering operations
    function renderEngineLoop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();
        }
        requestAnimationFrame(renderEngineLoop);
    }
    renderEngineLoop();
}
