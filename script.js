// Fade in/out on scroll using IntersectionObserver (bidirectional)
document.addEventListener('DOMContentLoaded', () => {
  const els = document.querySelectorAll('.fade-in');
  if (!('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('visible'));
    return;
  }
  const obs = new IntersectionObserver(
    entries => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
    { threshold: 0.12 }
  );
  els.forEach(el => obs.observe(el));
});
