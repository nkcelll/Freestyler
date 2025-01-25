export const PerProductLayout = {
  extend: 'Block',
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
    props: {
      flex: '1', 
      // overflow: 'auto', 
      // paddingBottom: '100px',
    },
  },
  PerProductDetails: {},
  Recomendations: {
    
  },
  
  Footer: {},
};
