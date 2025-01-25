export const RegisterForm = {
  extend: 'Flex',

  props: {
    width: '100dvw',
    height: '80dvh',
    position: 'relative', 
    justifyContent: 'space-between',
  },
  ImageContainer: {
    attr: {
      id: 'image-container',
    },
    props: {
      position: 'absolute',
      width: '50%',
      height: '100%',
      maxWidth: '100vw',  // Prevents overflow
      position: 'absolute',
      left:'50%',
      zIndex: '10'
    },
    img: {
      attr: {
        src: 'https://www.playground.ch/wp-content/uploads/2024/11/pip_snwoboard-action-spray-dark-bw_sq.jpg',
        // src: 'https://static.vecteezy.com/system/resources/previews/052/323/391/non_2x/snowboarder-riding-down-snowy-slope-at-night-photo.jpeg',
        id: 'movable-img'
      },
      props: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        objectFit: 'cover',
      },
    },
    Button: {
      text: 'Create an account',
      attr: {
        id: 'movable-button',
      },
      props: {
        position: 'absolute', 
        zIndex: '10', 
        width: '200px',
        height: '60px',
        backgroundColor: 'white', 
        color: 'black',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      },
      style: {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)', 
        borderRadius: '1px'

      },
    },
  },
  // imageContent: {
  //   props: {
  //     width: '50%',
  //     height: '50%'
  //   },
  //   Img: {
  //     attr: {
  //       src: 'https://static.vecteezy.com/system/resources/previews/052/323/391/non_2x/snowboarder-riding-down-snowy-slope-at-night-photo.jpeg',
  //       id: 'movable-img'
  //     },
  //     props: {
  //       width: '100%',
  //       height: '100%',
  //       position: 'absolute',
  //       objectFit: 'cover',
  //       zIndex: '0',
  //     },
  //   },
  //   Button: {
  //     text: 'Create an account',
  //     attr: {
  //       id: 'movable-button'
  //     },
  //     props: {
  //       position: 'absolute', 
  //       zIndex: '10', 
  //       width: '200px',
  //       height: '60px',
  //       backgroundColor: 'white', 
  //       color: 'black',
  //       border: 'none',
  //       borderRadius: '5px',
  //       cursor: 'pointer',
  //     },
  //     style: {
  //       top: '50%',
  //       left: '50%',
  //       transform: 'translate(-50%, -50%)', 
  //       borderRadius: '1px'
  
  //     },
  //   },
  //   on: {
  //     click: () => {
  //       const image = document.getElementById('movable-img')
  //       const button = document.getElementById('movable-button')
  
  //        image.style.transition = 'all 0.5s ease'; // Optional: Smooth transition
  //         image.style.transform = 'translateX(-50px)'
  //     } 
  //   },
  // },
  

  // Img: {
  //   attr: {
  //     src: 'https://static.vecteezy.com/system/resources/previews/052/323/391/non_2x/snowboarder-riding-down-snowy-slope-at-night-photo.jpeg',
  //   },
  //   props: {
  //     width: '100%',
  //     height: '100%',
  //     position: 'absolute',
  //     top: '0',
  //     left: '0',
  //     objectFit: 'cover',
  //     zIndex: '-1', // Place behind the containers
  //   },
  // },

  LeftContainer: {
    extend: 'Flex',
    props: {
      width: '50%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      zIndex: '1',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
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
        justifyContent: 'flex-start',
      },
      Form: {
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
            form: loginLabel('Email', 'login-id', 'email', 'Example@gmail.com'),
          },
          {
            form: loginLabel('Password', 'password-id', 'password', '********'),
          },
        ],
      },
      a: {
        text: 'Forgot password?',
        attr: {
          href: '',
        },
        props: {
          display: 'flex',
          cursor: 'pointer',
          alignSelf: 'flex-end',
          textDecoration: 'none',
          color: 'black',
          fontSize: '14px',
          letterSpacing: '1.2px',
        },
      },
      Button: {
        text: 'Log In',
        props: {
          width: '100%',
          height: 'auto',
          borderRadius: '0',
        },
      },
    },
  },

  RightContainer: {
    extend: 'Flex',
    props: {
      width: '50%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      // position: 'relative',
      // zIndex: '1',
      backgroundColor: 'rgba(255, 255, 255, 0.9)', 
    },
    
    CreateAccount: {
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
        text: 'Create an account',
        fontSize: '24px',
        letterSpacing: '1.7px',
        fontWeight: '400',
        justifyContent: 'flex-start',
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
            form: loginLabel('Name', 'name-id', 'text', ''),
          },
          {
            form: loginLabel('Lastname', 'lastname-id', 'text', ''),
          },
          {
            form: loginLabel('Email', 'email-id', 'email', 'Example@gmail.com'),
          },
          {
            form: loginLabel('Password', 'password-id', 'password', '********'),
          },
        ],
      },
      // a: {
      //   text: 'Forgot password?',
      //   attr: {
      //     href: '',
      //   },
      //   props: {
      //     display: 'flex',
      //     cursor: 'pointer',
      //     alignSelf: 'flex-end',
      //     textDecoration: 'none',
      //     color: 'black',
      //     fontSize: '14px',
      //     letterSpacing: '1.2px',
      //   },
      // },
      Button: {
        text: 'Sign In',
        props: {
          width: '100%',
          height: 'auto',
          borderRadius: '0',
        },
      },
    },
  },
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
    },
    props: {
      width: '100%',
      padding: '10px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      color: 'black',
      cursor: 'text',
    },
    style: {
      color: 'black'
    },
  },
});


document.addEventListener('DOMContentLoaded', () => {
  const image = document.getElementById('movable-img');
  const button = document.getElementById('movable-button');
  const container = document.getElementById('image-container');

  button.dataset.state = 'active'; 

  button.addEventListener('click', () => {
    if (container) {
      if (button.dataset.state === 'active') {
        container.style.left = '0';
        container.style.transition = 'all 0.5s ease'; 
        button.style.width = 'auto'
        button.dataset.state = 'inactive'; 
        button.textContent = 'Already have an account ? '
      } else if (button.dataset.state === 'inactive') {
        container.style.left = '50%';  
        container.style.transition = 'all 0.5s ease';
        button.innerText = 'Create an account';
        button.dataset.state = 'active'; 
      }
    }
  });
});
