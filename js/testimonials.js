// Données des témoignages
const testimonials = [
    {
        id: 1,
        name: "Aminata Diop",
        country: "Sénégal",
        flag: "🇸🇳",
        rating: 5,
        text: "Service exceptionnel ! Mon site e-commerce a augmenté mes ventes de 300% en 3 mois. L'équipe est réactive et professionnelle.",
        date: "15 Nov 2024",
        avatar: "images/avatars/senegal1.jpg"
    },
    {
        id: 2,
        name: "Karim Alami",
        country: "Maroc",
        flag: "🇲🇦",
        rating: 4.5,
        text: "Développement rapide et efficace. Mon application mobile fonctionne parfaitement sur tous les appareils. Je recommande vivement !",
        date: "10 Nov 2024",
        avatar: "images/avatars/maroc1.jpg"
    },
    {
        id: 3,
        name: "Sophie Martin",
        country: "France",
        flag: "🇫🇷",
        rating: 5,
        text: "Un travail de qualité avec un suivi personnalisé. Mon site vitrine attire beaucoup plus de clients depuis la refonte.",
        date: "5 Nov 2024",
        avatar: "images/avatars/france1.jpg"
    },
    {
        id: 4,
        name: "Koffi Kouamé",
        country: "Côte d'Ivoire",
        flag: "🇨🇮",
        rating: 4,
        text: "Solution sur mesure qui répond exactement à mes besoins. Support technique disponible 24/7. Très satisfait !",
        date: "1 Nov 2024",
        avatar: "images/avatars/cotedivoire1.jpg"
    },
    {
        id: 5,
        name: "Fatou Ndiaye",
        country: "Sénégal",
        flag: "🇸🇳",
        rating: 5,
        text: "Formation et accompagnement parfait. J'ai pu gérer mon site moi-même après seulement 2 séances.",
        date: "28 Oct 2024",
        avatar: "images/avatars/senegal2.jpg"
    },
    {
        id: 6,
        name: "Youssef Benani",
        country: "Maroc",
        flag: "🇲🇦",
        rating: 4.5,
        text: "Délais respectés, communication claire. Mon portail web est maintenant une référence dans mon secteur.",
        date: "25 Oct 2024",
        avatar: "images/avatars/maroc2.jpg"
    }
];

// Générer les étoiles
function generateStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    // Étoiles pleines
    for (let i = 0; i < fullStars; i++) {
        stars += '<span class="star">★</span>';
    }
    
    // Demi-étoile
    if (hasHalfStar) {
        stars += '<span class="star half">★</span>';
    }
    
    // Étoiles vides
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<span class="star" style="color: #ddd">★</span>';
    }
    
    return stars;
}

// Afficher les témoignages
function displayTestimonials() {
    const container = document.getElementById('testimonialsContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    testimonials.forEach(testimonial => {
        const card = document.createElement('div');
        card.className = 'testimonial-card';
        card.innerHTML = `
            <div class="testimonial-header">
                <img src="${testimonial.avatar}" alt="${testimonial.name}" class="avatar" 
                     onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzAiIGhlaWdodD0iNzAiIHZpZXdCb3g9IjAgMCA3MCA3MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIzNSIgY3k9IjM1IiByPSIzNSIgZmlsbD0iIzM0OThkYiIvPjx0ZXh0IHg9IjM1IiB5PSI0MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+${testimonial.name.charAt(0)}</dGV4dD48L3N2Zz4='">
                <div class="client-info">
                    <h3>${testimonial.name}</h3>
                    <div class="client-country">
                        <span class="country-flag">${testimonial.flag}</span>
                        ${testimonial.country}
                    </div>
                </div>
            </div>
            
            <div class="stars-rating">
                ${generateStars(testimonial.rating)}
                <span style="margin-left: 10px; color: #7f8c8d; font-weight: bold;">${testimonial.rating}/5</span>
            </div>
            
            <div class="testimonial-text">
                "${testimonial.text}"
            </div>
            
            <div class="testimonial-date">
                ${testimonial.date}
            </div>
        `;
        
        container.appendChild(card);
    });
}

// Initialiser quand la page est chargée
document.addEventListener('DOMContentLoaded', function() {
    displayTestimonials();
    
    // Ajouter le CSS des témoignages
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'css/testimonials.css';
    document.head.appendChild(link);
});
