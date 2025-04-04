export const Layout = {
  extend: 'Flex',
  props: {
    overflow: 'hidden',
    width: '100vw',
    height: 'auto',
  },
  style: {
    scrollbarWidth: 'none', 
    msOverflowStyle: 'none',
  },
  // HomeListSidebar: {},
  MainHeader: {
    '@tabletM': {},
    '@tabletS': {},
    '@mobileL': {},
  },
  Content: {
    extends: 'Flex',
    attr: {
      id: 'content-wheel',
    },
    flex: 1,
    flexShrink: 0, 
    row: 'row',
    width: '100vw',
    flexWrap: 'nowrap',
    width: 'auto',
    height: 'calc(100dvh - 77px)',
    order: '2',
    overflowX: 'auto',
    gap: '30px',
    
    padding: '0 20px',
    '::-webkit-scrollbar': { display: 'none' },
    childExtends: 'HomeImageProducts',
    childrenAs: 'state',
    // children: (el, s) => Object.values(s.products.data),
    children: (el, s) => (
      // console.log(s.products),
      Object.values(s.products.data)),

    '@tabletS': {
      // padding: '0 20px 0 0',
      padding: '0 20px ',
      width: '100%',
    },
  },
};



/// SOL 1
// function setupSmoothScroll(scrollContainer) {
//   if (scrollContainer.dataset.smoothScrollInitialized) {
//     return; // Already initialized
//   }

//   let targetScrollLeft = scrollContainer.scrollLeft;
//   let currentScrollLeft = scrollContainer.scrollLeft;
//   let isAnimating = false;
//   const easeFactor = 0.07;

//   function smoothScroll() {
//     const delta = targetScrollLeft - currentScrollLeft;
//     currentScrollLeft += delta * easeFactor;
//     scrollContainer.scrollLeft = currentScrollLeft;

//     if (Math.abs(delta) > 0.9) {
//       requestAnimationFrame(smoothScroll);
//     } else {
//       scrollContainer.scrollLeft = targetScrollLeft;
//       isAnimating = false;
//     }
//   }

//   function handleWheel(e) {
//     e.preventDefault();
//     targetScrollLeft += e.deltaY * 2;
//     const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
//     targetScrollLeft = Math.max(0, Math.min(targetScrollLeft, maxScrollLeft));

//     if (!isAnimating) {
//       isAnimating = true;
//       requestAnimationFrame(smoothScroll);
//     }
//   }

//   scrollContainer.addEventListener('wheel', handleWheel, { passive: false });
//   scrollContainer.dataset.smoothScrollInitialized = 'true'; // Mark as initialized
// }

// function initializeSmoothScroll() {
//   // Initialize if element exists on first load
//   const initialScrollContainer = document.getElementById('content-wheel');
//   console.log(initialScrollContainer);
  
//   if (initialScrollContainer) {
//     setupSmoothScroll(initialScrollContainer);
//   }

//   // Set up observer to watch for dynamic additions
//   const observer = new MutationObserver((mutations) => {
//     mutations.forEach((mutation) => {
//       mutation.addedNodes?.forEach((node) => {
//         // Check added node or its children for the scroll container
//         const scrollContainer = node.nodeType === Node.ELEMENT_NODE 
//           ? node.querySelector('#content-wheel') || (node.id === 'content-wheel' ? node : null)
//           : null;
//         if (scrollContainer) {
//           setupSmoothScroll(scrollContainer);
//         }
//       });
//     });
//   });

//   observer.observe(document.body, {
//     childList: true,
//     subtree: true
//   });
// }

// document.addEventListener('DOMContentLoaded', initializeSmoothScroll);




///////// ORIGINAL
function initializeSmoothScroll() {
  const scrollContainer = document.getElementById('content-wheel');
  // console.log(scrollContainer);

  if (!scrollContainer) {
    // setTimeout(initializeSmoothScroll, 100);  
    return;
  } 
  let targetScrollLeft = scrollContainer.scrollLeft;
  let currentScrollLeft = scrollContainer.scrollLeft;
  let isAnimating = false;
  const easeFactor = 0.07;

  function smoothScroll() {
    const delta = targetScrollLeft - currentScrollLeft;
    currentScrollLeft += delta * easeFactor;
    scrollContainer.scrollLeft = currentScrollLeft;

    if (Math.abs(delta) > 0.9) {
      requestAnimationFrame(smoothScroll);
    } else {
      scrollContainer.scrollLeft = targetScrollLeft;
      isAnimating = false;
    }
  }

  function handleWheel(e) {
    e.preventDefault();
    targetScrollLeft += e.deltaY * 2;
    const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
    targetScrollLeft = Math.max(0, Math.min(targetScrollLeft, maxScrollLeft));

    if (!isAnimating) {
      isAnimating = true;
      requestAnimationFrame(smoothScroll);
    }
  }

  scrollContainer.addEventListener('wheel', handleWheel, { passive: false });
}
document.addEventListener("DOMContentLoaded", initializeSmoothScroll);

