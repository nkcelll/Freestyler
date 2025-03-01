export const RecomendationProdList = {
  extend: [
    'Link',
    'Flex'
  ],
  props: () => ({
    // width: '100%',
    // height: '100%',
    gap: '15px',
    align: 'center',
    flow: 'y',
    justifyContent: 'space-between',
  }),
  Img: {
    state: 'posters/0',
    props: {
      src: '{{ src }}',
      width: '300px',
      height: '300px',
      objectFit: 'cover',
    },
  },
  lebod: {
    extend: ['Link', 'Flex'],
    props: {
      flow: 'y',
      width: '100%',
      height: '100px',
      // padding: 'A A 0 A',
      padding: '0 0 0 28px',
      justifyContent: 'space-evenly',
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