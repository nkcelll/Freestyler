export const NavMenuAbst = ({prefix, categories}) => ({
  HoverBox: {
    extend: 'Flex',
    props: {
      class: `${prefix}-box-dropdown`,
      width: '100%',
      height: '500px',
      backgroundColor: 'rgb(214, 214, 214)',
      justifyContent: 'center', 
      opacity: '1',
      top: '77px',
      left: '0',
      zIndex: '15',
      position: 'absolute',
      visibility: 'hidden',
      opacity: '0',
      transition: 'opacity 1s ease',
    },
    childExtend: {
      extend: 'Flex',
      props: {
        height: '450px',
        width: 'auto',
        gap: '200px',
        display:'flex',
        justifyContent: 'center',
      }
    },
    $topNav: () => categories.map((res) => topCat({ ...res})),
  },
});

const topCat = ({topCat, subCategory}) => ({
  extend: 'Flex',
  props: {
    flow: 'y',
    borderRight: '1px solid black',
    // justifyContent: 'center',
    margin: '20px 0 0 0',
    gap: '20px',
    padding: '0 30px 0 0'
  },
  P: {
    extend: 'Flex',
    text: topCat,
    props:{
      align: 'flex-end',
      fontSize: '18px',
      fontWeight: '600',
    }
  },
  childExtend: {
    extend: 'Flex',
    props: {
      align: 'flex-end',
      gap: '12px',
      flow: 'y'
    }
  },
  $subNav: () => subCategory.map((item) => subCategories({ ...item }))
})

const subCategories = ({subCat, url}) => ({
  extend: 'Link',
  text: subCat,
  props: {
    href: url,
    gap: '0px',
    fontSize: '14px',
    fontWeight: '400',
    letterSpacing: '1.1px'
  }
})
