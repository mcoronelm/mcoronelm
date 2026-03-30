/* ════════════════ ARCHIVO: script.js ════════════════ */

'use strict';

/* ─────────────────────────────────────────────
   THEME
───────────────────────────────────────────── */
function initTheme() {
  const stored = localStorage.getItem('portfolio-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = stored || (prefersDark ? 'dark' : 'light');
  applyTheme(theme);
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme === 'light' ? 'light' : '');
  localStorage.setItem('portfolio-theme', theme);
  updateThemeIcon(theme);
}

function toggleTheme() {
  const current = localStorage.getItem('portfolio-theme') || 'dark';
  applyTheme(current === 'dark' ? 'light' : 'dark');
}

function updateThemeIcon(theme) {
  const icons = document.querySelectorAll('.theme-icon');
  icons.forEach(icon => {
    icon.innerHTML = theme === 'dark' ? svgSun() : svgMoon();
  });
}

/* ─────────────────────────────────────────────
   SVG ICONS
───────────────────────────────────────────── */
function svgHome() {
  return `<svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`;
}
function svgEducation() {
  return `<svg viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`;
}
function svgCode() {
  return `<svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`;
}
function svgMail() {
  return `<svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`;
}
function svgGithub() {
  return `<svg viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>`;
}
function svgLinkedin() {
  return `<svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`;
}
function svgSun() {
  return `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;
}
function svgMoon() {
  return `<svg viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>`;
}
function svgDownload() {
  return `<svg viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`;
}
function svgExternalLink() {
  return `<svg viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;
}
function svgChevron() {
  return `<svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>`;
}
function svgCert() {
  return `<svg class="cert-icon" viewBox="0 0 24 24"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>`;
}
function svgUser() {
  return `<svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="1"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`;
}

/* ─────────────────────────────────────────────
   SIDEBAR
───────────────────────────────────────────── */
function initNav() {
  const path = window.location.pathname;
  let activePage = 'home';
  if (path.includes('education')) activePage = 'education';
  else if (path.includes('projects')) activePage = 'projects';

  const navItems = [
    { id: 'home',      label: 'Home',       icon: svgHome(),      href: 'index.html' },
    { id: 'education', label: 'Education',  icon: svgEducation(), href: 'education.html' },
    { id: 'projects',  label: 'Projects',  icon: svgCode(),      href: 'projects.html' },
    
  ];

  /* Desktop sidebar */
  const sidebar = document.getElementById('sidebar');
  if (sidebar) {
    const initials = CONFIG.profile.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();

    let html = `
      <a class="sidebar-logo" href="index.html">
        <div class="sidebar-logo-icon">${initials}</div>
        <span class="sidebar-logo-text">${CONFIG.profile.name.split(' ')[0]}</span>
      </a>
      <nav class="sidebar-nav" aria-label="Navegación principal">
    `;

    navItems.forEach(item => {
      const isActive = item.id === activePage;
      html += `
        <a class="nav-item${isActive ? ' active' : ''}" href="${item.href}" aria-current="${isActive ? 'page' : 'false'}">
          <div class="nav-icon">${item.icon}</div>
          <span class="nav-label">${item.label}</span>
        </a>
      `;
    });

    html += `</nav>`;
    html += `
      <div class="sidebar-footer">
        <div class="sidebar-separator"></div>
        <button class="nav-item theme-toggle" onclick="toggleTheme()" title="Cambiar tema" aria-label="Cambiar tema oscuro/claro">
          <div class="nav-icon"><span class="theme-icon">${svgSun()}</span></div>
          <span class="nav-label">Tema</span>
        </button>
        <div class="sidebar-separator"></div>
        <div class="sidebar-social">
          <a class="social-link" href="${CONFIG.profile.github}" target="_blank" rel="noopener" title="GitHub">
            <div class="nav-icon">${svgGithub()}</div>
            <span class="nav-label">GitHub</span>
          </a>
          <a class="social-link" href="${CONFIG.profile.linkedin}" target="_blank" rel="noopener" title="LinkedIn">
            <div class="nav-icon">${svgLinkedin()}</div>
            <span class="nav-label">LinkedIn</span>
          </a>
        </div>
      </div>
    `;

    sidebar.innerHTML = html;
  }

  /* Mobile bottom nav */
  const mobileNav = document.getElementById('mobile-nav');
  if (mobileNav) {
    const mobileItems = [
      { id: 'home',      label: 'Home',      icon: svgHome(),      href: 'index.html' },
      { id: 'education', label: 'Educación', icon: svgEducation(), href: 'education.html' },
      { id: 'projects',  label: 'Proyectos', icon: svgCode(),      href: 'projects.html' },
      { id: 'contact',   label: 'Contacto',  icon: svgMail(),      href: 'index.html#contacto' },
    ];

    mobileNav.innerHTML = mobileItems.map(item => `
      <a class="mobile-nav-item${item.id === activePage ? ' active' : ''}" href="${item.href}">
        ${item.icon}
        <span>${item.label}</span>
      </a>
    `).join('');

    const themeBtn = document.createElement('button');
    themeBtn.className = 'mobile-nav-item';
    themeBtn.style.background = 'none';
    themeBtn.style.border = 'none';
    themeBtn.style.flex = '1';
    themeBtn.onclick = toggleTheme;
    themeBtn.innerHTML = `<span class="theme-icon">${svgSun()}</span><span>Tema</span>`;
    mobileNav.appendChild(themeBtn);
  }

  /* Update theme icon after nav is rendered */
  const stored = localStorage.getItem('portfolio-theme') || 'dark';
  updateThemeIcon(stored);
}

