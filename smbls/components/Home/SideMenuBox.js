export const SideMenuBox = {
  OverlayBox: {
    attr: {
      class: 'overlay',
    },
    props: {
      width: '100dvw',
      height: '100dvh',
      position: 'absolute',
      inset: '0',
      top: '-77px',
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

            sideMenu.style.transform = 'translateX(-100%)';
            sideMenu.style.opacity = '0';
            sideMenu.style.pointerEvents = 'none';
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
      height: 'auto',
      flow: 'y',
      justifyContent: 'space-between',
      backgroundColor: '#E4E2E2',
      position: 'absolute',
      zIndex: '150',
      inset: 0,
      top: '-77px',
      gap: '30px',
      overflow: 'scroll',
      opacity: '0',
      transition: 'opacity 0.5s ease, transform 0.5s ease',
      transform: 'translateX(-100%)',
    },
    Container: {
      extend: 'Flex',
      props: {
        gap: '30px',
        flow: 'y',
      },
      CloseListButton: {
        extend: 'Flex',
        props: {
          width: '100%',
          height: 'auto',
          border: 'none',
          justifyContent: 'flex-start',
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
            // backgroundColor: '#fff',
            backgroundColor: 'transparent',
            borderRadius: '0',
            cursor: 'pointer',
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
                  closeMenu.style.transform = 'translateX(-100%)';
                  closeMenu.style.opacity = '0';
                  closeMenu.style.pointerEvents = 'none';

                  overlay.style.opacity = '0';
                  overlay.style.visibility = 'hidden';
                  overlay.style.pointerEvents = 'none';
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
      props: {
        flow: 'x',
        height: 'auto',
        justifyItems: 'center',
        textAlign: 'center',
        margin: '0 0 50px 0',
        // backgroundColor: 'red'
      },

      childExtend: {
        extend: ['Link', 'Flex'],
        props: {
          gap: '20px',
          padding: '0 0 0 15px',
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

// export const SideMenuBox = {
//   OverlayBox: {
//     attr: {
//       class: 'overlay',
//     },
//     props: {
//       width: '100dvw',
//       height: '100dvh',
//       position: 'absolute',
//       inset: '0',
//       top: '-77px',
//       zIndex: '120',
//       opacity: '0.9',
//       pointerEvents: 'auto',
//       visibility: 'hidden',
//       backgroundColor: 'rgb(63, 63, 63)',
//     },
//     on: {
//       click: (e) => {
//         const sideMenu = document.getElementById('side-menu');
//         const closeOverlay = document.querySelector('.overlay');

//         if (e.target === closeOverlay) {
//           setTimeout(() => {
//             closeOverlay.style.display = 'none';
//             // closeOverlay.style.pointerEvents = 'none'
//             closeOverlay.style.opacity = '0';
//             closeOverlay.style.transition = '0.5s ease';

//             sideMenu.style.visibility = 'hidden';
//             sideMenu.style.transform = 'translateX(-100%)';
//             sideMenu.style.transition = '0.5s ease';
//           }, 15);
//         }
//       },
//     },
//   },
//   BoxContent: {
//     extend: 'Flex',
//     attr: {
//       id: 'side-menu',
//     },
//     props: {
//       width: '320px',
//       height: 'auto',
//       flow: 'y',
//       justifyContent: 'space-between',
//       backgroundColor: '#E4E2E2',
//       position: 'absolute',
//       zIndex: '150',
//       inset: 0,
//       top: '-77px',
//       gap: '30px',
//       overflow: 'scroll',
//       visibility: 'hidden',
//       transform: 'translateX(-100%)',
//     },
//     Container: {
//       extend: 'Flex',
//       props: {
//         gap: '30px',
//         flow: 'y'
//       },
//       CloseListButton: {
//         extend: 'Flex',
//         props: {
//           width: '100%',
//           height: 'auto',
//           border: 'none',
//           justifyContent: 'flex-start',
//           align: 'center',
//           margin: '10px 0 0 0',
//         },
//         Button: {
//           extend: 'Flex',
//           attr: {
//             id: 'close-menu-button',
//           },
//           props: {
//             border: 'none',
//             width: '40px',
//             backgroundColor: '#fff',
//             borderRadius: '0',
//             cursor: 'pointer',
//           },
//           IconClose: {},

//           on: {
//             click: (e) => {
//               const closeMenu = document.getElementById('side-menu');
//               const overlay = document.querySelector('.overlay');

//               if (e.currentTarget === closeMenu || closeMenu.style.visibility === 'visible') {
//                 setTimeout(() => {
//                   closeMenu.style.transform = 'translateX(-100%)';
//                   closeMenu.style.visibility = 'hidden';
//                   closeMenu.style.transition = '0.5s ease'

//                   overlay.style.opacity = '0';
//                   overlay.style.visibility = 'hidden';
//                   overlay.style.pointerEvents = 'none';
//                 }, 10)

//               }
//             }
//           }
//         },
//       },
//       SideMenuList: {
//         extend: 'Flex',
//         props: {
//           flow: 'y',
//         },
//         SnowboarSidebar: {},
//         MenSidebar: {},
//         WomenSidebar: {},
//         AccessoriesSidebar: {},
//       },
//     },
//     SocialsLink: {
//       extend: 'Flex',
//       props: {
//         flow:'x',
//         height: 'auto',
//         justifyItems: 'center',
//         textAlign: 'center',
//         margin: '0 0 50px 0'
//         // backgroundColor: 'red'
//       },

//       childExtend: {
//         extend: ['Link', 'Flex'],
//         props: {
//           gap: '20px',
//           padding: '0 0 0 15px'
//         },
//       },
//       $socialCollection: () =>
//       [
//         {
//           a: {
//             attr: {
//               href: 'https://www.facebook.com/FreeStylerShop',
//             },
//             Img: {
//               props: {
//                 src: 'https://files-production-symbols-platform-development-en-d5-u3-p7x0.based.dev/ficedd977b/8ea779c8-5857-4611-ae88-d015ae936e9a-03606ae3-21c8-4771-b62a-596aebd4b745-994c27f9-5bb4-48e3-8280-1e453f143db0.svg',
//                 alt: 'Instagram Logo',
//                 width: '18px',
//                 height: '18px',
//               },
//             },
//           }

//         },
//         {
//           a: {
//             attr: {
//               href: 'https://www.instagram.com/freestylershop',
//             },
//             Img: {
//               props: {
//                 src: 'https://files-production-symbols-platform-development-en-d5-u3-p7x0.based.dev/fid618a2a0/eead73a4-316a-4300-b8aa-b6632e690ecd-49359f4d-9e6b-40d7-b1ae-b0f0dd778798-b21fcd26-1392-4f1e-89c4-5a1fe812e2e0.svg',
//                 alt: 'Instagram Logo',
//                 width: '18px',
//                 height: '18px',
//               },
//             },
//           }
//         },
//       ]
//     },
//   },
// };

// export const SideMenuBox = {
//   extend: 'Flex',
//   attr: {
//     id: 'side-menu'
//   },
//   props: {
//     width: '80dvw',
//     height: 'auto',
//     flow: 'y',
//     backgroundColor: '#E4E2E2',
//     position: 'absolute',
//     zIndex: '100',
//     inset: 0,
//     top: '-77px',
//     gap: '30px',
//     overflow: 'scroll',
//     visibility: 'hidden',
//     // opacity: '0',
//     transform: 'translateX(-100%)'

//   },

//   CloseListButton: {
//     extend: 'Flex',

//     props: {
//       width: '100%',
//       height: 'auto',
//       color: 'white',
//       border: 'none',
//       justifyContent: 'flex-start',
//       align: 'center',
//       margin: '11px 0 0'
//     },
//     Button: {
//       extend: 'Flex',
//       attr: {
//         id: 'close-menu-button',
//       },
//       props: {
//         border: 'none',
//         backgroundColor: '#fff',
//         borderRadius: '50%',
//         maxWidth: '10px',
//         cursor: 'pointer',
//       },
//       IconClose: {},

//       on: {
//         click: (e) => {
//           const closeMenu = document.getElementById('side-menu');
//           if (closeMenu) {
//            setTimeout(() => {
//             closeMenu.style.visibility = 'hidden'
//             // closeMenu.style.opacity = '0'
//             closeMenu.style.transition = '0.5s ease'
//             closeMenu.style.transform = 'translateX(-100%)'
//            }, 10)
//         }
//       }
//       }
//     },
//   },
//   SideMenuList: {
//     extend: 'Flex',
//     props: {
//       flow: 'y',
//     },
//     SnowboarSidebar: {},
//     MenSidebar: {},
//     WomenSidebar: {},
//     AccessoriesSidebar: {},
//   },

// }
