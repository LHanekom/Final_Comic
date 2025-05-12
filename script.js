function setupScrollNavigation(nextPage, prevPage) {
  let isNavigating = false;

  // Apply fade-in on page load (handled by CSS)
  document.body.style.opacity = '1';

  // Scroll to bottom if URL contains #bottom
  window.addEventListener('load', () => {
    if (window.location.hash === '#bottom') {
      window.scrollTo(0, document.body.scrollHeight);
    }
  });

  // Handle mouse wheel scrolling
  window.addEventListener('wheel', (event) => {
    if (isNavigating) return;

    // Scroll down at bottom
    if (event.deltaY > 0 && nextPage) {
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10;
      if (isAtBottom) {
        isNavigating = true;
        document.body.classList.add('fade-out');
        setTimeout(() => {
          window.location.href = nextPage;
        }, 1000); // Match fadeOut duration
      }
    }
    // Scroll up at top
    else if (event.deltaY < 0 && prevPage) {
      const isAtTop = window.scrollY <= 10;
      if (isAtTop) {
        isNavigating = true;
        document.body.classList.add('fade-out');
        setTimeout(() => {
          window.location.href = prevPage + '#bottom';
        }, 1000); // Match fadeOut duration
      }
    }
  }, { passive: true });

  // Handle touch scrolling
  window.addEventListener('touchmove', () => {
    if (isNavigating) return;

    const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10;
    const isAtTop = window.scrollY <= 10;

    if (isAtBottom && nextPage) {
      isNavigating = true;
      document.body.classList.add('fade-out');
      setTimeout(() => {
        window.location.href = nextPage;
      }, 1000); // Match fadeOut duration
    } else if (isAtTop && prevPage) {
      isNavigating = true;
      document.body.classList.add('fade-out');
      setTimeout(() => {
        window.location.href = prevPage + '#bottom';
      }, 1000); // Match fadeOut duration
    }
  }, { passive: true });
}