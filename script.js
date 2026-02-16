// Дополнительный скрипт для ручного переключения темы (если нужно)
// Сейчас тема автоматически следует за системными настройками

// Можно добавить плавное появление элементов при скролле
document.addEventListener('DOMContentLoaded', function() {
  // Плавная прокрутка для якорей
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
