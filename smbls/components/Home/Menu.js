export const Menu = {
  props: {
      display: 'none',
      flexFlow: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#E4E2E2',
      height: 'auto',
      '@tabletM': {
        display: 'flex',
        backgroundColor: 'red'
      },
  },
  NewBurgerMenu:{
    props: {
      border: 'none',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      align: 'center'
    },
  },
}