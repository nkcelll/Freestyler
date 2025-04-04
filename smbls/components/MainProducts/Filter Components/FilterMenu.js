import { openSideMenuBox } from '../../../functions';

export const FilterMenu = {
  extend: 'Flex',
  tag: 'button',
  attr: {
    id: '',
  },
  props: {
    align: 'center',
    border: 'none',
    borderRadius: '0',
    backgroundColor: 'transparent',
    position: 'relative',
    margin: '0 46px 0 0',
    padding: 0,
    outline: 'none',
    '@mobileL': {
      margin: '0 16px 0 0',
      
    }
  },
  Filter: {
    extend: 'Flex',
    props: {
      flow: 'x',
      gap: '10px',
      cursor: 'pointer',
    },
    IconFilter: {},
    P: {
      text: 'Filter & Sort',
      margin: '0',
      fontSize: '14px',
      color: 'currentColor',
      '@light': {
        color: 'dark',
      },
      '@dark': {
        color: 'white',
      },
    },
  },
  MainFilterBox: {},
  on: {
    click: (e, el) => {
      // const openSideMenu = document.getElementById('side-filter');
      // const openOverlay = document.getElementById('main-filter-overlay');
      // console.log(e.currentTarget);

      // if (e.currentTarget) {
      //   // openSideMenu.style.visibility = 'visible';
      //   openSideMenu.style.opacity = '1';
      //   openSideMenu.style.transform = 'translateX(0)';
      //   openSideMenu.style.pointerEvents = 'auto';

      //   openOverlay.style.visibility = 'visible';
      //   openOverlay.style.opacity = '0.9';
      //   openOverlay.style.pointerEvents = 'auto';
      //   document.body.style.overflow = 'hidden';
      // }
      openSideMenuBox('side-filter', 'main-filter-overlay');
    },
  },
};
