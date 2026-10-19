document.getElementById('y').textContent = new Date().getFullYear();
document.querySelectorAll('nav a').forEach(a => a.addEventListener('click', () => document.body.classList.remove('open')));
document.getElementById('form').addEventListener('submit', e => {
  e.preventDefault();
  // Replace with a real endpoint (e.g. Formspree) to receive messages.
  document.getElementById('status').textContent = 'Thank you! We will contact you shortly.';
  e.target.reset();
});
