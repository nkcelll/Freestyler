export const ProductsLayout = {
  extend: 'Flex',
  // Overlay: {
  //   width: '100dvw',
  //   height: '100dvh',
  //   backgroundColor: 'red'
  // },
  props: {
    width: '100%',
    overflow: 'hidden',
  },
  
  MainHeader:{
    // extend: 'Flex',
    // overflow: 'auto',

    position: 'sticky',
    top: '0', 
    zIndex: '100',
  },
  MarkingText: {
    
    
  },
  GifTop: {
    '@tabletS': {
      width: 'calc(100dvw - 40px)',
      margin: '0 0 0 40px'
    },

  },
  FilterSection: {
    // overflow: 'hidden',

    // '@tabletS': {
    //   display: 'flex !important',
    // },
    '@tabletS': {
      width: 'calc(100dvw - 40px)',
      margin: '0 0 0 40px'
    },
  },
  Menu: {
    display: 'none !important',
  
    '@tabletS': {
      display: 'flex !important',  
      width: '40px',
      height: 'calc(100vh - 77px)',
      position: 'fixed', 
      flex: 2,
      top: '77px',  
      left: '0', 
      zIndex: '200', 
    },
  },
  GridContent: {
    attr: {
      id: 'product-page-scroll'
    },
    extends: 'Grid',
    flexGrow: 1,
    width: '100dvw',
    columns: 'repeat(4, 1fr)',
    '@tabletM': {
      columns: 'repeat(4, 1fr)',
    },
    '@tabletS': {
      columns: 'repeat(3, 1fr)',
      width: 'calc(100dvw - 40px)',
      margin: '0 0 0 40px'
      // width: 'calc(90%-60px)',
    },
    '@mobileL': {
      columns: 'repeat(2, 1fr)',
    },
    '@mobileS': {
      columns: 'repeat(1, 1fr)',
    },
    backgroundColor: 'rgba(161, 157, 151, 0.5))',
    childExtends: 'ProductsContent',
    childrenAs: 'state',
    children: (el, s) => Object.values(s.rawData.data),
  },
  GifBottom: {
    

  },
  Pagination: {
    
    
    
  },
  Footer: {
    

  }
} 


