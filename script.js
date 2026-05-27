function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
// Typing Effect
    const phrases = ["Website Performance & SEO Specialist.", "Speed + SEO = Growth.", "100% Lighthouse Scores."];
    let idx = 0, charIdx = 0, isDeleting = false;
    const typedEl = document.getElementById('typed-headline');
    function typeEffect() {
        const current = phrases[idx];
        if (isDeleting) {
            typedEl.textContent = current.substring(0, charIdx--);
            if (charIdx < 0) { isDeleting = false; idx = (idx+1)%phrases.length; setTimeout(typeEffect, 400); return; }
        } else {
            typedEl.textContent = current.substring(0, charIdx++);
            if (charIdx === current.length+1) { isDeleting = true; setTimeout(typeEffect, 1800); return; }
        }
        setTimeout(typeEffect, isDeleting ? 50 : 100);
    }
    if(typedEl) typeEffect();

// Optional: Close menu when clicking outside
description="A website performance and SEO specialist focused on optimizing speed and achieving 100% Lighthouse scores for growth."
document.addEventListener('click', function(event) {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  
  if (!hamburgerMenu.contains(event.target) && menu.classList.contains('open')) {
    menu.classList.remove('open');
    icon.classList.remove('open');
  }
});