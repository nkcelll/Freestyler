import { showDropdown, hideDropdown } from '../../../functions';

export const Nav = {
  extend: 'Flex',
  props: {
    gap: '25px',
    flex: '1',
    justifyContent: 'center',
    '@tabletS': {
      display: 'none',
    },
  },
  Men: {
    extend: 'Flex',
    a: {
      extend: ['Flex', 'Link'],
      text: 'MEN /',
      attr: {
        href: '/',
      },
      props: {
        height: '77px',
        justifyContent: 'center',
        align: 'center',
        listStyleType: 'none',
        padding: '0',
        margin: '0',
        fontWeight: '400',
        overflow: 'visible'
      },
    },
    MenAbst: {},
    on: {
      mouseover: () => showDropdown('.men-box-dropdown'),
      mouseout: () => hideDropdown('.men-box-dropdown'),
    },
  },
  Women: {
    extend: 'Flex',
    a: {
      extend: ['Flex', 'Link'],
      text: 'WOMEN /',
      attr: {
        href: '/',
      },
      props: {
        height: '77px',
        justifyContent: 'center',
        align: 'center',
        listStyleType: 'none',
        padding: '0',
        margin: '0',
        fontWeight: '400',
      },
    },
    WomenAbst: {},
    on: {
      mouseover: () => showDropdown('.women-box-dropdown'),
      mouseout: () => hideDropdown('.women-box-dropdown'),
    },
  },
};


