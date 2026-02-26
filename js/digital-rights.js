document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('open');
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) setTimeout(() => e.target.classList.add('visible'), i * 80);
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

const msgs = [
  "Start checking off items to see your digital safety score.",
  "Keep going — every protection matters!",
  "Good start! You're building your defense.",
  "You're getting safer. Keep going!",
  "Halfway there — great progress!",
  "More than halfway — you're taking this seriously.",
  "Almost fully protected — impressive!",
  "Nearly perfect — just one more!",
  "🎉 Perfect score! You are fully protected. Share this page with your family and friends."
];

function toggleCheck(item) {
  item.classList.toggle('checked');
  updateScore();
}

function updateScore() {
  const total = document.querySelectorAll('.check-item').length;
  const checked = document.querySelectorAll('.check-item.checked').length;
  document.getElementById('scoreNum').textContent = `${checked}/${total}`;
  document.getElementById('scoreMsg').textContent = msgs[checked];
  const num = document.getElementById('scoreNum');
  if (checked === total) { num.style.color = 'var(--green)'; }
  else if (checked >= total * 0.6) { num.style.color = 'var(--gold)'; }
  else { num.style.color = 'var(--crimson)'; }
}