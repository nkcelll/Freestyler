export const Pagination = {
  extend: 'Flex',
  props: {
    width: '100dvw',
    height: '80px',
    backgroundColor: 'rgba(161, 157, 151, 0.5)',
    justifyContent: 'center',
    align: 'center'
  },
  ul: {
    extend: ['Flex'],
    props: {
      width: '100px',
      height: '40px',
      // backgroundColor:'red',
      justifyContent:'center',
      align: 'center',
      gap: '25px',
      padding: '0',
      margin: '0'
    },
    childExtend: {
      extend: 'Link',
    },
    $propsCollection: () => (
      {
        left: {
          href: '',
          IconChevLeft:{}
        },
        span: {
          text: '1',
          style: {
            fontWeight: '400',
          }
        },
        a: {
          href: '',
          IconChevRight:{}
        }
      }
    )
  }
};