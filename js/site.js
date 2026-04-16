(function () {
  'use strict';

  var btn = document.querySelector('.nav-toggle');
  var nav = document.getElementById('main-nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = document.body.classList.toggle('nav-open');
      btn.setAttribute('aria-expanded', open);
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a') && !e.target.closest('.nav-dropdown-panel')) {
        document.body.classList.remove('nav-open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  document.querySelectorAll('.nav-dropdown').forEach(function (wrap) {
    var toggle = wrap.querySelector('.nav-dropdown-toggle');
    if (!toggle) return;
    toggle.addEventListener('click', function (e) {
      e.preventDefault();
      var open = !wrap.classList.contains('is-open');
      document.querySelectorAll('.nav-dropdown.is-open').forEach(function (w) {
        if (w !== wrap) {
          w.classList.remove('is-open');
          var t = w.querySelector('.nav-dropdown-toggle');
          if (t) t.setAttribute('aria-expanded', 'false');
        }
      });
      wrap.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', open);
    });
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.nav-dropdown')) {
      document.querySelectorAll('.nav-dropdown.is-open').forEach(function (w) {
        w.classList.remove('is-open');
        var t = w.querySelector('.nav-dropdown-toggle');
        if (t) t.setAttribute('aria-expanded', 'false');
      });
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.nav-dropdown.is-open').forEach(function (w) {
        w.classList.remove('is-open');
        var t = w.querySelector('.nav-dropdown-toggle');
        if (t) t.setAttribute('aria-expanded', 'false');
      });
      var search = document.getElementById('site-search');
      if (search && !search.hidden) {
        search.hidden = true;
        var st = document.querySelector('.header-search-toggle');
        if (st) st.setAttribute('aria-expanded', 'false');
      }
    }
  });

  var searchToggle = document.querySelector('.header-search-toggle');
  var searchPanel = document.getElementById('site-search');
  if (searchToggle && searchPanel) {
    searchToggle.addEventListener('click', function () {
      var open = searchPanel.hidden;
      searchPanel.hidden = !open;
      searchToggle.setAttribute('aria-expanded', open);
      if (open) {
        var inp = searchPanel.querySelector('input');
        if (inp) inp.focus();
      }
    });
  }

  document.querySelectorAll('form[data-static-form]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = form.querySelector('[data-form-message]');
      if (msg) {
        msg.hidden = false;
        msg.textContent =
          form.id === 'book-form'
            ? 'Thank you. Your appointment preferences are noted on this page only. Please call 04-388 7491 so we can confirm a time.'
            : 'Thank you. We have your message details here for demo purposes only. Please call 04-388 7491 to follow up, or connect this form to your email or CRM when ready.';
      }
      form.reset();
    });
  });
})();
