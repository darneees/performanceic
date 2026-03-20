const observeElements = () => {
            const elements = document.querySelectorAll('.fade-in, .slide-up, .scale-up');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const target = entry.target;
                        const delay = target.getAttribute('data-delay') || '0s';
                        target.style.transitionDelay = delay;
                        target.classList.add('is-visible');
                        observer.unobserve(target);
                    }
                });
            }, { root: null, rootMargin: '0px', threshold: 0.15 });

            elements.forEach((element) => observer.observe(element));
        };
        observeElements();

        // Funcionalidade do Menu Mobile
        const btnMenu = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');
        const linksMenu = document.querySelectorAll('.mobile-link');

        // Abre/fecha o menu ao clicar no botão hambúrguer
        btnMenu.addEventListener('click', () => {
            menu.classList.toggle('hidden');
            menu.classList.toggle('flex');
        });

        // Fecha o menu automaticamente ao clicar em qualquer link dele
        linksMenu.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
                menu.classList.remove('flex');
            });
        });

        // Funcionalidade do Botão Voltar ao Topo
        const backToTopBtn = document.getElementById('back-to-top');

        // Mostrar/ocultar o botão baseado no scroll
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                // Aparece quando rolar 400px para baixo
                backToTopBtn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
                backToTopBtn.classList.add('opacity-100', 'translate-y-0');
            } else {
                // Esconde quando estiver no topo
                backToTopBtn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
                backToTopBtn.classList.remove('opacity-100', 'translate-y-0');
            }
        });

        // Ação de clique para subir suavemente
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Funcionalidade do Carrossel Hero (Fade Automático)
        const heroSlides = document.querySelectorAll('.hero-slide');
        let currentHeroSlide = 0;
        const slideInterval = 4000; // Tempo de exibição de cada slide (4000ms = 4 segundos)

        if (heroSlides.length > 0) {
            setInterval(() => {
                // Remove a visibilidade e o z-index do slide atual
                heroSlides[currentHeroSlide].classList.remove('opacity-100', 'z-10');
                heroSlides[currentHeroSlide].classList.add('opacity-0', 'z-0');
                
                // Calcula o próximo slide (volta ao zero se for o último)
                currentHeroSlide = (currentHeroSlide + 1) % heroSlides.length;
                
                // Adiciona a visibilidade e o z-index no novo slide
                heroSlides[currentHeroSlide].classList.remove('opacity-0', 'z-0');
                heroSlides[currentHeroSlide].classList.add('opacity-100', 'z-10');
            }, slideInterval);
        }
