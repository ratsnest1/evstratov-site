document.addEventListener('DOMContentLoaded', function() {
  const title = document.querySelector('.fixed-title');
  setTimeout(function() {
    title.style.opacity = '1';
  }, 500);

  document.body.addEventListener('touchmove', function(e) {
    e.preventDefault();
  }, { passive: false });
});