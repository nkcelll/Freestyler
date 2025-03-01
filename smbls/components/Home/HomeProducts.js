export const HomeImageProducts = {
  extend: ['Link', 'Flex'],
  props: (el, s) => ({
    display: 'flex',
    href: s.href || '/products' + s.key,
    flow: 'y',
    width: '200px',
    height: 'auto',
  }),
  Img: {
    state: 'posters/0',
    props: {
      flow: 'y',
      width: '200px',
      height: 'calc(100vh - 77px - 50px)',
      objectFit: 'cover',
      overflowY: 'hidden',
      flex: '0 0 auto',
      src: '{{ src }}',
      borderRadius: '3px 3px 0 0',
      filter: 'saturate(0)',
      transform: 'scale(1)',
      transition: 'transform 0.6s ease, filter 0.6s ease',
      ':hover': {
        filter: 'saturate(1)',
      },
    },
  },
  TextBox: {
    props: {
      width: '100%',
      backgroundColor: 'rgb(214, 214, 214)',
      pointerEvents: 'all',
      flexShrink: 0,
    },
    P: {
      text: '{{ title }}',
      color: 'black',
      fontSize: '14px',
      fontWeight: '600',
      zIndex: '1',
      width: '100%',
      textAlign: 'center',
    },
  },
};
