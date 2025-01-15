export const MarkingText = {
  extend: 'Flex',
  props: {
    backgroundColor: 'red',
    width: '100dvw',
    height: '64px',
  },

  MarkingInner: {
    attr: {
      id: 'marquee_container'
    },
    props: {
      display: 'flex',
      flow: 'row', 
      flow: 'row nowrap',
      width: '100%',
      // gap: '15px',
      backgroundColor: '#CAC7C7',
    },
    
    // P: [
    //   {
    //     text: 'Shipping within 3-4 days |'
    //   },
    //   {
    //     text:'Free delivery over 100GEL |'
    //   },
    // ]
  }
};

// window.addEventListener('DOMContentLoaded', () => {
//   const pDuplication = () => {
//     const container = document.getElementById('marquee_container')
//     if(!container) return new Error('Container not found')

//     MarkingText.MarkingInner.P.forEach(item => {
//       for(let i = 0; i <= 2; i++ ) {
//         const paragraph = document.createElement('p')
//         paragraph.innerText = item.text
//         paragraph.style.fontSize = '14px'
//         container.appendChild(paragraph)
//         // MarkingText.appendChild(pe)
//       }
      

//     })
    
//   }
//   pDuplication()
//   // pDuplication()
//   // pDuplication()
// })









// export const MarkingText = {
//   extend: 'Flex',

//   MarkingInner: {
//     props: {
//       display: 'flex',
//       flow: 'row', // Direction of the flow
//       width: '100vw', // Full viewport width
//       height: '50px', // Fixed height for the marquee
//       backgroundColor: 'green',
//       overflow: 'hidden', // Ensure text doesn't overflow
//       position: 'relative', // Required for animation
//     },
//     P: [
//       { text: 'Free delivery over 100GEL' },
//       { text: 'Shipping within 3-4 days' },
//     ]
//   }
// };


// console.log(MarkingText.MarkingInner.P)

// // Create DOM Elements with Animation
// const createMarquee = () => {
//   // Create the outer container
//   const container = document.createElement('div');
//   container.style.display = 'flex';

//   // Create the inner scrolling container
//   const markingInner = document.createElement('div');
//   Object.assign(markingInner.style, {
//     display: 'flex',
//     flexDirection: 'row',
//     width: '200%', // Width doubled for seamless scrolling
//     height: '50px',
//     backgroundColor: 'green',
//     overflow: 'hidden',
//     position: 'relative',
//     animation: 'marquee 10s linear infinite',
//   });

//   // Function to add text items twice for seamless loop
//   const addTextItems = () => {
//     MarkingText.MarkingInner.P.forEach(item => {
//       const p = document.createElement('p');
//       p.textContent = item.text;
//       Object.assign(p.style, {
//         whiteSpace: 'nowrap',
//         margin: '0 20px', // Add spacing between texts
//         color: 'white', // Text color for visibility
//       });
//       markingInner.appendChild(p);
//     });
//   };

//   // Add texts twice for seamless scrolling
//   addTextItems();
//   addTextItems();
//   addTextItems();
//   addTextItems();
//   addTextItems();
//   addTextItems();
//   addTextItems();
//   // Append the marquee container to the DOM
//   container.appendChild(markingInner);
//   document.body.appendChild(container);
// };

// // Define CSS for the marquee animation
// const style = document.createElement('style');
// style.textContent = `
// @keyframes marquee {
//   0% {
//     transform: translateX(0);
//   }
//   100% {
//     transform: translateX(-50%);
//   }
// }

// div[style*="animation: marquee"] {
//   will-change: transform;
// }
// `;

// // Append styles to the document
// document.head.appendChild(style);

// // Call the function to create the marquee
// createMarquee();
