export const Order = {
  extend: 'Flex',
  props: {
    width: '40%',
    height: 'fit-content',
    margin: '20px 20px',
    flow: 'y',
    gap: '20px',
    // position: 'fixed',
    // transform: 'translateX(100%)',
    '@tabletS': {
      order: '0',
      width: 'auto',
    },
  },
  MyOrder: {
    extend: 'Flex',
    props: {
      width: '100%',
      height: '60px',
      justifyContent: 'space-between',
      align: 'center',
      flow: 'x',
      padding: '0 20px',
      fontWeight: '800',
      '@light': {
          background: '#c3c4c3',
        },
      '@dark': {
        background: '#696c69',
      }
    },
    H1: {
      extend: 'Flex',
      text: 'YOUR ORDER',
      props: {
        fontSize: '20px',
        letterSpacing: '1.2',
        fontWeight: '800',
        margin: 0,
      },
    },
    Span: {
      text: '1 item',
      props: {
        align: 'center',
        fontSize: '20px',
      },
    },
  },
  childExtend: {
    extend: 'Flex',
    props: {
      width: '100%',
      height: 'auto',
      gap: '6px',
      flow: 'y',
      justifyContent: 'space-between',
      padding: '0 20px',
      letterSpacing: '1.2',
    },
  },
  $priceCollection: () => [
    {
      div: totalItems('Subtotal', '499.99$'),
    },
    {
      div: totalItems('Shipping', `9$`),
    },
    {
      div: totalItems('Tax', '0$'),
    },
  ],
  TotalPrice: {
    extend: 'Flex',
    props: {
      justifyContent: 'space-between',
      align: 'center',
      flow: 'x',
      width: '100%',
      height: '60px',
      padding: '0 20px',
      fontSize: '20px',
      fontWeight: '700',
      borderTop: '1px solid currentColor',
      borderBottom: '1px solid currentColor',
      letterSpacing: '1.2',
    },
    Span: {
      text: 'Total',
    },
    PriceCount: {
      tag: 'span',
      text: '500$',
    },
  },
  OrderContentBox: {
    extend: 'Flex',
    props: {
      width: '100%',
      maxHeight: '500px',
      gap: '5px',
      overflowY: 'scroll',
      flow: 'y',
    },
    style: {
      scrollbarWidth: 'none',
      msOverflowStyle: 'none',
    },
    OrderContent: {
      extend: 'Flex',
      props: (el, s) => ({
        width: 'auto',
        height: 'auto',
        flow: 'x',
        justifyContent: 'flex-start',
        gap: '20px',
      }),
      Img: {
        state: 'posters/0',
        src: 'https://bataleon.com/cdn/shop/files/Bataleon-Surfer_2025-Bataleon-Snowboards_-product-image-2025-Surfer_2025-Bataleon-Snowboards_-1_106a6796-f2d7-4eb7-8a72-0356a651545e.jpg?v=1724326204&width=823',
        // src: '{{ src }}',
        width: '120px',
        maxHeight: '160px',
      },
      TextBox: {
        extend: 'Flex',
        props: {
          width: 'auto',
          gap: '10px',
          pointerEvents: 'all',
          flow: 'y',
        },
        H5: {
          text: 'Burton Family Tree Hometown Hero Camber Snowboard',
          color: 'currentColor',
          fontSize: '18px',
          fontWeight: '600',
          zIndex: '1',
          width: '100%',
          margin: '0',
        },
        Size: {
          tag: 'span',
          text: 'Size: 150',
        },
        Quantity: {
          tag: 'span',
          text: 'Quantity: 1',
        },
        Total: {
          tag: 'span',
          text: 'Total: 500$',
          props: {
            fontWeight: '700',
          },
        },
      },
    },
    /////////////// Test Case
    // OrderContentA: {
    //   extend: 'Flex',
    //   props: (el, s) => ({
    //     width: 'auto',
    //     height: 'auto',
    //     flow: 'x',
    //     justifyContent: 'flex-start',
    //     gap: '20px',
    //   }),
    //   Img: {
    //     state: 'posters/0',
    //     src: 'https://bataleon.com/cdn/shop/files/Bataleon-Surfer_2025-Bataleon-Snowboards_-product-image-2025-Surfer_2025-Bataleon-Snowboards_-1_106a6796-f2d7-4eb7-8a72-0356a651545e.jpg?v=1724326204&width=823',
    //     // src: '{{ src }}',
    //     width: '120px',
    //     maxHeight: '160px',
    //   },
    //   TextBox: {
    //     extend: 'Flex',
    //     props: {
    //       width: 'auto',
    //       gap: '10px',
    //       pointerEvents: 'all',
    //       flow: 'y',
    //     },
    //     H5: {
    //       text: 'Burton Family Tree Hometown Hero Camber Snowboard',
    //       color: 'black',
    //       fontSize: '18px',
    //       fontWeight: '600',
    //       zIndex: '1',
    //       width: '100%',
    //       margin: '0',
    //     },
    //     Size: {
    //       tag: 'span',
    //       text: 'Size: 150',
    //     },
    //     Quantity: {
    //       tag: 'span',
    //       text: 'Quantity: 1',
    //     },
    //     Total: {
    //       tag: 'span',
    //       text: 'Total: 500$',
    //       props: {
    //         fontWeight: '700',
    //       },
    //     },
    //   },
    // },
    // OrderContentB: {
    //   extend: 'Flex',
    //   props: (el, s) => ({
    //     width: 'auto',
    //     height: 'auto',
    //     flow: 'x',
    //     justifyContent: 'flex-start',
    //     gap: '20px',
    //   }),
    //   Img: {
    //     state: 'posters/0',
    //     src: 'https://bataleon.com/cdn/shop/files/Bataleon-Surfer_2025-Bataleon-Snowboards_-product-image-2025-Surfer_2025-Bataleon-Snowboards_-1_106a6796-f2d7-4eb7-8a72-0356a651545e.jpg?v=1724326204&width=823',
    //     // src: '{{ src }}',
    //     width: '120px',
    //     maxHeight: '160px',
    //   },
    //   TextBox: {
    //     extend: 'Flex',
    //     props: {
    //       width: 'auto',
    //       gap: '10px',
    //       pointerEvents: 'all',
    //       flow: 'y',
    //     },
    //     H5: {
    //       text: 'Burton Family Tree Hometown Hero Camber Snowboard',
    //       color: 'black',
    //       fontSize: '18px',
    //       fontWeight: '600',
    //       zIndex: '1',
    //       width: '100%',
    //       margin: '0',
    //     },
    //     Size: {
    //       tag: 'span',
    //       text: 'Size: 150',
    //     },
    //     Quantity: {
    //       tag: 'span',
    //       text: 'Quantity: 1',
    //     },
    //     Total: {
    //       tag: 'span',
    //       text: 'Total: 500$',
    //       props: {
    //         fontWeight: '700',
    //       },
    //     },
    //   },
    // },
    // OrderContentC: {
    //   extend: 'Flex',
    //   props: (el, s) => ({
    //     width: 'auto',
    //     height: 'auto',
    //     flow: 'x',
    //     justifyContent: 'flex-start',
    //     gap: '20px',
    //   }),
    //   Img: {
    //     state: 'posters/0',
    //     src: 'https://bataleon.com/cdn/shop/files/Bataleon-Surfer_2025-Bataleon-Snowboards_-product-image-2025-Surfer_2025-Bataleon-Snowboards_-1_106a6796-f2d7-4eb7-8a72-0356a651545e.jpg?v=1724326204&width=823',
    //     // src: '{{ src }}',
    //     width: '120px',
    //     maxHeight: '160px',
    //   },
    //   TextBox: {
    //     extend: 'Flex',
    //     props: {
    //       width: 'auto',
    //       gap: '10px',
    //       pointerEvents: 'all',
    //       flow: 'y',
    //     },
    //     H5: {
    //       text: 'Burton Family Tree Hometown Hero Camber Snowboard',
    //       color: 'black',
    //       fontSize: '18px',
    //       fontWeight: '600',
    //       zIndex: '1',
    //       width: '100%',
    //       margin: '0',
    //     },
    //     Size: {
    //       tag: 'span',
    //       text: 'Size: 150',
    //     },
    //     Quantity: {
    //       tag: 'span',
    //       text: 'Quantity: 1',
    //     },
    //     Total: {
    //       tag: 'span',
    //       text: 'Total: 500$',
    //       props: {
    //         fontWeight: '700',
    //       },
    //     },
    //   },
    // },
    // OrderContentD: {
    //   extend: 'Flex',
    //   props: (el, s) => ({
    //     width: 'auto',
    //     height: 'auto',
    //     flow: 'x',
    //     justifyContent: 'flex-start',
    //     gap: '20px',
    //   }),
    //   Img: {
    //     state: 'posters/0',
    //     src: 'https://bataleon.com/cdn/shop/files/Bataleon-Surfer_2025-Bataleon-Snowboards_-product-image-2025-Surfer_2025-Bataleon-Snowboards_-1_106a6796-f2d7-4eb7-8a72-0356a651545e.jpg?v=1724326204&width=823',
    //     // src: '{{ src }}',
    //     width: '120px',
    //     maxHeight: '160px',
    //   },
    //   TextBox: {
    //     extend: 'Flex',
    //     props: {
    //       width: 'auto',
    //       gap: '10px',
    //       pointerEvents: 'all',
    //       flow: 'y',
    //     },
    //     H5: {
    //       text: 'Burton Family Tree Hometown Hero Camber Snowboard',
    //       color: 'black',
    //       fontSize: '18px',
    //       fontWeight: '600',
    //       zIndex: '1',
    //       width: '100%',
    //       margin: '0',
    //     },
    //     Size: {
    //       tag: 'span',
    //       text: 'Size: 150',
    //     },
    //     Quantity: {
    //       tag: 'span',
    //       text: 'Quantity: 1',
    //     },
    //     Total: {
    //       tag: 'span',
    //       text: 'Total: 500$',
    //       props: {
    //         fontWeight: '700',
    //       },
    //     },
    //   },
    // },
    ////////////////////
    
  },


};

const totalItems = (total, price) => ({
  extend: 'Flex',
  props: {
    justifyContent: 'space-between',
    align: 'center',
    width: '100%',
    height: '40px',
    fontSize: '18px',
  },
  Span: {
    text: total,
  },
  PriceCount: {
    tag: 'span',
    text: price,
  },
});
