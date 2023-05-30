window.addEventListener('DOMContentLoaded', () => {
  const closeBtn = document.querySelector('.close_icon');
  const hamburger = document.querySelector('.hamburger_icon');
  const toggle = document.querySelector('.main_menu');

  function toggleMenu() {
    window.addEventListener('click', (e) => {
      if (e.target === hamburger) {
        toggle.style.visibility = 'visible';
        hamburger.style.visibility = 'hidden';
      } else if (e.target === closeBtn) {
        toggle.style.visibility = 'hidden';
        hamburger.style.visibility = 'visible';
      }
    });
  }

  closeBtn.addEventListener('click', toggleMenu);
  hamburger.addEventListener('click', toggleMenu);
});