/* ─────────────────────────────────────────────
   CUSTOM CURSOR
───────────────────────────────────────────── */
function initCursor() {
  if (window.innerWidth < 769) return;
  const cursor = document.getElementById('cursor');
  const dot    = document.getElementById('cursor-dot');
  if (!cursor || !dot) return;

  let mouseX = 0, mouseY = 0;
  let curX = 0, curY = 0;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = mouseX + 'px';
    dot.style.top  = mouseY + 'px';
  });

  function animate() {
    curX += (mouseX - curX) * 0.15;
    curY += (mouseY - curY) * 0.15;
    cursor.style.left = curX + 'px';
    cursor.style.top  = curY + 'px';
    requestAnimationFrame(animate);
  }
  animate();

  document.querySelectorAll('a, button, [role="button"]').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.style.transform = 'translate(-50%, -50%) rotate(45deg) scale(1.5)');
    el.addEventListener('mouseleave', () => cursor.style.transform = 'translate(-50%, -50%) rotate(45deg) scale(1)');
  });
}

/* ─────────────────────────────────────────────
   RIPPLE EFFECT
───────────────────────────────────────────── */
function addRipple(btn) {
  btn.addEventListener('click', function(e) {
    const rect = this.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    const size = Math.max(rect.width, rect.height) * 2;
    ripple.style.cssText = `
      width: ${size}px; height: ${size}px;
      left: ${e.clientX - rect.left - size/2}px;
      top:  ${e.clientY - rect.top  - size/2}px;
    `;
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
}

/* ─────────────────────────────────────────────
   HOME PAGE
───────────────────────────────────────────── */
function homePage() {
  renderHomeContent();
  initContactForm();
 
  /* Animate elements in */
  document.querySelectorAll('.fade-in').forEach(el => {
    el.style.animationPlayState = 'running';
  });
}
 
function renderHomeContent() {
  const root = document.getElementById('home-root');
  if (!root || !CONFIG) return;
 
  const p = CONFIG.profile;
  const stats = CONFIG.stats || [];
 
  const statsHtml = stats.map(s => `
    <div class="stat-card fade-in" data-delay="5">
      <span class="stat-value">${s.value}</span>
      <span class="stat-label">${s.label}</span>
    </div>
  `).join('');
 
  const photoHtml = p.photo
  ? `<img src="${p.photo}" alt="${p.name}" class="profile-photo" id="profile-img">`
  : `<div class="profile-photo-placeholder">${svgUser()}</div>`;
  root.innerHTML = `
    <div class="home-layout">
      <!-- Left column -->
      <div class="home-left">
        <div class="profile-photo-wrapper fade-in" data-delay="1">
          ${photoHtml}
        </div>
       
        <p class="profile-title fade-in" data-delay="3">${p.title}</p>
        <div class="contact-icons fade-in" data-delay="4">
          <a class="contact-icon-link" href="mailto:${p.email}" title="Email">${svgMail()}</a>
          <a class="contact-icon-link" href="${p.github}" target="_blank" rel="noopener" title="GitHub">${svgGithub()}</a>
          <a class="contact-icon-link" href="${p.linkedin}" target="_blank" rel="noopener" title="LinkedIn">${svgLinkedin()}</a>
        </div>
        <span class="email-label fade-in" data-delay="4">${p.email}</span>
        <a class="btn btn-cv fade-in" data-delay="5" href="${p.cv}" download>
          ${svgDownload()} Descargar CV
        </a>
        <div class="stats-grid">${statsHtml}</div>
      </div>
 
      <!-- Right column -->
      <div class="home-right">
        <div class="home-right">
         <h1 class="profile-name fade-in" data-delay="2">${p.name}</h1>
        <section>
          <span class="section-tag">// ABOUT_ME</span>
          <p class="about-text">${p.about}</p>
        </section>
        
        
      </div>
    </div>
  `;
     const img = document.getElementById('profile-img');
    if (img) {
      img.addEventListener('error', () => {
      img.parentElement.innerHTML = `<div class="profile-photo-placeholder">${svgUser()}</div>`;
      });
  }
  /* Add ripple to buttons */
  document.querySelectorAll('.btn').forEach(addRipple);
}
 
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
 
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const status = document.getElementById('form-status');
    const btn = document.getElementById('submit-btn');
 
    status.textContent = 'ENVIANDO...';
    status.className = 'form-status sending';
    btn.disabled = true;
 
    const data = new FormData(form);
 
    try {
      const res = await fetch(CONFIG.formspree.endpoint, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' }
      });
 
      if (res.ok) {
        status.textContent = 'MENSAJE_RECIBIDO ✓';
        status.className = 'form-status';
        form.reset();
      } else {
        throw new Error('Server error');
      }
    } catch {
      status.textContent = 'ERROR_DE_CONEXIÓN — intenta de nuevo';
      status.className = 'form-status error';
    } finally {
      btn.disabled = false;
      setTimeout(() => { status.textContent = ''; status.className = 'form-status'; }, 5000);
    }
  });
}

