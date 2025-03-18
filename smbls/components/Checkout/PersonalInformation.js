import modalReminders from '../../functions/domEvents/modalReminders';

export const PersonalInformation = {
  extend: 'Flex',
  props: {
    width: '40%',
    height: 'auto',
    margin: '20px 20px',
    flow: 'y',
    gap: '20px',
    '@tabletS': {
      order: '1',
      width: 'auto',
    },
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
      // backgroundColor: 'rgb(201, 201, 201)',
      align: 'center',
      padding: '0 20px',
      margin: 0,
      '@light': {
        background: '#c3c4c3',
      },
      '@dark': {
        background: '#696c69',
      },
    },
  },
  ContactSection: {
    extend: 'Flex',
    props: {
      width: '100%',
      height: 'auto',
      flow: 'y',
    },
    ContactHeader: {
      extend: 'Flex',
      props: {
        width: '100%',
        height: '60px',
        justifyContent: 'space-between',
        align: 'center',
        flow: 'x',
        '@light': {
          background: '#eaebea',
        },
        '@dark': {
          background: '#434543',
        },
      },
      H5: {
        extend: 'Flex',
        text: 'Contact',
        props: {
          fontSize: '20px',
          fontWeight: '700',
          letterSpacing: '1.2',
          color: 'currentColor',
          margin: 0,
          padding: '0 20px',
        },
      },
      ToLogIn: {
        extend: ['Link', 'Flex'],
        text: 'Login',
        attr: {},
        style: {
          textDecoration: 'none',
        },
        props: {
          href: '/login',
          width: 'auto',
          height: '60px',
          margin: '0 20px',
          justifyContent: 'center',
          align: 'center',
          color: 'currentColor',
          backgroundcolor: 'white',
          cursor: 'pointer',
        },
      },
    },
    EmailInfo: {
      childExtend: {
        extend: 'Flex',
        props: {
          width: '100%',
          height: 'auto',
          gap: '20px',
          flow: 'y',
          padding: '20px 0 0 0',
        },
      },
      $emailFormCheckout: () => ({
        Form: inputForm('Email Address', 'email', 'checkout-email', '', 'checkout-reminder'),
      }),
    },
  },
  BillingSection: {
    extend: 'Flex',
    props: {
      width: '100%',
      height: 'auto',
      flow: 'y',
    },
    Billing: {
      extend: 'Flex',
      props: {
        width: '100%',
        height: '60px',
        // justifyContent: 'space-between',
        align: 'center',
        flow: 'x',
        '@light': {
          background: '#eaebea',
        },
        '@dark': {
          background: '#434543',
        },
      },
      H5: {
        extend: 'Flex',
        text: 'Billing',
        props: {
          fontSize: '20px',
          fontWeight: '700',
          letterSpacing: '1.2',
          color: 'currentColor',
          margin: 0,
          padding: '0 20px',
        },
      },
    },
    BillingInfo: {
      childExtend: {
        extend: 'Flex',
        props: {
          width: '100%',
          height: 'auto',
          // gap: '20px',
          flow: 'y',
          padding: '20px 0 0 0',
        },
      },
      $billingFormCheckout: () => [
        {
          Form: inputForm('First Name', 'text', 'checkout-firstName', '', 'checkout-reminder'),
        },
        {
          Form: inputForm('Last Name', 'text', 'checkout-lastName', '', 'checkout-reminder'),
        },
        // {
        //   Label: {
        //     text: 'Region',
        //     Select: {
        //       attr: {
        //         id: 'checkout-country',
        //         name: 'countryCode',
        //         text: 'ae',
        //       },
        //       props: {
        //         width: '80%',
        //         height: '60px',
        //         padding: '0 20px'
        //       },
        //       options: [
        //         {
        //           attr: {
        //             value: 'GE',
        //           },
        //           text: 'Tbilisi',
        //         },
        //       ],
        //     },
        //   }
        // },
        {
          Form: inputForm('Street Address', 'text', 'checkout-address', '', 'checkout-reminder'),
        },
        {
          Form: inputForm('Zip Code', 'text', 'checkout-zipCode', '', 'checkout-reminder'),
        },
        {
          Form: inputForm('Phone Number', 'text', 'checkout-phone', '+995 ', 'checkout-reminder'),
        },
      ],
    },
  },
  ButtonSubmit: {
    text: 'Proceed Checkout',
    props: {
      height: '60px',

    },
    on: {
      click: () => modalReminders('checkout-reminder', 
        [
          'checkout-email',
          'checkout-firstName',
          'checkout-lastName',
          'checkout-address',
          'checkout-zipCode',
          'checkout-phone'
        ]
      )
    }
  },
  Policy: {
    extend: 'Flex',
    props: {
      width: '100%',
      height: 'auto',
      margin: '50px 0 0 0',
      justifyContent: 'space-between',
    },
    childExtend: {
      extend: 'Link',
      props: {
        cursor: 'pointer',
        color: 'currentColor',
        fontWeight: '300',
        textDecoration: 'underline',
      },
    },
    $propsCollection: () => [
      {
        text: 'Refund Policy',
        href: '/',
      },
      {
        text: 'Shipping Policy',
        href: '/',
      },
      {
        text: 'Privacy policy',
        href: '/',
      },
      {
        text: 'Terms of service',
        href: '/',
      },
    ],
  },
};

const inputForm = (labelText, inputType, id, inputPlaceHolder, spanClassId) => ({
  extend: 'Flex',
  props: {
    gap: '5px',
    flow: 'y',
  },

  Label: {
    text: labelText,
    extend: 'Flex',
    props: {
      width: '80%',
      height: 'auto',
      flow: 'y',
      fontSize: '16px',
      padding: '0 20px',
      fontWeight: '400',
      gap: '10px',
      flow: 'x',
    },
    Abbr: {
      attr: {
        title: 'required',
      },
      props: {
        textDecoration: 'none',
        color: 'red',
        fontSize: '20px',
      },
      text: '*',
    },
  },
  Span: {
    text: 'Fill the field',
    attr: {
      class: spanClassId,
    },
    props: {
      display: 'none',
      color: 'red',
      padding: '0 20px',
      fontSize: '14px',
    },
  },
  Input: {
    extend: 'Flex',
    attr: {
      type: inputType,
      id: id,
      required: true,
      placeholder: inputPlaceHolder,
    },
    style: {
      borderRadius: '0',
      ':focus': {
        outline: 'none',
        '-webkit-tap-highlight-color': 'transparent',
      },
    },
    props: {
      width: 'auto',
      height: '40px',
      padding: '0 20px',
      borderRadius: '0',
      backgroundColor: 'transparent',
      border: '1px solid currentColor',
      fontSize: '16px',
    },
  },
});
