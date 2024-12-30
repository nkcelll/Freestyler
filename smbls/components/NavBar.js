export const Nav = {
  extend: 'Flex',
  MenMenu: {
    tag: 'ul',
    attr: {
      id: '1'
    },
    props: {
      listStyleType: 'none'
    }
  },
}






// export const Nav = {
//   extend: 'Flex',
//     ul: {
//       props: {
//         display: "flex",
//         gap: '30px',
//         flow: 'x',
//         padding: '0',
//         justifyContent: 'space-between',
//         margin: '0',
//         height: '25px',
//         width: '350px',
//         borderBottom: '1px solid grey'
//       },
//       $propsCollection: () =>
//         [
//           {
//             href: "/",
//             text: "MEN /",
//             dropdown: [
//               {
//                 href: '/',
//                 text: 'shirt'
//               },
//               {
//                 href: '/',
//                 text: 'Jackets'
//               },
//               {
//                 href: '/',
//                 text: 'Jackets'
//               },
//             ],
//           },
//           {
//             href: "/",
//             text: "WOMEN /",
//           },
//           {
//             href: "/1",
//             text: "ACCESSORIES /",
//           },
//         ].map((item) => ({
//           tag: "li",
//           style: {
//             listStyleType: "none",
//           },
//           props: {
//             display: "flex",
//             flow: "y",
//             gap: "150px",
//             borderBottom: '1px solid black'
//           },
//           children: [
//             {
//               tag: "a",
//               attr: {
//                 href: item.href,
//               },
//               props: {
//                 text: item.text.toLocaleUpperCase(),
//                 textAlign: "end",
//                 textDecoration: "none",
//                 color: "black",
//                 cursor: "pointer",
//                 fontWeight: "300",
//                 letterSpacing: "1.3px",
//               },
//             },
            
//           ],
//         })),
//     },
// }