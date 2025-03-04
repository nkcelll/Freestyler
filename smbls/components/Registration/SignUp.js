import RegisterForms from "../../functions/register/RegisterForms";

export const SignUp = {
  extend: 'Flex',
  props: {
    width: '100%',
    height: '800px',
    justifyContent: 'center',
    align: 'center',
    
  },
  SignUpElements: {
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
      text: 'Sign Up',
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
      $signUpCollection: () => [
        {
          form: RegisterForms('Name', 'first-name', 'text', 'Name'),
        },
        {
          form: RegisterForms('Surname', 'last-name', 'text', 'Surname'),
        },
        {
          form: RegisterForms(
            'Email',
            'email-id',
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
      ButtonSubmit:{
        text: 'Sign Up',
        id: '123',
        onClick: (e) => {
          e.preventDefault()
        }
      },
      toLogIn: {
        extend: ['Link', 'Flex'],
        text: 'Already have an account?',
        attr: {
          href: '/login',
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
          letterSpacing: '1.2px',
          ':hover': {
            backgroundcolor: 'black',
            color: 'white',
          },
        },
      },
    },
  },
};

// const signUpLabel = (labelText, id, inputType = 'text', placeHolder = '') => ({
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
//     },
//   },
//   Input: {
//     attr: {
//       type: inputType,
//       id: id,
//       placeholder: placeHolder,
//       required: true,
//       autocomplete: inputType === 'email' ? 'email' : inputType === 'password' ? 'new-password' : 'name',
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
