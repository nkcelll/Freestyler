export const SectionName = { 
  extend: 'Flex',
  props: {
    width: '100%',
    height: '80px',
    align: 'center',
    justifyContent: 'center'
  },
  span: {
    props: (el, s) => {
     const category = s.category || 'Category not found'
     return {
      text: category.charAt(0).toUpperCase() + category.slice(1),
      fontSize: '24px',
      letterSpacing: '1.2'
     }
    }
  }
}