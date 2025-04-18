export const ProductsContent = {
  extend: ['Flex', 'Link'],
  attr: (el, state) => ({
    id: state.id
  }),
  props: (el, state) => ({
    height: '640px',
    // height: '480px',
    width: 'auto',
    overflow: 'hidden',
    align: 'center',
    justifyContent: 'space-between',
    border: '0 solid black',
    borderRight: '1px solid grey',
    borderBottom: '1px solid grey',
    // backgroundColor: 'rgb(214, 214, 214)',
    // backgroundColor: 'black',
    flow: 'y',
    href: state.href || '/product/' + state.id,
    target: state.href && '_blank',
    cursor: 'pointer',
    '@mobileS': {
      borderRight: 'none',
    }
  }),

  
  ImageContent: {
    extend: 'Flex',
    props: {
      width: '100%',
      height: '100%',
      // height: '400px',
      overflow: 'hidden',
      position: 'relative',
      justifyContent: 'center',
      align: 'center'
    },
    Img: {
      props: {
        src: (el, state) => state.images?.[0] || '',
        width: '90%',
        height: '90%',
        objectFit: 'cover',
        transition: 'opacity 0.8s ease-in-out'
      },
      on: {
        mouseover: (ev, el, s) => {
          if (s.images?.[1]) {
            el.node.style.opacity = 0
            setTimeout(() => {
              el.node.src = s.images[1]
              el.node.style.opacity = 1
            }, 100)
          }
        },
        mouseout: (ev, el, s) => {
          if (s.images?.[0]) {
            el.node.style.opacity = 0
            setTimeout(() => {
              el.node.src = s.images[0]
              el.node.style.opacity = 1
            }, 100);
          }
        }
      }
    }
    
  },

  titleBody: {
    extend: ['Link', 'Flex'],
    props: {
      flow: 'y',
      width: '100%',
      height: '80px',
      padding: '0 0 0 28px',
      justifyContent: 'space-evenly',
      borderTop: '1px solid grey',
      borderBottom: '1px solid grey',
    },
    productName: {
      tag: 'span',
      // text: '{{ title }}' ,
      text: (el, s) => s.title ,
      props: {
        height: 'auto',
        fontSize: '16px',
        fontWeight: '500',
        letterSpacing: '1.2',
      }
      
    },
    childExtend: {
      extend: 'Flex',
      props: {
        flow: 'x',
        gap: '16px',
      },

    },
    priceSection: {
      extend: 'Flex',
      props: {
        gap: '16px'
      },
      price: {
        tag: 'span',
        props: (el, s) => ({
          text: `$ ${'{{ price }}'}`,
          margin: '0',
          fontSize: '14px',
          fontWeight: '500',
          letterSpacing: '1.2',
          textDecoration: s.salePrice ? 'line-through' : 'none', 
        }),
      },
      salePrice: {
        tag: 'span',
        text: (el, s) => s.salePrice ? `$ ${'{{ salePrice }}'}` : '',
        props:{
          margin: '0',
          fontSize: '14px',
          fontWeight: '700',
          color: 'red',
        },

      }
    }
  },
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
//     // backgroundColor: 'rgb(214, 214, 214)',

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

