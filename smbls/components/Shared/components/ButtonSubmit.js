export const ButtonSubmit = {
  tag:'button',
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
    padding: '0',
    border: 'none',
    justifyContent: 'center',
    backgroundColor: 'rgb(240, 240, 240)',
    letterSpacing: '1.2px',
    transition: 'background-color 0.2s ease, color 0.2s ease',
    cursor: 'pointer',
    ':hover': {
      backgroundcolor: 'black',
      color: 'white',
    },
  },
}