export const AddAddress = {
  extend: 'Flex',
  props: {
    width: '100%',
    height: '200px',
    justifyContent: 'center',
    align: 'center',
  },
  AddressContainer: {
    extend: 'Flex',
    props: {
      width: '50%',
      height: 'auto',
      gap: '20px',
      flow: 'y',
      '@mobileL': {
        width: '80%',
      },
    },
    AddressDetailBox: {
      extend: 'Flex',
      props: {
        width: '100%',
        height: 'auto',
        flow: 'y',
        gap: '20px',
        padding: '20px 20px',
        border: '1px solid currentColor',
      },
      NameSection: {
        extend: 'Flex',
        props: {
          width: '100',
          height: '25px',
          gap: '20px',
        },
        UserName: {
          tag: 'span',
          text: 'Address',
          props: {
            fontSize: '16px',
            fontWeight: '600',
            margin: '0',
            color: 'grey',
          },
        },
        Button: {
          extend: 'Flex',
          props: {
            width: 'auto',
            height: 'auto',
            padding: '0',
            backgroundColor: 'transparent',
          },
          IconAdd: {},
          on: {
            click: () => {
              document.getElementById(
                'open-address-change-profile'
              ).style.display = 'flex';
            },
          },
        },
      },
      AddressSection: {
        extend: 'Flex',
        props: {
          width: '100%',
          height: '50px',
          justifyContent: 'center',
          backgroundColor: 'rgb(212, 212, 212)',
          flow: 'y',
          '@light': {
            background: 'rgb(212, 212, 212)',
          },
          '@dark': {
            background: '#4d4e4d',
          },
        },
        NoAddressAdded: {
          extend: 'Flex',
          props: {
            gap: '20px',
            padding: '0 20px',
          },
          IconInfo: {},
          span: {
            text: 'No address added',
          },
        },
      },
    },
  },
};
