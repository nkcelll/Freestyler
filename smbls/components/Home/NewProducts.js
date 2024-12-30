export const NewProducts = {
  extend: [
    'Link',
    'Flex',
  ],
  props: (el, s) => ({
    // heightRange: 'H',
    disply: 'flex',
    flow: 'y',
    row: 'column',
    position: 'relative',
    overflow: 'hidden',
    // justifyContent: 'space-between',
    gap: 'B',
    href: s.href || '/products' + s.key,
  }),
  Img: {
    state: 'posters/0',
    props: {
      objectFit: 'cover',
      maxHeight: 'calc(100dvh - 77px)', 
      aspectRatio : 'auto',
      src: '{{ src }}',
      borderRadius: '3px',
      filter: 'saturate(0)',
      transform: 'scale(1)',
      transition: 'transform 0.6s ease, filter 0.6s ease',
      ':hover': {
        filter: 'saturate(1)', 
        transform: 'scale(1.1)',
      },
    },
  },
  P: {
    text: '{{ title }}',
    position: 'absolute',
    bottom: '10px',
    left: '50%',
    transform: 'translateX(-50%)',
    color: 'black',
    fontSize: '16px',
    zIndex: '1',
    width: '100%', 
    textAlign: 'center', 
  },
};

  










































// export const NewProducts = {
//   extend: ['Flex'],
//   props: {
//     height: 'calc(100vh - 77px)',
//     flow: 'x',
//     justifyContent: 'space-between',
//     alignItems: 'stretch',
//     flex: '1 1 auto',
//     gap: '10px', // Adds spacing between sections
//     padding: '0 20px', // Padding around the container
//   },
//   Sections: {
//     list: [
//       {
//         category: 'Snowboards',
//         image: 'path-to-snowboards-image.jpg',
//       },
//       {
//         category: 'Clothes',
//         image: 'path-to-clothes-image.jpg',
//       },
//       {
//         category: 'Goggles',
//         image: 'path-to-goggles-image.jpg',
//       },
//       {
//         category: 'Helmets',
//         image: 'path-to-helmets-image.jpg',
//       },
//       {
//         category: 'Gloves',
//         image: 'path-to-gloves-image.jpg',
//       },
//       {
//         category: 'Neck Warmers',
//         image: 'path-to-neckwarmers-image.jpg',
//       },
//       {
//         category: 'Accessories',
//         image: 'path-to-accessories-image.jpg',
//       },
//     ],
//     extend: ['Flex'],
//     props: {
//       flow: 'y',
//       flex: '1 1 auto',
//       position: 'relative',
//       background: 'rgb(250, 250, 250)', // Default background
//       overflow: 'hidden',
//       transition: 'all 0.3s ease',
//       ':hover': {
//         transform: 'scale(1.03)',
//         boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
//       },
//     },
//     Img: {
//       props: {
//         src: '{{ image }}',
//         objectFit: 'cover',
//         height: '75%',
//         width: '100%',
//         transition: 'transform 0.3s ease',
//       },
//     },
//     P: {
//       text: '{{ category }}',
//       props: {
//         fontSize: '1.2rem',
//         fontWeight: 'bold',
//         textAlign: 'center',
//         margin: '10px 0',
//       },
//     },
//   },
// };

  
    
  // A: {
  //   attr: {
  //     key: 'SnowBoardButton'
  //   },
  //   props: {
  //     cursor: 'pointer'
  //   },
  //   Img: {
  //     attr: {
  //       src: 'https://files-production-symbols-platform-development-en-d5-u3-p7x0.based.dev/fi32187874/1f00784c-236e-4907-a8a2-01db2d7c6bef-406f99bc-6e7e-4388-ba63-8288a9270933-e0b07ba8-241e-440d-b5fc-d34671565ca6.png'
  //     }
  //   }
  // },
  // Button: {
  //   attr: {
  //     key: 'SnowBoardButton'
  //   },
  //   Img: {
  //     attr: {
  //       src: 'https://files-production-symbols-platform-development-en-d5-u3-p7x0.based.dev/fi32187874/1f00784c-236e-4907-a8a2-01db2d7c6bef-406f99bc-6e7e-4388-ba63-8288a9270933-e0b07ba8-241e-440d-b5fc-d34671565ca6.png'
  //     }
  //   }
  // }
  // Individual product card
  // Product: {
  //   extend: ['Link', 'Flex'],
  //   props: (el, s) => ({
  //     position: 'relative',
  //     padding: 'A A 0',
  //     aspectRatio: '450 / 600',
  //     flow: 'y',
  //     fontWeight: '400',
  //     href: s.href || '/item/' + s.key,
  //     target: s.href && '_blank',
  //     transition: 'defaultBezier, all, B',
  //     '@light': {
  //       background: 'rgb(41, 41, 41)',
  //       ':hover': {
  //         background: 'rgb(117, 116, 116)',
  //       },
  //     },
  //     '@dark': {
  //       background: '#181818',
  //       ':hover': {
  //         background: '#080808',
  //       },
  //     },
  //     ':hover': {
  //       '& img': {
  //         transform: 'translate3d(-50%, -70%, 1px)',
  //       },
  //       '& p': {
  //         opacity: 1,
  //         transform: 'translate3d(0, 0, 1px)',
  //       },
  //     },
  //   }),
  //   Img: {
  //     props: {
  //       position: 'absolute',
  //       top: '50%',
  //       left: '50%',
  //       transform: 'translate3d(-50%, -57.5%, 1px)',
  //       maxWidth: '65%',
  //       maxHeight: '65%',
  //       transition: 'B defaultBezier',
  //       src: '{{ src }}',
  //     },
  //   },
  //   Text: {
  //     extend: 'P',
  //     props: {
  //       margin: 'Z 0',
  //       fontSize: 'Y',
  //       text: '{{ description }}',
  //       transform: 'translate3d(0, 10%, 1px)',
  //       transition: 'opacity, transform, margin',
  //       opacity: 0,
  //     },
  //   },
  // },












// export const NewProducts = {
//   extend: 'Flex',
//   props: {
//     // backgroundColor: '#723E3E',
//   },
//   Img: {
//     tag: 'a',
//     state: 'poster/0',
//     props: {
//       position: 'absolute',
//       top: '50%',
//       left: '50%',
//       transform: 'translate3d(-50%, -57.5%, 1px)',
//       // maxWidth: 'auto',
//       // maxHeight: 'auto',
//       src: '{{ src }}',
//       // transition: 'B defaultBezier',
//       // transitionProperty: 'opacity, transform',
//     },
//   },
  
  // Img: {
  //   tag: 'a',
  //   state: 'poster/0',
  //   props: {
  //     position: 'absolute',
  //     top: '50%',
  //     left: '50%',
  //     transform: 'translate3d(-50%, -57.5%, 1px)',
  //     // maxWidth: 'auto',
  //     // maxHeight: 'auto',
  //     src: '{{ src }}',
  //     // transition: 'B defaultBezier',
  //     // transitionProperty: 'opacity, transform',
  //   },
  // },
  
// }
