import { closeSideMenuBox } from '../../functions/domEvents/toggleSideboxes';

export const Cart = {
  extend: 'Flex',
  Overlay: {
    attr: {
      id: 'cart-overlay',
    },
    props: {
      width: '100dvw',
      height: '100dvh',
      position: 'fixed',
      right: '0',
      top: '0',
      zIndex: '110',
      visibility: 'hidden',
      cursor: 'default',
      backgroundColor: 'rgb(63, 63, 63)',
      opacity: '1',
      transition: 'opacity 0.5s ease, transform 4s ease',
    },
    on: {
      click: (e) => {
        closeSideMenuBox('cart-box-side', 'cart-overlay');
      },
    },
  },
  CartBox: {
    extend: 'Flex',
    attr: {
      id: 'cart-box-side',
    },
    props: {
      width: '400px',
      height: '100%',
      backgroundColor: '#E4E2E2',
      transform: 'translateX(100%)', 
      transition: 'transform 0.5s ease-in-out',
      cursor: 'default',
      top: '0',
      right: '0',
      zIndex: '120',
      position: 'fixed',
      flow: 'y',
      gap: '20px',
      justifyContent: 'space-between',
      '@mobileS': {
        width: '100%',
      },
      '@mobileXS': {
        width: '100%',
      },
    },
    MainCartContainer: {
      extend: 'Flex',
      props: {
        height: '100%',
        gap: '20px',
        flow: 'y',
      },
      CartHeader: {
        extend: 'Flex',
        props: {
          justifyContent: 'space-between',
          align: 'center',
          height: '60px',
          padding: '0 15px',
        },
        H5: {
          props: {
            fontSize: '18px',
            margin: '0',
            letterSpacing: '1.1',
          },
          text: 'Your Cart',
        },
        IconClose: {
          props: {
            justifyContent: 'center',
            align: 'center',
          },
          on: {
            click: (e) => {
              // const overlayBox = document.getElementById('cart-overlay');
              // const cart = document.getElementById('cart-box-side');
              // if (cart && overlayBox) {
              //   closeSideMenuBox(cart, overlayBox);
              // }
              closeSideMenuBox('cart-box-side', 'cart-overlay');
            },
          },
        },
      },
      Product: {
        extend: 'Flex',
        props: {
          width: 'auto',
          height: '40px',
          justifyContent: 'space-between',
          align: 'center',
          margin: '0 20px',
          borderBottom: '1px solid grey',
        },
        H4: {
          text: 'Products',
          props: {
            margin: '0',
            fontSize: '16px',
            fontWeight: '400',
          },
        },
        H5: {
          text: 'Total',
          props: {
            margin: '0',
            fontSize: '16px',
            fontWeight: '400',
          },
        },
      },
      ProductsWrap: {
        extend: 'Flex',
        props: {
          width: '100%',
          flex: '1',
          gap: '5px',
          overflowY: 'scroll',
          flow: 'y',
        },
        style: {
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        },
        ProductList: {},
        /////////// Test Case
        // ProductLista: {
        //   extend: 'Flex',
        //   props: {
        //     height: 'auto',
        //     width: 'auto',
        //     justifyContent: 'space-between',
        //     align: 'center',
        //     padding: '20px 20px',
        //   },
        //   Img: {
        //     attr: {
        //       src: 'https://bataleon.com/cdn/shop/files/Bataleon-Surfer_2025-Bataleon-Snowboards_-product-image-2025-Surfer_2025-Bataleon-Snowboards_-1_106a6796-f2d7-4eb7-8a72-0356a651545e.jpg?v=1724326204&width=823',
        //     },
        //     props: {
        //       width: '150px',
        //       height: '150px',
        //       '@mobileS': {
        //         width: '100px',
        //         height: '100px',
        //       },
        //     },
        //   },
        //   childExtend: {
        //     extend: 'Flex',
        //     tag: 'h5',
        //     props: {
        //       height: 'auto',
        //       gap: '15px',
        //       flow: 'y',
        //       margin: '0',
        //     },
        //   },
        //   $productDetailCollection: () => [
        //     { h5: ProductDetails('Surfer') },
        //     // { h5: ProductDetails('499.99$') },
        //     { h5: ProductDetails('Size: 150 ') },
        //     { h5: ProductDetails('Quantity: 1') },
        //   ],
        //   Total: {
        //     text: '499.99$',
        //     props: {
        //       margin: 0,
        //       fontSize: '18px',
        //       fontWeight: '600',
        //       alignSelf: 'flex-start',
        //     },
        //   },
        // },
        ////////////////////////////////////////////////////////
      },
      BoxFooter: {
        extend: 'Flex',
        props: {
          flow: 'y',
          gap: '30px',
          margin: '0 0 20px 0',
        },
        EstimatedTotal: {
          extend: 'Flex',
          props: {
            justifyContent: 'space-between',
            margin: '0 20px',
          },
          childExtend: {
            extend: 'Flex',
            tag: 'h5',
            props: {
              width: '100%',
              height: 'auto',
              justifyContent: 'space-between',
              margin: '0',
            },
          },
          $estimatedTotal: () => [
            { h5: ProductDetails('Estimated Total:') },
            { h5: ProductDetails('499.99$') },
          ],
        },
        CheckoutContainer: {
          extend: 'Flex',
          props: {
            width: '100%',
            height: '60px',
            justifyContent: 'center',
          },
          a: {
            extend: 'Flex',
            text: 'Check Out',
            attr: {
              href: '/checkout',
            },
            style: {
              listStyleType: 'none',
              textDecoration: 'none',
            },
            props: {
              width: '100%',
              margin: '0 20px',
              height: '60px',
              color: 'black',
              align: 'center',
              justifyContent: 'center',
              fontWeight: '600',
              align: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgb(240, 240, 240)',
              letterSpacing: '1.2px',
              transition: 'background-color 0.2s ease, color 0.2s ease',
              cursor: 'pointer',
              ':hover': {
                backgroundColor: 'black',
                color: 'white',
              },
            },
          },
        },
      },
    },
  },
};

const ProductDetails = (text) => ({
  extend: 'Flex',
  text: text,
  props: {
    margin: 0,
    fontSize: '16px',
    fontWeight: '600',
  },
});
