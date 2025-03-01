import { ButtonSubmit } from "../Shared/components/ButtonSubmit";

export const Checkout = {
  extend: 'Flex',
  props: {
    width: '100%',
    height: 'auto',
    justifyContent: 'space-between',
    backgroundColor: '#E4E2E2',
    '@tabletS': {
      flow: 'y',
      justifyContent: 'row-reverse',
      gap: '20px'
    }
  },
  SecureCheckout: {
    extend: 'Flex',
    props: {
      width: '50%',
      height: '1000px',
      margin: '20px 20px',
      flow: 'y',
      gap: '20px',
      '@tabletS': {
      order: '1',
      width: 'auto'
    }
      // backgroundColor: 'red',
    },
    H1: {
      extend: 'Flex',
      text: 'CHECKOUT',
      props: {
        fontSize: '20px',
        width: '100%',
        height: '60px',
        letterSpacing: '1.2',
        fontWeight: '800',
        // borderBottom: '1px solid black',
        backgroundColor: 'rgb(201, 201, 201)',
        justifyContent: 'center',
        padding: '0 20px',
        margin: 0,
      },
    },
    H5: {
      extend: 'Flex',
      text: 'Contact',
      props: {
        fontSize: '20px',
        fontWeight: '700',
        width: '100%',
        height: '60px',
        letterSpacing: '1.2',
        border: '1px solid black',
        color: 'white',
        backgroundColor: 'black',
        justifyContent: 'center',
        margin: 0,
      },
    },
    Input: {
      extend: 'Flex',
      attr: {
        type: 'Email',
        id: 'checkout-email-address',
        placeholder: 'Email Address',
      },
      style: {
        borderRadius: 0,
      },
      props: {
        width: '50%',
        height: '60px',
        ':focus': {
          outline: 'none',
          '-webkit-tap-highlight-color': 'transparent',
        },
      },
    },
    H3: {
      extend: 'Flex',
      text: 'Personal Infromation',
      props: {
        fontSize: '20px',
        fontWeight: '700',
        width: '100%',
        height: '60px',
        letterSpacing: '1.2',
        border: '1px solid black',
        color: 'white',
        backgroundColor: 'black',
        justifyContent: 'center',
        margin: 0,
      },
    },
    childExtend: {
      extend: 'Flex',
      props: {
        width: '100%',
        height: 'auto',
        gap: '20px',
        flow: 'y',
      },
    },
    $checkoutInformation: () => [
      {
        div: inputForm('', '', 'First Name'),
      },
      {
        div: inputForm('', '', 'Last Name'),
      },
      {
        Select: {
          attr: {
            id: 'checkout-country',
            name: 'country',
            text: 'ae',
          },
          props: {
            width: '80%',
            height: '60px',
          },
          options: [
            {
              value: 'tbilisi',
              text: 'Tbilisi',
            },
          ],
        },
      },
      {
        div: inputForm('', '', 'Street Address'),
      },
      {
        div: inputForm('', '', 'Zip Code'),
      },
      {
        div: inputForm('', '', 'Phone Number'),
      },
    ],
    ButtonSubmit: {
      text: 'Proceed Checkout',
      height: '60px'
    },
  },
  Order: {
    extend: 'Flex',
    props: {
      width: '50%',
      height: 'fit-content',
      margin: '20px 20px',
      flow: 'y',
      gap: '20px',
      '@tabletS': {
        order: '0',
        width: 'auto',
      }
      // backgroundColor: 'red',
    },
    MyOrder: {
      extend: 'Flex',
      props: {
        width: '100%',
        height: '60px',
        backgroundColor: 'rgb(201, 201, 201)',
        justifyContent: 'space-between',
        align: 'center',
        flow: 'x',
        padding: '0 20px',
        fontWeight: '800',
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
        borderTop: '1px solid black',
        borderBottom: '1px solid black',
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
          color: 'black',
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
  },
};

const inputForm = (inputType, id, placeholder) => ({
  Label: {
    text: placeholder, // ✅ Set text inside Label
    extend: 'Flex',
    props: {
      width: '80%',
      height: 'auto',
      flow: 'y',
      gap: '10px',
      fontSize: '16px',
    },
    Input: {
      extend: 'Flex',
      attr: {
        type: inputType,
        id: id,
      },
      style: {
        borderRadius: 0,
      },
      props: {
        width: '80%',
        height: '40px',
        padding: '0',
        ':focus': {
          outline: 'none',
          '-webkit-tap-highlight-color': 'transparent',
        },
      },
    },
  },
});

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
