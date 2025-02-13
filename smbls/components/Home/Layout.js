export const Layout = {
  extend: 'Flex',
  props: {
    overflow: 'hidden',
    width: '100vw',
    height: 'auto',
  },
  HomeListSidebar: {},
  MainHeader: {
    '@tabletM': {},
    '@tabletS': {},
    '@mobileL': {},
  },
  Menu: {
    // width: '120px',
    display: 'none !important',
    width: '60px',
    height: 'calc(100vh - 77px)',
    // borderRight: '1px solid #A38A8A',
    top: '0',
    order: '1',
    '@tabletS': {
      display: 'flex !important',
    },
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
    height: 'calc(100vh - 77px)',
    order: '2',
    overflowX: 'auto',
    gap: '30px',
    backgroundColor: '#E4E2E2',
    padding: '0 20px',
    '::-webkit-scrollbar': { display: 'none' },
    childExtends: 'HomeImageProducts',
    childrenAs: 'state',
    children: (el, s) => Object.values(s.products.data),

    '@tabletS': {
      padding: '0 20px 0 0',
      width: '100%',
    },
  },
};

document.addEventListener('DOMContentLoaded', () => {
  const scrollContainer = document.getElementById('content-wheel');

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
    const maxScrollLeft =
    scrollContainer.scrollWidth - scrollContainer.clientWidth;
    targetScrollLeft = Math.max(0, Math.min(targetScrollLeft, maxScrollLeft));

    if (!isAnimating) {
      isAnimating = true;
      requestAnimationFrame(smoothScroll);
    }
  }
  if (scrollContainer) {
    scrollContainer.addEventListener('wheel', handleWheel, { passive: false });
  } else {
    console.error('#content-wheel element not found.');
  }
});
