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
    }
  });

  document.querySelectorAll('form[data-static-form]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (form.id === 'referral-form') {
        var finput = document.getElementById('referral-files');
        if (finput && finput.files.length > 5) {
          alert('Please choose at most 5 files.');
          return;
        }
        if (finput) {
          var maxBytes = 15 * 1024 * 1024;
          for (var i = 0; i < finput.files.length; i++) {
            if (finput.files[i].size > maxBytes) {
              alert('Each file must be 15 MB or smaller.');
              return;
            }
          }
        }
      }
      var msg = form.querySelector('[data-form-message]');
      if (msg) {
        msg.hidden = false;
        if (form.id === 'book-form') {
          msg.textContent =
            'Thank you. Your appointment preferences are noted on this page only. Please call 04-388 7491 so we can confirm a time.';
        } else if (form.id === 'referral-form') {
          msg.textContent =
            'Thank you. Your referral details are shown here for demo purposes only. Please call 04-388 7491 or use your usual channel until this form is connected to email or your practice software.';
        } else {
          msg.textContent =
            'Thank you. We have your message details here for demo purposes only. Please call 04-388 7491 to follow up, or connect this form to your email or CRM when ready.';
        }
      }
      form.reset();
      var flist = document.getElementById('referral-file-list');
      if (flist) flist.textContent = '';
      var yearSel = document.getElementById('ref-dob-year');
      if (yearSel) yearSel.selectedIndex = 0;
    });
  });

  var referralFiles = document.getElementById('referral-files');
  var referralFileList = document.getElementById('referral-file-list');
  var referralDropzone = document.querySelector('.file-dropzone');
  if (referralFiles && referralFileList) {
    function updateReferralFileList() {
      var names = [];
      for (var j = 0; j < referralFiles.files.length; j++) {
        names.push(referralFiles.files[j].name);
      }
      referralFileList.textContent = names.length ? 'Selected: ' + names.join(', ') : '';
    }
    referralFiles.addEventListener('change', updateReferralFileList);
    if (referralDropzone) {
      ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(function (ev) {
        referralDropzone.addEventListener(ev, function (e) {
          e.preventDefault();
          e.stopPropagation();
        });
      });
      referralDropzone.addEventListener('dragover', function () {
        referralDropzone.classList.add('file-dropzone--drag');
      });
      referralDropzone.addEventListener('dragleave', function () {
        referralDropzone.classList.remove('file-dropzone--drag');
      });
      referralDropzone.addEventListener('drop', function (e) {
        referralDropzone.classList.remove('file-dropzone--drag');
        var dt = e.dataTransfer;
        if (!dt || !dt.files || !dt.files.length) return;
        var buffer = new DataTransfer();
        var max = Math.min(dt.files.length, 5);
        for (var k = 0; k < max; k++) {
          buffer.items.add(dt.files[k]);
        }
        referralFiles.files = buffer.files;
        referralFiles.dispatchEvent(new Event('change', { bubbles: true }));
      });
    }
  }
})();
