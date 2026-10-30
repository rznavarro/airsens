document.querySelectorAll('link[data-async-css]').forEach(function (l) {
  if (l.sheet) { l.media = 'all'; } else { l.addEventListener('load', function () { l.media = 'all'; }); }
});
