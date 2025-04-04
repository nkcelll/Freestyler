export const PerProductLayout = {
  extend: 'Flex',
  // extend: 'Block',
  props: {
    width: '100%',
    height: 'auto',
  },
  MainHeader: {
    position: 'sticky',
    top: '0',
    zIndex: '100',
  },
  PerProducts: {
    state: async (el, s) => {
      // Check if state is properly passed
      console.log('PerProductLayout state:', el);  // This should show the state passed to it
  
      // Check if productsData is available in the state
      if (s.productsData) {
        console.log('Products Data in PerProductLayout:', s.productsData);
      } else {
        console.log('No productsData in PerProductLayout');
      }
    },
  },
  PerProductDetails: {},
  Recomendations: {},
  Footer: {},
};
