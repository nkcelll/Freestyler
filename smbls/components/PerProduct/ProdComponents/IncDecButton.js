export const IncDecButton = {
  extend: 'Flex',
  props: {
    flow: 'x',
    width: '120px',
    justifyContent: 'space-between',
    height: '50px',
    border: '1px solid grey',
    '@mobileL': {
      width: '100%'
    }
  },
  Button: {
    props: {
      border: 'none',
      borderRadius: '0',
      width: '50px',
      height: '100%',
      alignSelf: 'center',
      padding: '0',
      backgroundColor: 'transparent',
    },
    Img: {
      src: 'https://files-production-symbols-platform-development-en-d5-u3-p7x0.based.dev/fi8e13f2be/e28e5bec-7ca8-49ed-9e65-8f4b59c7d2b1-dc3b3e6b-f161-4e22-8ab9-d60f24ada9f5-199cfb95-bcf6-4a71-bb93-45ea975ede8e.svg',
    },
    on: {
      click: (ev, el, s) =>
        s.root.order.quantity > 1 &&
        s.rootUpdate({
          order: {
            quantity: s.order.quantity - 1,
          },
        }),
    },
  },
  span: {
    text: ({ state }) => state.root.order.quantity,
    props: {
      alignSelf: 'center',
    },
  },
  button: {
    props: {
      border: 'none',
      borderRadius: '0',
      width: '50px',
      height: 'auto',
      alignSelf: 'center',
      padding: '0',
      cursor: 'pointer',
      backgroundColor: 'transparent',
    },
    Img: {
      src: 'https://files-production-symbols-platform-development-en-d5-u3-p7x0.based.dev/fi096f6eac/b12b40ea-80e4-43f3-a018-252a28ef8ce6-72875be9-8994-4a5e-bb68-83df8069c58f-bf8dfd6b-bab5-46f3-8387-5567bb328eec.svg',
    },
    on: {
      click: (ev, el, s) =>
        s.root.order.quantity < 30 &&
        s.rootUpdate({
          order: {
            quantity: s.root.order.quantity + 1,
          },
        }),
    },
  },
};
