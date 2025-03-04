export const ProductsContent = {
  extend: ['Flex', 'Link'],
  props: () => ({
    height: '480px',
    // minWidth: '300px',
    width: 'auto',
    // minHeight: '480px', 
    overflow: 'hidden',
    align: 'center',
    justifyContent: 'space-between',
    border: '0 solid black',
    borderRight: '1px solid grey',
    borderBottom: '1px solid grey',
    backgroundColor: 'rgb(214, 214, 214)',

    flow: 'y',
    href: '/product',
  }),
  ImageContent: {
    extend: 'Flex',
    props: {
      width: '100%',
      height: '400px',
      overflow: 'hidden',
      position: 'relative',
      justifyContent: 'center',
    },
    Img: {
      state: 'posters/0',
      props: {
        src: '{{ src }}',
        maxWidth: '100%',
        maxHeight: '100%',
        objectFit: 'cover',
        display: 'block',
      },
    },
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
    H: {
      text: '{{ title }}',
      fontSize: '16px',
      fontWeight: '500',
    },
    childExtend: {
      extend: 'Flex',
      props: {
        flow: 'x',
        gap: '16px',
      },
    },
    ...[
      {
        props: {
          text: '{{ price }}',
          margin: '0',
          fontSize: '14px',
          fontWeight: '500',
          style: {
            textDecorationLine: 'line-through',
          },
        },
      },
      {
        props: {
          text: '{{ price }}',
          margin: '0',
          fontSize: '14px',
          fontWeight: '700',
          color: 'red',
        },
      },
    ],
  },
};

// export const ProductsContent = {
//   extend: ['Flex', 'Link'],
//   props: () => ({
//     height: '480px',
//     width: 'auto',
//     align: 'center',
//     justifyContent: 'space-between',
//     border: '0 solid black',
//     borderRight: '1px solid grey',
//     borderBottom: '1px solid grey',
//     flow: 'y',
//     href: '/product'
//   }),
//   ImageContent: {
//     extend: 'Flex',
//     props: {
//       width: '100%',
//       height: '100%',
//       justifyContent: 'center'
//     },
//     Img: {
//       state: 'posters/0',
//       props: {
//         src: '{{ src }}',
//         width: '100px',
//         height: 'auto',
//         objectFit: 'cover'

//       },
//     },
//   },

//   titleBody: {
//     extend: ['Link', 'Flex'],
//     props: {
//       flow: 'y',
//       width: '100%',
//       height: '100px',
//       // padding: 'A A 0 A',
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
//     P: {
//       text: '{{ price }}',
//       margin: '0',
//       fontSize: '14px',
//       fontWeight: '500',
//     },
//   },
// }
