export const Menu = {
  attr: {
    id: 'all-menu-button'
  },
  props: {
    display: 'none',
    flexFlow: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E4E2E2',
    // width: '15px',
    height: 'auto',
    position:'relative',
  },
  NewBurgerMenu: {
    attr: {
      id: 'menu-button'
    },
    props: {
      border: 'none',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      align: 'center',
    },
  },
  on: {
    click: (e) => {
      const openMenu = document.getElementById('menu-button')
      const open = document.getElementById('side-menu')
      const close = document.getElementById('close-menu-button')
      
      if(openMenu) {
        open.style.visibility = 'visible'
      }
      
    }
  }
  
};
