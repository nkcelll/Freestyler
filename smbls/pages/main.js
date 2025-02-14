export const main = {
  extend: 'Layout',
  props: {
    // flow: 'row wrap',
    flow: 'wrap',
  },
  NewMenu: {
  
  },
  // Menu: {
  //   display: 'none !important',
  //   width: '60px',
  //   flex: 3,
  //   height: 'calc(100vh - 77px)',
  //   top: '0',
  //   order: '1',
  //   '@tabletS': {
  //     display: 'flex !important',
  //   },
  // },
  Content: {
    
    // extends: 'Flex',
    // backgroundColor: '#723E3E',
    // justifyContent: 'space-between',
    // padding: '0 A',
    
    // gap: '43px',
    // minHeight: '-webkit-fill-available',
    // childExtends: 'NewProducts',
    // childrenAs: 'state',
    // children: (el, s) => Object.values(s.products.data),
  },
}

    
// export const main = {
//   extend: 'Layout',
//   props: {
//     flow: 'row wrap',
//   },
//   Menu: {
//   },
//   MainVideo: {
//   },
//   Content: {
//     extends: 'Grid',
//     templateColumns: 'repeat(3, 1fr)',
//     '@tabletM': {
//       templateColumns: 'repeat(2, 1fr)',
//     },
//     '@mobileL': {
//       templateColumns: 'repeat(1, 1fr)',
//       heightRange: 'auto',
//       maxHeight: 'none',
//     },
//     gap: 'A',
//     minHeight: '-webkit-fill-available',
//     childExtends: 'Product',
//     childrenAs: 'state',
//     children: (el, s) => Object.values(s.products.data),
//   },
// };
// export const sect = {
//   SectionLayout:{
//   }
// }
