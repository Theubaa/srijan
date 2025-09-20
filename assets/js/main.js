// Mobile nav toggle
const menuBtn = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => navLinks.classList.toggle('show'));
}

// Simple form handler (no backend) with validation hints
function attachFormHandler(formSelector){
  const form = document.querySelector(formSelector);
  if(!form) return;
  form.addEventListener('submit', (e)=>{
    const required = form.querySelectorAll('[required]');
    let ok = true;
    required.forEach(input=>{
      if(!input.value.trim()){
        ok = false;
        input.style.borderColor = '#ef4444';
      } else {
        input.style.borderColor = '#e5e7eb';
      }
    });
    if(!ok){
      e.preventDefault();
      alert('Please fill all required fields.');
    }
  });
}
attachFormHandler('#admission-form');
attachFormHandler('#contact-form');

// Smooth scroll for internal links
const internalLinks = document.querySelectorAll('a[href^="#"]');
internalLinks.forEach(a=>{
  a.addEventListener('click', (e)=>{
    const id = a.getAttribute('href').substring(1);
    const el = document.getElementById(id);
    if(el){
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth', block:'start'});
      if (navLinks && navLinks.classList.contains('show')) navLinks.classList.remove('show');
    }
  });
});
