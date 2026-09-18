// ==========================================================================
// POLICLÍNICO VITARTE - LÓGICA PRINCIPAL & INTERACTIVIDAD
// ==========================================================================

import { CLINIC_INFO, SPECIALTIES, BLOG_ARTICLES, FAQS, buildWhatsAppLink } from './data.js';

// SVG Icon Helper
function getIconSvg(iconName) {
  const icons = {
    stethoscope: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 3v5a3.5 3.5 0 0 0 7 0V3"/><path d="M8 15v1a6 6 0 0 0 12 0v-3"/><circle cx="20" cy="10" r="2"/></svg>`,
    kidney: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C8 2 4 5 4 10c0 4.5 3 9 8 12 5-3 8-7.5 8-12 0-5-4-8-8-8z"/><circle cx="12" cy="10" r="3"/></svg>`,
    stomach: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 9c-1-3-4-5-7-5S6 6 6 10c0 5 4 8 7 10 3-2 6-5 6-9v-2z"/><path d="M10 11c0 2 2 3 4 3"/></svg>`,
    brain: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-5.04z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-5.04z"/></svg>`,
    activity: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
    bone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 10c.7-.7 1.6-1 2.5-1a3.5 3.5 0 1 1 0 7c-.9 0-1.8-.3-2.5-1l-7-7c-.7-.7-1.6-1-2.5-1a3.5 3.5 0 1 0 0 7c.9 0 1.8-.3 2.5-1z"/></svg>`,
    lungs: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v16"/><path d="M12 8c-3-2-8-1-9 4-.8 4 1 9 5 9 3 0 4-3 4-5V8z"/><path d="M12 8c3-2 8-1 9 4 .8 4-1 9-5 9-3 0-4-3-4-5V8z"/></svg>`,
    baby: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 15s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>`,
    female: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="9" r="6"/><path d="M12 15v7"/><path d="M9 19h6"/></svg>`,
    apple: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"/><path d="M10 2c1 .5 2 2 2 5"/></svg>`,
    whatsapp: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`,
    arrowRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
    close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`
  };
  return icons[iconName] || icons.stethoscope;
}

