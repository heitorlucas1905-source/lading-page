// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
  });
}

// Newsletter form (front-end only demo)
const form = document.getElementById('newsletter-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    alert(`Obrigado, ${nome}! Você foi inscrito com sucesso.`);
    form.reset();
  });
}

// Footer newsletter form
const footerForm = document.querySelector('.footer-form');
if (footerForm) {
  footerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Inscrição realizada com sucesso!');
    footerForm.reset();
  });
}
