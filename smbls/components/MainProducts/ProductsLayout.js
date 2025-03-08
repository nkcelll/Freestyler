export const ProductsLayout = {
  extend: 'Flex',
  props: {},

  MainHeader: {},
  MarkingText: {
    overflow: 'hidden',
  },
  GifTop: {
    '@tabletS': {},
  },
  FilterSection: {
    overflow: 'hidden',
  },
  GridContent: {
    attr: {
      id: 'product-page-scroll',
    },
    extends: 'Grid',
    flexGrow: 1,
    width: '100%',
    columns: 'repeat(4, 1fr)',
    '@tabletM': {
      columns: 'repeat(4, 1fr)',
    },
    '@tabletS': {
      columns: 'repeat(3, 1fr)',
    },
    '@mobileL': {
      columns: 'repeat(2, 1fr)',
    },
    '@mobileS': {
      columns: 'repeat(1, 1fr)',
    },

    state: async () => {
      try {
      const response = await fetch('https://api.escuelajs.co/api/v1/products')
        if(!response.ok) {
          throw new Error('Network prob')
        }
        const productsData = await response.json()
        console.log(productsData);

        return productsData
      } catch (error) {
        console.error('error fetchin', error)
        return []
      }
    },

    childExtends: 'ProductsContent',
    childrenAs: 'state',

    children: async(el, state) => {

      const fetched = await state.productsData
      console.log(fetched);
      
      console.log('Products in children:', state.productsData);
    },
  },
  GifBottom: {},
  Pagination: {},
  Footer: {},
};











// export const ProductsLayout = {
//   extend: 'Flex',
//   props: {

//     // width: '100dvw',
//     // height: 'auto',
//   },
//   MainHeader:{
//     // position: 'sticky',
//     // top: '0', 
//     // zIndex: '5',
    
//   },
//   MarkingText: {
//     overflow: 'hidden',
//   },
//   GifTop: {
//     '@tabletS': {
//     },
//   },
//   FilterSection: {
//     overflow: 'hidden',
    
//   },
//   GridContent: {
//     attr: {
//       id: 'product-page-scroll'
//     },
//     extends: 'Grid',
//     flexGrow: 1,
//     width: '100%',
//     columns: 'repeat(4, 1fr)',
//     '@tabletM': {
//       columns: 'repeat(4, 1fr)',
//     },
//     '@tabletS': {
//       columns: 'repeat(3, 1fr)',
//     },
//     '@mobileL': {
//       columns: 'repeat(2, 1fr)',
//     },
//     '@mobileS': {
//       columns: 'repeat(1, 1fr)',
//     },
//     childExtends: 'ProductsContent',
//     childrenAs: 'state',
//     // children: (el, s) => Object.values(s.rawData.data),
//     children: (el, s) => {
//       const urlParams = new URLSearchParams(window.location.search)
//       const currentPage = Number(urlParams.get('page') || 1)
//       const productsPerPage = s.productsAmountPerPage.amount
//       // console.log(productsPerPage);
      
//       const startIndex = (currentPage - 1) * productsPerPage

//       return Object.values(s.rawData.data).slice(startIndex, startIndex + productsPerPage)
//     }
//   },
 
//   GifBottom: {
//   },
//   Pagination: {

//   },
//   Footer: {
//   }
// } 


