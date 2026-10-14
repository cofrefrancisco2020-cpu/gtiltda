document.documentElement.classList.add('js');

const header = document.querySelector('.site-header');
const progressBar = document.querySelector('#progressBar');
const menuToggle = document.querySelector('#menuToggle');
const mobileNav = document.querySelector('#mobileNav');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function updateScrollState() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const fraction = scrollable > 0 ? window.scrollY / scrollable : 0;
  progressBar.style.width = `${Math.min(100, Math.max(0, fraction * 100))}%`;
  header.classList.toggle('is-scrolled', window.scrollY > 20);
}
updateScrollState();
window.addEventListener('scroll', updateScrollState, { passive: true });
window.addEventListener('resize', updateScrollState);

function closeMenu() {
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Abrir menú');
  mobileNav.hidden = true;
}
menuToggle.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  mobileNav.hidden = !open;
});
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
window.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeMenu();
});
window.addEventListener('resize', () => {
  if (window.innerWidth > 1100) closeMenu();
});

const revealItems = [...document.querySelectorAll('.reveal')];
if (reduceMotion || !('IntersectionObserver' in window)) {
  revealItems.forEach(item => item.classList.add('visible'));
} else {
  const observer = new IntersectionObserver((entries, self) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      self.unobserve(entry.target);
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -25px 0px' });
  revealItems.forEach(item => observer.observe(item));
}

const tipDetails = [...document.querySelectorAll('.accordion details')];
tipDetails.forEach(detail => detail.addEventListener('toggle', () => {
  if (detail.open) tipDetails.filter(other => other !== detail).forEach(other => { other.open = false; });
}));

document.querySelector('#year').textContent = String(new Date().getFullYear());
