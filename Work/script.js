// Открытие/закрытие мобильного меню
document.querySelector('.menu-toggle').addEventListener('click', function() {
    const nav = document.querySelector('.nav');
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});

// Плавная прокрутка к якорям
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Закрытие меню при клике на ссылку (на мобильных)
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', function() {
        if (window.innerWidth < 768) {
            document.querySelector('.nav').style.display = 'none';
        }
    });
});

// Обработка формы (заглушка)
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Форма отправлена! (Это демо, данные никуда не отправляются)');
    this.reset();
});