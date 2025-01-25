export const MarkingText = {
  extend: 'Flex',
  props: {
    backgroundColor: 'red',
    width: '100%',
    height: '64px',
    overflow: 'hidden', // Hide the overflowing content
    position: 'relative', // Position relative to the container
  },
  children: [
    {
      attr: {
        id: 'marquee_container',
      },
      props: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '20px',
        position: 'absolute',
        whiteSpace: 'nowrap',
      },
      children: Array.from({ length: 14 }, (_, index) => ({
        extend: 'H1',
        text: index % 2 === 0
          ? 'Shipping within 3-4 days |'
          : 'Free delivery over 100GEL |',
        props: {
          fontSize: '12px',
          fontWeight: '400',
          display: 'inline-block', 
        },
      })),
    },
  ],
};

// Manually animate the marquee content
window.addEventListener('DOMContentLoaded', () => {
  const marqueeContainer = document.getElementById('marquee_container');
  if (marqueeContainer) {
    let start = 1; // Starting position, off-screen right
  
    // Function to animate the marquee
    function animateMarquee() {
      start -= 0.4; // Move the text 1% to the left each time
      if (start <= 2) { // If it has moved off-screen to the left
        start = 50; // Reset to the starting position
      }
      marqueeContainer.style.transform = `translateX(${start}%)`; // Apply the transformation
      requestAnimationFrame(animateMarquee); // Keep the animation going
    }
  
    animateMarquee(); // Start the animation
  }
})



// export const MarkingText = {
//   extend: 'Flex',
//   props: {
//     backgroundColor: 'red',
//     width: 'auto',
//     height: '64px',
//   },

//   MarkingInner: {
//     attr: {
//       id: 'marquee_container',
//     },
//     props: {
//       display: 'flex',
//       backgroundColor: 'red',
//       alignSelf: 'center',
//       gap: '20px'
//     },
//     $propsCollection: () => [ 
//       {
//         H1: {
//           text:'Shipping within 3-4 days |',
//           props: {
//             fontSize: '12px',
//             fontWeight: '400'
//           }
//         } 
//       },
//       {
//         H1: {
//           text:'Free delivery over 100GEL |',
//           props: {
//             fontSize: '12px',
//             fontWeight: '400'
//           }
//         } 
//       },
//       {
//         H1: {
//           text:'Shipping within 3-4 days |',
//           props: {
//             fontSize: '12px',
//             fontWeight: '400'
//           }
//         } 
//       },
//       {
//         H1: {
//           text:'Free delivery over 100GEL |',
//           props: {
//             fontSize: '12px',
//             fontWeight: '400'
//           }
//         } 
//       },
//       {
//         H1: {
//           text:'Shipping within 3-4 days |',
//           props: {
//             fontSize: '12px',
//             fontWeight: '400'
//           }
//         } 
//       },
//       {
//         H1: {
//           text:'Free delivery over 100GEL |',
//           props: {
//             fontSize: '12px',
//             fontWeight: '400'
//           }
//         } 
//       },
//       {
//         H1: {
//           text:'Shipping within 3-4 days |',
//           props: {
//             fontSize: '12px',
//             fontWeight: '400'
//           }
//         } 
//       },
//       {
//         H1: {
//           text:'Free delivery over 100GEL |',
//           props: {
//             fontSize: '12px',
//             fontWeight: '400'
//           }
//         } 
//       },
//       {
//         H1: {
//           text:'Shipping within 3-4 days |',
//           props: {
//             fontSize: '12px',
//             fontWeight: '400'
//           }
//         } 
//       },
//       {
//         H1: {
//           text:'Free delivery over 100GEL |',
//           props: {
//             fontSize: '12px',
//             fontWeight: '400'
//           }
//         } 
//       },
//       {
//         H1: {
//           text:'Shipping within 3-4 days |',
//           props: {
//             fontSize: '12px',
//             fontWeight: '400'
//           }
//         } 
//       },
//       {
//         H1: {
//           text:'Free delivery over 100GEL |',
//           props: {
//             fontSize: '12px',
//             fontWeight: '400'
//           }
//         } 
//       },
//       {
//         H1: {
//           text:'Shipping within 3-4 days |',
//           props: {
//             fontSize: '12px',
//             fontWeight: '400'
//           }
//         } 
//       },
//       {
//         H1: {
//           text:'Free delivery over 100GEL |',
//           props: {
//             fontSize: '12px',
//             fontWeight: '400'
//           }
//         } 
//       },
//     ],
//   },
// };
