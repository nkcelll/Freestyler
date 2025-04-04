export const FilterSection = {
  extend: 'Flex',

  props: {
    width: '100%',
    height: '60px',
    // backgroundColor: '#D8D5D5',
    justifyContent: 'space-between',
    align: 'center',
    '@light': {
      background: '#CDCBCB',
    },
    '@dark': {
      background: '#343634',
    },
  },
  P: {
    text: (el, s) => `${s.productsData.length ?? 0} Products`,
    props: {
      margin: '0 0 0 46px',
      fontSize: '16px',
      '@mobileL': {
       margin: '0 0 0 16px'
      }
    }
  },
  FilterMenu:{
    
  }
};
