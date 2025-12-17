// EmailJS Configuration
const EMAILJS_SERVICE_ID = "service_j15w9eq";
const EMAILJS_TEMPLATE_ID = "template_ossm8gk";
const EMAILJS_PUBLIC_KEY = "ZEm2boASJ5Nq9G_KP";
const EMAILJS_PRIVATE_KEY = "gCK2zPYTNCJe5Tp_dqraz";

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

// Form submission handler
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const submitBtn = event.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    // Show loading state
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Envoi en cours...';
    submitBtn.disabled = true;
    
    // Get form data
    const formData = {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        company: document.getElementById('company').value,
        phone: document.getElementById('phone').value,
        offre: document.getElementById('offre').options[document.getElementById('offre').selectedIndex].text,
        message: document.getElementById('message').value,
        to_email: "votre-email@cicario.com", // Remplacez par votre email
        reply_to: document.getElementById('email').value
    };
    
    // Send email using EmailJS
    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formData)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            
            // Show success message
            document.getElementById('formMessage').innerHTML = 
                '<div class="alert alert-success">Message envoyé avec succès! Nous vous répondrons dans les plus brefs délais.</div>';
            
            // Reset form
            document.getElementById('contactForm').reset();
            
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            
            // Hide message after 5 seconds
            setTimeout(() => {
                document.getElementById('formMessage').innerHTML = '';
            }, 5000);
        })
        .catch(function(error) {
            console.log('FAILED...', error);
            
            // Show error message
            document.getElementById('formMessage').innerHTML = 
                '<div class="alert alert-danger">Erreur lors de l\'envoi du message. Veuillez réessayer ou nous contacter par WhatsApp.</div>';
            
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            
            // Hide message after 5 seconds
            setTimeout(() => {
                document.getElementById('formMessage').innerHTML = '';
            }, 5000);
        });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// WhatsApp button enhancement
document.querySelectorAll('.btn-whatsapp').forEach(button => {
    button.addEventListener('click', function(e) {
        // Vous pouvez ajouter un tracking Google Analytics ici si nécessaire
        console.log('WhatsApp button clicked');
    });
});

// Navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(44, 62, 80, 0.95)';
    } else {
        navbar.style.backgroundColor = '';
    }
});

// Price card hover effect enhancement
document.querySelectorAll('.price-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 15px 30px rgba(0,0,0,0.2)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
    });
});
