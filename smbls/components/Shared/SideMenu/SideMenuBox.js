import { closeSideMenuBox } from '../../../functions/domEvents/toggleSideboxes';
import { SocialsLinks } from '../SocialLinks';

export const SideMenuBox = {
  Overlay: {
    attr: {
      // class: 'overlay',
      id: 'side-menu-overlay',
    },
    props: {
      width: '100dvw',
      height: '100dvh',
      position: 'fixed',
      right: '0',
      top: '0',
      zIndex: '110',
      visibility: 'hidden',
      backgroundColor: 'rgb(63, 63, 63)',
      transition: 'opacity 0.5s ease, transform 4s ease',
    },
    on: {
      click: (e) => {
        // const sideMenu = document.getElementById('side-menu');
        // const closeOverlay = document.querySelector('.overlay');

        // if (e.target === closeOverlay) {
        //   setTimeout(() => {
        //     closeOverlay.style.opacity = '0';
        //     closeOverlay.style.visibility = 'hidden';
        //     closeOverlay.style.pointerEvents = 'none';

        //     sideMenu.style.transform = 'translateX(100%)';
        //     sideMenu.style.opacity = '0';
        //     sideMenu.style.pointerEvents = 'none';

        //     document.body.style.overflow = 'visible'
        //   }, 15);
        // }
        closeSideMenuBox('side-menu', 'side-menu-overlay');
      },
    },
  },
  BoxContent: {
    extend: 'Flex',
    attr: {
      id: 'side-menu',
    },
    props: {
      width: '320px',
      height: '100dvh',
      flow: 'y',
      justifyContent: 'space-between',
      // backgroundColor: '#fff',
      backgroundColor: 'currentColor',
      position: 'fixed',
      zIndex: '150',
      right: '0',
      top: '0',
      whiteSpace: 'none',
      overflow: 'hidden',
      transition: 'opacity 0.5s ease, transform 0.5s ease',
      transform: 'translateX(100%)',
      '@light': {
        backgroundColor: '#fff',
      },
      '@dark': {
        backgroundColor: '#414341',
      },
    },
    BoxContainer: {
      extend: 'Flex',
      props: {
        gap: '30px',
        flexGrow: '1',
        flow: 'y',
        overflow: 'auto',
      },
      CloseButton: {
        extend: 'Flex',
        props: {
          width: '100%',
          height: 'auto',
          border: 'none',
          justifyContent: 'flex-end',
          align: 'center',
          margin: '10px 0 0 0',
        },
        Button: {
          extend: 'Flex',
          attr: {
            id: 'close-menu-button',
          },
          props: {
            border: 'none',
            width: '40px',
            backgroundColor: 'transparent',
            borderRadius: '0',
          },
          IconClose: {},

          on: {
            click: (e) => {
              // const closeMenu = document.getElementById('side-menu');
              // const overlay = document.querySelector('.overlay');

              // if (
              //   e.currentTarget === closeMenu ||
              //   closeMenu.style.opacity === '1'
              // ) {
              //   setTimeout(() => {
              //     closeMenu.style.transform = 'translateX(100%)';
              //     closeMenu.style.opacity = '0';
              //     closeMenu.style.pointerEvents = 'none';

              //     overlay.style.opacity = '0';
              //     overlay.style.visibility = 'hidden';
              //     overlay.style.pointerEvents = 'none';

              //     document.body.style.overflow = 'visible'
              //   }, 10);
              // }
              closeSideMenuBox('side-menu', 'side-menu-overlay');
            },
          },
        },
      },
      SideMenuList: {
        extend: 'Flex',
        props: {
          flow: 'y',
        },
        ///////////// MAIN LIST SIDEBAR
        SnowboarSidebar: {},
        MenSidebar: {},
        WomenSidebar: {},
        AccessoriesSidebar: {},
        ////////////////////////
      },
    },
    SocialsLinks: {
      margin: '20px 20px',
    },
  },
};
