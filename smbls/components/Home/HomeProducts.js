export const HomeImageProducts = {
  extend: [
    'Link',
    'Flex',
  ],
  props: (el, s) => ({
    
    display: 'flex', 
    position: 'relative',
    href: s.href || '/products' + s.key,
    width: 'auto', 
    // width: '200px', 
    // overflow: 'hidden'
  }),
  Img: {
    state: 'posters/0',
    props: {
      objectFit: 'cover',
      maxHeight: 'calc(100dvh - 77px)', 
      aspectRatio: 'auto',
      overflow: 'hidden',

      src: '{{ src }}',
      borderRadius: '3px',
      filter: 'saturate(0)',
      transform: 'scale(1)',
      transition: 'transform 0.6s ease, filter 0.6s ease',
      ':hover': {
        filter: 'saturate(1)', 
        transform: 'scale(1.05)',
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




// export const HomeImageProducts = {
//   extend: [
//     'Link',
//     'Flex',
//   ],
//   props: (el, s) => ({
//     // heightRange: 'H',
//     disply: 'flex',
//     flow: 'y',
//     row: 'column',
//     position: 'relative',
//     overflow: 'hidden',
//     // justifyContent: 'space-between',
//     gap: 'B',
//     href: s.href || '/products' + s.key,
//   }),
//   Img: {
//     state: 'posters/0',
//     props: {
//       objectFit: 'cover',
//       maxHeight: 'calc(100dvh - 77px)', 
//       aspectRatio : 'auto',
//       src: '{{ src }}',
//       borderRadius: '3px',
//       filter: 'saturate(0)',
//       transform: 'scale(1)',
//       transition: 'transform 0.6s ease, filter 0.6s ease',
//       ':hover': {
//         filter: 'saturate(1)', 
//         transform: 'scale(1.1)',
//       },
//     },
//   },
//   P: {
//     text: '{{ title }}',
//     position: 'absolute',
//     bottom: '10px',
//     left: '50%',
//     transform: 'translateX(-50%)',
//     color: 'black',
//     fontSize: '16px',
//     zIndex: '1',
//     width: '100%', 
//     textAlign: 'center', 
//   },
// };
