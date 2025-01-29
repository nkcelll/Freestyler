
export const SideMenuBox = {
  extend: 'Flex',
  attr: {
    id: 'side-menu'
  },
  props: {
    width: '100dvw',
    height: 'auto',
    flow: 'y',
    backgroundColor: 'red',
    position: 'absolute',
    zIndex: '100',
    inset: 0,
    top: '-77px',
    gap: '30px',
    overflow: 'scroll',
    // visibility: 'hidden',
    // opacity: '0'

  },

  CloseListButton: {
    extend: 'Flex',

    props: {
      width: '100%',
      height: 'auto',
      color: 'white',
      border: 'none',
      justifyContent: 'flex-start',
      align: 'center',
    },
    Button: {
      extend: 'Flex',
      attr: {
        id: 'close-menu-button',
      },
      props: {
        border: 'none',
        borderRadius: '0',
        maxWidth: '10px',
        cursor: 'pointer',
      },
      IconClose: {},

      
    },
  },
  SideMenuList: {
    extend: 'Flex',
    props: {
      flow: 'y',
    },
    SnowboarSidebar: {},
    MenSidebar: {},
    WomenSidebar: {},
    AccessoriesSidebar: {},
  },

  on: {
    click: () => {
      const closeMenu = document.getElementById('side-menu');
      const close = document.getElementById('close-menu-button');
      
      if (close && closeMenu) {
        closeMenu.style.visibility = 'hidden ';
        closeMenu.style.opacity = '0';
      } 
    }
  }
}