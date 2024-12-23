
export const main = {
  extend: 'Layout',
  Menu: {
  },
  MainVideo: {
  },
  Content: {
    extends: 'Grid',
    templateColumns: 'repeat(3, 1fr)',
    '@tabletM': {
      templateColumns: 'repeat(2, 1fr)',
    },
    '@mobileL': {
      templateColumns: 'repeat(1, 1fr)',
      heightRange: 'auto',
      maxHeight: 'none',
    },
    gap: 'A',
    minHeight: '-webkit-fill-available',
    childExtends: 'Product',
    childrenAs: 'state',
    children: (el, s) => Object.values(s.products.data),
  },
  
};

// SectionLayout: {
    
//   props: {
//     padding: 'B',
//     gap: 'A',
//     justifyContent: 'center',
//     alignItems: 'flex-start',
//   },
//   children: [
//     {
//       tag: 'div',
//       text: 'This is the first section content',
//       props: {
//         class: 'section-class-1',
//       },
//     },
//     {
//       tag: 'div',
//       text: 'This is the second section content',
//       props: {
//         class: 'section-class-2',
//       },
//     },
//   ],
// },