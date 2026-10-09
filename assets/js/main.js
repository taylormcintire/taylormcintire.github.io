// taylormcintire.com — minimal progressive enhancement (no dependencies)
(function () {
  document.documentElement.classList.remove('no-js');

  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { nav.classList.remove('is-open'); toggle.setAttribute('aria-expanded', 'false'); }
    });
  }

  // Contact form: submit to Formspree via fetch; falls back to a normal POST without JS.
  var form = document.getElementById('contact-form');
  if (form && window.fetch) {
    var status = document.getElementById('form-status');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (form.querySelector('[name="_gotcha"]').value) return; // honeypot tripped
      if (form.action.indexOf('YOUR_FORM_ID') !== -1) {
        status.className = 'form-status err';
        status.textContent = 'The contact form isn\u2019t connected yet. Please reach out on LinkedIn for now.';
        return;
      }
      var btn = form.querySelector('button[type="submit"]');
      btn.disabled = true;
      status.className = 'form-status';
      status.textContent = 'Sending\u2026';
      fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } })
        .then(function (r) {
          if (!r.ok) throw new Error('bad status');
          form.reset();
          status.className = 'form-status ok';
          status.textContent = 'Thanks \u2014 your message was sent. I\u2019ll get back to you soon.';
        })
        .catch(function () {
          status.className = 'form-status err';
          status.textContent = 'Sorry, something went wrong. Please try again or reach out on LinkedIn.';
        })
        .finally(function () { btn.disabled = false; });
    });
  }
})();
