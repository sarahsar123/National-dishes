document.addEventListener('DOMContentLoaded', function() {
  loadComponent('icon-nav-placeholder', 'icon-nav.html');

 
  loadComponent('footer-placeholder', 'footer.html', function() {
    initReveal();
  });

 
  initReveal();
  initHeartButtons();
  initNavbarActive();
});

function initReveal() {
  const reveals = document.querySelectorAll('.reveal:not(.visible)');

  const observer = new IntersectionObserver(
    function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); 
        }
      });
    },
    { threshold: 0.15 }
  );

  reveals.forEach(function(el) {
    observer.observe(el);
  });
}

function initHeartButtons() {

  document.addEventListener('click', function(event) {
    if (event.target.classList.contains('heart-btn')) {
      const btn = event.target;
 
      if (btn.textContent === '♡') {
        btn.textContent = '♥';
        btn.style.background = 'var(--red)';
      } else {
        btn.textContent = '♡';
        btn.style.background = 'rgba(0,0,0,0.5)';
      }
    }
  });
}

function initNavbarActive() {
  const navLinks = document.querySelectorAll('.navbar nav a');
 
  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
     
      navLinks.forEach(function(l) { l.classList.remove('active'); });
      link.classList.add('active');
    });
  });
}