/* ─────────────────────────────────────────────
   EDUCATION PAGE
───────────────────────────────────────────── */
function educationPage() {
  renderEducation();
  renderCertifications();
  initCertTooltip();
  initCertModal();
}

function renderEducation() {
  const container = document.getElementById('education-list');
  if (!container || !CONFIG) return;

  container.innerHTML = CONFIG.education.map(item => `
    <div class="timeline-item fade-in">
      <div class="timeline-year">${item.year}</div>
      <div class="timeline-title">
        <a href="${item.url}" target="_blank" rel="noopener" style="color: inherit; text-decoration: none;">${item.title}</a>
      </div>
      <div class="timeline-institution">
        ${svgExternalLink()} ${item.institution}
      </div>
    </div>
  `).join('');
}

function renderCertifications() {
  const container = document.getElementById('cert-list');
  if (!container || !CONFIG) return;

  container.innerHTML = CONFIG.certifications.map((cert, i) => `
    <div class="cert-item fade-in" data-delay="${i + 1}" data-cert-index="${i}">
      ${svgCert()}
      <div class="cert-info">
        <span class="cert-name">${cert.name}</span>
        <span class="cert-meta">${cert.platform} · ${cert.year}</span>
      </div>
    </div>
  `).join('');
}

function initCertTooltip() {
  if (window.innerWidth < 769) return;

  let tooltip = document.getElementById('cert-tooltip');
  if (!tooltip) {
    tooltip = document.createElement('div');
    tooltip.id = 'cert-tooltip';
    tooltip.className = 'cert-tooltip';
    tooltip.innerHTML = '<img src="" alt="Certificado">';
    document.body.appendChild(tooltip);
  }

  const img = tooltip.querySelector('img');
  let activeEl = null;

  document.querySelectorAll('.cert-item').forEach(item => {
    const idx = parseInt(item.dataset.certIndex);
    const cert = CONFIG.certifications[idx];
    if (!cert || !cert.image) return;

    item.addEventListener('mouseenter', (e) => {
      img.src = cert.image;
      tooltip.classList.add('visible');
      activeEl = item;
      positionTooltip(e);
    });

    item.addEventListener('mousemove', positionTooltip);

    item.addEventListener('mouseleave', () => {
      tooltip.classList.remove('visible');
      activeEl = null;
    });

    item.addEventListener('click', () => {
      window.open(cert.url, '_blank', 'noopener');
    });
  });

  function positionTooltip(e) {
    const tw = 270;
    const th = 200;
    let x = e.clientX - tw - 16;
    let y = e.clientY - th / 2;
    if (x < 8) x = e.clientX + 16;
    if (y < 8) y = 8;
    if (y + th > window.innerHeight - 8) y = window.innerHeight - th - 8;
    tooltip.style.left = x + 'px';
    tooltip.style.top  = y + 'px';
  }
}

