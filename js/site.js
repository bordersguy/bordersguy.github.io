// christiancalle.com: the few things the pages do.

// Email link: put together here so the address isn't sitting in the page for spam crawlers.
document.querySelectorAll('[data-mail-user]').forEach(function (a) {
  var addr = a.getAttribute('data-mail-user') + '@' + a.getAttribute('data-mail-domain');
  a.href = 'mailto:' + addr;
});

// Light or dark: follows the device unless the visitor picks one here.
(function () {
  var btn = document.querySelector('.theme-toggle');
  if (!btn) return;
  var root = document.documentElement;
  function current() {
    var set = root.getAttribute('data-theme');
    if (set) return set;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  function label() { btn.textContent = current() === 'dark' ? 'Light mode' : 'Dark mode'; }
  label();
  btn.addEventListener('click', function () {
    var next = current() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
    label();
  });
})();

// Workbook pages: open a larger copy in a dialog.
(function () {
  var dlg = document.querySelector('dialog.viewer');
  if (!dlg) return;
  var img = dlg.querySelector('img');
  document.querySelectorAll('[data-large]').forEach(function (b) {
    b.addEventListener('click', function () {
      img.src = b.getAttribute('data-large');
      img.alt = b.querySelector('img').alt;
      dlg.showModal();
    });
  });
  dlg.querySelector('.close').addEventListener('click', function () { dlg.close(); });
  dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
})();
