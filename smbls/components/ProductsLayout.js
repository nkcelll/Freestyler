export const ProductsLayout = {
  extend: 'Flex',
  // Overlay: {
  //   width: '100dvw',
  //   height: '100dvh',
  //   backgroundColor: 'red'
  // },
  
  MainHeader:{
    extend: 'Flex',
    props: {
      align: 'center',
      position: 'sticky'
    },
  },
  MarkingText: {
  },
  GifTop: {
  },
  FilterSection: {
  },
  GridContent: {
    extends: 'Grid',
    width: '100dvw',
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
    '@mobile': {
      columns: 'repeat(1, 1fr)',
    },
    backgroundColor: 'rgba(161, 157, 151, 0.5))',
    childExtends: 'ProductsContent',
    childrenAs: 'state',
    children: (el, s) => Object.values(s.rawData.data),
  },
  GifBottom: {
  },
  Pagination: {
  },
  Footer: {
  }
}  