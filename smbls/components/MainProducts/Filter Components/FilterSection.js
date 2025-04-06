export const FilterSection = {
  extend: 'Flex',
  props: {
    width: '100%',
    height: '60px',
    justifyContent: 'space-between',
    align: 'center',
    '@light': { background: '#CDCBCB' },
    '@dark': { background: '#343634' },
  },

  // on: {
  //   render: (el, s) => {
  //     setTimeout(() => {
  //       const stored = localStorage.getItem('grid-row');
  //       const gridContainer = document.getElementById('products-grid-container');
        
  //       if (gridContainer && stored) {
  //         const columnsMap = {
  //           'grid-row-2': 'repeat(2, 1fr)',
  //           'grid-row-3': 'repeat(3, 1fr)',
  //           'grid-row-4': 'repeat(4, 1fr)',
  //         };
  //         gridContainer.style.gridTemplateColumns = columnsMap[stored]
  //       }
  //       if(!stored) {
  //         gridContainer.style.gridTemplateColumns = 'repeat(4, 1fr)';
  //       }
  //     }, 50);
  //   },
  // },

  P: {
    text: (el, s) => `${s.productsData.length ?? 0} Products`,
    props: {
      margin: '0 0 0 46px',
      letterSpacing: '1.2',
      fontSize: '16px',
      width: '126px',
      '@mobileL': { margin: '0 0 0 16px' },
    },
  },

  GridColumns: {
    extend: 'Flex',
    props: {
      width: 'auto',
      height: '50%',
      gap: '16px',
      '@tabletS': {
        display: 'none'
      }
    },

    childExtend: {
      extend: 'Button',
      props: {
        background: 'transparent',
        padding: 0,
      },
      on: {
        click: (ev, el, s) => {
          const id = ev.currentTarget.id;
          const gridContainer = document.getElementById('products-grid-container');
          
          if (gridContainer) {
            const columnsMap = {
              'grid-row-2': 'repeat(2, 1fr)',
              'grid-row-3': 'repeat(3, 1fr)',
              'grid-row-4': 'repeat(4, 1fr)',
            };
            gridContainer.style.gridTemplateColumns = columnsMap[id];
            localStorage.setItem('grid-row', id); 
          }
        },
        
      },
    },

    $propsCollection: () => [
      { id: 'grid-row-2', IconGrid2: {} },
      { id: 'grid-row-3', IconGrid3: {} },
      { id: 'grid-row-4', IconGrid4: {} },
    ],
  },

  FilterMenu: {},
};


// export const FilterSection = {
//   extend: 'Flex',

//   props: {
//     width: '100%',
//     height: '60px',
//     // backgroundColor: '#D8D5D5',
//     justifyContent: 'space-between',
//     align: 'center',
//     '@light': {
//       background: '#CDCBCB',
//     },
//     '@dark': {
//       background: '#343634',
//     },
//   },
//   P: {
//     text: (el, s) => `${s.productsData.length ?? 0} Products`,
//     props: {
//       margin: '0 0 0 46px',
//       letterSpacing: '1.2',
//       fontSize: '16px',
//       width: '126px',
//       '@mobileL': {
//        margin: '0 0 0 16px'
//       }
//     }
//   },
//   GridColumns: {
//     extend: 'Flex',
//     props: {
//       width: 'auto',
//       height: '50%',
//       gap: '16px',
//       borderBottom: '1px solid currentColor',
//     },
//     childExtend: {
//       extend: 'Button',
//       props: {
//         background: 'transparent',
//         // width: 'auto',
//         padding: 0
//       },
//       on: {
//         click: (ev, el, s) => {
//           // const storedRow = localStorage.getItem('grid-row');
//           const id = ev.currentTarget.id
//           const gridContainer = document.getElementById('products-grid-container')
          
//           switch (id) {
//             case 'grid-row-2':  
//               gridContainer.style.gridTemplateColumns = 'repeat(2, 1fr)'
//               break;
//             case 'grid-row-3':  
//               gridContainer.style.gridTemplateColumns = 'repeat(3, 1fr)'
//               break;
//             case 'grid-row-4':  
//               gridContainer.style.gridTemplateColumns = 'repeat(4, 1fr)'
//               break;
//             default:
//               break;
//           }
//           // localStorage.setItem('grid-row', id)
//           sessionStorage.setItem('grid-row', id);
//         },
        
//       }
//     },
//     $propsCollection: () => [
//       {
//         id: 'grid-row-2',
//         IconGrid2: {},
//       },
//       {
//         id: 'grid-row-3',
//         IconGrid3:{},
//       },
//       {
//         id: 'grid-row-4',
//         IconGrid4:{},
//       },
//     ],
    

//   },
  
//   FilterMenu:{
    
//   }
// };
