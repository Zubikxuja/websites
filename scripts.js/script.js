// ============================================
// HOME SCREEN - Click to navigate
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    const corporateSection = document.querySelector('.corporate-section');
    const weddingSection = document.querySelector('.wedding-section');
    
    if (corporateSection) {
        corporateSection.addEventListener('click', () => {
            // Navigate to corporate landing page
            window.location.href = 'corporate-landing.html';
        });
    }
    
    if (weddingSection) {
        weddingSection.addEventListener('click', () => {
            // Navigate to wedding landing page
            window.location.href = 'weddings-landing.html';
        });
    }
});
