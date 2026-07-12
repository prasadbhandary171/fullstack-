// =========================================================
// Mobile navigation toggle
// =========================================================
const navToggle = document.getElementById('navToggle');
const primaryNav = document.getElementById('primaryNav');

function closeNav() {
  navToggle.setAttribute('aria-expanded', 'false');
  navToggle.setAttribute('aria-label', 'Open navigation menu');
  primaryNav.classList.remove('is-open');
}

function openNav() {
  navToggle.setAttribute('aria-expanded', 'true');
  navToggle.setAttribute('aria-label', 'Close navigation menu');
  primaryNav.classList.add('is-open');
}

navToggle.addEventListener('click', () => {
  const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
  isOpen ? closeNav() : openNav();
});

// Close mobile nav after choosing a link
primaryNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 720) closeNav();
  });
});

// Close mobile nav on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeNav();
});

// =========================================================
// Contact form validation
// =========================================================
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

const validators = {
  name: (value) => value.trim().length >= 2 || 'Please enter your name.',
  email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()) || 'Please enter a valid email address.',
  subject: (value) => value.trim().length >= 3 || 'Please add a short subject.',
  message: (value) => value.trim().length >= 10 || 'Please write a bit more detail (10+ characters).',
};

function showError(field, message) {
  const errorEl = document.getElementById(`${field}-error`);
  if (errorEl) errorEl.textContent = message || '';
}

function validateField(input) {
  const validate = validators[input.name];
  if (!validate) return true;
  const result = validate(input.value);
  if (result === true) {
    showError(input.name, '');
    input.setAttribute('aria-invalid', 'false');
    return true;
  }
  showError(input.name, result);
  input.setAttribute('aria-invalid', 'true');
  return false;
}

// Validate on blur for immediate, non-intrusive feedback
['name', 'email', 'subject', 'message'].forEach((fieldName) => {
  const field = document.getElementById(fieldName);
  if (field) {
    field.addEventListener('blur', () => validateField(field));
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  status.textContent = '';

  const fields = Array.from(form.querySelectorAll('input[name], textarea[name]'));
  const results = fields.map((field) => validateField(field));
  const allValid = results.every(Boolean);

  if (!allValid) {
    status.textContent = 'Please fix the highlighted fields and try again.';
    status.style.color = 'var(--red)';
    const firstInvalid = fields.find((f) => f.getAttribute('aria-invalid') === 'true');
    if (firstInvalid) firstInvalid.focus();
    return;
  }

  // No backend is wired up in this template — replace this block with
  // a fetch() call to your form endpoint or email service.
  status.style.color = 'var(--cyan)';
  status.textContent = 'Thanks — your message has been noted. (Connect a backend to actually send it.)';
  form.reset();
});

// =========================================================
// Footer year
// =========================================================
document.getElementById('year').textContent = new Date().getFullYear();
