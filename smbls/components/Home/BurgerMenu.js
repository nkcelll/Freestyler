export const NewBurgerMenu = {
  extend: 'Flex',
  tag:'button',
  props: {
    flex: 'row',
    gap: 'A',
    class: 'menu-button'
  },
  Img: {
    attr: {
      // src: 'https://files-production-symbols-platform-development-en-d5-u3-p7x0.based.dev/fi51743bbf/fff2ad1f-ef21-4e16-bef4-a1b1298ed09f-0c450c2e-0a59-416a-92f8-b95b4c8d4c5e-e5a7ca9d-ec5f-4bcf-8a0d-99b607638d86.png',
      src: 'https://files-production-symbols-platform-development-en-d5-u3-p7x0.based.dev/fi96210bae/500f93d8-3235-46d9-b915-595cfd7b9148-d68df12f-c1d9-41e7-ad3a-2142ad886536-282e5e7f-e725-4458-858c-9b3190b6c16c.png',
    },
  },
  p: {
    text: 'MENU',
    props: {
      color: '#FFF',
      fontWeight: '400',
      fontSize: '14px',
      color: 'black'
    }
  },
  on: {
    click: () => {
      const SideBar = document.getElementById('sideMenu');
      SideBar.style.display = 'flex'
      SideBar.style.opacity = '0.98'
    }
  }
}

export const BurgerMenuClose = {
  extend: 'Flex',
  tag:'button',
  props: {
    flex: 'row',
    gap: 'A',
    class: 'menu-button'
  },
  Img: {
    attr: {
      // src: 'https://files-production-symbols-platform-development-en-d5-u3-p7x0.based.dev/fi51743bbf/fff2ad1f-ef21-4e16-bef4-a1b1298ed09f-0c450c2e-0a59-416a-92f8-b95b4c8d4c5e-e5a7ca9d-ec5f-4bcf-8a0d-99b607638d86.png',
      src: 'https://files-production-symbols-platform-development-en-d5-u3-p7x0.based.dev/fiffc89be7/9067c4e7-7928-4de1-a5b2-dfcd6810831b-78e6d5d4-4d2c-4fa6-9d81-812015f5c9d1-cdba0c34-9998-4bf1-ab15-f2ec041d3fef.png',
    },
  },
  p: {
    text: 'CLOSE',
    props: {
      color: '#FFF',
      fontWeight: '500',
      fontSize: '14px',
      color: 'WhiteFFFFFF'
    }
  },
  on: {
    click: (ev) => {
      const SideBar = document.getElementById('sideMenu');
      SideBar.style.display = 'none'
    }
  }
}