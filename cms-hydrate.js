/* ============================================================
   MISHA BARBER — CMS hydration
   Reads content.json (edited via the /admin panel) and overrides
   marked elements. Static HTML stays as fallback (good for SEO);
   this only replaces values when present.
   ============================================================ */
(function () {
  'use strict';

  function resolve(obj, path) {
    return path.split('.').reduce(function (acc, key) {
      if (acc == null) return undefined;
      return acc[key];
    }, obj);
  }

  function digits(str) {
    return (str || '').replace(/[^0-9+]/g, '');
  }

  function applyText(data) {
    document.querySelectorAll('[data-cms]').forEach(function (el) {
      var val = resolve(data, el.getAttribute('data-cms'));
      if (val != null && String(val).trim() !== '') {
        el.textContent = val;
      }
    });
    document.querySelectorAll('[data-cms-href]').forEach(function (el) {
      var val = resolve(data, el.getAttribute('data-cms-href'));
      if (val) el.setAttribute('href', val);
    });
    document.querySelectorAll('[data-cms-src]').forEach(function (el) {
      var val = resolve(data, el.getAttribute('data-cms-src'));
      if (val) el.setAttribute('src', val);
    });
    // phone -> tel: links
    var phone = data.contact && data.contact.phone;
    if (phone) {
      document.querySelectorAll('[data-cms-tel]').forEach(function (el) {
        el.setAttribute('href', 'tel:' + digits(phone));
      });
    }
  }

  function applyGallery(data) {
    var grid = document.getElementById('masonry');
    var items = data.gallery;
    if (!grid || !Array.isArray(items) || items.length === 0) return; // keep placeholders
    var sizes = ['tile--tall', '', '', 'tile--wide', '', 'tile--tall', '', ''];
    grid.innerHTML = '';
    items.forEach(function (item, i) {
      if (!item || !item.image) return;
      var fig = document.createElement('figure');
      fig.className = 'tile ' + (sizes[i % sizes.length] || '');
      var img = document.createElement('img');
      img.src = item.image;
      img.alt = item.caption || 'Realizacja — Misha Barber Kraków';
      img.loading = 'lazy';
      img.className = 'tile__img';
      fig.appendChild(img);
      if (item.caption) {
        var span = document.createElement('span');
        span.textContent = item.caption;
        fig.appendChild(span);
      }
      grid.appendChild(fig);
    });
  }

  fetch('content.json', { cache: 'no-cache' })
    .then(function (r) { return r.ok ? r.json() : null; })
    .then(function (data) {
      if (!data) return;
      applyText(data);
      applyGallery(data);
    })
    .catch(function () { /* keep static fallback content */ });
})();
