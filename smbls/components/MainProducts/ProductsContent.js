export const ProductsContent = {
  extend: ['Flex', 'Link'],
  props: () => ({
    height: '480px',
    width: 'auto',
    align: 'center',
    justifyContent: 'space-between',
    border: '0 solid black',
    borderRight: '1px solid grey',
    borderBottom: '1px solid grey',
    flow: 'y',
    href: '/product'
  }),
  Img: {
    state: 'posters/0',
    props: {
      src: '{{ src }}',
      width: '100px',
      height: 'auto',
    },
  },
  titleBody: {
    extend: ['Link', 'Flex'],
    props: {
      flow: 'y',
      width: '100%',
      height: '100px',
      // padding: 'A A 0 A',
      padding: '0 0 0 28px',
      justifyContent: 'space-evenly',
      borderTop: '1px solid grey',
      borderBottom: '1px solid grey',
    },
    H: {
      text: '{{ title }}',  
      fontSize: '16px',
      fontWeight: '500',
    },
    P: {
      text: '{{ price }}', 
      margin: '0',
      fontSize: '14px',
      fontWeight: '500',
    },
  },
}



