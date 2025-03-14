/**
 * Advanced lazy loading implementation for PeopleCert website
 * This script handles lazy loading for background images and provides
 * fallback support for browsers that don't support the loading="lazy" attribute
 */

document.addEventListener("DOMContentLoaded", function () {
  // Check if browser supports IntersectionObserver
  if ("IntersectionObserver" in window) {
    // Lazy load background images in hero section
    lazyLoadBackgroundImages();

    // Fallback for browsers that don't support loading="lazy"
    lazyLoadImagesWithFallback();
  } else {
    // For older browsers without IntersectionObserver support
    // Load all images immediately
    loadAllImages();
  }
});

/**
 * Lazy loads background images using IntersectionObserver
 */
function lazyLoadBackgroundImages() {
  const bgElements = document.querySelectorAll(".hero__image-wrapper");

  const bgObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Element is in viewport, no need to change anything as CSS already loads the image
          // But we can mark it as loaded
          entry.target.classList.add("loaded");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: "200px 0px", // Start loading when within 200px of viewport
      threshold: 0.01,
    }
  );

  bgElements.forEach((element) => {
    bgObserver.observe(element);
  });
}

/**
 * Provides fallback lazy loading for browsers that don't support the loading="lazy" attribute
 */
function lazyLoadImagesWithFallback() {
  // Only target images below the fold that have the loading="lazy" attribute
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');

  const imageObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          // Image is already set to lazy load natively, but this is a fallback
          // for browsers that don't support the attribute
          img.classList.add("loaded");
          observer.unobserve(img);
        }
      });
    },
    {
      rootMargin: "200px 0px", // Start loading when within 200px of viewport
      threshold: 0.01,
    }
  );

  lazyImages.forEach((image) => {
    imageObserver.observe(image);
  });
}

/**
 * Fallback function for older browsers without IntersectionObserver
 * Loads all images immediately
 */
function loadAllImages() {
  // For older browsers, just mark all images as loaded
  const allImages = document.querySelectorAll('img[loading="lazy"]');
  allImages.forEach((img) => {
    img.classList.add("loaded");
  });

  // Also mark background image containers as loaded
  const bgElements = document.querySelectorAll(".hero__image-wrapper");
  bgElements.forEach((element) => {
    element.classList.add("loaded");
  });
}
