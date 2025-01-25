export const PerProductDetails = {
  extend: 'Flex',
  props: {
    width: '100%',
    height: 'auto',
    // height: '800px',
    // height: '500px',
    // backgroundColor: 'red',
    backgroundColor: '#E4E2E2',
    padding: '20px 20px',
    // borderTop: '1px solid grey'
  },
  DropDownContainer: {
    extend: 'Flex',
    props: {
      width: '100%',
      height: '100%',
      flow: 'y',
      // backgroundColor: 'yellow',
    },
    Detail: {},
    TechSpecs: {},
    Features: {}
  },
}