export const ProductsLayout = {
  extend: 'Flex',

  MainHeader:{
    extend: 'Flex',
    props: {
      align: 'center',
    },
  },
  FilterSection: {
    
  },
  ProductsContent: {
    // extend: 'Flex', 
    // props: {
    //   backgroundColor: 'red',
    //   height: '480px',
    //   width: '480px'
    // },

    // extends: 'Grid',
    // templateColumns: 'repeat(3, 1fr)',
    // '@tabletM': {
    //   templateColumns: 'repeat(2, 1fr)',
    // },
    // '@mobileL': {
    //   templateColumns: 'repeat(1, 1fr)',
    //   heightRange: 'auto',
    //   maxHeight: 'none',
    // },
    // gap: 'A',
    // minHeight: '-webkit-fill-available',
    // childExtends: 'Product',
    // childrenAs: 'state',
    // children: (el, s) => Object.values(s.products.data),
    
  }
  
}