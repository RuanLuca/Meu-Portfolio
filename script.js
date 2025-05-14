// Scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 20, // Ajuste de 20px para espaço
                behavior: 'smooth' // Efeito suave
            });
            
            // Atualiza a URL (opcional)
            history.pushState(null, null, targetId);
        }
    });
});