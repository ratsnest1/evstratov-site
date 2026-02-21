document.addEventListener('DOMContentLoaded', function () {
  // Показать имя в правом‑верхнем углу
  const title = document.querySelector('.fixed-title');
  setTimeout(() => {
    title.style.opacity = '1';
  }, 500);

  // Показать ссылку “collections” чуть позже
  const coll = document.querySelector('.collections-link');
  setTimeout(() => {
    coll.classList.add('show');
  }, 800);
});