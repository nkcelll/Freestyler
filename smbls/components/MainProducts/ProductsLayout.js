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

    state: async (el, s) => {
      // Manually get category from URL
      const url = new URL(window.location.href);
      const category = url.pathname.split('/')[2];  // Assuming /products/:category

      if (!category) {
        console.error('Category not found in URL');
        return productsData
      }

      try {
        const response = await fetch(`http://localhost:5000/api/products/${category}`);

        if (!response.ok) {
          throw new Error('Network problem');
        }

        const data = await response.json();

        if(!data[category]) {
          console.error(`${category} not found`)
          return { productsDatadata: []}
        }

        const productsData = data[category]

        return { productsData };
      } catch (error) {
        console.error('Error fetching products:', error);
        return { productsData: [] };
      }
    },

    childExtends: 'ProductsContent',
    childrenAs: 'state',
    children: (el, state) => {
      const products = Array.isArray(state.productsData) ? state.productsData : [];
      console.log(state);
      console.log('Products inside children:', products);
      console.log(products);
      
      return products.map(product => ({
        id: product.key,
        title: product.name,
        description: product.description,
        price: product.price,
        images: (product.images && product.images.length > 0) ? product.images[0] : '',
        salePrice: product.salePrice
      }));
    },
  },
  GifBottom: {},
  Pagination: {},
  Footer: {},
};


// export const ProductsLayout = {
//   extend: 'Flex',
//   props: {},

//   MainHeader: {},
//   MarkingText: {
//     overflow: 'hidden',
//   },
//   GifTop: {
//     '@tabletS': {},
//   },
//   FilterSection: {
//     overflow: 'hidden',
//   },
//   GridContent: {
//     attr: {
//       id: 'product-page-scroll',
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

//     state: async () => {
//       try {
//       const response = await fetch('https://api.escuelajs.co/api/v1/products')

//         if(!response.ok) {
//           throw new Error('Network prob')
//         }
//         const productsData = await response.json()
//         // console.log(productsData);
//         return { productsData }
//       } catch (error) {
//         console.error('error fetchin', error)
//         return { productsData: []}
//       }
//     },

//     childExtends: 'ProductsContent',
//     childrenAs: 'state',
//     children: (el, s) => {
//       const products = s.productsData;  
    
//       console.log(products);  
//       return products.map(product => ({
//         id: product.id,
//         title: product.title,
//         description: product.description,
//         price: product.price,
//         images: product.images,
//       }));
//     },
    
//     // children: async(el, state) => {

//     //   const fetched = await state.productsData
//     //   console.log(fetched);
      
//     // },
//   },
//   GifBottom: {},
//   Pagination: {},
//   Footer: {},
// };











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


