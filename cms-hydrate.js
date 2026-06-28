/* ============================================================
   MISHA BARBER — i18n + CMS hydration
   - UI chrome strings: translated here (data-i18n / data-i18n-html)
   - Editable content: content.json, locale-keyed (pl/en/uk),
     edited via /admin (Sveltia CMS). data-cms / -href / -src / -tel.
   - Language switcher (#langSwitch) persists choice in localStorage.
   ============================================================ */
(function () {
  'use strict';

  var LOCALES = ['pl', 'en', 'uk'];
  var DEFAULT = 'pl';

  /* ---------- Fixed interface strings ---------- */
  var UI = {
    pl: {
      'nav.about': 'O mnie', 'nav.why': 'Dlaczego ja', 'nav.gallery': 'Realizacje',
      'nav.services': 'Usługi', 'nav.reviews': 'Opinie',
      'cta.book': 'Umów wizytę', 'cta.gallery': 'Zobacz realizacje',
      'hero.eyebrow': 'Premium Barbershop · Kraków', 'scroll': 'Przewiń',
      'about.eyebrow': 'O mnie',
      'about.li1': 'Precyzja w każdym cięciu', 'about.li2': 'Indywidualne podejście do klienta',
      'about.li3': 'Premium doświadczenie i atmosfera', 'about.li4': 'Nowoczesne fryzury i fade',
      'about.li5': 'Stylizacja oraz modelowanie brody', 'about.li6': 'Dbałość o najmniejszy detal',
      'about.cta': 'Poznaj usługi',
      'why.eyebrow': 'Dlaczego ja', 'why.title': 'Doświadczenie, które czuć od progu',
      'why.f1.t': 'Indywidualne podejście', 'why.f1.d': 'Każda wizyta zaczyna się od rozmowy. Dobieram styl do Twojego typu urody, charakteru i trybu życia.',
      'why.f2.t': 'Perfekcyjny Fade', 'why.f2.d': 'Płynne przejścia bez widocznych granic. Skin fade i low fade wykonane z chirurgiczną precyzją.',
      'why.f3.t': 'Nowoczesne fryzury', 'why.f3.d': 'Aktualne trendy i klasyka w nowej odsłonie. Fryzury, które działają również poza fotelem.',
      'why.f4.t': 'Stylizacja brody', 'why.f4.d': 'Modelowanie konturów, gorący ręcznik i pielęgnacja olejkami. Broda, która podkreśla rysy twarzy.',
      'why.f5.t': 'Profesjonalizm', 'why.f5.d': 'Sterylne narzędzia, punktualność i pełne skupienie. Czujesz, że jesteś w dobrych rękach.',
      'why.f6.t': 'Najwyższa jakość', 'why.f6.d': 'Premium kosmetyki i sprawdzone techniki. Efekt, który wygląda świetnie jeszcze długo po wizycie.',
      'gallery.eyebrow': 'Realizacje', 'gallery.title': 'Portfolio strzyżeń i brody',
      'gallery.lead': 'Wybrane prace prosto z fotela. Fade, klasyka, broda i pełne metamorfozy.',
      'gallery.note': 'Galeria pełnych zdjęć w przygotowaniu — zajrzyj na <a href="https://www.instagram.com/misha.barber.krakow" target="_blank" rel="noopener">Instagram</a>.',
      'services.eyebrow': 'Usługi', 'services.title': 'Cennik i zakres usług',
      'services.tag': 'Najczęściej wybierane',
      'services.note': 'Ceny orientacyjne. Finalna wycena ustalana podczas konsultacji przed wizytą.',
      'reviews.eyebrow': 'Opinie', 'reviews.title': 'Co mówią klienci',
      'booking.eyebrow': 'Rezerwacja', 'booking.title': 'Gotowy na nowy wygląd?',
      'booking.sub': 'Zarezerwuj swój termin i przekonaj się, czym jest strzyżenie w klasie premium.',
      'booking.callLabel': 'lub zadzwoń:',
      'footer.tagline': 'Premium barbershop w sercu Krakowa. Precyzja, styl i dbałość o detal.',
      'footer.contact': 'Kontakt', 'footer.hours': 'Godziny otwarcia', 'footer.social': 'Social',
      'footer.rights': 'Wszelkie prawa zastrzeżone.', 'footer.madeby': 'Projekt premium · Kraków'
    },
    en: {
      'nav.about': 'About', 'nav.why': 'Why me', 'nav.gallery': 'Portfolio',
      'nav.services': 'Services', 'nav.reviews': 'Reviews',
      'cta.book': 'Book a visit', 'cta.gallery': 'See portfolio',
      'hero.eyebrow': 'Premium Barbershop · Kraków', 'scroll': 'Scroll',
      'about.eyebrow': 'About',
      'about.li1': 'Precision in every cut', 'about.li2': 'An individual approach to each client',
      'about.li3': 'A premium experience and atmosphere', 'about.li4': 'Modern haircuts and fades',
      'about.li5': 'Beard styling and shaping', 'about.li6': 'Attention to the smallest detail',
      'about.cta': 'Explore services',
      'why.eyebrow': 'Why me', 'why.title': 'An experience you feel from the doorstep',
      'why.f1.t': 'Individual approach', 'why.f1.d': 'Every visit starts with a conversation. I match the style to your looks, character and lifestyle.',
      'why.f2.t': 'Perfect Fade', 'why.f2.d': 'Smooth transitions with no visible lines. Skin fade and low fade done with surgical precision.',
      'why.f3.t': 'Modern haircuts', 'why.f3.d': 'Current trends and classics reimagined. Haircuts that work well beyond the chair.',
      'why.f4.t': 'Beard styling', 'why.f4.d': 'Contour shaping, a hot towel and oil care. A beard that highlights your features.',
      'why.f5.t': 'Professionalism', 'why.f5.d': 'Sterile tools, punctuality and full focus. You feel you’re in good hands.',
      'why.f6.t': 'Top quality', 'why.f6.d': 'Premium cosmetics and proven techniques. A result that looks great long after the visit.',
      'gallery.eyebrow': 'Portfolio', 'gallery.title': 'Haircut & beard portfolio',
      'gallery.lead': 'Selected work straight from the chair. Fades, classics, beards and full makeovers.',
      'gallery.note': 'A full photo gallery is on the way — check out <a href="https://www.instagram.com/misha.barber.krakow" target="_blank" rel="noopener">Instagram</a>.',
      'services.eyebrow': 'Services', 'services.title': 'Pricing & services',
      'services.tag': 'Most popular',
      'services.note': 'Prices are indicative. The final quote is set during a consultation before the visit.',
      'reviews.eyebrow': 'Reviews', 'reviews.title': 'What clients say',
      'booking.eyebrow': 'Booking', 'booking.title': 'Ready for a new look?',
      'booking.sub': 'Book your slot and discover what a premium-class haircut feels like.',
      'booking.callLabel': 'or call:',
      'footer.tagline': 'A premium barbershop in the heart of Kraków. Precision, style and attention to detail.',
      'footer.contact': 'Contact', 'footer.hours': 'Opening hours', 'footer.social': 'Social',
      'footer.rights': 'All rights reserved.', 'footer.madeby': 'Premium design · Kraków'
    },
    uk: {
      'nav.about': 'Про мене', 'nav.why': 'Чому я', 'nav.gallery': 'Роботи',
      'nav.services': 'Послуги', 'nav.reviews': 'Відгуки',
      'cta.book': 'Записатися', 'cta.gallery': 'Дивитися роботи',
      'hero.eyebrow': 'Преміум барбершоп · Краків', 'scroll': 'Гортай',
      'about.eyebrow': 'Про мене',
      'about.li1': 'Точність у кожному зрізі', 'about.li2': 'Індивідуальний підхід до клієнта',
      'about.li3': 'Преміальний досвід та атмосфера', 'about.li4': 'Сучасні стрижки та фейди',
      'about.li5': 'Стилізація та моделювання бороди', 'about.li6': 'Увага до найменшої деталі',
      'about.cta': 'Переглянути послуги',
      'why.eyebrow': 'Чому я', 'why.title': 'Досвід, який відчуваєш від порога',
      'why.f1.t': 'Індивідуальний підхід', 'why.f1.d': 'Кожен візит починається з розмови. Я підбираю стиль під твою зовнішність, характер і спосіб життя.',
      'why.f2.t': 'Ідеальний фейд', 'why.f2.d': 'Плавні переходи без помітних меж. Skin fade і low fade, виконані з хірургічною точністю.',
      'why.f3.t': 'Сучасні стрижки', 'why.f3.d': 'Актуальні тренди та класика у новому прочитанні. Зачіски, що працюють і поза кріслом.',
      'why.f4.t': 'Стилізація бороди', 'why.f4.d': 'Моделювання контурів, гарячий рушник і догляд оліями. Борода, що підкреслює риси обличчя.',
      'why.f5.t': 'Професіоналізм', 'why.f5.d': 'Стерильні інструменти, пунктуальність і повна зосередженість. Ти відчуваєш, що в надійних руках.',
      'why.f6.t': 'Найвища якість', 'why.f6.d': 'Преміальна косметика та перевірені техніки. Результат, що чудово виглядає ще довго після візиту.',
      'gallery.eyebrow': 'Роботи', 'gallery.title': 'Портфоліо стрижок і бороди',
      'gallery.lead': 'Вибрані роботи прямо з крісла. Фейди, класика, борода та повні перетворення.',
      'gallery.note': 'Повна галерея фото готується — заглядай в <a href="https://www.instagram.com/misha.barber.krakow" target="_blank" rel="noopener">Instagram</a>.',
      'services.eyebrow': 'Послуги', 'services.title': 'Ціни та послуги',
      'services.tag': 'Найпопулярніше',
      'services.note': 'Ціни орієнтовні. Остаточна вартість визначається на консультації перед візитом.',
      'reviews.eyebrow': 'Відгуки', 'reviews.title': 'Що кажуть клієнти',
      'booking.eyebrow': 'Бронювання', 'booking.title': 'Готовий до нового образу?',
      'booking.sub': 'Забронюй свій час і дізнайся, що таке стрижка преміумкласу.',
      'booking.callLabel': 'або телефонуй:',
      'footer.tagline': 'Преміум барбершоп у серці Кракова. Точність, стиль і увага до деталей.',
      'footer.contact': 'Контакти', 'footer.hours': 'Години роботи', 'footer.social': 'Соцмережі',
      'footer.rights': 'Усі права захищені.', 'footer.madeby': 'Преміумдизайн · Краків'
    }
  };

  var contentData = null; // loaded content.json

  function getLang() {
    var saved;
    try { saved = localStorage.getItem('mb_lang'); } catch (e) {}
    return LOCALES.indexOf(saved) !== -1 ? saved : DEFAULT;
  }
  function setLang(lang) {
    try { localStorage.setItem('mb_lang', lang); } catch (e) {}
  }

  function resolve(obj, path) {
    return path.split('.').reduce(function (a, k) { return a == null ? undefined : a[k]; }, obj);
  }
  function digits(s) { return (s || '').replace(/[^0-9+]/g, ''); }

  /* ---------- Apply fixed UI strings ---------- */
  function applyUI(lang) {
    var dict = UI[lang] || UI[DEFAULT];
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = dict[el.getAttribute('data-i18n')];
      if (v != null) el.textContent = v;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var v = dict[el.getAttribute('data-i18n-html')];
      if (v != null) el.innerHTML = v;
    });
  }

  /* ---------- Apply editable content for a locale ---------- */
  function applyContent(lang) {
    if (!contentData) return;
    var d = contentData[lang] || contentData[DEFAULT];
    if (!d) return;
    document.querySelectorAll('[data-cms]').forEach(function (el) {
      var v = resolve(d, el.getAttribute('data-cms'));
      if (v != null && String(v).trim() !== '') el.textContent = v;
    });
    document.querySelectorAll('[data-cms-href]').forEach(function (el) {
      var v = resolve(d, el.getAttribute('data-cms-href'));
      if (v) el.setAttribute('href', v);
    });
    document.querySelectorAll('[data-cms-src]').forEach(function (el) {
      var v = resolve(d, el.getAttribute('data-cms-src'));
      if (v) el.setAttribute('src', v);
    });
    var phone = d.contact && d.contact.phone;
    if (phone) {
      document.querySelectorAll('[data-cms-tel]').forEach(function (el) {
        el.setAttribute('href', 'tel:' + digits(phone));
      });
    }
    applyGallery(d);
  }

  function applyGallery(d) {
    var grid = document.getElementById('masonry');
    var items = d.gallery;
    if (!grid || !Array.isArray(items) || items.length === 0) return; // keep placeholders
    var sizes = ['tile--tall', '', '', 'tile--wide', '', 'tile--tall', '', ''];
    grid.innerHTML = '';
    items.forEach(function (item, i) {
      if (!item || !item.image) return;
      var fig = document.createElement('figure');
      fig.className = 'tile ' + (sizes[i % sizes.length] || '');
      var img = document.createElement('img');
      img.src = item.image; img.alt = item.caption || 'Misha Barber Kraków';
      img.loading = 'lazy'; img.className = 'tile__img';
      fig.appendChild(img);
      if (item.caption) { var s = document.createElement('span'); s.textContent = item.caption; fig.appendChild(s); }
      grid.appendChild(fig);
    });
  }

  /* ---------- Switch everything to a language ---------- */
  function switchTo(lang, persist) {
    if (LOCALES.indexOf(lang) === -1) lang = DEFAULT;
    if (persist) setLang(lang);
    document.documentElement.lang = lang;
    applyUI(lang);
    applyContent(lang);
    document.querySelectorAll('#langSwitch button').forEach(function (b) {
      b.classList.toggle('is-active', b.getAttribute('data-lang') === lang);
    });
  }

  /* ---------- Init ---------- */
  var initial = getLang();
  applyUI(initial); // chrome strings work immediately, no fetch needed
  switchTo(initial, false);

  fetch('content.json', { cache: 'no-cache' })
    .then(function (r) { return r.ok ? r.json() : null; })
    .then(function (data) { if (data) { contentData = data; applyContent(getLang()); } })
    .catch(function () {});

  // wire switcher
  var sw = document.getElementById('langSwitch');
  if (sw) {
    sw.addEventListener('click', function (e) {
      var btn = e.target.closest('button[data-lang]');
      if (btn) switchTo(btn.getAttribute('data-lang'), true);
    });
  }
})();
