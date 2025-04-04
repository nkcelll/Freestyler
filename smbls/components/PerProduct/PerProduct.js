import { ReminderSpan } from '../Shared/components/ReminderSpan';
import { ModalImage } from './ProdComponents/ModalImage';

export const PerProducts = {
  extend: 'Flex',
  props: {
    width: '100%',
    height: 'auto',
    gap: '30px',
    padding: '20px',
    // background: '#E4E2E2',
    // flex: '1 1',
    '@mobileL': {
      flow: 'y',
    },
  },
  ProductImages: {
    // width: '100%',
  },
  MainProduct: {
    extend: 'Flex',
    props: {
      width: '50%',
      height: 'fit-content',
      flow: 'y',
      gap: '30px',
      position: 'sticky',
      top: '77px',
      '@tabletL': {
        width: '50%',
        gap: '20px',
        height: 'auto',
      },
      '@tabletS': {
        width: '50%',
        height: 'fit-content',
      },
      '@mobileL': {
        width: '100%',
        gap: '30px',
        height: 'auto',
      },
    },
    H1: {
      props: (el,s) => ({
        text: 'Bataleon Ecko mode',
        // text: s.name ? '{{ name }}' : '',
        fontSize: '32px',
        margin: '0',
        fontWeight: '500',
      }),
    },
    p: {
      text: `Price -  900$`,
      props: {
        fontSize: '18px',
        margin: '0',
        fontWeight: '600',
      },
    },
    Size: {
      extend: 'Flex',
      props: {
        flow: 'y',
        gap: '15px',
      },
      Label: {
        text: 'Select Size :',
        props: {
          fontSize: '18px',
          fontWeight: '600',
        },
      },
      ReminderSpan: {
        text: 'Please select size',
        id: 'size-reminder',
      },
      SizeBox: {
        extend: 'Flex',
        props: {
          width: 'auto',
          height: 'auto',
          gap: '15px',
          flow: 'row wrap',
        },
        childExtend: 'InputSize',
        $stateCollection: (el, s) => s.sizes.sizeText,
      },
    },
    Description: {
      tag: 'p',
      text: ({ state }) => state.productDescription.description,
      props: {
        // text: 'Built for steep lines, deep days and powerful all-terrain riding. Built for steep lines, deep days and powerful all-terrain riding. Built for steep lines, deep days and powerful all-terrain riding.',
        fontSize: '18px',
        margin: '0',
        fontWeight: '200',
      },
    },
    Quantity: {
      extend: 'Flex',
      props: {
        flow: 'y',
      },
      P: {
        text: 'Amount:',
      },
      IncDecButton: {},
    },
    AddToCart: {
      extend: 'Flex',
      props: {
        width: '100%',
        height: '50px',
        justifyContent: 'center',
      },
      Button: {
        extend: 'Flex',
        attr: {
          id: 'add-to-cart',
          type: 'button',
        },
        text: 'Add to cart',
        on: {
          click: () => chooseSizeReminder(),
        },
        style: {
          border: '1px solid currentColor',
          borderRadius: '0',
          transition: 'background-color 0.2s ease, color 0.2s ease',
        },
        props: {
          // borderColor: 'currentColor',
          color: 'currentColor',
          height: '100%',
          alignSelf: 'center',
          justifySelf: 'center',
          backgroundColor: 'transparent',
          fontWeight: '400',
          ':hover': {
            backgroundcolor: 'black',
            color: 'white',
          },
          '@tabletS': {
            width: '100%',
            height: '50px',
          },
          '@mobileL': {
            width: '100%',
            backgroundcolor: 'black',
            color: 'white',
          },
          '@mobileM': {
            width: '100%',
            backgroundcolor: 'black',
            color: 'white',
          },
        },
      },
    },
    ShippingPolicy: {},
  },
};

const chooseSizeReminder = () => {
  const selectedSize = document.querySelector('input[name="size"]:checked');
  const reminder = document.getElementById('size-reminder');

  if (!selectedSize) {
    reminder.style.display = 'flex';
  } else if (selectedSize) {
    reminder.style.display = 'none';
  }
};
