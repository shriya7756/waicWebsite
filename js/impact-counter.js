// Animate impact numbers when they come into view
document.addEventListener('DOMContentLoaded', function() {
  const counters = document.querySelectorAll('.impact-number');
  const speed = 200; // The lower the faster
  
  const animateOnScroll = () => {
    counters.forEach(counter => {
      const countTo = parseInt(counter.getAttribute('data-count'));
      const countNum = parseInt(counter.innerText);
      const countSpeed = speed / countTo;
      
      if (isInViewport(counter) && countNum < countTo) {
        const count = Math.ceil(countNum + (countTo / speed));
        counter.innerText = count > countTo ? countTo : count;
        
        if (count < countTo) {
          setTimeout(animateOnScroll, countSpeed);
        }
      }
    });
  };
  
  // Check if element is in viewport
  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };
  
  // Run once on page load
  animateOnScroll();
  
  // Run on scroll
  window.addEventListener('scroll', () => {
    let scrolled = false;
    
    return function() {
      if (!scrolled) {
        window.requestAnimationFrame(function() {
          animateOnScroll();
          scrolled = false;
        });
        scrolled = true;
      }
    };
  }());
});
