export const ListSidebar = {
  props: {
    position: 'fixed',
    top: '0',
    left: '0',
    boxSize: '100%',
    align: 'start space-between',
    zIndex: 10,
    transition: 'C defaultBezier',
    transitionProperty: 'visibility, opacity, transform',
    backdropFilter: 'blur(3px)',
    '.listSidebar': {
      opacity: 0,
      visibility: 'visible',
      pointerEvents: 'auto',
    },
    '!listSidebar': {
      opacity: 0,
      visibility: 'hidden',
      pointerEvents: 'none',
    },
  },
  Aside: {
    extend: 'Flex',
    props: {
      flow: 'y',
      align: 'center space-between',
      gap: 'C',
      position: 'absolute',
      widthRange: 'H',
      top: '0',
      right: '0',
      height: '100%',
      background: 'white 0.1',
      padding: 'C1 C1 0',
      overflow: 'auto hidden',
      transition: 'C defaultBezier, D defaultBezier',
      transitionProperty: 'max-width, box-shadow, padding, opacity, transform',
      zIndex: 2,
      '@tabletS': {
        position: 'fixed',
        left: 0,
      },
      '.listSidebar': {
        transform: 'translate3d(0, 0, 0)',
        padding: 'A2 C2 A2 -',
        maxWidth: 'G',
        boxShadow: 'D1, 0, D1, -A, black .35',
        opacity: '1',
      },
      '!listSidebar': {
        transform: 'translate3d(100%, 0, 0)',
        padding: 'A2 0 A2 -',
        maxWidth: '0',
      },
    },
    Cart: {
      extend: 'Flex',
      props: {
        minWidth: '100%',
        overflow: 'hidden auto',
        flexFlow: 'column',
        flexWrap: 'nowrap',
        gap: 'A2',
      },
      childExtend: {
        extend: 'Product',
        props: {
          minHeight: 'H',
        },
      },
      $stateCollection: el => {
            const data = Object.values(el.state.root.products.data)
            return data.filter((v, k) => {
              return parseInt(location.pathname.split('item/')[1]) !== k
            })
          },
    },
  },
  Fade: {
    zIndex: 1,
    flow: 'y',
    align: 'center space-between',
    gap: 'C',
    position: 'absolute',
    left: '0',
    top: '0',
    boxSize: '100%',
    transition: 'D default',
    transitionProperty: 'visibility, opacity',
    onClick: (ev, el, s) => s.root.toggle('listSidebar'),
  },
};