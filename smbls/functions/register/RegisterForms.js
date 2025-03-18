const RegisterForms = (labelText, id, inputType, placeHolder, spanClassId) => ({
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
      borderBottom: '1px solid currentColor',
    },
  },
  Span: {
    text: 'Fill the field',
    attr: {
      class: spanClassId,
    },
    props: {
      display: 'none',
      color: 'red',
      fontSize: '14px',
    },
  },
  Input: {
    attr: {
      type: inputType,
      id: id,
      placeholder: placeHolder,
      required: true,
      autocomplete: 'off'
      // autocomplete: id === 'login-id' ? 'username' : 'current-password',
    },
    props: {
      width: '100%',
      padding: '10px',
      borderRadius: '0',
      border: '1px solid #ccc',
    },
    style: {
      ':focus': {
        outline: 'none',
        border: '1px solid black',
      },
    },
  },
});

export default RegisterForms;
