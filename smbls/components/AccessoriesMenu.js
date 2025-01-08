// export const AccessoriesMenu = {
//   extend: 'Flex',
//   li: {
//     style: {
//       listStyleType: 'none',
//     },
//     a: {
//       text: 'ACCESSORY KITS /',
//       attr: {
//         id: 'aTag'
//       },
//       props: {
//         display: 'flex',
//         alignItems: 'center',
//         height: '30px',
//         fontSize: '20px',
//         padding: '0',
//         margin: '0',
//         cursor: 'pointer',
//         height: '77px',
        
//       },
//     },
//     on: {
//       mouseover: (e) => {
//         const dropdown = document.getElementById('women-hover-collection');
//         if (dropdown) {
//           dropdown.style.transition = 'opacity 0.2s ease';
//           dropdown.style.opacity = '1';
//           dropdown.style.pointerEvents = 'auto';
//         }
//       },
//       mouseout: (e) => {
//         const dropdown = document.getElementById('women-hover-collection');
//         if (dropdown) {
//           dropdown.style.opacity = '0'; 
//           dropdown.style.pointerEvents = 'none';
//         }
//       },
//     },
//     MenList: {
//       attr: {
//         id: 'women-hover-collection'
//       },
//       props: {
//         opacity: '0',
//         display:'flex',
//         justifyContent: 'space-evenly',
//         width: '100dvw',
//         height: '60dvh',
//         backgroundColor: 'red',
//         position: 'absolute',
//         inset: '0',
//         top: '77px',
//       },
//       div:{
//         extend: 'Flex',
//         props: {
//           justifyContent: 'center',
//           gap: '200px',
//           borderTop: '1px solid black',
//           margin: '70px 0 0 0',
//           width: '85%'
//         },
//         SnowboardCategory: {
//           extend: "Flex",
//           tag: "ul",
//           props: {
//             flow: "y",
//             borderRight: "1px solid #632E2E",
//             height: "350px",
//             padding: "B1 0 0 0",
    
//           },
//           a: {
//             text: "SNOWBOARDS",
//             props: {
//               margin: "0",
//               fontSize: "20px",
//               textAlign: "end",
//               padding: "0 A 0 0",
//               fontWeight: "200",
//               textAlign: "end",
//               textDecoration: "underline",
//               color: "#131313",
//               letterSpacing: "2.4px",
//             },
//           },
//           li: {
//             props: {
//               display: "block",
//               flexDirection: "column",
//               // gap: '5px',
//               textAlign: "end",
//               padding: "B1 A 0 0",
//             },
//             $propsCollection: () =>
//               [
//                 {
//                   href: "/",
//                   text: "SNOWBOARD",
//                 },
//                 {
//                   href: "/",
//                   text: "SNOWBOARD BINDINGS",
//                 },
//                 {
//                   href: "/1",
//                   text: "SNOWBOARD BAGS",
//                 },
//                 {
//                   href: "/1",
//                   text: "SNOWBOARDS BOOTS",
//                 },
//                 {
//                   href: "/1",
//                   text: "SNOWBOARDS ACCESSORIES",
//                 },
//               ].map((item) => ({
//                 tag: "li",
//                 style: {
//                   listStyleType: "none",
//                 },
//                 props: {
//                   display: "flex",
//                   flow: "y",
//                   gap: "150px",
//                 },
//                 children: [
//                   {
//                     tag: "a",
//                     attr: {
//                       href: item.href,
//                     },
//                     props: {
//                       text: item.text,
//                       textAlign: "end",
//                       textDecoration: "none",
//                       color: "black",
//                       cursor: "pointer",
//                       fontWeight: "400",
//                       letterSpacing: "1.3px",
//                       lineHeight: "25px",
//                     },
//                   },
//                 ],
//               })),
//           },
//         },
//       },
//     }
//   }
// }