'use strict';

import { create } from 'smbls';
import * as app from './smbls';

// Define the theme styles for light and dark modes in the configuration.
// const THEME = {
//   document: {
//     '@light': {
//       color: 'black',
//       background: '#E4E2E2',
//       '-webkit-tap-highlight-color': 'transparent',
//     },
//     '@dark': {
//       color: 'white',
//       background: '#1E201E',
//       '-webkit-tap-highlight-color': 'transparent',
//     },
//   },
// };

create({
  // OverHeader: {
  //   extend: 'Flex',
  //   props: {
  //     width: '100%',
  //     height: '30px',
  //     justifyContent: 'flex-end',
  //     background: 'black',
  //   },
  //   ThemeChanger: {
  //     props: {
  //       width: 'auto',
  //       height: 'auto',
  //     },
  //     Select: {
  //       props: {
  //         id: 'background-switcher',
  //       },

  //       childExtend: {
  //         extend: 'option',
  //       },
  //       $collection: () => [
  //         {
  //           text: 'Light',
  //           attr: {
  //             value: 'Light',
  //           },
  //         },
  //         {
  //           text: 'Dark',
  //           attr: {
  //             value: 'Dark',
  //           },
  //         },
  //       ],
  //       on: {
  //         click: () => {
  //           const switcher = document.getElementById('background-switcher');
  //           const switcherValue = switcher.value;

  //           // Apply the corresponding theme when an option is selected
  //           if (switcherValue === 'Light') {
  //             // Apply light theme
  //             document.body.style.color = THEME.document['@light'].color;
  //             document.body.style.backgroundColor = THEME.document['@light'].background;
  //             document.body.style['-webkit-tap-highlight-color'] = THEME.document['@light']['-webkit-tap-highlight-color'];
  //           } else if (switcherValue === 'Dark') {
  //             // Apply dark theme
  //             document.body.style.color = THEME.document['@dark'].color;
  //             document.body.style.backgroundColor = THEME.document['@dark'].background;
  //             document.body.style['-webkit-tap-highlight-color'] = THEME.document['@dark']['-webkit-tap-highlight-color'];
  //           }
  //         },
  //       },
  //     },
  //   },
  // },
}, app);



// 'use strict'

// import { create } from 'smbls'
// import * as app from './smbls'

// import THEME from './smbls/designSystem'

// create({
//   OverHeader: {
//     extend: 'Flex',
//     props: {
//       width: '100%',
//       height: '30px',
//       justifyContent: 'flex-end',
//       background: 'black'
//     },
//     ThemeChanger: {
//       props: {
//         width: 'auto',
//         height: 'auto',
        
//       },
//       Select: {
//         props: {
//           id: 'background-switcher'
//         },

//         childExtend: {
//           extend: 'option'
//         },
//         $collection: () => [
//           {
//             text: 'Light',
//             attr: {
//               value: 'Light'
//             }
//           },
//           {
//             text: 'Dark',
//             attr: {
//               value: 'Dark'
//             }
//           },
//         ],
//         on: {
//           click: () => {
//             const switcher = document.getElementById('background-switcher')
//             const switcherValue = switcher.value
//             console.log(window.desi)
//             if(switcherValue === 'Light') {
//               document.body.style.color = document['@light'].color
//               document.body.style.backgroundColor = document['@light'].background
//               document.body.style['-webkit-tap-highlight-color'] = THEME.document['@light']['-webkit-tap-highlight-color']
//             } else if (switcherValue === 'Dark') {
//               document.body.style.color = THEME.document['@dark'].color;
//               document.body.style.backgroundColor = THEME.document['@dark'].background
//               document.body.style['-webkit-tap-highlight-color'] = THEME.document['@dark']['-webkit-tap-highlight-color']
//             }
//           }
//         }
//         // on: {
//         //   click: () => {
//         //     const switcher = document.getElementById('background-switcher')
//         //     const switcherValue = switcher.value
//         //     console.log(window.desi)
//         //     if(switcherValue === 'Light') {
//         //       document.body.style.color = THEME.document['@light'].color;
//         //       document.body.style.backgroundColor = THEME.document['@light'].background
//         //       document.body.style['-webkit-tap-highlight-color'] = THEME.document['@light']['-webkit-tap-highlight-color']
//         //     } else if (switcherValue === 'Dark') {
//         //       document.body.style.color = THEME.document['@dark'].color;
//         //       document.body.style.backgroundColor = THEME.document['@dark'].background
//         //       document.body.style['-webkit-tap-highlight-color'] = THEME.document['@dark']['-webkit-tap-highlight-color']
//         //     }
//         //   }
//         // }
//       }
//     }
//   }
// }, app)
