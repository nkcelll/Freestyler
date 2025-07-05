export const NoItemsFound = {
  extend: 'Flex',
  tag: 'H1',
  text: 'No Items found',
  props: {
    justifyContent: 'center',
    align: 'center',
    width: '100%',
    height: '600px',
    fontSize: '24px',
    display: 'none',
  },
  on: {
    update: (el, s) => {
      const noItem = s.productsData.length;
      el.node.style.display = noItem === 0 ? 'flex' : 'none';
    },
  },
};
