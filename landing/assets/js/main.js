/**
 * Sobat Siswa - Logika Interaktif Landing Page
 * Mengikuti prinsip antislop-human dan antislop-ui
 */

document.addEventListener('DOMContentLoaded', () => {
  initAos();
  initThemeToggle();
  initMobileNav();
  initScrollSpy();
  initShowcaseSwitcher();
  initFaqAccordion();
  initBackToTop();
  initSmoothScroll();
});

/* --------------------------------------------------------------------------
   0. Animasi Saat Digulir (AOS - Animate On Scroll)
   -------------------------------------------------------------------------- */
function initAos() {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 650,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50
    });
  }
}

/* --------------------------------------------------------------------------
   1. Ganti Mode Terang / Gelap (Theme Toggle)
   -------------------------------------------------------------------------- */
function initThemeToggle() {
  const toggleBtn = document.getElementById('themeToggleBtn');
  if (!toggleBtn) return;

  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(toggleBtn, savedTheme);

  toggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(toggleBtn, newTheme);
  });
}

function updateThemeIcon(btn, theme) {
  const icon = btn.querySelector('i');
  if (!icon) return;
  if (theme === 'dark') {
    icon.className = 'fas fa-sun';
    btn.setAttribute('aria-label', 'Ganti ke Mode Terang');
  } else {
    icon.className = 'fas fa-moon';
    btn.setAttribute('aria-label', 'Ganti ke Mode Gelap');
  }
}

/* --------------------------------------------------------------------------
   2. Navigasi Mobile
   -------------------------------------------------------------------------- */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobileNavToggle');
  const menu = document.getElementById('mobileNavMenu');
  if (!toggleBtn || !menu) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    toggleBtn.setAttribute('aria-expanded', isOpen);
    const icon = toggleBtn.querySelector('i');
    if (icon) {
      icon.className = isOpen ? 'fas fa-times' : 'fas fa-bars';
    }
  });

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
      const icon = toggleBtn.querySelector('i');
      if (icon) icon.className = 'fas fa-bars';
    });
  });
}

/* --------------------------------------------------------------------------
   3. Penunjuk Menu Aktif Saat Halaman Digulir (Scroll Spy)
   -------------------------------------------------------------------------- */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}

/* --------------------------------------------------------------------------
   4. Pilihan Simulasi Kartu Tampilan
   -------------------------------------------------------------------------- */
function initShowcaseSwitcher() {
  const buttons = document.querySelectorAll('.preview-btn');
  const panes = document.querySelectorAll('.mockup-pane');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-showcase');

      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      panes.forEach(pane => {
        pane.classList.remove('active');
        if (pane.getAttribute('data-pane') === target) {
          pane.classList.add('active');
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   5. Tanya Jawab (Accordion FAQ)
   -------------------------------------------------------------------------- */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    if (!trigger) return;

    trigger.addEventListener('click', () => {
      const isAlreadyActive = item.classList.contains('active');

      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        const otherTrigger = otherItem.querySelector('.faq-trigger');
        if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
      });

      if (!isAlreadyActive) {
        item.classList.add('active');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   6. Tombol Kembali ke Atas
   -------------------------------------------------------------------------- */
function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 350) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* --------------------------------------------------------------------------
   7. Gulir Halus Tautan Internal
   -------------------------------------------------------------------------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 76;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}
