export const ButtonSubmit = {
  tag: 'button',
  extend: 'Flex',
  attr: {
    type: 'submit',
  },
  style: {
    borderRadius: '0',
  },
  props: {
    width: '100%',
    height: '40px',
    align: 'center',
    fontSize: '16px',
    padding: '0',
    border: 'none',
    justifyContent: 'center',
    // backgroundColor: 'rgb(240, 240, 240)', 
    letterSpacing: '1.2px',
    transition: 'background-color 0.2s ease, color 0.2s ease',
    cursor: 'pointer',
    '@light': {
      background: 'rgb(240, 240, 240)',
      color: 'black',
    },
    '@dark': {
      background: '#4d504d',
      color: 'white',
    },
    ':hover': {
      '@light': {
        background: 'black',
        color: 'white',
      },
      '@dark': {
        background: 'rgb(240, 240, 240)',
        color: 'black',
      },
    },
  },
};
