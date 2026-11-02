// Мени за телефоне – отварање/затварање главне навигације
document.addEventListener('DOMContentLoaded', function () {
  var btn = document.querySelector('.meni-dugme');
  var nav = document.getElementById('glavni-meni');
  if (!btn || !nav) return;
  btn.addEventListener('click', function () {
    var open = btn.getAttribute('aria-expanded') !== 'true';
    btn.setAttribute('aria-expanded', open);
    btn.setAttribute('aria-label', open ? 'Затвори мени' : 'Отвори мени');
    nav.classList.toggle('otvoren', open);
  });
});
