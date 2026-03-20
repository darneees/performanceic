// acocordion
document.addEventListener("DOMContentLoaded", function () {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
});

// scroll reveal
ScrollReveal().reveal('.experts', {
    delay: 400,
    distance: '50px',
    origin: 'left',
    duration: 700
});

ScrollReveal().reveal('.one', {
    delay: 440,
    distance: '50px',
    origin: 'left',
    duration: 700
});

ScrollReveal().reveal('.two', {
    delay: 480,
    distance: '50px',
    origin: 'left',
    duration: 700
});

ScrollReveal().reveal('.three', {
    delay: 520,
    distance: '50px',
    origin: 'left',
    duration: 700
});

ScrollReveal().reveal('.blog_content', {
    delay: 400,
    distance: '50px',
    origin: 'left',
    duration: 700
});

ScrollReveal().reveal('.blog_link', {
    delay: 440,
    distance: '50px',
    origin: 'left',
    duration: 700
});

ScrollReveal().reveal('.footer_content', {
    delay: 400,
    distance: '50px',
    origin: 'left',
    duration: 700
});

ScrollReveal().reveal('.accordion', {
    delay: 400,
    distance: '50px',
    origin: 'left',
    duration: 700
});

ScrollReveal().reveal('.contact__copy', {
    delay: 440,
    distance: '50px',
    origin: 'left',
    duration: 700
});

ScrollReveal().reveal('.why__title', {
    delay: 400,
    distance: '50px',
    origin: 'left',
    duration: 700
});

ScrollReveal().reveal('.accordion', {
    delay: 440,
    distance: '50px',
    origin: 'left',
    duration: 700
});

ScrollReveal().reveal('.services_title', {
    delay: 400,
    distance: '50px',
    origin: 'left',
    duration: 700
});

ScrollReveal().reveal('.srv1', {
    delay: 440,
    distance: '50px',
    origin: 'left',
    duration: 700
});

ScrollReveal().reveal('.srv2', {
    delay: 480,
    distance: '50px',
    origin: 'left',
    duration: 700
});

ScrollReveal().reveal('.srv3', {
    delay: 500,
    distance: '50px',
    origin: 'left',
    duration: 700
});

ScrollReveal().reveal('.srv4', {
    delay: 520,
    distance: '50px',
    origin: 'left',
    duration: 700
});

