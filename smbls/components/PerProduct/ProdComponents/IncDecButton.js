import { IconMinus } from "../../Assets/Icons/IconMinus";
import { IconPlus } from "../../Assets/Icons/IconPlus";

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
    IconMinus: {},
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
    IconPlus: {},
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
