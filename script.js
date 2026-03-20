// ========================
//  CUSTOM CURSOR
// ========================
const dot  = document.querySelector('.cursor-dot');
const ring = document.querySelector('.cursor-ring');

let mouseX = 0, mouseY = 0;
let ringX  = 0, ringY  = 0;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  dot.style.left = mouseX + 'px';
  dot.style.top  = mouseY + 'px';
});

// Smooth ring follow
function animateCursor() {
  ringX += (mouseX - ringX) * 0.12;
  ringY += (mouseY - ringY) * 0.12;
  ring.style.left = ringX + 'px';
  ring.style.top  = ringY + 'px';
  requestAnimationFrame(animateCursor);
}
animateCursor();

// Expand ring on hover over links/buttons
document.querySelectorAll('a, button, .skill-item, .project-card').forEach(el => {
  el.addEventListener('mouseenter', () => {
    ring.style.width = '56px';
    ring.style.height = '56px';
    ring.style.opacity = '0.35';
  });
  el.addEventListener('mouseleave', () => {
    ring.style.width  = '36px';
    ring.style.height = '36px';
    ring.style.opacity = '1';
  });
});

// ========================
//  THEME TOGGLE
// ========================
const toggleBtn = document.getElementById('theme-toggle');
const icon = toggleBtn.querySelector('i');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
  if (document.body.classList.contains('light-theme')) {
    icon.classList.replace('fa-moon', 'fa-sun');
  } else {
    icon.classList.replace('fa-sun', 'fa-moon');
  }
});

// ========================
//  SCROLL REVEAL
// ========================
const revealEls = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible', 'revealed');
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => observer.observe(el));

// ========================
//  NAVBAR SCROLL EFFECT
// ========================
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.style.borderBottomColor = 'rgba(124,107,255,0.2)';
  } else {
    navbar.style.borderBottomColor = '';
  }
});

// ========================
//  TYPING EFFECT (Hero)
// ========================
// (No #typing element in new version, but keeping for backward compat)
const typingEl = document.getElementById('typing');
if (typingEl) {
  const phrases = ['Dimasha Jayathilaka', 'CS Undergrad', 'Problem Solver'];
  let p = 0, c = 0, deleting = false;

  function type() {
    const current = phrases[p];
    typingEl.textContent = current.substring(0, c);
    if (!deleting) {
      c++;
      if (c > current.length) { deleting = true; setTimeout(type, 1500); return; }
    } else {
      c--;
      if (c === 0) { deleting = false; p = (p + 1) % phrases.length; }
    }
    setTimeout(type, deleting ? 60 : 100);
  }
  type();
}