document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.mobile-menu');
  const close = document.querySelector('.mobile-menu-close');
  const backdrop = document.querySelector('.mobile-menu-backdrop');

  const openMenu = () => {
    menu.classList.add('open');
    burger.classList.add('open');
    if (backdrop) backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  };
  const closeMenu = () => {
    menu.classList.remove('open');
    burger.classList.remove('open');
    if (backdrop) backdrop.classList.remove('open');
    document.body.style.overflow = '';
  };

  if (burger && menu) {
    burger.addEventListener('click', () => {
      menu.classList.contains('open') ? closeMenu() : openMenu();
    });
  }
  if (close && menu) {
    close.addEventListener('click', closeMenu);
  }
  if (backdrop) {
    backdrop.addEventListener('click', closeMenu);
  }

  // Marque le lien courant dans les boutons Owner/Guest et le menu plein écran
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('a[href]').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path) a.setAttribute('aria-current', 'page');
  });

  // Révélation douce au scroll (tendance 2026 : mouvement discret, pas de gadget).
  // Seuil bas + marge généreuse pour ne jamais rater un élément qui passe
  // vite dans le viewport ; filet de sécurité en plus (setTimeout) pour
  // garantir qu'aucun contenu ne reste invisible en cas de raté.
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.01, rootMargin: '0px 0px 100px 0px' });
    revealEls.forEach(el => io.observe(el));
    setTimeout(() => {
      revealEls.forEach(el => el.classList.add('is-visible'));
    }, 4000);
  } else {
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  // Compteurs animés (chiffres clés) : comptent de 0 jusqu'à la valeur
  // réelle au moment où ils entrent dans le viewport. Le HTML contient déjà
  // la valeur finale (accessibilité / JS désactivé) ; on ne la remet à 0
  // qu'au moment de déclencher l'animation, pas avant.
  const statEls = document.querySelectorAll('.stat-value[data-count]');
  if ('IntersectionObserver' in window && statEls.length) {
    const countIO = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.dataset.count, 10);
        const suffix = el.dataset.suffix || '';
        const duration = 1100;
        const start = performance.now();
        const step = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.round(target * eased) + suffix;
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        countIO.unobserve(el);
      });
    }, { threshold: 0.4 });
    statEls.forEach(el => countIO.observe(el));
  }

  // Header : légère opacité/blur au scroll
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Widget Guesty : traduction des libellés en dur (le widget est fourni en
  // anglais sans option de locale). Son script tiers l'injecte de façon
  // asynchrone bien après DOMContentLoaded (parfois plusieurs secondes), et
  // réécrit son propre DOM ensuite — on observe donc le conteneur présent
  // dès le HTML initial (jamais retiré) plutôt que le widget lui-même, qui
  // n'existe pas encore au moment où ce script s'exécute.
  const guestyMount = document.getElementById('search-widget_IO312PWQ');
  if (guestyMount) {
    const translateGuesty = () => {
      // Guesty pose ses classes directement sur #search-widget_IO312PWQ
      // (le "root" n'est pas un enfant séparé) : on cherche donc les champs
      // depuis guestyMount lui-même, pas depuis un querySelector du root.
      const root = guestyMount;
      const L = document.documentElement.lang === 'en'
        ? { checkIn: 'Check in', checkOut: 'Check out', guests: 'Guests', search: 'Search' }
        : { checkIn: 'Arrivée', checkOut: 'Départ', guests: 'Voyageurs', search: 'Rechercher' };
      const checkIn = root.querySelector('.check-in');
      if (checkIn && checkIn.placeholder !== L.checkIn) checkIn.placeholder = L.checkIn;
      const checkOut = root.querySelector('.check-out');
      if (checkOut && checkOut.placeholder !== L.checkOut) checkOut.placeholder = L.checkOut;
      const guestsLabel = root.querySelector('.selectr-label');
      if (guestsLabel && /^(guests?|voyageurs?)$/i.test(guestsLabel.textContent.trim()) && guestsLabel.textContent !== L.guests) {
        guestsLabel.textContent = L.guests;
      }
      const submitBtn = root.querySelector('.guesty-search-submit-btn');
      if (submitBtn && submitBtn.textContent.trim() !== L.search) submitBtn.textContent = L.search;
    };
    translateGuesty();
    new MutationObserver(translateGuesty).observe(guestyMount, { childList: true, subtree: true, characterData: true });
    window.addEventListener('melvane:lang', translateGuesty);
  }
});
