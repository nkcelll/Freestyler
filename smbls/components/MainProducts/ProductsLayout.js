export const ProductsLayout = {
  extend: 'Flex',
  props: {},

  state: async (el, s) => {
    const url = new URL(window.location.href);
    const category = url.pathname.split('/')[2]; 

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
      return { 
        productsData,
        category
      };

    } catch (error) {
      console.error('Error fetching products:', error);
      return { productsData: [] };
    }
  },

  MainHeader: {},

  MarkingText: {
    overflow: 'hidden',
  },

  GifTop: {
    '@tabletS': {},
  },

  SectionName: {
    
  },

  FilterSection: {
    props: (el, s) => {
      const totalProducts = s.productsData || [];
      return totalProducts;
    }
  },

  NoItemsFound: {
    
  },

  GridContent: {
    attr: {
      // id: 'product-page-scroll',
      id: 'products-grid-container',

    },

   



    extends: 'Grid',
    flexGrow: 1,
    width: '100%',
    columns: 'repeat(4, 1fr)',

    // '@tabletM': {
    //   columns: 'repeat(4, 1fr)',
    // },
    // '@tabletS': {
    //   columns: 'repeat(3, 1fr)',
    // },
    // '@mobileL': {
    //   columns: 'repeat(2, 1fr)',
    // },
    // '@mobileS': {
    //   columns: 'repeat(1, 1fr)',
    // },
    
    

    childExtends: 'ProductsContent',
    childrenAs: 'state',
    children: (el, state) => {
      const products = Array.isArray(state.productsData) ? state.productsData : [];
      
      return products.map(product => ({
        id: product.key,
        title: product.name,
        description: product.description,
        price: product.price,
        images: product.images,
        salePrice: product.salePrice
      }));
      
    },
  },
  GifBottom: {},
  Pagination: {},
  Footer: {},
};

