document.addEventListener('DOMContentLoaded', function () {
  const title = document.querySelector('.fixed-title');
  const bg = document.querySelector('.bg-image');

  // Плавное появление заголовка
  setTimeout(() => {
    title.style.opacity = '1';
  }, 500);

  // Лёгкий параллакс фона за курсором
  document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 8;
    const y = (e.clientY / window.innerHeight - 0.5) * 8;
    bg.style.transform = `scale(1.05) translate(${x}px, ${y}px)`;
  });
});