export const SideMenuBox = {
  OverlayBox: {
    attr: {
      class: 'overlay',
    },
    props: {
      width: '100dvw',
      height: '100dvh',
      position: 'absolute',
      right: '-20px',
      top: '-26px',
      // left: '20px',
      zIndex: '120',
      pointerEvents: 'auto',
      visibility: 'hidden',
      backgroundColor: 'rgb(63, 63, 63)',
      transition: 'opacity 0.5s ease, transform 0.5s ease',
    },
    on: {
      click: (e) => {
        const sideMenu = document.getElementById('side-menu');
        const closeOverlay = document.querySelector('.overlay');

        if (e.target === closeOverlay) {
          setTimeout(() => {
            closeOverlay.style.opacity = '0';
            closeOverlay.style.visibility = 'hidden';
            closeOverlay.style.pointerEvents = 'none';

            sideMenu.style.transform = 'translateX(0)';
            sideMenu.style.opacity = '0';
            sideMenu.style.pointerEvents = 'none';

            document.body.style.overflow = 'visible'
          }, 15);
        }
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
      backgroundColor: '#fff',
      position: 'absolute',
      zIndex: '150',
      inset: 0,
      top: '-26px',
      whiteSpace: 'none',
      overflow: 'hidden',
      opacity: '0',
      transition: 'opacity 0.5s ease, transform 0.5s ease',
      transform: 'translateX(100%)',
      // transform: 'translateX(100%)',
    },
    Container: {
      extend: 'Flex',
      props: {
        gap: '30px',
        flexGrow: '1',
        flow: 'y',
        overflow: 'auto'
      },
      CloseListButton: {
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
              const closeMenu = document.getElementById('side-menu');
              const overlay = document.querySelector('.overlay');

              if (
                e.currentTarget === closeMenu ||
                closeMenu.style.opacity === '1'
              ) {
                setTimeout(() => {
                  closeMenu.style.transform = 'translateX(0)';
                  // closeMenu.style.transform = 'translateX(100%)';
                  closeMenu.style.opacity = '0';
                  closeMenu.style.pointerEvents = 'none';

                  overlay.style.opacity = '0';
                  overlay.style.visibility = 'hidden';
                  overlay.style.pointerEvents = 'none';

                  document.body.style.overflow = 'visible'
                }, 10);
              }
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
    SocialsLink: {
      extend: 'Flex',
      // style: {
      //   marginTop: 'auto'
      // },
      props: {
        flow: 'x',
        height: '100px',
        justifyItems: 'center',
        align: 'center',
        // padding: '20px 0',
        textAlign: 'center',
        marginTop: 'auto',
        flexShrink: '0',
      },
      childExtend: {
        extend: ['Link', 'Flex'],
        props: {
          gap: '20px',
          padding: '0 0 0 15px',
          margin: 'auto',
        },
      },
      $socialCollection: () => [
        {
          a: {
            attr: {
              href: 'https://www.facebook.com/FreeStylerShop',
            },
            Img: {
              props: {
                src: 'https://files-production-symbols-platform-development-en-d5-u3-p7x0.based.dev/ficedd977b/8ea779c8-5857-4611-ae88-d015ae936e9a-03606ae3-21c8-4771-b62a-596aebd4b745-994c27f9-5bb4-48e3-8280-1e453f143db0.svg',
                alt: 'Instagram Logo',
                width: '18px',
                height: '18px',
              },
            },
          },
        },
        {
          a: {
            attr: {
              href: 'https://www.instagram.com/freestylershop',
            },
            Img: {
              props: {
                src: 'https://files-production-symbols-platform-development-en-d5-u3-p7x0.based.dev/fid618a2a0/eead73a4-316a-4300-b8aa-b6632e690ecd-49359f4d-9e6b-40d7-b1ae-b0f0dd778798-b21fcd26-1392-4f1e-89c4-5a1fe812e2e0.svg',
                alt: 'Instagram Logo',
                width: '18px',
                height: '18px',
              },
            },
          },
        },
      ],
    },
  },
};