export const IncDecButton = {
  extend: [
    'Flex',
  ],
  props: {
    flex: '1',
    border: '1px, solid, border',
    borderRadius: 'A',
    padding: '0 W',
    borderColor: 'currentColor',
    align: 'center space-between',
    color: 'currentColor',
    maxWidth: 'F',
    lineHeight: '1',
  },
  SquareButton_minu: {
    props: {
      icon: 'minus',
      fontWeight: '700',
      background: 'transparent',
      lineHeight: '1',
      padding: 'X',
      border: 'none',
      color: 'currentColor',
      aspectRatio: '1/1',
      round: 'A',
      boxSize: 'A',
      ':hover': {
        background: 'white .25',
      },
    },
    
    on: {
      click: (ev, el, s) => s.root.order.quantity > 1 && s.rootUpdate({
            order: {
              quantity: s.root.order.quantity - 1
            }
          }),
    },
  },
  span2: {
    text: ({
          state
        }) => state.root.order.quantity,
    props: {
      lineHeight: '1.8',
    },
  },
  SquareButton_plus: {
    tag: 'button',
    props: {
      icon: 'plus',
      fontWeight: '700',
      background: 'transparent',
      lineHeight: '1',
      padding: 'X',
      border: 'none',
      color: 'currentColor',
      aspectRatio: '1/1',
      round: 'A',
      boxSize: 'A',
      ':hover': {
        background: 'white .25',
      },
    },
    on: {
      click: (ev, el, s) => s.root.order.quantity < 30 && s.rootUpdate({
            order: {
              quantity: s.root.order.quantity + 1
            }
          }),
    },
  },
};