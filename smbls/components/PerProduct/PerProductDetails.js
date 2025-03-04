export const PerProductDetails = {
  extend: 'Flex',
  props: {
    width: '100%',
    height: 'auto',
    position: 'sticky',
    
    padding: '20px 20px',
  },
  DropDownContainer: {
    extend: 'Flex',
    props: {
      width: '100%',
      height: '100%',
      flow: 'y',
    },
    Detail: {},
    TechSpecs: {},
    Features: {}
  },
}


////// dont delete
// export const PerProductDetails = {
//   extend: 'Flex',
//   props: {
//     width: '100%',
//     height: 'auto',
//     // height: '800px',
//     // height: '500px',
//     // backgroundColor: 'red',
//     
//     padding: '20px 20px',
//     // borderTop: '1px solid grey'
//   },
//   DropDownContainer: {
//     extend: 'Flex',
//     props: {
//       width: '100%',
//       height: '100%',
//       flow: 'y',
//       // backgroundColor: 'yellow',
//     },
//     Detail: {},
//     TechSpecs: {},
//     Features: {}
//   },
// }