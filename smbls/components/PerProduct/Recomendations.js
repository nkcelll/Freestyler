import { IconArrowLeft } from '../Assets/Icons/IconArrowLeft';
import { IconArrowRight } from '../Assets/Icons/IconArrowRight';

export const Recomendations = {
  extend: 'Flex',
  props: {
    width: '100%',
    height: '500px',
    // backgroundColor: 'red',
    backgroundColor: '#E4E2E2',
    padding: '20px 20px',
    justifyContent: 'space-between',
    flow: 'y', 
    gap: '20px'
  },
  ProductHeader: {
    extend: 'Flex',
    props: {
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '60px',
    },
    H1: {
      text: 'We also recommend',
      props: {
        fontSize: '24px',
        margin: '0',
        fontWeight: '500',
      },
    },
    Buttons: {
      extend: 'Flex',
      props: {
        justifyContent: 'space-between',
        // width: '120px',
        gap: '20px',
      },
      childExtend: {
        extend: 'Button',
        
        props: {
          border: 'none',
          padding: '10px',
          cursor: 'pointer',
        },
      },
      $propsCollection: () => [
        {
          
          id: 'left-button',
          IconArrowLeft,
        },
        {
          id: 'right-button',
          IconArrowRight,
        },
      ],
    },
  },
  ProductContent: {
    attr: {
      id: 'recommend-wheel'
    },
    extends: 'Flex',
    width: 'auto',
    gap: '20px',
    overflow: 'hidden auto',
    // columns: 'repeat(4, 1fr)',
    // '@tabletM': {
    //   columns: 'repeat(4, 1fr)',
    // },
    // '@tabletS': {
    //   columns: 'repeat(3, 1fr)',
    // },
    // '@mobileL': {
    //   columns: 'repeat(2, 1fr)',
    // },
    // '@mobile': {
    //   columns: 'repeat(1, 1fr)',
    // },
    // height: '100%',

    childExtends: 'RecomendationProdList',
    childrenAs: 'state',
    children: (el, s) => Object.values(s.products.data)
  },
  
};


document.addEventListener('DOMContentLoaded', () => {
  const left = document.getElementById('left-button');
  const productWheel = document.getElementById('recommend-wheel');
  const right = document.getElementById('right-button');

  right.addEventListener('click', () => {
    const maxScroll = productWheel.scrollWidth - productWheel.clientWidth
    console.log(maxScroll);
    
    if(productWheel.scrollLeft >= maxScroll) {
      productWheel.scrollLeft = 0
    } else {
      productWheel.scrollBy({left: 300, behavior: 'smooth'})
    }
  })
  left.addEventListener('click', () => {
    
    if(productWheel.scrollLeft <= 0) {
      productWheel.scrollLeft = productWheel.scrollWidth - productWheel.clientWidth
    } else {
      productWheel.scrollBy({left: -300, behavior: 'smooth'})
    }
    
  })
});
















// export const Recomendations = {
//   extend: 'Flex',
//   props: {
//     width: '100%',
//     height: '500px',
//     // backgroundColor: 'red',
//     padding: '20px 20px',
//     // flow: 'y'
//   },
//   Container: {
//     extend: 'Flex',
//     props: {
//       width: '100%',
//       height: '100%',
//       backgroundColor: 'red',
//       flow: 'y', 

//     },
//     ProductHeader: {
//       extend: 'Flex',
//       props: {
//         width: '100%',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         height: '60px',
//       },
//       H1: {
//         text: 'We also recommend',
//         props: {
//           fontSize: '24px',
//           margin: '0',
//           fontWeight: '600',
//         },
//       },
//       Buttons: {
//         extend: 'Flex',
//         props: {
//           justifyContent: 'space-between',
//           // width: '120px',
//           gap: '20px',
//         },
//         childExtend: {
//           extend: 'Button',

//           props: {
//             border: 'none',
//             padding: '10px',
//             cursor: 'pointer',
//           },
//         },
//         $propsCollection: () => [
//           {
//             IconArrowLeft,
//           },
//           {
//             IconArrowRight,
//           },
//         ],
//       },
//     },
//     ProductContent: {
//       extend: 'Flex',
//       width: '100%',
//       backgroundColor: 'red',

//       childExtends: 'RecomendationProdList',
//       childrenAs: 'state',
//       children: (el, s) => Object.values(s.rawData.data)
//     },
//   },
// };
