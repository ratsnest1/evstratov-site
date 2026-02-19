document.addEventListener('DOMContentLoaded', function () {
  const title = document.querySelector('.fixed-title');
  const bg = document.querySelector('.bg-image');

  // Плавное появление заголовка
  setTimeout(() => {
    title.style.opacity = '1';
  }, 500);

  // Параллакс фона за курсором
  document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    bg.style.transform = `scale(1.2) translate(${x}px, ${y}px)`;
  });
});