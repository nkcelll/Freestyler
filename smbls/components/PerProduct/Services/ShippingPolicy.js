import PerProductSpecsDropdown from '../../../functions/domEvents/PerProductSpecsDropdown';

export const ShippingPolicy = {
  Container: {
    extend: 'Flex',
    props: {
      align: 'center',
      justifyContent: 'space-between',
      width: '100%',
      borderBottom: '1px solid grey',
      cursor: 'pointer',
    },
    H5: {
      text: 'Shipping Policy',
      props: {
        margin: '12px 0',
        fontSize: '18px',
        fontWeight: '400',
        letterSpacing: '1.2px',
        fontWeight: '600',
      },
    },
    IconArrowDown: {},
    on: {
      click: (e) => {
        const shippingDrop = document.getElementById('shipping-drop');
        const icon = e.currentTarget.querySelector('.arrow-down-icon');

        PerProductSpecsDropdown(shippingDrop, icon);
      },
    },
  },
  Terms: {
    attr: {
      id: 'shipping-drop',
    },
    props: {
      maxHeight: 0,
      overflow: 'hidden',
      transition: 'max-height 0.3s ease-in-out',
    },
    P: {
      text: 'Over 200Gel shipping free',
    },
  },
};
