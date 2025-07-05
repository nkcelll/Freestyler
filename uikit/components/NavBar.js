export const NavBar = {
  extend: 'Flex',
  props: {
    gap: '25px',
    justifyContent: 'center',
    '@tabletS': {
      display: 'none',
    },
  },
  Men: {
    extend: 'Flex',
    a: {
      extend: [
        'Flex',
        'Link',
      ],
      text: 'MEN /',
      props: {
        href: '/',
        height: '77px',
        justifyContent: 'center',
        align: 'center',
        listStyleType: 'none',
        padding: '0',
        margin: '0',
        fontWeight: '400',
        overflow: 'visible',
      },
    },
    MenAbst: {
    },
    on: {
    },
  },
  Women: {
    extend: 'Flex',
    a: {
      extend: [
        'Flex',
        'Link',
      ],
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
    WomenAbst: {
    },
    on: {
      mouseover: () => showDropdown('.women-box-dropdown'),
      mouseout: () => hideDropdown('.women-box-dropdown'),
    },
  },
};