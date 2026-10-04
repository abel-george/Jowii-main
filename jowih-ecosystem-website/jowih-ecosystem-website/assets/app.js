(function () {
  const data = window.JOWIH_SITE_DATA;
  const qs = (selector, root = document) => root.querySelector(selector);
  const qsa = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const el = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  };

  function icon(name) {
    return name === 'ticket' ? '🎟' : '↗';
  }

  function openScreen(name, hash) {
    document.body.dataset.screen = name;
    qsa('[data-screen-panel]').forEach((panel) => {
      const active = panel.dataset.screenPanel === name;
      panel.classList.toggle('is-active', active);
      panel.hidden = !active;
    });
    qsa('[data-nav] a').forEach((link) => {
      link.classList.toggle('is-active', link.dataset.screen === name && !hash);
    });
    qs('[data-nav]').classList.remove('is-open');
    qs('[data-menu-button]').setAttribute('aria-expanded', 'false');
    window.scrollTo(0, 0);
    if (name === 'home' && hash) {
      const target = qs(`#${hash}`);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function bindScreenLinks(root = document) {
    qsa('[data-screen-link], [data-nav-home]', root).forEach((link) => {
      link.addEventListener('click', (event) => {
        const screen = link.dataset.screenLink || 'home';
        const hash = link.dataset.hash;
        if (screen || link.hasAttribute('data-nav-home')) {
          event.preventDefault();
          history.pushState({}, '', hash ? `#${hash}` : `#${screen}`);
          openScreen(screen, hash);
        }
      });
    });
  }

  function renderNav() {
    const nav = qs('[data-nav]');
    data.nav.forEach((item) => {
      const link = el('a', '', item.label);
      link.href = item.hash ? `#${item.hash}` : `#${item.screen}`;
      link.dataset.screen = item.screen;
      if (item.hash) link.dataset.hash = item.hash;
      link.dataset.screenLink = item.screen;
      nav.appendChild(link);
    });
    qs('[data-menu-button]').addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      qs('[data-menu-button]').setAttribute('aria-expanded', String(open));
    });
  }

  function renderHero() {
    qs('[data-hero-eyebrow]').textContent = data.hero.eyebrow;
    qs('[data-hero-title]').textContent = data.hero.title;
    qs('[data-hero-copy]').textContent = data.hero.copy;
    const actions = qs('[data-hero-actions]');
    data.hero.actions.forEach((action) => {
      const link = el('a', `button button-${action.style}`, '');
      link.href = `#${action.screen}`;
      link.dataset.screenLink = action.screen;
      link.append(action.label, ' ', el('span', '', icon(action.icon)));
      actions.appendChild(link);
    });
  }

  function renderHomeBits() {
    qs('[data-stats]').replaceChildren(...data.stats.map((stat) => {
      const card = el('article', 'stat-card');
      card.append(el('strong', '', stat.value), el('span', '', stat.label));
      return card;
    }));

    const logos = [...data.partners, ...data.partners, ...data.partners, ...data.partners, ...data.partners, ...data.partners];
    const track = el('div', 'logo-track');
    logos.forEach((partner) => {
      const link = el('a', '');
      link.href = partner.href || '#partners';
      link.target = partner.href ? '_blank' : '';
      link.rel = partner.href ? 'noopener noreferrer' : '';
      const img = document.createElement('img');
      img.src = partner.src;
      img.alt = partner.name;
      link.appendChild(img);
      track.appendChild(link);
    });
    qs('[data-partner-marquee]').appendChild(track);

    qs('[data-speakers]').replaceChildren(...data.speakers.map((speaker) => {
      const card = el('article', 'speaker-card');
      if (speaker.image) {
        const img = document.createElement('img');
        img.src = speaker.image;
        img.alt = speaker.name;
        card.appendChild(img);
      } else {
        card.appendChild(el('div', 'avatar', speaker.initials));
      }
      const body = el('div', 'body');
      body.append(el('h3', '', speaker.name), el('p', '', speaker.role), el('span', '', speaker.status));
      card.appendChild(body);
      return card;
    }));

    qs('[data-newsletter-title]').textContent = data.newsletter.title;
    qs('[data-newsletter-copy]').textContent = data.newsletter.copy;
  }

  function renderAgenda() {
    qs('[data-agenda-title]').textContent = data.agenda.title;
    qs('[data-agenda-copy]').textContent = data.agenda.copy;
    const tabs = qs('[data-agenda-tabs]');
    const list = qs('[data-agenda-list]');
    const renderTrack = (trackIndex) => {
      qsa('button', tabs).forEach((button, index) => button.classList.toggle('is-active', index === trackIndex));
      list.replaceChildren(...data.agenda.tracks[trackIndex].items.map((item) => {
        const row = el('article', 'agenda-item');
        row.append(el('time', '', item.time), el('h3', '', item.title), el('p', '', item.detail));
        return row;
      }));
    };
    data.agenda.tracks.forEach((track, index) => {
      const button = el('button', index === 0 ? 'is-active' : '', track.name);
      button.type = 'button';
      button.addEventListener('click', () => renderTrack(index));
      tabs.appendChild(button);
    });
    renderTrack(0);
  }

  function stack(paragraphs) {
    return paragraphs.map((copy) => el('p', '', copy));
  }

  function renderAbout() {
    const a = data.about;
    const page = el('div', 'page page-white');
    page.innerHTML = '';
    const intro = el('div', 'section-heading align-left');
    intro.append(el('p', 'eyebrow', a.kicker), el('h2', '', a.title), el('p', 'lead', a.intro));
    const founder = el('section', 'lead-grid');
    const portrait = document.createElement('img');
    portrait.className = 'portrait';
    portrait.src = a.founder.portrait;
    portrait.alt = a.founder.name;
    const founderCopy = el('div', 'rich');
    founderCopy.append(
      el('p', 'eyebrow', 'Founder'),
      el('h2', '', a.founder.name),
      el('p', 'card-kicker', `${a.founder.role} · ${a.founder.location}`),
      el('p', '', a.founder.lead),
      ...stack(a.founder.paragraphs)
    );
    founder.append(portrait, founderCopy);

    const foundation = el('section', 'rich');
    foundation.append(el('h2', '', a.foundation.title), ...stack(a.foundation.paragraphs));

    const structure = el('section', '');
    structure.append(el('h2', '', a.structure.title));
    const layers = el('div', 'structure-list');
    a.structure.layers.forEach((layer, index) => {
      const item = el('article', 'layer-item');
      item.append(el('span', 'card-kicker', String(index + 1).padStart(2, '0')), el('h3', '', layer.title), el('p', '', layer.body));
      layers.appendChild(item);
    });
    structure.appendChild(layers);

    const leadership = el('section', '');
    leadership.append(el('h2', '', a.leadership.title));
    const groups = el('div', 'group-grid');
    a.leadership.groups.forEach((group) => {
      const card = el('article', 'info-card');
      card.append(el('h3', '', group.name));
      const list = el('ul', 'check-list');
      group.items.forEach((item) => list.appendChild(el('li', '', item)));
      card.appendChild(list);
      groups.appendChild(card);
    });
    leadership.appendChild(groups);

    page.append(intro, founder, foundation, structure, leadership);
    qs('[data-screen-panel="about"]').replaceChildren(page);
  }

  function renderGag() {
    const g = data.gag;
    const page = el('div', 'page page-white');
    const intro = el('div', 'section-heading align-left');
    intro.append(el('p', 'eyebrow', g.kicker), el('h2', '', g.title), el('p', 'lead', g.lead), ...stack(g.what));
    const principles = el('div', 'info-grid');
    g.principles.forEach((item) => {
      const card = el('article', 'info-card');
      card.append(el('h3', '', item.title), el('p', '', item.body));
      principles.appendChild(card);
    });
    const corridors = el('div', 'corridor-grid');
    g.corridors.forEach((item) => {
      const card = el('article', 'corridor-card');
      card.append(el('span', 'card-kicker', item.id), el('h3', '', item.title), el('p', '', item.body));
      corridors.appendChild(card);
    });
    const parf = el('section', 'rich');
    parf.append(el('p', 'eyebrow', g.parf.kicker), el('h2', '', g.parf.title), ...stack(g.parf.paragraphs));
    const cta = el('div', 'cta-row');
    const partner = el('a', 'button button-outlined', 'Become a partner ↗');
    partner.href = '#partner';
    partner.dataset.screenLink = 'partner';
    cta.appendChild(partner);
    page.append(intro, principles, el('h2', '', 'Seven corridors'), corridors, parf, cta);
    qs('[data-screen-panel="gag"]').replaceChildren(page);
    bindScreenLinks(page);
  }

  function renderEcosystem() {
    const e = data.ecosystem;
    const page = el('div', 'page page-white');
    const intro = el('div', 'section-heading align-left');
    intro.append(el('p', 'eyebrow', e.kicker), el('h2', '', e.title), el('p', 'lead', e.lead), el('h3', '', e.asta.title), el('p', '', e.asta.body));
    const layers = el('div', 'structure-list');
    e.layers.forEach((layer) => {
      const item = el('article', 'layer-item');
      item.append(el('h3', '', layer.title), el('p', '', layer.body));
      layers.appendChild(item);
    });
    const paths = el('div', 'path-grid');
    e.paths.forEach((path) => {
      const card = el('article', 'path-card');
      card.append(el('p', 'card-kicker', path.kicker), el('h3', '', path.name), el('p', '', path.description));
      const list = el('ul', 'check-list');
      path.points.forEach((point) => list.appendChild(el('li', '', point)));
      card.appendChild(list);
      paths.appendChild(card);
    });
    page.append(intro, layers, el('h2', '', 'Three ways in'), paths);
    qs('[data-screen-panel="ecosystem"]').replaceChildren(page);
  }

  function renderPartnersPage() {
    const p = data.partnersPage;
    const page = el('div', 'page page-white');
    const intro = el('div', 'section-heading align-left');
    intro.append(el('p', 'eyebrow', p.kicker), el('h2', '', p.title), el('p', 'lead', p.lead));
    const grid = el('div', 'info-grid');
    p.importance.forEach((item) => {
      const card = el('article', 'info-card');
      card.append(el('h3', '', item.title), el('p', '', item.body));
      grid.appendChild(card);
    });
    const marqueeWrap = el('div', 'logo-marquee');
    const track = el('div', 'logo-track');
    const logos = [...data.partners, ...data.partners, ...data.partners, ...data.partners, ...data.partners, ...data.partners];
    logos.forEach((partner) => {
      const img = document.createElement('img');
      img.src = partner.src;
      img.alt = partner.name;
      track.appendChild(img);
    });
    marqueeWrap.appendChild(track);
    const cta = el('div', 'center-actions');
    const button = el('a', 'button button-outlined', 'Become a partner ↗');
    button.href = '#partner';
    button.dataset.screenLink = 'partner';
    cta.appendChild(button);
    page.append(intro, grid, marqueeWrap, cta);
    qs('[data-screen-panel="partners"]').replaceChildren(page);
    bindScreenLinks(page);
  }

  function renderDocuments() {
    const page = el('div', 'page page-white');
    const intro = el('div', 'section-heading align-left');
    intro.append(el('p', 'eyebrow', 'Library'), el('h2', '', 'Read the briefing, then download.'), el('p', 'lead', 'Each file is an institutional document. The description is the point of the paper; the download is the full text.'));
    const grid = el('div', 'doc-grid');
    data.documents.forEach((doc) => {
      const card = el('article', 'doc-card');
      card.append(el('h3', '', doc.title), el('p', '', doc.description));
      const link = el('a', 'button button-dark', 'Download');
      link.href = encodeURI(doc.file);
      link.download = '';
      card.appendChild(link);
      grid.appendChild(card);
    });
    page.append(intro, grid);
    qs('[data-screen-panel="documents"]').replaceChildren(page);
  }

  function renderFormScreen(key) {
    const spec = data.forms[key];
    const page = el('div', 'page page-dark');
    const wrap = el('div', 'form-card');
    wrap.style.maxWidth = '720px';
    wrap.append(el('p', 'eyebrow', spec.kicker), el('h2', '', spec.title), el('p', '', spec.copy));
    const form = el('form', 'contact-form');
    form.noValidate = true;
    form.innerHTML = `
      <label>Full name<input name="name" type="text" autocomplete="name" required></label>
      <label>Email address<input name="email" type="email" autocomplete="email" required></label>
      <label class="wide">Interest<select name="interest" required></select></label>
      <label class="wide">Message<textarea name="message" rows="5" required></textarea></label>
      <button class="button button-light" type="submit">Send request</button>
      <p class="form-status" role="status"></p>
    `;
    const select = form.querySelector('[name="interest"]');
    data.contactInterests.forEach((interest) => select.appendChild(el('option', '', interest)));
    select.value = spec.interest;
    form.addEventListener('submit', (event) => handleSubmit(event, form));
    wrap.appendChild(form);
    page.appendChild(wrap);
    qs(`[data-screen-panel="${key}"]`).replaceChildren(page);
  }

  function handleSubmit(event, form) {
    event.preventDefault();
    const status = form.querySelector('.form-status');
    if (!form.reportValidity()) return;
    const payload = Object.fromEntries(new FormData(form).entries());
    payload.submittedAt = new Date().toISOString();
    const subject = encodeURIComponent(`Jowih launch: ${payload.interest}`);
    const body = encodeURIComponent(Object.entries(payload).map(([k, v]) => `${k}: ${v}`).join('\n'));
    status.innerHTML = `Your request is ready. <a href="mailto:${data.config.fallbackEmail}?subject=${subject}&body=${body}">Send it to the Jowih team by email</a>.`;
  }

  function renderNewsletter() {
    qs('[data-newsletter-form]').addEventListener('submit', (event) => {
      event.preventDefault();
      const form = event.currentTarget;
      if (!form.reportValidity()) return;
      const payload = Object.fromEntries(new FormData(form).entries());
      payload.interest = 'General update';
      const subject = encodeURIComponent('Jowih launch list');
      const body = encodeURIComponent(Object.entries(payload).map(([k, v]) => `${k}: ${v}`).join('\n'));
      qs('[data-newsletter-status]').innerHTML = `Ready. <a href="mailto:${data.config.fallbackEmail}?subject=${subject}&body=${body}">Send the subscription note</a>.`;
    });
  }

  function routeFromHash() {
    const raw = (location.hash || '#home').slice(1);
    if (raw === 'agenda') {
      openScreen('home', 'agenda');
      return;
    }
    const known = ['home', 'about', 'gag', 'ecosystem', 'partners', 'documents', 'ticket', 'partner', 'investor', 'donate'];
    openScreen(known.includes(raw) ? raw : 'home');
  }

  function boot() {
    renderNav();
    renderHero();
    renderHomeBits();
    renderAgenda();
    renderAbout();
    renderGag();
    renderEcosystem();
    renderPartnersPage();
    renderDocuments();
    ['ticket', 'partner', 'investor', 'donate'].forEach(renderFormScreen);
    renderNewsletter();
    bindScreenLinks();
    qs('[data-footer-copy]').textContent = 'Jowih Ecosystem Pre-Launch · Kisii, Kenya · 8:00 PM – 1:00 AM';
    qs('[data-footer-links]').replaceChildren(...data.footerLinks.map((item) => {
      const link = el('a', '', item.label);
      link.href = `#${item.screen}`;
      link.dataset.screenLink = item.screen;
      return link;
    }));
    bindScreenLinks(qs('.site-footer'));
    window.addEventListener('popstate', routeFromHash);
    routeFromHash();
  }

  boot();
})();
