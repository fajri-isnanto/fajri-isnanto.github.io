function setupLightbox() {
  const overlay = document.getElementById('lightbox-overlay');
  if (!overlay || overlay.dataset.lightboxReady) return;
  overlay.dataset.lightboxReady = 'true';

  const overlayImg = overlay.querySelector('img');
  if (!overlayImg) return;

  overlay.addEventListener('click', function () {
    overlay.classList.remove('active');
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') overlay.classList.remove('active');
  });

  document.addEventListener('click', function (e) {
    var target = e.target;
    if (!target) return;

    if (target.closest) {
      var img = target.closest('.prose img');
      if (img) {
        overlayImg.src = img.src;
        overlayImg.alt = img.alt;
        overlay.classList.add('active');
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', setupLightbox);
document.addEventListener('astro:page-load', setupLightbox);
