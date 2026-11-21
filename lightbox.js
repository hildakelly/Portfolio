/* Reusable portfolio lightbox: no libraries required. */
(() => {
  const triggers = Array.from(document.querySelectorAll('.zoom-trigger'));
  if (triggers.length === 0) return;

  const dialog = document.createElement('dialog');
  dialog.className = 'image-lightbox';
  dialog.setAttribute('aria-label', 'Enlarged project image');
  dialog.innerHTML = `
    <div class="lightbox-panel">
      <button type="button" class="lightbox-close" aria-label="Close enlarged image">&times;</button>
      <div class="lightbox-row">
        <button type="button" class="lightbox-nav lightbox-prev" aria-label="Previous image">&#8592;</button>
        <figure class="lightbox-figure">
          <img class="lightbox-image" alt="">
          <figcaption class="lightbox-caption"></figcaption>
        </figure>
        <button type="button" class="lightbox-nav lightbox-next" aria-label="Next image">&#8594;</button>
      </div>
      <p class="lightbox-counter" aria-live="polite"></p>
    </div>`;
  document.body.appendChild(dialog);

  const image = dialog.querySelector('.lightbox-image');
  const caption = dialog.querySelector('.lightbox-caption');
  const counter = dialog.querySelector('.lightbox-counter');
  const previous = dialog.querySelector('.lightbox-prev');
  const next = dialog.querySelector('.lightbox-next');
  const close = dialog.querySelector('.lightbox-close');
  let activeIndex = 0;
  let opener = null;

  function render() {
    const trigger = triggers[activeIndex];
    const thumbnail = trigger.querySelector('img');
    // Optional data-full lets you use a sharper original when the thumbnail is cropped.
    image.src = thumbnail.dataset.full || thumbnail.getAttribute('src');
    image.alt = thumbnail.alt || 'Project image';
    const figcaption = trigger.closest('figure')?.querySelector('figcaption');
    caption.textContent = figcaption?.textContent?.trim() || image.alt;
    const multiple = triggers.length > 1;
    previous.hidden = !multiple;
    next.hidden = !multiple;
    counter.hidden = !multiple;
    if (multiple) counter.textContent = `${activeIndex + 1} of ${triggers.length} · Use ← → to browse`;
  }

  function move(delta) {
    activeIndex = (activeIndex + delta + triggers.length) % triggers.length;
    render();
  }

  triggers.forEach((trigger, index) => {
    trigger.addEventListener('click', () => {
      activeIndex = index;
      opener = trigger;
      render();
      dialog.showModal();
      close.focus();
    });
  });

  close.addEventListener('click', () => dialog.close());
  previous.addEventListener('click', () => move(-1));
  next.addEventListener('click', () => move(1));
  dialog.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight' && triggers.length > 1) {
      event.preventDefault(); move(1);
    } else if (event.key === 'ArrowLeft' && triggers.length > 1) {
      event.preventDefault(); move(-1);
    }
    // Escape is handled natively by <dialog>.
  });
  dialog.addEventListener('click', (event) => {
    // Click the dimmed area outside the dialog to close.
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right ||
        event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => {
    image.removeAttribute('src');
    opener?.focus();
  });
})();
