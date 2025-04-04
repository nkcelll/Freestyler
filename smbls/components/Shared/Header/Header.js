import { openSideMenuBox } from '../../../functions/domEvents/toggleSideboxes';
import { IconMoon } from '../../Assets/Icons/IconMoon';
export const MainHeader = {
  attr: {
    id: 'main-header',
  },
  props: {
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'space-between',
    // background: 'zebra',
    // backgroundColor: '#E4E2E',
    // backgroundColor: 'white',
    backgroundColor: 'currentColor',
    padding: '0 20px',
    width: '100%',
    height: '77px',
    gap: 'G 0',
    inset: '0',
    zIndex: '100',
    position: 'sticky',
    top: '0',
    transition: 'top 0.3s ease',
    '@light': {
      background: '#CDCBCB',
    },
    '@dark': {
      background: '#343634',
      // background: '#1E201E',
    },
  },
  Logo: {
    props: {
      href: '/',
      alignSelf: 'center',
    }
  },
  // Nav Bar
  Nav: {
    props: {
      gap: '25px',
      width: 'auto',
      height: '100%',
      justifyContent: 'center',
      '@tabletS': {},
    },
  },
  //////////
  DivFlexButtons: {
    extend: 'Flex',
    props: {
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 A',
      gap: '20px',
      '@mobileS': {
        gap: '20px',
        padding: 0,
      },
    },
    SearchBox: {
      extend: 'Flex',
      props: {},
      SearchButton: {
        tag: 'button',
        attr: {
          type: 'button',
        },
        props: {
          border: 'none',
          backgroundColor: 'transparent',
          cursor: 'pointer',
          padding: 0,
        },
        IconSearch: {
          id: 'search-button-icon',
          color: 'currentColor'
        },
        /////// Backup original Search
        // Img: {
        //   attr: {
        //     id: 'search-button-icon',
        //     src: 'https://files-production-symbols-platform-development-en-d5-u3-p7x0.based.dev/fi65e55c45/787d10da-8b01-4d27-ad6e-c9db8f5df28f-7a610c2d-2707-460d-8bbe-3948ca8cf389-be0fd83d-7d8e-4284-aae3-c2495d0cb97e.svg',
        //   },
        //   style: {
        //     right: '3px',
        //     transition: 'right 0.7s ease',
        //   },
        // },
        ///////////////////////////////
        on: {
          click: (e) => {
            const searchClick = document.getElementById('search-input-expand');
            if (searchClick) {
              searchClick.style.opacity = '1';
              searchClick.style.pointerEvents = 'auto';
              searchClick.style.top = '0';
            }
          },
        },
        ///////////////// Search Input dropdown
        SearchInput: {
          extend: 'Flex',
          attr: {
            id: 'search-input-expand',
          },
          props: {
            width: '100%',
            height: 'auto',
            position: 'absolute',
            zIndex: '200',
            justifyContent: 'center',
            align: 'center',
            // backgroundColor: 'rgb(214, 214, 214)',
            backgroundColor: 'currentColor',
            inset: '0',
            opacity: '0',
            pointerEvents: 'none',
            top: '-100%',
            cursor: 'auto',
            transition: 'top 0.5s ease, opacity 0.5s ease',
            '@light': {
              background: '#CDCBCB'
            },
            '@dark': {
              background: '#343634'
            },
          },
          Div: {
            extend: 'Flex',
            props: {
              width: '60%',
              height: '40px',
              gap: '10px',
              alignItems: 'center',
              position: 'relative',
              transform: '0.5s ease',
            },
            Input: {
              extend: 'Flex',
              attr: {
                placeholder: 'Search...',
              },
              props: {
                width: '100%',
                height: '100%',
                borderRadius: '0',
                padding: '0 35px 0 20px',
                // color: 'black',
                outline: 'none',
                border: '1px solid currentColor',
                backgroundColor: 'transparent',
                letterSpacing: '2px',
                style: {
                  ':focus': {
                    outline: 'none',
                  },
                },
              },
            },
            Button: {
              attr: {
                type: 'submit',
              },
              style: {
                padding: 0,
              },
              props: {
                position: 'absolute',
                right: '40px',
                width: '20px',
                backgroundColor: 'transparent',
              },
              IconSearch: {},
            },
            IconClose: {
              attr: { id: 'close-search' },
              on: {
                click: (e) => {
                  const searchClick = document.getElementById(
                    'search-input-expand'
                  );
                  if (searchClick.style.opacity === '1') {
                    setTimeout(() => {
                      searchClick.style.opacity = '0';
                      searchClick.style.top = '-100%';
                      searchClick.style.pointerEvents = 'none';
                    }, 5);
                  }
                },
              },
            },
          },
        },
      },
    },
    
    IconUser:{
      props: {
        href: '/login'
      }
    },
    CartButton: {
      tag: 'a',
      props: {
        border: 'none',
        backgroundColor: 'transparent',
        cursor: 'pointer',
      },
      IconCart:{},
      Cart: {},
      on: {
        click: () => {
          openSideMenuBox('cart-box-side', 'cart-overlay');
        },
      },
    },
    IconMoon:{},

    Menu: {
      '@tabletS': {
        display: 'flex',
      },
    },
  },
};

let lastScrollTop = 0;

window.addEventListener('scroll', function () {
  const header = document.getElementById('main-header');
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    header.style.top = '-77px';
  } else {
    header.style.top = '0';
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
