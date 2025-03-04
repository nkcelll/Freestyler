import { openSideMenuBox } from '../../../functions/domEvents/toggleSideboxes';
export const MainHeader = {
  attr: {
    id: 'main-header',
  },
  props: {
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'space-between',
    
    padding: '0 20px',
    width: '100%',
    height: '77px',
    gap: 'G 0',
    inset: '0',
    zIndex: '100',
    position: 'sticky',
    top: '0',
    transition: 'top 0.3s ease',
  },
  Logo: {
    
      href: '/',
    

      alignSelf: 'center',

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
          type: 'submit',
        },
        props: {
          border: 'none',
          backgroundColor: 'transparent',
          cursor: 'pointer',
          padding: 0,
        },
        Img: {
          attr: {
            id: 'search-button-icon',
            src: 'https://files-production-symbols-platform-development-en-d5-u3-p7x0.based.dev/fi65e55c45/787d10da-8b01-4d27-ad6e-c9db8f5df28f-7a610c2d-2707-460d-8bbe-3948ca8cf389-be0fd83d-7d8e-4284-aae3-c2495d0cb97e.svg',
          },
          style: {
            right: '3px',
            transition: 'right 0.7s ease',
          },
        },
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
            backgroundColor: 'rgb(214, 214, 214)',
            inset: '0',
            opacity: '0',
            pointerEvents: 'none',
            top: '-100%',
            cursor: 'auto',
            transition: 'top 0.5s ease, opacity 0.5s ease',
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
                color: 'zebraInTheNight',
                outline: 'none',
                border: '1px solid black',
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
    UserButton: {
      tag: 'a',
      attr: {
        href: '/login',
      },
      props: {
        border: 'none',
        backgroundColor: 'transparent',
        cursor: 'pointer',
      },
      Img: {
        src: 'https://files-production-symbols-platform-development-en-d5-u3-p7x0.based.dev/fi2ebf1055/b0d2c691-460f-4adf-8b2e-0e626d545db1-58412f45-a750-4c43-98e2-f7406ff4b568-527bad1c-45eb-4d5c-b3c5-7b6cfcb674be.svg',
      },
    },
    CartButton: {
      tag: 'a',
      props: {
        border: 'none',
        backgroundColor: 'transparent',
        cursor: 'pointer',
      },
      Img: {
        src: 'https://files-production-symbols-platform-development-en-d5-u3-p7x0.based.dev/fi84c2dad5/d42a458a-4d2f-4575-975d-865814329e98-c6165623-9ed5-4cf5-a979-1233da52198d-2f260202-7fc0-4022-90ee-0634b9e5e221.svg',
      },
      Cart: {},
      on: {
        click: () => {
          openSideMenuBox('cart-box-side', 'cart-overlay');
        },
      },
    },
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