// Render Specialties Grid
function renderSpecialties(filteredList = SPECIALTIES) {
  const container = document.getElementById('specialties-grid');
  if (!container) return;

  if (filteredList.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; background: #ffffff; border-radius: 12px; border: 1px dashed var(--color-border);">
        <p style="font-size: 1.1rem; color: var(--color-text-title); font-weight: 600; margin-bottom: 0.5rem;">No encontramos una especialidad con ese término</p>
        <p style="font-size: 0.9rem; color: var(--color-text-muted); margin-bottom: 1.25rem;">Escríbenos directamente a WhatsApp y te orientamos con el especialista adecuado.</p>
        <a href="${buildWhatsAppLink('Hola Policlínico Vitarte, quisiera orientación médica sobre qué especialista consultar.')}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp">
          ${getIconSvg('whatsapp')} Orientación por WhatsApp
        </a>
      </div>
    `;
    return;
  }

  container.innerHTML = filteredList.map(specialty => `
    <div class="specialty-card" data-id="${specialty.id}">
      <div class="card-top">
        <div class="specialty-icon-box">
          ${getIconSvg(specialty.icon)}
        </div>
        <span class="specialty-badge">${specialty.badge}</span>
      </div>
      <h3 class="specialty-name">${specialty.name}</h3>
      <p class="specialty-desc">${specialty.summary}</p>
      
      <div class="specialty-tags">
        ${specialty.symptoms.slice(0, 3).map(sym => `<span class="specialty-tag">${sym}</span>`).join('')}
      </div>

      <div class="specialty-action">
        <a href="${buildWhatsAppLink(specialty.whatsappMessage)}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-sm btn-block" title="Consultar ${specialty.name} por WhatsApp">
          ${getIconSvg('whatsapp')} Consultar Especialidad
        </a>
      </div>
    </div>
  `).join('');
}

// Setup Specialty Filtering & Search
function setupSpecialtiesFilter() {
  const searchInput = document.getElementById('specialty-search-input');
  const symptomChips = document.querySelectorAll('.symptom-chip');

  if (!searchInput) return;

  function filterData(query) {
    const term = query.toLowerCase().trim();
    if (!term) {
      renderSpecialties(SPECIALTIES);
      return;
    }

    const matched = SPECIALTIES.filter(spec => {
      const nameMatch = spec.name.toLowerCase().includes(term);
      const summaryMatch = spec.summary.toLowerCase().includes(term);
      const symptomMatch = spec.symptoms.some(s => s.toLowerCase().includes(term));
      return nameMatch || summaryMatch || symptomMatch;
    });

    renderSpecialties(matched);
  }

  searchInput.addEventListener('input', (e) => {
    // Unselect chip if typing
    symptomChips.forEach(chip => chip.classList.remove('active'));
    filterData(e.target.value);
  });

  symptomChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const isAlreadyActive = chip.classList.contains('active');
      symptomChips.forEach(c => c.classList.remove('active'));

      if (isAlreadyActive) {
        searchInput.value = '';
        renderSpecialties(SPECIALTIES);
      } else {
        chip.classList.add('active');
        const filterVal = chip.getAttribute('data-filter') || chip.textContent.trim();
        searchInput.value = filterVal;
        filterData(filterVal);
      }
    });
  });
}

// Render Blog Articles
function renderBlog() {
  const container = document.getElementById('blog-grid');
  if (!container) return;

  container.innerHTML = BLOG_ARTICLES.map(article => `
    <article class="blog-card" data-article-id="${article.id}">
      <div class="blog-meta">
        <span class="blog-category">${article.category}</span>
        <span class="blog-time">${article.readTime}</span>
      </div>
      <h3>${article.title}</h3>
      <p>${article.summary}</p>
      <div class="blog-card-footer">
        <span class="blog-read-btn">
          Leer artículo ${getIconSvg('arrowRight')}
        </span>
      </div>
    </article>
  `).join('');

  // Attach click to open modal
  container.querySelectorAll('.blog-card').forEach(card => {
    card.addEventListener('click', () => {
      const articleId = parseInt(card.getAttribute('data-article-id'), 10);
      openArticleModal(articleId);
    });
  });
}

// Article Modal Manager
function setupArticleModal() {
  const modal = document.getElementById('article-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (!modal) return;

  closeBtn?.addEventListener('click', closeArticleModal);
  
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeArticleModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeArticleModal();
    }
  });
}

function openArticleModal(articleId) {
  const article = BLOG_ARTICLES.find(a => a.id === articleId);
  const modal = document.getElementById('article-modal');
  if (!article || !modal) return;

  document.getElementById('modal-category').textContent = article.category;
  document.getElementById('modal-title').textContent = article.title;
  document.getElementById('modal-date').textContent = article.date;
  document.getElementById('modal-time').textContent = article.readTime;
  document.getElementById('modal-body-content').innerHTML = article.content;

  const ctaBtn = document.getElementById('modal-whatsapp-cta');
  if (ctaBtn) {
    ctaBtn.href = buildWhatsAppLink(article.whatsappQuery);
  }

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeArticleModal() {
  const modal = document.getElementById('article-modal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// Render FAQs and Setup Accordion
function renderFaqs() {
  const container = document.getElementById('faq-accordion');
  if (!container) return;

  container.innerHTML = FAQS.map((faq, index) => `
    <div class="faq-item ${index === 0 ? 'active' : ''}">
      <button class="faq-header" type="button" aria-expanded="${index === 0 ? 'true' : 'false'}">
        <span>${faq.question}</span>
        <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </button>
      <div class="faq-body">
        <p>${faq.answer}</p>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.faq-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const isActive = item.classList.contains('active');
      
      // Close all other items
      container.querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('active');
        i.querySelector('.faq-header').setAttribute('aria-expanded', 'false');
      });

      if (!isActive) {
        item.classList.add('active');
        header.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

// Floating WhatsApp Drawer
function setupFloatingWhatsApp() {
  const toggleBtn = document.getElementById('floating-whatsapp-toggle');
  const popupCard = document.getElementById('whatsapp-popup-card');
  const closeBtn = document.getElementById('popup-close-btn');

  if (!toggleBtn || !popupCard) return;

  toggleBtn.addEventListener('click', () => {
    popupCard.classList.toggle('open');
  });

  closeBtn?.addEventListener('click', () => {
    popupCard.classList.remove('open');
  });

  // Populate quick action buttons inside drawer
  const quickActionsContainer = document.getElementById('popup-quick-actions');
  if (quickActionsContainer) {
    const quickItems = [
      { text: "Consultar Especialidades", msg: "Hola Policlínico Vitarte, quisiera información sobre las especialidades disponibles y citas." },
      { text: "Convenios para Colegios / Empresas", msg: "Hola, quisiera solicitar información sobre convenios institucionales para mi colegio/empresa." },
      { text: "Ubicación y Horarios en Ate", msg: "Hola, deseo consultar sobre la ubicación exacta y horarios de atención en su sede de Ate Vitarte." }
    ];

    quickActionsContainer.innerHTML = quickItems.map(item => `
      <a href="${buildWhatsAppLink(item.msg)}" target="_blank" rel="noopener noreferrer" class="popup-action-btn">
        <span>${item.text}</span>
        ${getIconSvg('arrowRight')}
      </a>
    `).join('');
  }
}

// Mobile Navigation Toggle & Header Scroll
function setupNavigation() {
  const toggle = document.getElementById('mobile-menu-toggle');
  const menu = document.getElementById('nav-menu');
  const header = document.querySelector('.site-header');

  toggle?.addEventListener('click', () => {
    menu?.classList.toggle('open');
  });

  // Close mobile menu on link click
  menu?.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
    });
  });

  // Header scroll shadow
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });
}

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  renderSpecialties();
  setupSpecialtiesFilter();
  renderBlog();
  setupArticleModal();
  renderFaqs();
  setupFloatingWhatsApp();
  setupNavigation();
});
