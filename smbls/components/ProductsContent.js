export const ProductsContent = {
  extend: [
    'Grid',
  ],
  props: {
    width: '100dvw',
    columns: 'repeat(4, 1fr)',
  },
  item: {
    extend: [
      'Flex',
      'Link'],
    
    props: {
      // backgroundColor: 'red',
      height: '480px',
      width: 'auto',
      align: 'center',
      justifyContent: 'space-between',
      border: '1px solid black',
      // gap: '15px',
      // padding: '20px',
      // margin: '0',

      flow: 'y'
    },
    Img : {
      state: 'poster/0',
      props: {
        // src: '{{ src }}'
        src: 'https://files-production-symbols-platform-development-en-d5-u3-p7x0.based.dev/fi89d2cca5/25611499-5bf9-4e6d-8212-41d0984e4abd-186e00cb-8bda-4e83-8e58-93e6d3d7d027-acc3b8a7-107c-46d5-9309-ca05f879c3fd.png',
        width: '100px',
        height: 'auto'
      },
    },
    titleBody: {
      extend: [
        'Link',
        'Flex'
      ],
      props: {
        flow: 'y',
        width: '100%',
        height: '100px',
        padding: 'A A 0 A',
        border: '1px solid black',
        // gap: '5px'
      },

      H: {
        text: 'Bataleon eko sky',
        fontSize: '16px',
        fontWeight: '500'
      },
      P: {
        text: '$199.99',
        margin: '0',
        fontSize: '14px',
        fontWeight: '500'
      }
    }
  },
};











// export const ProductsContent = {
//   extend: [
//     'Grid',
//   ],
//   props: {
//     // width: '100dvw',
//     columns: 'repeat(4, 1fr)',
//   },
//   item: {
//     extend: [
//       'Flex',
//       'Link'],
    
//     props: {
//       // backgroundColor: 'red',
//       height: '480px',
//       width: '480px',
//       align: 'center',
//       justifyContent: 'space-between',
//       border: '1px solid black',
//       // gap: '15px',
//       // padding: '20px',
//       // margin: '0',

//       flow: 'y'
//     },
//     Img : {
//       state: 'poster/0',
//       props: {
//         // src: '{{ src }}'
//         src: 'https://files-production-symbols-platform-development-en-d5-u3-p7x0.based.dev/fi89d2cca5/25611499-5bf9-4e6d-8212-41d0984e4abd-186e00cb-8bda-4e83-8e58-93e6d3d7d027-acc3b8a7-107c-46d5-9309-ca05f879c3fd.png',
//         width: '100px',
//         height: 'auto'
//       },
//     },
//     titleBody: {
//       extend: [
//         'Link',
//         'Flex'
//       ],
//       props: {
//         flow: 'y',
//         width: '100%',
//         height: '100px',
//         padding: 'A A 0 A',
//         border: '1px solid black',
//         // gap: '5px'
//       },

//       H: {
//         text: 'Bataleon eko sky',
//         fontSize: '16px',
//         fontWeight: '500'
//       },
//       P: {
//         text: '$199.99',
//         margin: '0',
//         fontSize: '14px',
//         fontWeight: '500'
//       }
//     }
//   },
// };

