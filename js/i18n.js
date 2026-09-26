/* Bascule FR / EN. Le français reste dans le HTML (référencement, lecture sans JS) ;
   l'anglais est appliqué par correspondance exacte du texte français. Les textes
   d'origine sont mémorisés pour pouvoir revenir en français sans recharger. */
(function () {
  var EN = {
    "Accueil": "Home",
    "Propriétaire": "Owner",
    "Voyageur": "Guest",
    "Accédez à vos revenus en temps réel depuis votre espace propriétaire, sans surprise en fin de mois.": "Track your revenue in real time from your owner portal, with no surprises at the end of the month.",
    "Années d'expérience": "Years of experience",
    "Appartement Melvane, 14TEMP": "Melvane apartment, 14TEMP",
    "Appartement Melvane, 264REY": "Melvane apartment, 264REY",
    "Appartements": "Apartments",
    "Appartements gérés": "Apartments managed",
    "Architecture d'intérieur": "Interior design",
    "Architecture d'intérieur — appartement géré par Melvane": "Interior design — apartment managed by Melvane",
    "Arrivée, quartier, équipements — écrivez-nous directement, nous répondons rapidement.": "Arrival, neighborhood, amenities — write to us directly, we reply quickly.",
    "Au cœur du Marais, entièrement rénové par Melvane — l'un des appartements les plus demandés de notre portefeuille.": "In the heart of the Marais, fully renovated by Melvane — one of the most requested apartments in our portfolio.",
    "Automatisations": "Automation",
    "Automatisations — appartement géré par Melvane": "Automation — apartment managed by Melvane",
    "Ce qui nous distingue": "What sets us apart",
    "Conciergerie parisienne": "Parisian concierge service",
    "Confiez la gestion de votre appartement parisien à Melvane. Tarification dynamique, prise en charge totale, transparence des revenus.": "Entrust the management of your Paris apartment to Melvane. Dynamic pricing, full-service care, transparent revenue.",
    "Contactez Melvane pour toute question sur nos appartements à Paris ou pour confier la gestion de votre bien.": "Get in touch with Melvane with any question about our Paris apartments, or to entrust us with the management of your property.",
    "Contrôles réguliers de l'électroménager, de la plomberie et des équipements techniques, pour anticiper l'usure avant qu'elle ne devienne un problème. Chaque appartement fait l'objet d'un suivi préventif planifié, pour limiter les pannes et prolonger la durée de vie de vos équipements.": "Regular checks of appliances, plumbing and technical equipment, to anticipate wear before it becomes a problem. Every apartment follows a planned preventive maintenance schedule, to limit breakdowns and extend the life of your equipment.",
    "Coordonnées": "Contact details",
    "Cuisine ouverte et salon baigné de lumière, à deux pas des ruelles pavées du Marais. Un intérieur contemporain, pensé pour un séjour confortable au cœur du Paris historique.": "An open-plan kitchen and a light-filled living room, steps from the cobbled streets of the Marais. A contemporary interior designed for a comfortable stay in the heart of historic Paris.",
    "De la poignée qui coince à la fuite d'eau, notre équipe technique intervient rapidement pour que chaque incident soit résolu avant même que vous en ayez connaissance. Un interlocuteur dédié gère les urgences 24h/24, coordonne les artisans de confiance et vous tient informé à chaque étape — sans que vous ayez à passer un seul appel.": "From a sticking door handle to a water leak, our technical team steps in quickly so that every incident is resolved before you even know about it. A dedicated contact handles emergencies 24/7, coordinates trusted craftspeople and keeps you informed at every step — without you having to make a single call.",
    "Des voyageurs satisfaits, mesurés": "Satisfied guests, measured",
    "Discutons de votre bien": "Let's talk about your property",
    "Disponibilités, tarifs, quartier — écrivez-nous directement, nous répondons rapidement.": "Availability, rates, neighborhood — write to us directly, we reply quickly.",
    "Disponible 24h/24, dans les quartiers les plus recherchés de la capitale.": "Available 24/7, in the capital's most sought-after neighborhoods.",
    "Découvrez les appartements gérés par Melvane à Paris : Louvre, Saint-Honoré, Marais, Saint-Germain-des-Prés.": "Discover the apartments managed by Melvane in Paris: Louvre, Saint-Honoré, Marais, Saint-Germain-des-Prés.",
    "Détail décoration Melvane, 56VER": "Decor detail, Melvane, 56VER",
    "Entièrement modernisé et décoré par Melvane. Situé dans l'un des quartiers touristiques les plus recherchés, il offre près de 90 m² d'espace élégant et haut de gamme.": "Fully modernized and decorated by Melvane. Located in one of the most sought-after tourist neighborhoods, it offers nearly 90 m² of elegant, high-end space.",
    "Entièrement rénové et décoré par Melvane, 90 m² dans l'un des quartiers les plus recherchés de la capitale.": "Fully renovated and decorated by Melvane, 90 m² in one of the capital's most sought-after neighborhoods.",
    "Envoyer": "Send",
    "Fermer": "Close",
    "Fiabilité": "Reliability",
    "Fondée en 2020, Melvane accompagne aujourd'hui des milliers de voyageurs à Paris. Notre équipe est disponible 24h/24 pour l'arrivée, les recommandations, ou toute question pendant le séjour. Chaque appartement est situé dans un quartier recherché de la capitale, à proximité des lieux qui font Paris.": "Founded in 2020, Melvane now looks after thousands of travelers in Paris. Our team is available 24/7 for arrival, recommendations, or any question during the stay. Every apartment is located in a sought-after neighborhood, close to the places that make Paris what it is.",
    "Grâce à nos outils, chaque voyageur est guidé automatiquement de la réservation jusqu'au check-out : confirmation instantanée, instructions d'arrivée envoyées au bon moment, accès autonome à l'appartement, rappels avant le départ. Nous gérons tout, sans qu'aucune étape ne repose sur un échange manuel — pour une expérience fluide à chaque séjour, et zéro friction pour vous.": "Thanks to our tools, every guest is guided automatically from booking to check-out: instant confirmation, arrival instructions sent at the right time, self-service access to the apartment, reminders before departure. We take care of everything, with no step relying on a manual exchange — for a smooth experience at every stay, and zero friction for you.",
    "Guides quartier": "Neighborhood guides",
    "Intérieur d'appartement Melvane, 206RIV": "Melvane apartment interior, 206RIV",
    "Intérieur design par Melvane, lignes claires et couleurs neutres, à deux pas du Louvre. Climatisation intégrale, prises adaptées, cuisine entièrement équipée — pensé pour les familles en visite.": "Interior designed by Melvane, clean lines and neutral colors, steps from the Louvre. Full air conditioning, suitable outlets, fully equipped kitchen — designed for visiting families.",
    "Je réserve un séjour": "Book a stay",
    "Je suis propriétaire": "I'm an owner",
    "L'expérience invité": "The guest experience",
    "La qualité de service Melvane se traduit en avis réels laissés par les voyageurs — pas juste en promesse marketing.": "Melvane's quality of service shows in genuine reviews left by guests — not just in marketing promises.",
    "La qualité de service se traduit en avis réels, pas juste en promesse marketing.": "Our quality of service shows in genuine reviews, not just in marketing promises.",
    "Le formulaire ci-contre est le seul moyen de nous contacter directement.": "The contact form is the only way to reach us directly.",
    "Linge": "Linen",
    "Linge de maison et literie de qualité fournis pour tout le séjour.": "Quality household linen and bedding provided for the whole stay.",
    "Linge de maison et literie de qualité hôtelière, lavés et renouvelés en interne — un détail de confort qui pèse lourd dans les avis voyageurs. Nous gérons l'intégralité du cycle : collecte, lavage, repassage et remise en place, pour que chaque lit soit fait à la perfection avant chaque arrivée.": "Hotel-quality household linen and bedding, washed and renewed in-house — a comfort detail that weighs heavily in guest reviews. We handle the entire cycle: collection, washing, ironing and putting back in place, so that every bed is made to perfection before each arrival.",
    "Linge — appartement géré par Melvane": "Linen — apartment managed by Melvane",
    "Lumineux et calme, avec vue sur la verdure depuis son balcon. Dans le quartier de Bercy, entre parc, cinémathèque et bords de Seine.": "Bright and quiet, with a view of greenery from its balcony. In the Bercy district, between the park, the cinémathèque and the banks of the Seine.",
    "Maintenance — appartement géré par Melvane": "Maintenance — apartment managed by Melvane",
    "Melvane gère 70 appartements à Paris avec l'exigence d'un propriétaire. Support 24/7, service de conciergerie sur demande.": "Melvane manages 70 apartments in Paris with an owner's level of care. 24/7 support, concierge service on request.",
    "Melvane — Conciergerie parisienne": "Melvane — Parisian concierge service",
    "Ménage": "Housekeeping",
    "Ménage complémentaire offert à partir de sept nuits, assuré par notre équipe de confiance.": "Complimentary extra housekeeping from seven nights, provided by our trusted team.",
    "Ménage — appartement géré par Melvane": "Housekeeping — apartment managed by Melvane",
    "Nom": "Name",
    "Nos appartements": "Our apartments",
    "Nos appartements — Melvane": "Our apartments — Melvane",
    "Nos recommandations culturelles, restaurants et adresses de quartier, préparées par notre équipe.": "Our cultural recommendations, restaurants and local addresses, prepared by our team.",
    "Nos tarifs évoluent en continu selon la saison, la demande et les grands événements parisiens (Fashion Week, salons, jeux olympiques...), pour maximiser vos revenus sans que vous ayez à y penser.": "Our rates adjust continuously according to the season, demand and major Paris events (Fashion Week, trade shows, the Olympic Games...), to maximize your revenue without you having to think about it.",
    "Notre équipe déco repense l'agencement et le style de votre bien pour en maximiser à la fois l'attrait locatif et la valeur perçue. Choix des matériaux, du mobilier et des couleurs : chaque projet est pensé pour séduire au premier coup d'œil, sur les photos comme en vrai.": "Our design team rethinks the layout and style of your property to maximize both its rental appeal and its perceived value. Choice of materials, furniture and colors: every project is designed to win people over at first glance, in photos and in person.",
    "Nous nous occupons de tout": "We take care of everything",
    "Pendant votre séjour": "During your stay",
    "Pourquoi Melvane": "Why Melvane",
    "Propreté": "Cleanliness",
    "Réparations": "Repairs",
    "Réparations — appartement géré par Melvane": "Repairs — apartment managed by Melvane",
    "Réparations, ménage, linge, entretien courant, et même l'architecture d'intérieur de votre bien — vous n'avez rien à gérer, à aucun moment.": "Repairs, housekeeping, linen, routine upkeep, even the interior design of your property — you have nothing to manage, ever.",
    "Réparations, ménage, linge, maintenance courante, jusqu'à l'architecture d'intérieur de votre appartement : nous nous occupons de tout. Vous ne gérez rien, à aucun moment — c'est la promesse de Melvane.": "Repairs, housekeeping, linen, routine maintenance, all the way to your apartment's interior design: we take care of everything. You manage nothing, at any moment — that's Melvane's promise.",
    "Réservations": "Bookings",
    "Réservez votre séjour à Paris": "Book your stay in Paris",
    "Réservez votre séjour à Paris avec Melvane. Support 24/7, quartiers centraux, appartements haut de gamme.": "Book your stay in Paris with Melvane. 24/7 support, central neighborhoods, high-end apartments.",
    "Réservez votre séjour — Melvane": "Book your stay — Melvane",
    "Situé au cœur du Marais, l'un des quartiers les plus prisés de Paris. Entièrement rénové et décoré par Melvane, c'est l'un des appartements les plus demandés du portefeuille.": "Located in the heart of the Marais, one of the most sought-after neighborhoods in Paris. Fully renovated and decorated by Melvane, it is one of the most requested apartments in the portfolio.",
    "Standard téléphonique 24h/24": "24/7 phone line",
    "Standard téléphonique 24h/24 — Melvane": "24/7 phone line — Melvane",
    "Standards hôteliers appliqués à chaque appartement, à chaque rotation.": "Hotel standards applied to every apartment, at every turnover.",
    "Support propriétaire": "Owner support",
    "Taux d'occupation moyen": "Average occupancy rate",
    "Tous nos biens partagent le même niveau d'exigence — chacun avec son propre caractère.": "All our properties share the same level of quality — each with its own character.",
    "Transparence": "Transparency",
    "Un aperçu du niveau d'exigence que nous appliquons à chaque bien confié à Melvane.": "A glimpse of the level of quality we apply to every property entrusted to Melvane.",
    "Un appartement vous intéresse ?": "Interested in an apartment?",
    "Un intérieur chaleureux à poutres apparentes, au design soigné. Situé au cœur du Marais, entre boutiques de créateurs et adresses branchées.": "A warm interior with exposed beams and refined design. Located in the heart of the Marais, between designer boutiques and trendy addresses.",
    "Un intérieur clair et minéral signé Melvane, à deux pas du Louvre — pensé pour les familles en visite, cuisine entièrement équipée.": "A bright, mineral interior signed by Melvane, steps from the Louvre — designed for visiting families, with a fully equipped kitchen.",
    "Un ménage complet à chaque rotation, réalisé selon des standards hôteliers, pour que votre appartement soit impeccable à chaque arrivée. Notre équipe suit une check-list stricte, appartement par appartement, pour garantir la même qualité de prestation, saison après saison, quel que soit le volume de réservations.": "A full clean at every turnover, carried out to hotel standards, so that your apartment is spotless at every arrival. Our team follows a strict checklist, apartment by apartment, to guarantee the same quality of service season after season, whatever the volume of bookings.",
    "Un numéro unique, disponible jour et nuit, pour répondre à toute question ou imprévu pendant le séjour de vos voyageurs. Notre équipe décroche à toute heure — pas de répondeur, pas d'attente — pour que chaque invité se sente pris en charge du premier message jusqu'au départ.": "A single number, available day and night, to answer any question or unexpected event during your guests' stay. Our team picks up at any hour — no voicemail, no waiting — so that every guest feels looked after from the first message to departure.",
    "Un pied-à-terre élégant au cœur de Saint-Germain-des-Prés. Décoration soignée, prestations haut de gamme, à proximité immédiate des cafés et galeries du quartier.": "An elegant pied-à-terre in the heart of Saint-Germain-des-Prés. Refined decor, high-end amenities, right next to the neighborhood's cafés and galleries.",
    "Un pied-à-terre élégant à Saint-Germain, décoration soignée et prestations pensées pour un séjour sans contrainte.": "An elegant pied-à-terre in Saint-Germain, with refined decor and amenities designed for a hassle-free stay.",
    "Un séjour à organiser, un bien à nous confier, ou simplement une question — écrivez-nous directement, nous répondons rapidement.": "A stay to plan, a property to entrust to us, or simply a question — write to us directly, we reply quickly.",
    "Un toit-terrasse privatif avec vue imprenable sur les toits de Paris, jusqu'au Panthéon. Une adresse rare, au cœur du Marais.": "A private rooftop terrace with breathtaking views over the Paris rooftops, all the way to the Panthéon. A rare address in the heart of the Marais.",
    "Une conciergerie parisienne qui gère 70 appartements avec la même exigence que nos propriétaires y mettraient eux-mêmes. Support disponible jour et nuit, service de conciergerie sur demande.": "A Parisian concierge service that manages 70 apartments with the same care our owners would put in themselves. Support available day and night, concierge service on request.",
    "Une estimation, une question sur nos prestations, un bien à nous confier — écrivez-nous directement, nous répondons rapidement.": "A valuation, a question about our services, a property to entrust to us — write to us directly, we reply quickly.",
    "Une expérience cohérente d'un séjour à l'autre, sur laquelle un invité peut compter.": "A consistent experience from one stay to the next, that a guest can count on.",
    "Une qualité de service mesurée": "Measured quality of service",
    "Une question ? Écrivez-nous.": "Any questions? Write to us.",
    "Une question sur votre séjour ?": "A question about your stay?",
    "Une question, un bien à nous confier, un séjour à organiser — écrivez-nous.": "A question, a property to entrust to us, a stay to plan — write to us.",
    "Une tarification qui s'ajuste en temps réel": "Pricing that adjusts in real time",
    "Une équipe disponible en continu, pas un centre d'appel.": "A team available around the clock, not a call center.",
    "Voir tous nos appartements →": "See all our apartments →",
    "Vos tarifs s'ajustent en temps réel selon la saison, la demande locale et les grands événements parisiens — Fashion Week, salons, grands rendez-vous sportifs. Résultat : vous captez la valeur maximale de votre bien, chaque nuit, sans jamais y penser vous-même.": "Your rates adjust in real time according to the season, local demand and major Paris events — Fashion Week, trade shows, big sporting occasions. The result: you capture the full value of your property, every night, without ever having to think about it yourself.",
    "Votre appartement, entre de bonnes mains": "Your apartment, in good hands",
    "Votre appartement, entre de bonnes mains — Melvane": "Your apartment, in good hands — Melvane",
    "4,75": "4.75",
    "9,3": "9.3"
  };

  var KEY = 'melvane-lang';
  var ATTRS = ['alt', 'placeholder', 'aria-label', 'title'];
  var textOrig = new WeakMap();
  var norm = function (s) { return s.replace(/\s+/g, ' ').trim(); };

  var skip = function (el) {
    if (!el) return true;
    var t = el.nodeName;
    return t === 'SCRIPT' || t === 'STYLE' || t === 'NOSCRIPT' ||
      !!el.closest('#search-widget_IO312PWQ, .lang-switch');
  };

  function translateTextNodes(lang) {
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    var node;
    while ((node = walker.nextNode())) {
      if (skip(node.parentElement)) continue;
      if (!textOrig.has(node)) textOrig.set(node, node.nodeValue);
      var orig = textOrig.get(node);
      var key = norm(orig);
      if (!key) continue;
      if (lang === 'en' && EN[key]) {
        var lead = orig.match(/^\s*/)[0], trail = orig.match(/\s*$/)[0];
        node.nodeValue = lead + EN[key] + trail;
      } else if (lang === 'fr' && node.nodeValue !== orig) {
        node.nodeValue = orig;
      }
    }
  }

  function translateAttrs(lang) {
    var els = document.querySelectorAll('[alt],[placeholder],[aria-label],[title]');
    els.forEach(function (el) {
      if (skip(el)) return;
      ATTRS.forEach(function (a) {
        if (!el.hasAttribute(a)) return;
        var store = 'i18nOrig' + a.replace(/(^|-)(\w)/g, function (m, p, c) { return c.toUpperCase(); });
        if (el.dataset[store] === undefined) el.dataset[store] = el.getAttribute(a);
        var orig = el.dataset[store], key = norm(orig);
        el.setAttribute(a, (lang === 'en' && EN[key]) ? EN[key] : orig);
      });
    });
  }

  function translateHead(lang) {
    var meta = document.querySelector('meta[name="description"]');
    if (meta) {
      if (meta.dataset.orig === undefined) meta.dataset.orig = meta.content;
      var mk = norm(meta.dataset.orig);
      meta.content = (lang === 'en' && EN[mk]) ? EN[mk] : meta.dataset.orig;
    }
    if (document.documentElement.dataset.origTitle === undefined) {
      document.documentElement.dataset.origTitle = document.title;
    }
    var tk = norm(document.documentElement.dataset.origTitle);
    document.title = (lang === 'en' && EN[tk]) ? EN[tk] : document.documentElement.dataset.origTitle;
  }

  function apply(lang) {
    document.documentElement.lang = lang;
    translateTextNodes(lang);
    translateAttrs(lang);
    translateHead(lang);
    document.querySelectorAll('.lang-switch button').forEach(function (b) {
      var on = b.dataset.lang === lang;
      b.classList.toggle('active', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
    window.dispatchEvent(new CustomEvent('melvane:lang', { detail: { lang: lang } }));
  }

  function get() {
    try { return localStorage.getItem(KEY) === 'en' ? 'en' : 'fr'; } catch (e) { return 'fr'; }
  }
  function set(lang) {
    try { localStorage.setItem(KEY, lang); } catch (e) {}
    apply(lang);
  }

  document.querySelectorAll('.lang-switch button').forEach(function (b) {
    b.addEventListener('click', function () { set(b.dataset.lang); });
  });

  // Script chargé en fin de <body> : le DOM est déjà là, on applique tout de suite
  // pour éviter un flash de français chez un visiteur qui a choisi l'anglais.
  apply(get());
})();
