/**
 * Tabs functionality for the "How We Solve the Problem" section
 * Handles tab switching, accessibility, and responsive behavior
 */
document.addEventListener('DOMContentLoaded', function() {
  // Get all tab buttons and tab panes
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');
  
  // Add keyboard navigation to tabs
  function handleKeyDown(e, index) {
    const key = e.key;
    const totalTabs = tabButtons.length;
    
    if (key === 'ArrowRight' || key === 'ArrowLeft') {
      e.preventDefault();
      const direction = key === 'ArrowRight' ? 1 : -1;
      const newIndex = (index + direction + totalTabs) % totalTabs;
      tabButtons[newIndex].focus();
      tabButtons[newIndex].click();
    } else if (key === 'Home') {
      e.preventDefault();
      tabButtons[0].focus();
      tabButtons[0].click();
    } else if (key === 'End') {
      e.preventDefault();
      tabButtons[totalTabs - 1].focus();
      tabButtons[totalTabs - 1].click();
    } else if (key === 'Enter' || key === ' ') {
      e.preventDefault();
      this.click();
    }
  }
  
  // Add click and keyboard event listeners to each tab button
  tabButtons.forEach((button, index) => {
    // Set ARIA attributes for accessibility
    const tabId = button.getAttribute('data-tab');
    button.setAttribute('role', 'tab');
    button.setAttribute('aria-selected', 'false');
    button.setAttribute('aria-controls', tabId);
    button.setAttribute('tabindex', '-1');
    
    // Add keyboard event listener
    button.addEventListener('keydown', (e) => handleKeyDown(e, index));
    
    // Add click event listener
    button.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Remove active class and ARIA states from all buttons and panes
      tabButtons.forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
        btn.setAttribute('tabindex', '-1');
      });
      
      tabPanes.forEach(pane => {
        pane.classList.remove('active');
        pane.setAttribute('aria-hidden', 'true');
      });
      
      // Add active class and ARIA states to clicked button and corresponding pane
      this.classList.add('active');
      this.setAttribute('aria-selected', 'true');
      this.removeAttribute('tabindex');
      
      const activePane = document.getElementById(tabId);
      if (activePane) {
        activePane.classList.add('active');
        activePane.setAttribute('aria-hidden', 'false');
        
        // Set focus to the content for screen readers
        activePane.setAttribute('tabindex', '-1');
        activePane.focus();
      }
      
      // Scroll the tab into view on mobile if needed
      if (window.innerWidth < 992) {
        this.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    });
  });
  
  // Handle window resize for responsive behavior
  let resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      // Recalculate any responsive layouts if needed
      const activeTab = document.querySelector('.tab-btn[aria-selected="true"]');
      if (activeTab && window.innerWidth < 992) {
        activeTab.scrollIntoView({
          block: 'nearest',
          inline: 'center',
          behavior: 'auto'
        });
      }
    }, 250);
  });
  
  // Initialize first tab as active if none is active
  const activeTab = document.querySelector('.tab-btn.active');
  if (!activeTab && tabButtons.length > 0) {
    const firstButton = tabButtons[0];
    const firstPaneId = firstButton.getAttribute('data-tab');
    const firstPane = document.getElementById(firstPaneId);
    
    if (firstPane) {
      firstButton.classList.add('active');
      firstButton.setAttribute('aria-selected', 'true');
      firstButton.removeAttribute('tabindex');
      
      firstPane.classList.add('active');
      firstPane.setAttribute('aria-hidden', 'false');
    }
  }
  
  // Add touch support for mobile swipe
  let touchStartX = 0;
  let touchEndX = 0;
  const tabContainer = document.querySelector('.tabs-nav');
  
  if (tabContainer) {
    tabContainer.addEventListener('touchstart', function(e) {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    tabContainer.addEventListener('touchend', function(e) {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });
  }
  
  function handleSwipe() {
    const currentTab = document.querySelector('.tab-btn[aria-selected="true"]');
    if (!currentTab) return;
    
    const currentIndex = Array.from(tabButtons).indexOf(currentTab);
    const minSwipeDistance = 50; // Minimum distance for a swipe to be registered
    
    if (touchStartX - touchEndX > minSwipeDistance) {
      // Swipe left - go to next tab
      const nextIndex = (currentIndex + 1) % tabButtons.length;
      tabButtons[nextIndex].click();
    } else if (touchEndX - touchStartX > minSwipeDistance) {
      // Swipe right - go to previous tab
      const prevIndex = (currentIndex - 1 + tabButtons.length) % tabButtons.length;
      tabButtons[prevIndex].click();
    }
  }
});
