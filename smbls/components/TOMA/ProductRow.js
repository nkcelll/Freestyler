// export const ProductRow = {
//   extend: 'Flex',
//   props: {
//     flow: 'x',
//     padding: 'B1 B1 B1 -',
//     gap: 'Z2',
//     '@tabletS': {
//       padding: 'B1 B1 B1 B1',
//     },
//   },
//   Strong: {
//     text: 'You might like',
//     fontSize: 'Y2',
//   },
//   Grid: {
//     gap: 'A',
//     columns: 'repeat(6, 1fr)',
//     '@tabletM': {
//       columns: 'repeat(4, 1fr)',
//     },
//     '@tabletS': {
//       columns: 'repeat(3, 1fr)',
//     },
//     '@mobileL': {
//       columns: 'repeat(2, 1fr)',
//     },
//     childExtends: 'Product',
//     childrenAs: 'state',
//     children: el => {
//       const data = Object.values(el.state.parse())
//       console.log(data.filter((v, k) => k < 5))
//       return data.filter((v, k) => k < 5)
//     },
//   },
// };