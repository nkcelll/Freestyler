export const PerProducts = {
  extend: 'Flex',
  props: {
    width: '100%',
    height: 'auto',
    // overflow: 'hidden auto',
    // overflowY: 'scroll',
    // justifyContent: 'space-between',
    // overflow: 'hidden',
    gap: '30px',
    position: 'relative',
    padding: '20px',
    backgroundColor: '#E4E2E2',
    
  },
  ImageGallery: {
    extend: 'Grid',
    props: {
      width: '100%',
      // height: '600px',
      columns: 'repeat(2, 1fr)',
      rows: 'repeat(2, 600px)',
      gap: '15px', 
      
    },
    $collection: () => [
      {
        Img: {
          attr: {
            src: 'https://bataleon.com/cdn/shop/files/Bataleon-Surfer_2025-Bataleon-Snowboards_-product-image-2025-Surfer_2025-Bataleon-Snowboards_-1_106a6796-f2d7-4eb7-8a72-0356a651545e.jpg?v=1724326204&width=823',
            // src: 'https://www.playground.ch/wp-content/uploads/2024/11/pip_snwoboard-action-spray-dark-bw_sq.jpg',
          },
          props: {
            width: '100%',
            height: '100%', 
            
            // objectFit: 'cover'
          },
        },  
      },
      {
        Img: {
          attr: {
            src: 'https://bataleon.com/cdn/shop/files/Bataleon-Surfer_2025-Bataleon-Snowboards_-product-image-2025-Surfer_2025-Bataleon-Snowboards_-1_106a6796-f2d7-4eb7-8a72-0356a651545e.jpg?v=1724326204&width=823',
            // src: 'https://www.playground.ch/wp-content/uploads/2024/11/pip_snwoboard-action-spray-dark-bw_sq.jpg',
          },
          props: {
            width: '100%',
            height: '100%', 
            
            // objectFit: 'cover'
          },
        },  
      },
      {
        Img: {
          attr: {
            src: 'https://bataleon.com/cdn/shop/files/Bataleon-Surfer_2025-Bataleon-Snowboards_-product-image-2025-Surfer_2025-Bataleon-Snowboards_-1_106a6796-f2d7-4eb7-8a72-0356a651545e.jpg?v=1724326204&width=823',
            // src: 'https://www.playground.ch/wp-content/uploads/2024/11/pip_snwoboard-action-spray-dark-bw_sq.jpg',
          },
          props: {
            width: '100%',
            height: '100%', 
            
            objectFit: 'cover'
          },
        },  
      },
      {
        Img: {
          attr: {
            src: 'https://bataleon.com/cdn/shop/files/Bataleon-Surfer_2025-Bataleon-Snowboards_-product-image-2025-Surfer_2025-Bataleon-Snowboards_-1_106a6796-f2d7-4eb7-8a72-0356a651545e.jpg?v=1724326204&width=823',
            // src: 'https://www.playground.ch/wp-content/uploads/2024/11/pip_snwoboard-action-spray-dark-bw_sq.jpg',
          },
          props: {
            width: '100%',
            height: '100%', 
            
            objectFit: 'cover'
          },
        },  
      },
    ]
  },
  // Img: {
  //   attr: {
  //     src: 'https://bataleon.com/cdn/shop/files/Bataleon-Surfer_2025-Bataleon-Snowboards_-product-image-2025-Surfer_2025-Bataleon-Snowboards_-1_106a6796-f2d7-4eb7-8a72-0356a651545e.jpg?v=1724326204&width=823',
  //     // src: 'https://www.playground.ch/wp-content/uploads/2024/11/pip_snwoboard-action-spray-dark-bw_sq.jpg',
  //   },
  //   props: {
  //     width: '100%',
  //     height: '100%',
  //     padding: '30px 30px',
  //     objectFit: 'cover'
  //   },
  // }, 
  
  MainProduct: {
    extend: 'Flex',
    
    props: {
      width: 'auto',
      height: '80vh',
      flow: 'y',
      justifyContent: 'space-between',
      // backgroundColor: 'red',
      position: 'sticky',
      top: '77px'
      
    },
    H1: {
      text: 'Bataleon Ecko mode',
      props: {
        fontSize: '32px',
        margin: '0',
        fontWeight: '500'
      },
    },
    Description: {
      tag: 'p',
      props: {
        text: 'Built for steep lines, deep days and powerful all-terrain riding. Built for steep lines, deep days and powerful all-terrain riding. Built for steep lines, deep days and powerful all-terrain riding.',
        fontSize: '18px',
        margin: '0',
        fontWeight: '200'
      },
    },
    p: {
      text: `Price -  900$`,
      props: {
        fontSize: '18px',
        margin: '0',
        fontWeight: '400'
      }
    },

    Size: {
      extend: 'Flex',
      props: {
        flow: 'y',
        gap: '15px'
      },
      Label: {
        text: 'Select Size:',
      },
      SizeBox: {
        extend: 'Flex',
        props: {
          width: 'auto',
          height: 'auto',
          gap: '15px'

        },
        $collection: () => [
          {
            form: sizeLabel('154'),
          },
          {
            form: sizeLabel(),
          },
        ],
      },
      
    },
    Quantity: {
      extend: 'Flex',
      props: {
        flow: 'y',
      },
      P: {
        text: 'Quantity:',
      },
      ButtonQuantity: {
        extend: 'Flex',
        props: {
          flow: 'x',
          gap: '15px',
          width: '120px',
          border: '1px solid grey'
        },
        Button: {
          props: {
            border: 'none',
            borderRadius: '0',
            width: '40px',
            height: '25px',
            alignSelf: 'center',
            padding: '0',
            backgroundColor: 'transparent'
          },
          Img: {
            src: 'https://files-production-symbols-platform-development-en-d5-u3-p7x0.based.dev/fi8e13f2be/e28e5bec-7ca8-49ed-9e65-8f4b59c7d2b1-dc3b3e6b-f161-4e22-8ab9-d60f24ada9f5-199cfb95-bcf6-4a71-bb93-45ea975ede8e.svg',
          },
        },
        P: {
          text: '1',
        },
        button: {
          props: {
            border: 'none',
            borderRadius: '0',
            width: '40px',
            height: '25px',
            alignSelf: 'center',
            padding: '0',
            cursor: 'pointer',
            backgroundColor: 'transparent'
          },
          Img: {
            src: 'https://files-production-symbols-platform-development-en-d5-u3-p7x0.based.dev/fi096f6eac/b12b40ea-80e4-43f3-a018-252a28ef8ce6-72875be9-8994-4a5e-bb68-83df8069c58f-bf8dfd6b-bab5-46f3-8387-5567bb328eec.svg',
          },
        },
      },
      
    },
    AddToCart: {
      extend: 'Flex',
      props: {
        width: '50%',
        height: '50px',
        // backgroundColor: 'red',
        justifyContent: 'flex-end'
      },
      Button: {
        extend: 'Flex',
        text: 'Add to cart',
        props: {
          width: '50%',
          height: '100%',
          alignSelf: 'center',
          justifySelf: 'center',
          border: '1px solid black',
          borderRadius: '3px',
          backgroundColor: 'transparent',
          fontWeight: '400',
        }
      }
    },
    
  },
};

const sizeLabel = (sizeText) => ({
  extend: 'Flex',
  props: {
    width: '100%',
    height: 'auto',
    flow: 'x',
    alignItems: 'center',
    gap: '10px',
    padding: '5px',
    cursor: 'pointer',
  },
  Input: {
    attr: {
      type: 'radio',
      name: 'size',
      value: sizeText,
    },
    props: {
      width: '40px',
      height: '40px',
      // accentColor: '#FF5722',
      border: '1px solid #333',
      borderRadius: '2px',
      appearance: 'none', 
      backgroundColor: 'transparent',
      // textAlign: 'center',
      cursor: 'pointer',
    },
    
  },
  Span: {
    content: sizeText,
    
    transform: 'translate(-50%, -50%)',
    fontSize: '14px',
    color: '#333',
    pointerEvents: 'none', 
  },
});
