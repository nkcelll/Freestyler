export const FilterMenu = {
  extend: 'Flex',
  tag: 'button',
  attr: {
    id: '',
  },
  props: {
    gap: '10px',
    align: 'center',
    border: 'none',
    borderRadius: '0',
    padding: '0',
    backgroundColor: 'transparent',
    position: 'relative',
    cursor: 'pointer',
    padding: '12px 46px',
    outline: 'none',
  },

  IconFilter: {},
  P: {
    text: 'Filter & Sort',
    margin: '0',
  },
  IconFilter: {},
  MainFilterBox: {},
  on: {
    click: (e) => {
      const openSideMenu = document.getElementById('side-filter');
      const openOverlay = document.querySelector('.overlay');

      if (e.currentTarget) {
        // openSideMenu.style.visibility = 'visible';
        openSideMenu.style.opacity = '1';
        openSideMenu.style.transform = 'translateX(0)';
        openSideMenu.style.pointerEvents = 'auto';

        openOverlay.style.visibility = 'visible';
        openOverlay.style.opacity = '0.9';
        openOverlay.style.pointerEvents = 'auto';
        document.body.style.overflow = 'hidden';
      }
    },
  },
};
