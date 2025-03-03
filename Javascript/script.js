document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.section');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const sectionId = button.getAttribute('data-section');
            
            sections.forEach(section => {
                section.classList.remove('active');
            });

            navButtons.forEach(btn => {
                btn.classList.remove('active');
            });

            document.getElementById(sectionId).classList.add('active');
            button.classList.add('active');
        });
    });

    document.querySelector('.nav-btn[data-section="home"]').click();
});

const cards = document.querySelectorAll('.portfolio .card');

cards.forEach((card) => {
  card.classList.add('loaded');
});

const form = document.getElementById('contact-form');
const alert = document.getElementById('alert');
