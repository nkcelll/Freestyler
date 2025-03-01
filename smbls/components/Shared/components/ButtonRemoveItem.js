export const ButtonRemoveItem = { 
  extend: 'Flex',
  attr: {
    type: 'button',
  },
  style: {
    borderRadius: '0',
  },
  props: {
    width: '100%',
    height: '40px',
    align: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(240, 240, 240)',
    letterSpacing: '1.2px',
    transition: 'background-color 0.2s ease, color 0.2s ease',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: 'rgb(219, 219, 219)',
      color: 'white',
    },
  },
  Img: {
    src: 'https://files-production-symbols-platform-development-en-d5-u3-p7x0.based.dev/ficaa152df/f130d2c6-2c0f-4766-be79-abb334257bc0-b65b03fe-2fa5-4bb0-a84c-70c6ea7e0618-c7812510-86c2-47a6-83c8-dfd02c518030.svg',
    
  }
}