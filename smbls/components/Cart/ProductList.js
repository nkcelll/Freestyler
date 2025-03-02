import { ButtonRemoveItem } from '../Shared/components/ButtonRemoveItem';

export const ProductList = {
  extend: 'Flex',
  props: {
    height: 'auto',
    width: 'auto',
    justifyContent: 'space-between',
    // align: 'center',
    padding: '20px 20px',
  },
  Img: {
    attr: {
      src: 'https://bataleon.com/cdn/shop/files/Bataleon-Surfer_2025-Bataleon-Snowboards_-product-image-2025-Surfer_2025-Bataleon-Snowboards_-1_106a6796-f2d7-4eb7-8a72-0356a651545e.jpg?v=1724326204&width=823',
    },
    props: {
      width: '150px',
      height: '150px',
      '@mobileS': {
        width: '100px',
        height: '100px',
      },
    },
  },
  childExtend: {
    extend: 'Flex',
    tag: 'h5',
    props: {
      height: 'auto',
      gap: '15px',
      flow: 'y',
      margin: '0',
    },
  },
  $productDetailCollection: () => [
    { h5: ProductDetails('Surfer') },
    // { h5: ProductDetails('499.99$') },
    { h5: ProductDetails('Size: 150 ') },
    { h5: ProductDetails('Quantity: 1') },
  ],
  TotalContainer: {
    extend: 'Flex',
    props: {
      flow: 'y',
      width: 'auto',
      height: 'auto',
      justifyContent: 'space-between',
      align: 'center',
    },
    Total: {
      text: '499.99$',
      props: {
        margin: 0,
        fontSize: '18px',
        fontWeight: '600',
        alignSelf: 'flex-start',
      },
    },
    ButtonRemoveItem: {},
  },
};

const ProductDetails = (text) => ({
  extend: 'Flex',
  text: text,
  props: {
    margin: 0,
    fontSize: '16px',
    fontWeight: '600',
  },
});