//  scroll to top
let myButton = document.getElementById("scrollTop");
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myButton.style.display = "flex";
    } else {
        myButton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

document.querySelectorAll('.open-form').forEach(button => {
    button.addEventListener('click', function () {
        document.getElementById('section-form').style.display = 'flex';
        document.getElementById('overlay').style.display = 'flex';
        document.getElementById('body').style.overflow = 'hidden';
    });
});
// event button - close
document.getElementById('close-form').addEventListener('click', function () {
    document.getElementById('section-form').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('body').style.overflow = 'visible';
});

// form
document.getElementById('section-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const gender = document.getElementById('gender').value;
    const age = document.getElementById('age').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const atendiment = document.getElementById('atendiment').value;
    const prefer = document.getElementById('prefer').value;


    let pacoteSelecionado = null;
    if (atendiment === "Psicoterapia individual" && document.getElementById('individual').style.display === 'flex') {
        pacoteSelecionado = document.getElementById('pacoteIndividual').value;
        if (!pacoteSelecionado) {
            alert("Por favor, selecione um pacote para Psicoterapia individual.");
            return;
        }
    } else if (atendiment === "Psicoterapia para casais" && document.getElementById('casais').style.display === 'flex') {
        pacoteSelecionado = document.getElementById('pacoteCasais').value;
        if (!pacoteSelecionado) {
            alert("Por favor, selecione um pacote para Psicoterapia para casais.");
            return;
        }
    } else if (atendiment === "Orientação parental" && document.getElementById('parental').style.display === 'flex') {
        pacoteSelecionado = document.getElementById('pacoteParental').value;
        if (!pacoteSelecionado) {
            alert("Por favor, selecione um pacote para Orientação parental.");
            return;
        }
    } else if (atendiment === "Psicoterapia para brasileiros no exterior" && document.getElementById('exterior').style.display === 'flex') {
        pacoteSelecionado = document.getElementById('moeda').value;
        if (!pacoteSelecionado) {
            alert("Por favor, selecione uma moeda.");
            return;
        }
    }

    const formData = {
        name: name,
        gender: gender,
        age: age,
        email: email,
        phone: phone,
        atendiment: atendiment,
        prefer: prefer,
        pacote: pacoteSelecionado
    };

    // Envio do formulário via Fetch API
    fetch('https://formspree.io/f/myzyewld', { // myzyewld - endpoint performance
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
        .then(function (response) {
            if (response.ok) {
                const successPopup = document.getElementById('success-popup');
                successPopup.style.display = 'flex';
                document.getElementById('section-form').style.display = 'none';

                setTimeout(function () {
                    successPopup.style.display = 'none';
                    document.getElementById('overlay').style.display = 'none';
                    document.getElementById('body').style.overflow = 'visible';
                    document.getElementById('open-form').style.display = 'flex';
                }, 3500);

                reset();
            } else {
                console.error('Erro ao enviar o formulário');
            }
        })
        .catch(function (error) {
            console.error('Erro na solicitação:', error);
        });
});


// reset form ✅
function reset() {
    const form = document.getElementById('contactForm');
    form.reset();

    document.getElementById('name').value = '';
    document.getElementById('gender').value = '';
    document.getElementById('age').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('atendiment').value = '';
    document.getElementById('prefer').value = '';
    document.querySelectorAll('.extra-options').forEach(option => {
        option.style.display = 'none';
    });
}

// mask phone number ✅
document.getElementById('phone').addEventListener('input', function (e) {
    var telefone = e.target.value.replace(/\D/g, '');
    var telefoneFormatado = '';

    if (telefone.length > 0) {
        telefoneFormatado = '(' + telefone.substring(0, 2);
    }
    if (telefone.length >= 3) {
        telefoneFormatado += ') ' + telefone.substring(2, 7);
    }
    if (telefone.length >= 8) {
        telefoneFormatado += '-' + telefone.substring(7, 11);
    }
    e.target.value = telefoneFormatado;
});

// opem menu mobile
const open = document.getElementById('open-menu');
const close = document.getElementById('close-menu');
const mobile = document.getElementById('menu-mobile');
const links = document.querySelectorAll('.menu-link');

open.addEventListener('click', function () {
    mobile.style.display = 'flex';
});

close.addEventListener('click', function () {
    mobile.style.display = 'none';
});

links.forEach(link => {
    link.addEventListener('click', () => {
        mobile.style.display = 'none';
    });
});

// select value services
function showOptions() {
    const atendimentoSelect = document.getElementById('atendiment');
    const selectedValue = atendimentoSelect.value;

    document.querySelectorAll('.extra-options').forEach(option => {
        option.style.display = 'none';
    });

    if (selectedValue === "Psicoterapia individual") {
        document.getElementById('individual').style.display = 'flex';
        document.getElementById('section-form').style.padding = '10rem 2rem 2rem 2rem';
    } else if (selectedValue === "Psicoterapia para casais") {
        document.getElementById('casais').style.display = 'flex';
        document.getElementById('section-form').style.padding = '10rem 2rem 2rem 2rem';
    } else if (selectedValue === "Orientação parental") {
        document.getElementById('parental').style.display = 'flex';
        document.getElementById('section-form').style.padding = '10rem 2rem 2rem 2rem';
    } else if (selectedValue === "Psicoterapia para brasileiros no exterior") {
        document.getElementById('exterior').style.display = 'flex';
        document.getElementById('section-form').style.padding = '13rem 2rem 2rem 2rem';
    }
}

let slideAtual = 0;
const totalSlides = 5; // O número total de imagens
const track = document.getElementById('track');

function mudarSlide(direcao) {
    // Atualiza o índice do slide atual
    slideAtual += direcao;

    // Lógica de Loop: se passar do último, volta pro primeiro e vice-versa
    if (slideAtual >= totalSlides) {
        slideAtual = 0;
    } else if (slideAtual < 0) {
        slideAtual = totalSlides - 1;
    }

    // Move a trilha: ex. slide 2 move -200% para a esquerda
    const deslocamento = -(slideAtual * 100);
    track.style.transform = `translateX(${deslocamento}%)`;
}