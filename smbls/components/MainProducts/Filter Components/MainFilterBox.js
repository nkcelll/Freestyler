import { closeSideMenuBox } from "../../../functions/domEvents/toggleSideboxes";

export const MainFilterBox = {
  OverlayBox: {
    attr: {
      id: 'main-filter-overlay',
    },
    props: {
      width: '100dvw',
      height: '100dvh',
      position: 'fixed',
      right: '0',
      top: '0',
      zIndex: '120',
      visibility: 'hidden',
      backgroundColor: 'rgb(63, 63, 63)',
      transition: 'opacity 0.5s ease, transform 4s ease',
    },
    on: {
      click: (e) => {
        // const sideMenu = document.getElementById('side-filter');
        // const closeOverlay = document.getElementById('main-filter-overlay');

        // if (e.target === closeOverlay) {
        //   setTimeout(() => {
        //     closeOverlay.style.opacity = '0';
        //     closeOverlay.style.visibility = 'hidden';
        //     closeOverlay.style.pointerEvents = 'none';

        //     sideMenu.style.transform = 'translateX(100%)';
        //     sideMenu.style.opacity = '0';
        //     sideMenu.style.pointerEvents = 'none';

        //     document.body.style.overflow = 'visible';
        //   }, 15);
        // }
        closeSideMenuBox('side-filter', 'main-filter-overlay')
      },
    },
  },
  FilterContent: {
    extend: 'Flex',
    attr: {
      id: 'side-filter',
    },
    props: {
      // position: 'absolute',
      position: 'fixed',
      top: '0',
      right: '0',
      zIndex: '200',
      backgroundColor: '#fff',
      width: '320px',
      height: '100dvh',
      flow: 'y',
      gap: '30px',
      overflow: 'auto',
      // opacity: '0',
      transition: 'opacity 0.5s ease, transform 0.5s ease',
      transform: 'translateX(100%)',
      // '@screenL<': {
      //   width: '600px',
      // },
    },

    CloseListButton: {
      extend: 'Flex',
      props: {
        width: '100%',
        height: 'auto',
        color: 'white',
        border: 'none',
        justifyContent: 'flex-end',
        align: 'center',
        margin: '10px 0 0 0',
      },

      Button: {
        extend: 'Flex',
        attr: {
          id: 'close-filter_list',
        },
        props: {
          border: 'none',
          borderRadius: '0',
          maxWidth: '10px',
          backgroundColor: 'transparent',
        },
        IconClose: {},
        on: {
          click: () => {
            // const closeSide = document.getElementById('side-filter');
            // const closeOverlay = document.getElementById('main-filter-overlay');
            // // const closeOverlay = document.querySelector('.overlay');
            // setTimeout(() => {
            //   closeSide.style.transform = 'translateX(100%)';
            //   closeSide.style.opacity = '0';
            //   closeSide.style.pointerEvents = 'none';

            //   closeOverlay.style.opacity = '0';
            //   closeOverlay.style.visibility = 'hidden';
            //   closeOverlay.style.pointerEvents = 'none';
            //   document.body.style.overflow = 'visible';
            // }, 10);
            closeSideMenuBox('side-filter', 'main-filter-overlay')
          },
        },
      },
    },
    FilterWrap: {
      extend: 'Flex',
      props: {
        flow: 'y',
      },
      SortBy: {},
      GenderFilter: {},
    },
  },
};
