document.addEventListener('DOMContentLoaded', function() {
  const title = document.querySelector('.fixed-title');
  setTimeout(function() {
    title.style.opacity = '1';
  }, 500);

  // Блокировка скролла на телефоне
  document.body.addEventListener('touchmove', function(e) {
    e.preventDefault();
  }, { passive: false });
});