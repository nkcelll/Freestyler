export const SortBy = {
  extend: 'Flex',
  props: {
    width: '100%',
    height: 'auto',
    flow: 'y',
    borderBottom: '1px solid grey',
  },
  Button: {
    extend: 'Flex',
    props: {
      style: {
        justifyContent: 'space-between',
      },
      width: '100%',
      height: '60px',
      border: 'none',
      borderRadius: '0',
      gap: '15px',
      padding: '0 30px',
    },
    P: {
      text: 'Sort',
      margin: '0',
      letterSpacing: '1px',
    },
    IconArrowDown: {},
    on: {
      click: () => {
        const dropdown = document.getElementById('sort-dropdown_toggle');

        if (dropdown) {
          if (dropdown.style.opacity === '0' || dropdown.style.opacity === '') {
            dropdown.style.opacity = '1'
            dropdown.style.maxHeight = dropdown.scrollHeight + 'px'
            dropdown.style.pointerEvents = 'auto'

          } else {
            dropdown.style.opacity = '0'
            dropdown.style.maxHeight = '0'
            dropdown.style.pointerEvents = 'none'

          }
        }
      },
    },
  },
  SortDropDown: {
    extend: 'Flex',
    attr: {
      id: 'sort-dropdown_toggle',
    },
    props: {
      width: '100%',
      maxHeight: '0',
      flow: 'y',
      gap: '20px',
      overflow: 'hidden',
      opacity: '0',
      backgroundColor: 'white',
      transition: 'max-height 0.5s ease, opacity 0.5s ease',
    },
    $collecion: () => [
      {
        Label: labelExtend('Recomend', '1'),
      },
      {
        Label: labelExtend('Best Sellers'),
      },
      {
        Label: labelExtend('A-Z', 'A-Z'),
      },
      {
        Label: labelExtend('Z-A'),
      },
      {
        Label: labelExtend('Price: High - Low'),
      },
      {
        Label: labelExtend('Price: Low - High'),
      },
    ],
  },
};
const labelExtend = (labelText, id) => ({
  extend: 'Flex',
  props: {
    width: '100%',
    height: '60px',
    flow: 'x',
    gap: '15px',
    padding: '0 30px',
    align: 'center',
  },
  Input: {
    attr: {
      type: 'checkbox',
      id: id,
    },
    props: {
      borderRadius: '50px',
      backgroundColor: 'red',
      cursor: 'pointer',
    },
  },
  Span: {
    text: labelText,
    props: {
      fontWeight: '400',
      fontSize: '16px',
      letterSpacing: '1.1px',
    },
  },
});

// export const SortBy = {
//   extend: 'Flex',
//   props: {
//     width: '100%',
//     height: 'auto',
//     backgroundColor: 'grey',
//     flow: 'y'

//   },
//   Button: {
//     extend: 'Flex',
//     props: {
//       style: {
//         justifyContent: 'space-between',
//       },
//       width: '100%',
//       height: '60px',
//       border: 'none',
//       borderRadius: '0',
//       gap: '15px',
//       padding: '0 30px'

//     },
//     P: {
//       text: 'Sort',
//       margin: '0',
//       letterSpacing: '1px'
//     },
//     IconArrowDowns:{
//     }
//   },
//   SortDropDown: {
//     extend: 'Flex',
//     props: {
//       width: '100%',
//       height: '300px',
//       flow: 'y',
//       gap: '20px',
//       backgroundColor:'grey'
//     },
//     $collecion: () => [
//       {
//         Label: {
//           extend: 'Flex',
//           props: {
//             width: '100%',
//             height: '60px',
//             flow: 'x',
//             gap: '15px',
//             padding: '0 30px',
//             align: 'center',
//           },
//           Input: {
//             attr: {
//               type: 'checkbox'
//             }
//           },
//           Span: {
//             text: 'Recomended',
//             props:{

//             }
//           },
//         }
//       },
//       {
//         Label: {
//           extend: 'Flex',
//           props: {
//             width: '100%',
//             height: '60px',
//             flow: 'x',
//             gap: '15px',
//             padding: '0 30px',
//             align: 'center',
//           },
//           Input: {
//             attr: {
//               type: 'checkbox'
//             }
//           },
//           Span: {
//             text: 'Most Wanted',
//             props:{

//             }
//           },
//         }
//       },
//     ]
//   },

// }