function initCertModal() {
  if (window.innerWidth >= 769) return;

  let modal = document.getElementById('cert-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'cert-modal';
    modal.className = 'cert-modal-overlay';
    modal.innerHTML = `
      <div class="cert-modal-content">
        <button class="cert-modal-close" id="cert-modal-close">[ X ] CERRAR</button>
        <img src="" alt="Certificado" id="cert-modal-img">
      </div>
    `;
    document.body.appendChild(modal);
  }

  const closeBtn = document.getElementById('cert-modal-close');
  const modalImg = document.getElementById('cert-modal-img');

  document.querySelectorAll('.cert-item').forEach(item => {
    const idx = parseInt(item.dataset.certIndex);
    const cert = CONFIG.certifications[idx];
    if (!cert) return;

    item.addEventListener('click', () => {
      if (cert.image) {
        modalImg.src = cert.image;
        modal.classList.add('open');
      } else {
        window.open(cert.url, '_blank', 'noopener');
      }
    });
  });

  closeBtn.addEventListener('click', () => modal.classList.remove('open'));
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('open');
  });
}

/* ─────────────────────────────────────────────
   PROJECTS PAGE
───────────────────────────────────────────── */
const LANG_COLORS = {
  Python: '#3572A5',
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  SQL: '#e38c00',
  HTML: '#e34c26',
  CSS: '#563d7c',
  R: '#198CE7',
  Shell: '#89e051',
  Jupyter: '#DA5B0B',
  'Jupyter Notebook': '#DA5B0B',
};

function getLangColor(lang) {
  return LANG_COLORS[lang] || '#8a7040';
}

function timeAgo(dateStr) {
  const months = Math.floor((Date.now() - new Date(dateStr)) / (1000 * 60 * 60 * 24 * 30));
  if (months < 1) return 'este mes';
  if (months === 1) return 'hace 1 mes';
  if (months < 12) return `hace ${months} meses`;
  const years = Math.floor(months / 12);
  return years === 1 ? 'hace 1 año' : `hace ${years} años`;
}

async function projectsPage() {
  const grid = document.getElementById('projects-grid');
  const errorState = document.getElementById('error-state');
  if (!grid) return;

  renderSkeletons(grid);

  const retryBtn = document.getElementById('retry-btn');
  if (retryBtn) {
    retryBtn.addEventListener('click', () => {
      errorState.classList.remove('visible');
      renderSkeletons(grid);
      fetchProjects(grid, errorState);
    });
  }

  await fetchProjects(grid, errorState);
}

function renderSkeletons(grid) {
  grid.innerHTML = Array(6).fill(null).map(() => `
    <div class="skeleton-card"></div>
  `).join('');
}

