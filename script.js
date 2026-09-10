const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');

const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 24);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  menuButton.setAttribute('aria-label', open ? 'Abrir menú' : 'Cerrar menú');
  navigation?.classList.toggle('is-open', !open);
});

navigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('is-open');
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'Abrir menú');
  });
});

const revealItems = document.querySelectorAll('[class*="reveal-"]');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      currentObserver.unobserve(entry.target);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -35px' });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

const systems = {
  europea: {
    title: 'Precisión y versatilidad',
    text: 'Alternativas para proyectos que priorizan hermeticidad, diseño, distintas aperturas y terminaciones cuidadas.'
  },
  americana: {
    title: 'Funcionalidad cotidiana',
    text: 'Sistemas prácticos para proyectos que buscan deslizamiento fluido, fácil operación y una solución eficiente.'
  }
};

const systemPanel = document.querySelector('#system-panel');
document.querySelectorAll('.system-tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.system-tab').forEach((item) => {
      const active = item === tab;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-selected', String(active));
    });
    const selection = systems[tab.dataset.system];
    if (!systemPanel || !selection) return;
    systemPanel.classList.remove('is-changing');
    void systemPanel.offsetWidth;
    systemPanel.innerHTML = '<h3>' + selection.title + '</h3><p>' + selection.text + '</p>';
    systemPanel.classList.add('is-changing');
  });
});

document.querySelectorAll('.faq-list details').forEach((detail) => {
  detail.addEventListener('toggle', () => {
    if (!detail.open) return;
    document.querySelectorAll('.faq-list details').forEach((other) => {
      if (other !== detail) other.open = false;
    });
  });
});

document.querySelector('#quote-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const optionalSize = data.get('ancho') || data.get('alto')
    ? '\nMedida aproximada: ' + (data.get('ancho') || '—') + ' cm ancho x ' + (data.get('alto') || '—') + ' cm alto'
    : '';
  const message = [
    'Hola Vidriería C&M, quiero cotizar un proyecto.',
    'Nombre: ' + data.get('nombre'),
    'Comuna o sector: ' + data.get('comuna'),
    'Servicio: ' + data.get('servicio') + optionalSize,
    'Detalles: ' + (data.get('detalle') || 'Sin detalles adicionales')
  ].join('\n');
  window.open('https://wa.me/56926037785?text=' + encodeURIComponent(message), '_blank', 'noopener');
});

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
