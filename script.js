document.addEventListener('DOMContentLoaded', function () {
    const menu = document.getElementById('menu');
    const nav = document.getElementById('navbar');

    if (menu && nav) {
        menu.addEventListener('click', () => {
            nav.classList.toggle('open');
        });
    }

    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function (e) {
            const name = form.name.value.trim();
            const email = form.email.value.trim();
            const message = form.message.value.trim();
            if (!name || !email || !message) {
                e.preventDefault();
                alert('Please complete all required fields.');
            }
        });
    }
});