async function fetchProjects(grid, errorState) {
  try {
    const url = `https://api.github.com/users/${CONFIG.profile.githubUsername}/repos?sort=updated&per_page=100`;
    const res = await fetch(url);
    if (!res.ok) throw new Error('GitHub API error');

    const repos = await res.json();
    const hidden = CONFIG.hiddenRepos || [];
    const featured = CONFIG.featuredProjects || [];
    const featuredNames = featured.map(f => f.repo);

    /* Filter hidden */
    const visible = repos.filter(r => !hidden.includes(r.name));

    /* Enrich featured */
    const enriched = visible.map(repo => {
      const fp = featured.find(f => f.repo === repo.name);
      return fp ? { ...repo, _featured: true, _customDesc: fp.customDescription, _demoUrl: fp.demoUrl, _screenshotUrl: fp.screenshot } : repo;
    });

    /* Sort: featured first, then by updated */
    enriched.sort((a, b) => {
      if (a._featured && !b._featured) return -1;
      if (!a._featured && b._featured) return 1;
      return new Date(b.updated_at) - new Date(a.updated_at);
    });

    grid.innerHTML = '';
    enriched.forEach((repo, i) => {
      const card = buildProjectCard(repo, i);
      grid.appendChild(card);
    });

    initProjectDropdowns();

  } catch {
    grid.innerHTML = '';
    if (errorState) errorState.classList.add('visible');
  }
}

function buildProjectCard(repo, i) {
  const screenshotUrl = repo._screenshotUrl
    || `https://opengraph.githubassets.com/1/${CONFIG.profile.githubUsername}/${repo.name}`;
  const desc = repo._customDesc || repo.description || 'Sin descripción disponible.';
  const lang = repo.language || '';
  const langColor = getLangColor(lang);
  const delay = Math.min(i + 1, 6);

  const card = document.createElement('div');
  card.className = `project-card${repo._featured ? ' featured' : ''} fade-in`;
  card.setAttribute('data-delay', delay);

  card.innerHTML = `
    <div class="project-screenshot">
      <img src="${screenshotUrl}" alt="Preview de ${repo.name}" loading="lazy">
    </div>
    ${repo._featured ? '<span class="featured-badge">★ Destacado</span>' : ''}
    <button class="project-repo-name" data-repo="${repo.name}">
      [ ${repo.name} ]
      ${svgChevron()}
    </button>
    <p class="project-description">${desc}</p>
    <div class="project-card-footer">
      ${lang ? `<span class="lang-badge"><span class="lang-dot" style="background:${langColor}"></span>${lang}</span>` : ''}
      <div class="project-stats">
        <span class="project-stat">⭐ ${repo.stargazers_count || 0}</span>
        <span class="project-stat">🔀 ${repo.forks_count || 0}</span>
        <span class="project-stat">🕐 ${timeAgo(repo.updated_at)}</span>
      </div>
    </div>

    <div class="project-dropdown" id="dropdown-${repo.name}">
      <a class="dropdown-link" href="${repo.html_url}" target="_blank" rel="noopener">
        ${svgCode()} VER_REPOSITORIO
      </a>
      ${(repo._demoUrl || repo.homepage) ? `
      <a class="dropdown-link" href="${repo._demoUrl || repo.homepage}" target="_blank" rel="noopener">
        ${svgExternalLink()} VISITAR_SITIO
      </a>` : ''}
    </div>
  `;

  return card;
}

function initProjectDropdowns() {
  let openDropdown = null;

  document.querySelectorAll('.project-repo-name').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const repoName = btn.dataset.repo;
      const dropdown = document.getElementById(`dropdown-${repoName}`);
      if (!dropdown) return;

      if (openDropdown && openDropdown !== dropdown) {
        openDropdown.classList.remove('open');
      }

      dropdown.classList.toggle('open');
      openDropdown = dropdown.classList.contains('open') ? dropdown : null;
    });
  });

  document.addEventListener('click', () => {
    if (openDropdown) {
      openDropdown.classList.remove('open');
      openDropdown = null;
    }
  });
}

/* ─────────────────────────────────────────────
   INIT
───────────────────────────────────────────── */
function initPage() {
  const path = window.location.pathname;
  const bodyId = document.body.id;

  if (bodyId === 'page-home' || path.endsWith('index.html') || path === '/' || path.endsWith('/')) {
    homePage();
  } else if (bodyId === 'page-education' || path.includes('education')) {
    educationPage();
  } else if (bodyId === 'page-projects' || path.includes('projects')) {
    projectsPage();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNav();
  initCursor();
  initPage();
});
