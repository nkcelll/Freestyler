export const ProductsContent = {
  // extend: ['Flex', 'Link'],
  // props: (el, state) => ({
  //   // id: state.produc,
  //   height: '480px',
  //   width: 'auto',
  //   overflow: 'hidden',
  //   align: 'center',
  //   justifyContent: 'space-between',
  //   border: '0 solid black',
  //   borderRight: '1px solid grey',
  //   borderBottom: '1px solid grey',
  //   backgroundColor: 'rgb(214, 214, 214)',
  //   flow: 'y',
  //   href: '/product',
  //   id
  // }),

  // ImageContent: {
  //   extend: 'Flex',
  //   props: {
  //     width: '100%',
  //     height: '400px',
  //     overflow: 'hidden',
  //     position: 'relative',
  //     justifyContent: 'center',
  //   },
  //   Img: {
  //     state: (el, state) => state?.product?.image || '',  // Dynamically accessing image data
  //     props: {
  //       src: '{{ src }}',
  //       maxWidth: '100%',
  //       maxHeight: '100%',
  //       objectFit: 'cover',
  //       display: 'block',
  //     },
  //   },
  // },

  // titleBody: {
  //   extend: ['Link', 'Flex'],
  //   props: {
  //     flow: 'y',
  //     width: '100%',
  //     height: '80px',
  //     padding: '0 0 0 28px',
  //     justifyContent: 'space-evenly',
  //     borderTop: '1px solid grey',
  //     borderBottom: '1px solid grey',
  //   },
  //   H: {
  //     text: '{{ title }}',
  //     fontSize: '16px',
  //     fontWeight: '500',
  //   },
  //   childExtend: {
  //     extend: 'Flex',
  //     props: {
  //       flow: 'x',
  //       gap: '16px',
  //     },
  //   },
  //   ...[
  //     {
  //       props: {
  //         text: '{{ originalPrice }}',
  //         margin: '0',
  //         fontSize: '14px',
  //         fontWeight: '500',
  //         style: {
  //           textDecorationLine: 'line-through',
  //         },
  //       },
  //     },
  //     {
  //       props: {
  //         text: '{{ price }}',
  //         margin: '0',
  //         fontSize: '14px',
  //         fontWeight: '700',
  //         color: 'red',
  //       },
  //     },
  //   ],
  // },
};






///////////////////////// MY ORIGINAL
// export const ProductsContent = {
//   extend: ['Flex', 'Link'],
//   props: () => ({
//     height: '480px',
//     // minWidth: '300px',
//     width: 'auto',
//     // minHeight: '480px', 
//     overflow: 'hidden',
//     align: 'center',
//     justifyContent: 'space-between',
//     border: '0 solid black',
//     borderRight: '1px solid grey',
//     borderBottom: '1px solid grey',
//     backgroundColor: 'rgb(214, 214, 214)',

//     flow: 'y',
//     href: '/product',
//   }),
//   ImageContent: {
//     extend: 'Flex',
//     props: {
//       width: '100%',
//       height: '400px',
//       overflow: 'hidden',
//       position: 'relative',
//       justifyContent: 'center',
//     },
//     Img: {
//       state: 'posters/0',
//       props: {
//         src: '{{ src }}',
//         maxWidth: '100%',
//         maxHeight: '100%',
//         objectFit: 'cover',
//         display: 'block',
//       },
//     },
//   },

//   titleBody: {
//     extend: ['Link', 'Flex'],
//     props: {
//       flow: 'y',
//       width: '100%',
//       height: '80px',
//       padding: '0 0 0 28px',
//       justifyContent: 'space-evenly',
//       borderTop: '1px solid grey',
//       borderBottom: '1px solid grey',
//     },
//     H: {
//       text: '{{ title }}',
//       fontSize: '16px',
//       fontWeight: '500',
//     },
//     childExtend: {
//       extend: 'Flex',
//       props: {
//         flow: 'x',
//         gap: '16px',
//       },
//     },
//     ...[
//       {
//         props: {
//           text: '{{ price }}',
//           margin: '0',
//           fontSize: '14px',
//           fontWeight: '500',
//           style: {
//             textDecorationLine: 'line-through',
//           },
//         },
//       },
//       {
//         props: {
//           text: '{{ price }}',
//           margin: '0',
//           fontSize: '14px',
//           fontWeight: '700',
//           color: 'red',
//         },
//       },
//     ],
//   },
// };

