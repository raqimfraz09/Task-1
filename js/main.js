document.addEventListener('DOMContentLoaded', () => {
  // 1. Entrance Animations
  window.WOW && new WOW({ boxClass: 'wow', animateClass: 'animate__animated', offset: 60, mobile: true, live: true }).init();

  // 2. Hero Slider
  new Swiper('.hero-swiper', {
    loop: true,
    speed: 1000,
    effect: 'fade',
    fadeEffect: { crossFade: true },
    autoplay: { delay: 5500, disableOnInteraction: false },
    pagination: { el: '.hero-pagination', clickable: true }
  });

  // 3. Carousel Sliders (Campuses, News, Social)
  [
    ['campus', 1.2, { 640: { slidesPerView: 2.2, spaceBetween: 24 }, 1024: { slidesPerView: 3.5, spaceBetween: 28 }, 1280: { slidesPerView: 4, spaceBetween: 30 } }],
    ['news', 1.1, { 640: { slidesPerView: 2, spaceBetween: 24 }, 1024: { slidesPerView: 3, spaceBetween: 30 } }],
    ['social', 1.2, { 640: { slidesPerView: 2.2, spaceBetween: 20 }, 1024: { slidesPerView: 3.2, spaceBetween: 24 }, 1280: { slidesPerView: 4, spaceBetween: 24 } }]
  ].forEach(([name, view, bp]) => new Swiper(`.${name}-swiper`, {
    loop: true,
    speed: 700,
    spaceBetween: 20,
    slidesPerView: view,
    navigation: { nextEl: `#${name}-next`, prevEl: `#${name}-prev` },
    breakpoints: bp
  }));

  // 4. Mobile Menu Drawer
  const menu = document.getElementById('mobile-menu');
  document.addEventListener('click', (e) => {
    if (e.target.closest('#mobile-menu-btn')) menu?.classList.replace('hidden', 'flex');
    if (e.target.closest('#mobile-menu-close, #mobile-menu a')) menu?.classList.replace('flex', 'hidden');
  });

  // 5. Value Cards Active State
  const cards = document.querySelectorAll('.value-card');
  cards.forEach(card => card.onmouseenter = () => {
    cards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');
  });

  // 6. Campus Showcase Thumbnails
  const thumbs = document.querySelectorAll('.campus-thumb');
  const mainImg = document.getElementById('main-campus-image');
  thumbs.forEach(t => t.onclick = () => {
    thumbs.forEach(el => el.classList.remove('ring-4', 'ring-brand-green', 'scale-105'));
    t.classList.add('ring-4', 'ring-brand-green', 'scale-105');
    if (mainImg && t.dataset.img) mainImg.src = t.dataset.img;
  });
});
