document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.mobile-menu');
  const close = document.querySelector('.mobile-menu-close');

  const openMenu = () => {
    menu.classList.add('open');
    burger.classList.add('open');
    document.body.style.overflow = 'hidden';
  };
  const closeMenu = () => {
    menu.classList.remove('open');
    burger.classList.remove('open');
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
      const checkIn = root.querySelector('.check-in');
      if (checkIn && checkIn.placeholder !== 'Arrivée') checkIn.placeholder = 'Arrivée';
      const checkOut = root.querySelector('.check-out');
      if (checkOut && checkOut.placeholder !== 'Départ') checkOut.placeholder = 'Départ';
      const guestsLabel = root.querySelector('.selectr-label');
      if (guestsLabel && /guests?/i.test(guestsLabel.textContent)) guestsLabel.textContent = 'Voyageurs';
      const submitBtn = root.querySelector('.guesty-search-submit-btn');
      if (submitBtn && submitBtn.textContent.trim() !== 'Rechercher') submitBtn.textContent = 'Rechercher';
    };
    translateGuesty();
    new MutationObserver(translateGuesty).observe(guestyMount, { childList: true, subtree: true, characterData: true });
  }
});
