export const HomeImageProducts = {
  extend: [
    'Link',
    'Flex',
  ],
  props: (el, s) => ({
    display: 'flex', 
    width: '250px',
    height: '100%', 
    href: s.href || '/products' + s.key,
    flow: 'y',
    // ':hover': {
    //     transform: 'scale(1.02)', // Scale the container on hover
    //     filter: 'saturate(1)', 
    //   },
  }),
  Img: {
    state: 'posters/0',
    props: {
      flow: 'y', 
      width: '200px',
      // height: '50%', 
      height: '93%', 
      flex: '0 0 auto', 
      src: '{{ src }}',
      borderRadius: '3px 3px 0 0',
      filter: 'saturate(0)',
      transform: 'scale(1)',
      transition: 'transform 0.6s ease, filter 0.6s ease',
      ':hover': {
        // transform: 'scale(1.05)', 
        filter: 'saturate(1)', 
      },
    },
  },
  TextBox: {
    props: {
      width: '100%',
      height: '7%',
      backgroundColor: 'grey',
      pointerEvents: 'all',
    },
    P: {
      text: '{{ title }}',
      
      color: 'black',
      fontSize: '16px',
      fontWeight: '600',
      zIndex: '1',
      width: '100%',
      textAlign: 'center',
    },
  }
  
};







// export const HomeImageProducts = {
//   extend: [
//     'Link',
//     'Flex',
//   ],
//   props: (el, s) => ({
    
//     display: 'flex', 
//     position: 'relative',
//     href: s.href || '/products' + s.key,
//     width: '100%', 
//     height: '100%', 
//     maxHeight: 'calc(100dvh - 77px)', 

//     // ':hover': {
//     //     transform: 'scale(1.02)', // Scale the container on hover
//     //     filter: 'saturate(1)', 
//     //   },
//   }),
//   Img: {
//     state: 'posters/0',
//     props: {
//       objectFit: 'cover',
//       aspectRatio: 'auto',
//       width: '250px',
//       height: '1003px',
      
//       src: '{{ src }}',
//       borderRadius: '3px',
//       filter: 'saturate(0)',
//       transform: 'scale(1)',
//       transition: 'transform 0.6s ease, filter 0.6s ease',
//       ':hover': {
//         transform: 'scale(1.05)', 
//         filter: 'saturate(1)', 
//       },
//     },
//   },
//   TextBox: {
//     props: {
//       width: '50%',
//       height: '50px',
//       backgroundColor: 'white',
//       position: 'absolute',
//       bottom: '0',
//       left: '50%',
//       transform: 'translateX(-50%)',
//       pointerEvents: 'all',
//       // transition: 'transform 0.6s ease', 
//     },
//     P: {
//       text: '{{ title }}',
//       // position: 'absolute',
//       // bottom: '10px',
//       // left: '50%',
//       // transform: 'translateX(-50%)',
//       color: 'black',
//       fontSize: '16px',
//       fontWeight: '600',
//       zIndex: '1',
//       width: '100%',
//       textAlign: 'center',
//     },
//   }
  
// };

















//// Original
// export const HomeImageProducts = {
//   extend: [
//     'Link',
//     'Flex',
//   ],
//   props: (el, s) => ({
    
//     display: 'flex', 
//     position: 'relative',
//     href: s.href || '/products' + s.key,
//     width: 'auto', 
//     // width: '200px', 
//     // overflow: 'hidden'
//   }),
//   Img: {
//     state: 'posters/0',
//     props: {
//       objectFit: 'cover',
//       maxHeight: 'calc(100dvh - 77px)', 
//       aspectRatio: 'auto',
//       overflow: 'hidden',

//       src: '{{ src }}',
//       borderRadius: '3px',
//       filter: 'saturate(0)',
//       transform: 'scale(1)',
//       transition: 'transform 0.6s ease, filter 0.6s ease',
//       ':hover': {
//         filter: 'saturate(1)', 
//         transform: 'scale(1.05)',
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



