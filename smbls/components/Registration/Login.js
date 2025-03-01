import RegisterForms from '../../functions/register/RegisterForms';

export const Login = {
  extend: 'Flex',
  props: {
    width: '100%',
    height: '700px',
    justifyContent: 'center',
    align: 'center',
    backgroundColor: '#E4E2E2',
    position: 'relative',
  },
  LoginElements: {
    extend: 'Flex',
    props: {
      width: '300px',
      height: 'fit-content',
      flow: 'y',
      gap: '20px',
      align: 'center',
      justifyContent: 'center',
    },
    H1: {
      text: 'Login',
      fontSize: '24px',
      letterSpacing: '1.7px',
      fontWeight: '600',
      justifyContent: 'flex-start',
    },
    Form: {
      extend: 'Flex',
      props: {
        width: '100%',
        height: 'auto',
        gap: '20px',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flow: 'y',
      },

      childExtend: {
        extend: 'Flex',
        props: {
          width: '100%',
          height: 'auto',
          flow: 'y',
          gap: '15px',
        },
      },
      $loginCollection: () => [
        {
          form: RegisterForms(
            'Email',
            'login-id',
            'email',
            'Example@gmail.com'
          ),
        },
        {
          form: RegisterForms(
            'Password',
            'password-id',
            'password',
            '********'
          ),
        },
      ],
      RememberUser: {
        extend: 'Flex',
        props: {
          width: 'auto',
          height: 'auto',
        },
        Label: {
          extend: 'Flex',
          props: {
            gap: '15px',
          },
          Input: {
            attr: {
              type: 'checkbox',
            },
            props: {
              cursor: 'pointer',
              outline: 'none',
              appearance: 'none',
              position: 'relative',
              padding: 0,
              margin: 0,
              width: '20px',
              height: '20px',
              backgroundColor: 'transparent',
              '::before': {
                content: '""',
                position: 'absolute',
                inset: '0',
                top: '0',
                left: '0',
                width: '20px',
                height: '20px',
                backgroundColor: 'transparent',
                border: '1px solid black',
                borderRadius: '0',
                transition:
                  'background-color 0.2s ease, border-color 0.2s ease',
              },
              ':checked::before': {
                backgroundColor: 'black',
                border: '1px solid black',
                borderRadius: '0',
                transition:
                  'background-color 0.2s ease, border-color 0.2s ease',
              },
              '::after': {
                content: '""',
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '10px',
                height: '5px',
                borderLeft: '1px solid white',
                borderBottom: '1px solid white',
                transform: 'translate(-50%, -50%) rotate(-45deg)',
                opacity: '0',
                transition: 'opacity 0.2s ease',
              },
              ':checked::after': {
                opacity: '1',
              },
            },
          },
          Span: {
            text: 'Remember me',
            props: {
              cursor: 'pointer',
            },
          },
        },
      },
      PassworRecovery: {
        text: 'Forgot password?',
        attr: {
          href: '',
        },
        props: {
          width: 'auto',
          display: 'flex',
          cursor: 'pointer',
          alignSelf: 'flex-end',
          textDecoration: 'none',
          color: 'black',
          fontSize: '14px',
          letterSpacing: '1.2px',
          ':hover': {
            color: 'red',
          },
        },
        on: {
          click: () => {
            const passwordModal = document.getElementById(
              'open-password-recovery'
            );
            passwordModal.style.display = 'flex';
          },
        },
      },
      ButtonSubmit: {
        text: 'Log In',
      },
      toSignUp: {
        extend: ['Link', 'Flex'],
        text: 'Create an account',
        attr: {
          type: 'submit',
          href: '/signup',
        },
        props: {
          width: '100%',
          height: '35px',
          justifyContent: 'center',
          align: 'center',
          backgroundColor: 'rgb(240, 240, 240)',
          transition: 'background-color 0.2s ease, color 0.2s ease',
          borderRadius: '0',
          fontWeight: '400',
          letterSpacing: '1.2',
          ':hover': {
            backgroundColor: 'black',
            color: 'white',
          },
        },
      },
    },
  },
  ModalPasswordRecovery: {},
};

// const loginLabel = (labelText, id, inputType, placeHolder) => ({
//   extend: 'Flex',
//   props: {
//     justifyContent: 'flex-start',
//     alignItems: 'flex-start',
//     width: '100%',
//     height: 'auto',
//     flow: 'y',
//     gap: '15px',
//     padding: '0',
//   },
//   Label: {
//     text: labelText,
//     props: {
//       fontSize: '16px',
//       fontWeight: '400',
//       letterSpacing: '1.5px',
//       borderBottom: '1px solid black',
//     },
//   },
//   Input: {
//     attr: {
//       type: inputType,
//       id: id,
//       placeholder: placeHolder,
//       required: true,
//       autocomplete: id === 'login-id' ? 'username' : 'current-password',
//     },
//     props: {
//       width: '100%',
//       padding: '10px',
//       borderRadius: '0',
//       border: '1px solid #ccc',
//       color: 'black',
//       cursor: 'text',
//     },
//     style: {
//       color: 'black',
//       ':focus': {
//         outline: 'none',
//         border: '1px solid black',

//       },
//     },
//   },
// });
