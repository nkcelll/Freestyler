import RegisterForms from '../../functions/register/RegisterForms';

export const ModalPasswordRecovery = {
  extend: 'Flex',
  attr: {
    id: 'open-password-recovery',
  },
  props: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'fixed',
    top: '0',
    left: '0',
    justifyContent: 'center',
    align: 'center',
    zIndex: '100',
    display: 'none',
  },
  on: {
    click: (e) => {
      if (e.target === e.currentTarget) {
        document.getElementById('open-password-recovery').style.display =
          'none';
      }
    },
  },
  Container: {
    extend: 'Flex',
    props: {
      width: '400px',
      padding: '20px',
      height: 'auto',
      backgroundcolor: 'white',
      gap: '30px',
      flow: 'y',
    },
    IconClose: {
      props: {
        alignSelf: 'flex-end',
      },
      on: {
        click: () => {
          document.getElementById('open-password-recovery').style.display =
            'none';
        },
      },
    },
    H1: {
      text: 'Password Reset',
      props: {
        fontSize: '18px',
        letterSpacing: '1.2',
        margin: 0,
      },
    },
    p: {
      text: `We'll send you an email to reset your password.`,
      props: {
        margin: 0,
        letterSpacing: '1.2',
      },
    },
    PasswordModal: {
      extend: 'Flex',
      props: {
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
      $passworRecoveryCollection: () => [
        {
          form: RegisterForms(
            'Email',
            'recovery-password',
            'email',
            'Example@gmail.com'
          ),
        },
      ],
    },
    ButtonSubmit: {
      text: 'Send',
    },
  },
};
