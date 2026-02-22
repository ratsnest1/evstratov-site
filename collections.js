const scroll = document.getElementById('scroll');
const indicator = document.querySelector('.page-indicator');
const total = 6;
let current = 0;
let isAnimating = false;

function goTo(index) {
  if (index < 0 || index >= total || isAnimating) return;
  isAnimating = true;
  current = index;
  scroll.style.transform = `translateX(-${current * 100}vw)`;
  indicator.textContent = `${current + 1} / ${total}`;
  setTimeout(() => { isAnimating = false; }, 800);
}

window.addEventListener('wheel', function(e) {
  e.preventDefault();
  if (e.deltaY > 0 || e.deltaX > 0) {
    goTo(current + 1);
  } else {
    goTo(current - 1);
  }
}, { passive: false });

window.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
    goTo(current + 1);
  } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
    goTo(current - 1);
  }
});

let touchStartX = 0;
let touchStartY = 0;

window.addEventListener('touchstart', function(e) {
  touchStartX = e.touches[0].clientX;
  touchStartY = e.touches[0].clientY;
}, { passive: false });

window.addEventListener('touchmove', function(e) {
  e.preventDefault();
}, { passive: false });

window.addEventListener('touchend', function(e) {
  const deltaX = touchStartX - e.changedTouches[0].clientX;
  const deltaY = touchStartY - e.changedTouches[0].clientY;

  if (deltaX > 40 || deltaY > 40) {
    goTo(current + 1);
  } else if (deltaX < -40 || deltaY < -40) {
    goTo(current - 1);
  }
});