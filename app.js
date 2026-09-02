/* ==========================================================================
   MAYANK CHAKRAWARTI - PORTFOLIO INTERACTIVITY SCRIPT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.contains('hidden');
      if (isHidden) {
        mobileMenu.classList.remove('hidden');
      } else {
        mobileMenu.classList.add('hidden');
      }
    });

    // Close mobile menu when clicking any link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // Active Navbar link on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav .hidden.md\\:flex a');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('text-cyanAccent', 'font-bold');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('text-cyanAccent', 'font-bold');
      }
    });
  });
});

/**
 * Copy text to clipboard and trigger animated toast notification
 * @param {string} text - Content to copy
 * @param {string} label - Friendly name of the item copied
 */
window.copyText = function (text, label = 'Content') {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(`${label} copied to clipboard!`);
    }).catch(() => {
      fallbackCopy(text, label);
    });
  } else {
    fallbackCopy(text, label);
  }
};

/**
 * Fallback copy mechanism for non-https / older browsers
 */
function fallbackCopy(text, label) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.opacity = '0';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
    showToast(`${label} copied to clipboard!`);
  } catch (err) {
    showToast(`Unable to copy automatically`);
  }
  document.body.removeChild(textArea);
}

/**
 * Show toast message
 */
let toastTimeout;
function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-msg');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.add('show');

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

/**
 * Contact form submit handler
 */
window.handleFormSubmit = function (event) {
  event.preventDefault();
  const name = document.getElementById('name')?.value || '';
  const email = document.getElementById('email')?.value || '';
  const subject = document.getElementById('subject')?.value || '';
  const message = document.getElementById('message')?.value || '';

  const submitBtn = event.target.querySelector('button[type="submit"]');
  const originalBtnContent = submitBtn.innerHTML;

  // Visual loading state
  submitBtn.disabled = true;
  submitBtn.innerHTML = `
    <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
    <span>Sending message...</span>
  `;

  setTimeout(() => {
    showToast(`Thank you, ${name}! Your inquiry has been sent.`);
    event.target.reset();
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalBtnContent;
    if (window.lucide) window.lucide.createIcons();

    // Option to open pre-filled email client
    const mailtoUri = `mailto:mayankchakrawarti358@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
    const promptDirect = confirm('Would you also like to open your default email client to send this message directly to Mayank Chakrawarti?');
    if (promptDirect) {
      window.location.href = mailtoUri;
    }
  }, 800);
};
