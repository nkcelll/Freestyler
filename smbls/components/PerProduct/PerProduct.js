import { ModalImage } from "./ProdComponents/ModalImage";

export const PerProducts = {
  extend: 'Flex',
  props: {
    width: '100%',
    height: 'auto',
    gap: '30px',
    // position: 'relative',
    padding: '20px',
    backgroundColor: '#E4E2E2',
    // flex: '1 1',
    '@mobileL': {
      flow: 'y',
    },
  },
  ProductImages: {
    width: '100%'
  },
  // ImageGallery: {
  //   extend: 'Grid',
  //   props: {
  //     width: '50%',
  //     // height: '600px',
  //     columns: 'repeat(2, 1fr)',
  //     rows: 'repeat(2, 600px)',
  //     gap: '15px',
  //     '@tabletL': {},
  //   },
  //   $collection: () => [
  //     {
  //       Img: {
  //         attr: {
  //           src: 'https://bataleon.com/cdn/shop/files/Bataleon-Surfer_2025-Bataleon-Snowboards_-product-image-2025-Surfer_2025-Bataleon-Snowboards_-1_106a6796-f2d7-4eb7-8a72-0356a651545e.jpg?v=1724326204&width=823',
  //           // src: 'https://www.playground.ch/wp-content/uploads/2024/11/pip_snwoboard-action-spray-dark-bw_sq.jpg',
  //         },
  //         props: {
  //           maxWidth: '100%',
  //           maxHeight: '100%',

  //           // objectFit: 'cover'
  //         },
  //       },
  //     },
  //     {
  //       Img: {
  //         attr: {
  //           src: 'https://bataleon.com/cdn/shop/files/Bataleon-Surfer_2025-Bataleon-Snowboards_-product-image-2025-Surfer_2025-Bataleon-Snowboards_-1_106a6796-f2d7-4eb7-8a72-0356a651545e.jpg?v=1724326204&width=823',
  //           // src: 'https://www.playground.ch/wp-content/uploads/2024/11/pip_snwoboard-action-spray-dark-bw_sq.jpg',
  //         },
  //         props: {
  //           width: '100%',
  //           height: '100%',

  //           // objectFit: 'cover'
  //         },
  //       },
  //     },
  //     {
  //       Img: {
  //         attr: {
  //           src: 'https://bataleon.com/cdn/shop/files/Bataleon-Surfer_2025-Bataleon-Snowboards_-product-image-2025-Surfer_2025-Bataleon-Snowboards_-1_106a6796-f2d7-4eb7-8a72-0356a651545e.jpg?v=1724326204&width=823',
  //           // src: 'https://www.playground.ch/wp-content/uploads/2024/11/pip_snwoboard-action-spray-dark-bw_sq.jpg',
  //         },
  //         props: {
  //           width: '100%',
  //           height: '100%',

  //           objectFit: 'cover',
  //         },
  //       },
  //     },
  //     {
  //       Img: {
  //         attr: {
  //           src: 'https://bataleon.com/cdn/shop/files/Bataleon-Surfer_2025-Bataleon-Snowboards_-product-image-2025-Surfer_2025-Bataleon-Snowboards_-1_106a6796-f2d7-4eb7-8a72-0356a651545e.jpg?v=1724326204&width=823',
  //           // src: 'https://www.playground.ch/wp-content/uploads/2024/11/pip_snwoboard-action-spray-dark-bw_sq.jpg',
  //         },
  //         props: {
  //           width: '100%',
  //           height: '100%',

  //           objectFit: 'cover',
  //         },
  //       },
  //     },
  //   ],
  // },
  MainProduct: {
    extend: 'Flex',
    props: {
      width: '50%',
      // height: '80vh',
      // height: '800px',
      height: 'fit-content',
      flow: 'y',
      // gap: '40px',
      gap: '30px',
      // justifyContent: 'space-between',
      position: 'sticky',
      top: '77px',
      '@tabletL': {
        width: '50%',
        gap: '20px',
        height: 'auto',
      },
      '@tabletS': {
        width: '50%',
        height: 'fit-content',
      },
      '@mobileL': {
        width: '100%',
        gap: '30px',
        height: 'auto',
      },
    },
    H1: {
      text:'Bataleon Ecko mode',
      props: {
        fontSize: '32px',
        margin: '0',
        fontWeight: '500',
      },
    },
    p: {
      text: `Price -  900$`,
      props: {
        fontSize: '18px',
        margin: '0',
        fontWeight: '600',
      },
    },
    Size: {
      extend: 'Flex',
      props: {
        flow: 'y',
        gap: '15px',
      },
      Label: {
        text: 'Select Size :',
        props: {
          fontSize: '18px',
          fontWeight: '600',
        },
      },
      SizeBox: {
        extend: 'Flex',
        props: {
          width: 'auto',
          height: 'auto',
          gap: '15px',
          flow: 'row wrap',
        },

        // $collection: (el, s) => (s.sizes?.sizeText || []).map(size => ({
        //   childExtend: 'inputSize',
        //   children: {
        //     text: size
        //   }

        // })),
        childExtend: 'InputSize',
        $collection: (el, s) => (s.sizes?.sizeText || [])
        // $collection: (el, s) => ({
        //   extend: 'inputSize',
        //   text: ({
        //     state
        //   }) => state.sizes.sizeText.map((size) => size)
        // })
      },
    },
    Description: {
      tag: 'p',
      text: ({ state }) => state.productDescription.description,
      props: {
        // text: 'Built for steep lines, deep days and powerful all-terrain riding. Built for steep lines, deep days and powerful all-terrain riding. Built for steep lines, deep days and powerful all-terrain riding.',
        fontSize: '18px',
        margin: '0',
        fontWeight: '200',
      },
    },
    Quantity: {
      extend: 'Flex',
      props: {
        flow: 'y',
      },
      P: {
        text: 'Amount:',
      },
      IncDecButton: {},
    },
    AddToCart: {
      extend: 'Flex',
      props: {
        width: '100%',
        height: '50px',
        // backgroundColor: 'red',
        justifyContent: 'center',
        
      },
      Button: {
        extend: 'Flex',
        text: 'Add to cart',
        style: {
          border: '1px solid black',
          borderRadius: '0',
          transition: 'background-color 0.2s ease, color 0.2s ease',
          
        },
        props: {
          height: '100%',
          alignSelf: 'center',
          justifySelf: 'center',
          backgroundColor: 'transparent',
          fontWeight: '400',
          ':hover': {
            backgroundColor: 'black',
            color: 'white',
          },
          '@tabletS': {
            width: '100%',
            height: '50px'
          },
          '@mobileL': {
            width: '100%',
            backgroundColor: 'black',
            color: 'white'
          },
          '@mobileM': {
            width: '100%',
            backgroundColor: 'black',
            color: 'white'
          },
        },
      },
    },
    ShippingPolicy: {},
  },
  
};
