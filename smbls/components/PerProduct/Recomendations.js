export const Recomendations = {
  extend: 'Flex',
  props: {
    width: '100%',
    height: '500px',
    
    padding: '20px 20px',
    justifyContent: 'space-between',
    flow: 'y',
    gap: '20px',
  },
  ProductHeader: {
    extend: 'Flex',
    props: {
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '60px',
    },
    H1: {
      text: 'We also recommend',
      props: {
        fontSize: '24px',
        margin: '0',
        fontWeight: '500',
      },
    },
    Buttons: {
      extend: 'Flex',
      props: {
        justifyContent: 'space-between',
        gap: '20px',
      },
      childExtend: {
        extend: 'Button',
        props: {
          border: 'none',
          padding: '10px',
          cursor: 'pointer',
          '@mobileL': {
            display: 'none',
          },
        },
      },
      $propsCollection: () => [
        {
          id: 'left-button',
          IconArrowLeft: {},
          onClick: (e) => {
            onLeftScrollClick();
          },
        },
        {
          id: 'right-button',
          IconArrowRight: {},
          onClick: () => {
            onRightScrollClick();
          },
        },
      ],
    },
  },
  ProductContent: {
    attr: {
      id: 'recommend-wheel',
    },
    extends: 'Flex',
    width: 'auto',
    gap: '20px',
    overflow: 'hidden auto',
    '@mobileL': {
      overflow: 'auto',
    },
    childExtends: 'RecomendationProdList',
    childrenAs: 'state',
    children: (el, s) => Object.values(s.products.data),
  },
};

const onLeftScrollClick = () => {
  const productWheel = document.getElementById('recommend-wheel');
  if (productWheel.scrollLeft <= 0) {
    productWheel.scrollLeft =
      productWheel.scrollWidth - productWheel.clientWidth;
  } else {
    productWheel.scrollBy({ left: -320, behavior: 'smooth' });
  }
};
const onRightScrollClick = () => {
  const productWheel = document.getElementById('recommend-wheel');
  const maxScroll = productWheel.scrollWidth - productWheel.clientWidth;
  if (productWheel.scrollLeft >= maxScroll) {
    productWheel.scrollLeft = 0;
  } else {
    productWheel.scrollBy({ left: 320, behavior: 'smooth' });
  }
};
