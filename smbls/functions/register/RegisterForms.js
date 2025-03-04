const RegisterForms = (labelText, id, inputType, placeHolder) => ({
  extend: 'Flex',
  props: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    height: 'auto',
    flow: 'y',
    gap: '15px',
    padding: '0',
  },
  Label: {
    text: labelText,
    props: {
      fontSize: '16px',
      fontWeight: '400',
      letterSpacing: '1.5px',
      borderBottom: '1px solid black',
    },
  },
  Input: {
    attr: {
      type: inputType,
      id: id,
      placeholder: placeHolder,
      required: true,
      autocomplete: id === 'login-id' ? 'username' : 'current-password',
    },
    props: {
      width: '100%',
      padding: '10px',
      borderRadius: '0',
      border: '1px solid #ccc',
      color: 'zebraInTheNight',
      cursor: 'text',
    },
    style: {
      color: 'zebraInTheNight',
      ':focus': {
        outline: 'none',
        border: '1px solid black',
      },
    },
  },
});

export default RegisterForms;
