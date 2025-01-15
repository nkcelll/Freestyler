export const RegisterForm = {
  extend: 'Flex',

  props: {
    width: '100dvw',
    height: '80dvh',
    // backgroundColor: 'red',
    justifyContent: 'space-between',
    poisition: 'relative'
  },

  LeftContainer: {
    extend: 'Flex',
    props: {
      width: '50%',
      height: '100%',
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      align: 'center'

    },
    Login: {
      extend: 'Flex',
      props: {
        width: 'auto',
        height: '100%',
        flow: 'y',
        gap: '20px',
        align: 'center',
        justifyContent: 'center',
      },
      H1: {
        text: 'Login',
        fontSize: '24px',
        letterSpacing: '1.7px',
        fontWeight: '400',
        justifyContent: 'flex-start'
      },
      LogForm: {
        extend: 'Flex',
        props: {
          width: '100%',
          height: 'auto',
          gap: '10px',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          flow: 'y',
        },
        $collection: () => [
          {
            div: loginLabel('Email', 'login-id', 'email', 'Example@gmail.com'),
          },
          {
            div: loginLabel('Password', 'password-id', 'password', '********'),
          },
        ],
        
      },
      a: {
        text: 'Forgot password?',
        attr: {
          href: ''
        },
        props: {
          display:'flex',
          cursor: 'pointer',
          alignSelf: 'flex-end',
          textDecoration: 'none',
          color: 'black',
          fontSize: '14px',
          letterSpacing: '1.2px'
        }
      },
      Button: {
        text: 'Log In',
        props: {
          width: '100%',
          height: 'auto',
          borderRadius: '0',

        }
      }
    },
  },
  
    RightContainer: {
      extend: 'Flex',
      props: {
        width: '50%',
        height: '100%',
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
        align: 'center'
  
      },
      AlreadyAccount: {
        LogForm: {
          extend: 'Flex',
          props: {
            width: '100%',
            height: 'auto',
            gap: '10px',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            flow: 'y',
          },
          Img: {
            attr: {
              src: 'https://static.vecteezy.com/system/resources/previews/052/323/391/non_2x/snowboarder-riding-down-snowy-slope-at-night-photo.jpeg'
            },
          },
          $createAccount: () => [
            {
              div: loginLabel('First Name'),
            },
            {
              div: loginLabel('Last Name'),
            },
            {
              div: loginLabel('Email', 'login-id', 'email', 'Example@gmail.com'),
            },
            {
              div: loginLabel('Password', 'password-id', 'password', '********'),
            },
          ],
          Button: {
            text: 'Submit',
            props: {
              width: '100%',
              height: 'auto',
              borderRadius: '0',
    
            }
          },
          AlreadyHave: {
            Button: {
              text: 'Already have an account ? '
            }
          }
          
        },
      }
    
  }
  
  
  
};

const loginLabel = (labelText, id, inputType, placeHolder) => ({
  extend: 'Flex',
  props: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    height: 'auto',
    flow: 'y',
    gap: '10px',
    // padding: '0 30px',
    padding: '0'

  },
  Label: {
    text: labelText,
    props: {
      fontSize: '16px',
      fontWeight: '400',
      letterSpacing: '1.5px',
      borderBottom: '1px solid black'
    },
  },
  Input: {
    attr: {
      type: inputType,
      id: id,
      placeholder: placeHolder,
    },
    props: {
      width: '100%',
      padding: '10px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      // backgroundColor: '#fff',
      color:'black',
      cursor: 'text',
    },
    style: {
      backgroundColor: 'transparent',
      color: 'white',
      '::placeholder': {
        color: 'rgba(26, 26, 26, 0.7)', 
      },
    },
  }
  
});
