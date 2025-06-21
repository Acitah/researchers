 let slideIndexes = [];

    function initSlideshows() {
      const containers = document.querySelectorAll('.slideshow-container');

      containers.forEach((container, index) => {
        const slides = container.querySelectorAll('.event-slide');
        slideIndexes[index] = 0;

        function showSlide() {
          slides.forEach(slide => slide.style.display = 'none');
          slideIndexes[index] = (slideIndexes[index] + 1) % slides.length;
          slides[slideIndexes[index]].style.display = 'block';
        }

        slides[slideIndexes[index]].style.display = 'block';
        setInterval(showSlide, 4000);
      });
    }

    function plusSlides(n, slideshowIndex) {
      const container = document.querySelectorAll('.slideshow-container')[slideshowIndex];
      const slides = container.querySelectorAll('.event-slide');
      slideIndexes[slideshowIndex] += n;

      if (slideIndexes[slideshowIndex] >= slides.length) slideIndexes[slideshowIndex] = 0;
      if (slideIndexes[slideshowIndex] < 0) slideIndexes[slideshowIndex] = slides.length - 1;

      slides.forEach(slide => slide.style.display = 'none');
      slides[slideIndexes[slideshowIndex]].style.display = 'block';
    }

    window.addEventListener('DOMContentLoaded', initSlideshows);