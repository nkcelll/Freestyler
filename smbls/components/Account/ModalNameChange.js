import RegisterForms from '../../functions/register/RegisterForms';
import modalReminders from '../../functions/domEvents/modalReminders';

export const ModalNameChange = {
  extend: 'Flex',
  attr: {
    id: 'open-name-change-profile',
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
    cursor: 'pointer',
  },
  on: {
    click: (e) => {
      if (e.target === e.currentTarget) {
        document.getElementById('open-name-change-profile').style.display =
          'none';
      }
    },
  },
  ModalNameContainer: {
    extend: 'Flex',
    props: {
      width: '400px',
      padding: '20px',
      height: 'auto',
      // backgroundcolor: 'currentColor',
      gap: '30px',
      cursor: 'default',
      flow: 'y',
      '@light': {
        background: '#E4E2E2',
      },
      '@dark': {
        background: '#1E201E',
      },
    },
    EditProfile: {
      extend: 'Flex',
      props: {
        width: '100%',
        height: '40px',
        flow: 'x',
        justifyContent: 'space-between',
        align: 'center',
      },
      H5: {
        text: 'Edit Profile',
        props: {
          fontSize: '18px',
          margin: 0,
        },
      },
      IconClose: {
        on: {
          click: () => {
            document.getElementById('open-name-change-profile').style.display =
              'none';
          },
        },
      },
    },
    EditSection: {
      extend: 'Flex',
      props: {
        width: '100%',
        height: 'auto',
        gap: '10px',
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
      $collection: () => [
        {
          form: RegisterForms(
            'First Name',
            'profile-first-name',
            'text',
            '',
            'nameModal-reminder'
          ),
        },
        {
          form: RegisterForms(
            'Last Name',
            'profile-last-name',
            'text',
            '',
            'nameModal-reminder'
          ),
        },
      ],
    },
    Buttons: {
      extend: 'Flex',
      props: {
        width: '100%',
        height: '40px',
        justifyContent: 'flex-end',
        gap: '20px',
      },
      Cancel: {
        tag: 'button',
        text: 'Cancel',
        extend: 'Flex',
        attr: {
          id: 'cancel-profile',
        },
        props: {
          width: '80px',
          height: '40px',
          justifyContent: 'center',
          align: 'center',
          fontSize: '16px',
          border: 'none',
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
        on: {
          click: () => {
            document.getElementById('open-name-change-profile').style.display =
              'none';
          },
        },
      },
      Save: {
        extend: 'ButtonSubmit',
        text: 'Save',
        props: {
          width: '80px',
          height: '40px',
        },
        on: {
          click: () =>
            modalReminders('nameModal-reminder',
            [
              'profile-first-name',
              'profile-last-name',
            ]
          ),
        },
      },
    },
  },
};
