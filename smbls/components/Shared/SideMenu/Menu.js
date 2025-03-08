import { openSideMenuBox } from '../../../functions/domEvents/toggleSideboxes';

export const Menu = {
  attr: {
    id: 'all-menu-button',
  },
  props: {
    display: 'none',
    flexFlow: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'auto',
    position: 'relative',
    zIndex: '15',
  },
  NewBurgerMenu: {
    attr: {
      id: 'menu-button',
    },
    props: {
      border: 'none',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      align: 'center',
      outline: 'none',
    },
    on: {
      click: (e) => {
        // const openSideMenu = document.getElementById('side-menu');
        // const openOverlay = document.querySelector('.overlay');

        // if (e.currentTarget) {
        //   openSideMenu.style.opacity = '1';
        //   openSideMenu.style.transform = 'translateX(0)';
        //   openSideMenu.style.pointerEvents = 'auto';

        //   openOverlay.style.visibility = 'visible';
        //   openOverlay.style.opacity = '0.9';
        //   openOverlay.style.pointerEvents = 'auto';

        //   document.body.style.overflow = 'hidden'
        // }
        openSideMenuBox('side-menu', 'side-menu-overlay');
      },
    },
  },
};
