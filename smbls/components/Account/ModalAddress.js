import RegisterForms from "../../functions/register/RegisterForms";

export const ModalAddress = {
  extend: 'Flex',
  attr: {
    id: 'open-address-change-profile',
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
        document.getElementById('open-address-change-profile').style.display =
          'none';
      }
    },
  },
  ModalNameContainer: {
    extend: 'Flex',
    props: {
      width: '400px',
      padding: '20px',
      maxHeight: '500px',
      overflowY: 'scroll',
      // overflowY: 'hidden',
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
    AddAddressDetails: {
      extend: 'Flex',
      props: {
        width: '100%',
        height: '40px',
        flow: 'x',
        justifyContent: 'space-between',
        align: 'center',
      },
      H5: {
        text: 'Add Address',
        props: {
          fontSize: '18px',
          margin: 0,
        },
      },
      IconClose: {
        on: {
          click: () => {
            document.getElementById('open-address-change-profile').style.display =
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
          form: RegisterForms('First Name', 'address-first', 'text', ''),
        },
        {
          form: RegisterForms('Last Name', 'address-last', 'text', ''),
        },
        {
          form: RegisterForms('Address', 'address-address', 'text', ''),
        },
        {
          form: RegisterForms('Appartment', 'address-appartment', 'text', ''),
        },
        {
          form: RegisterForms('Phone Number', 'address-phone', 'text', ''),
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
            document.getElementById('open-address-change-profile').style.display =
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
          click: () => requiredFieldReminder()
        }
      },
    },
  },
}

const requiredFieldReminder = () => {
  const reminder = document.querySelector('field-reminder');

  const fields = [
    document.getElementById('address-first'),
    document.getElementById('address-last'),
    document.getElementById('address-address'),
    document.getElementById('address-appartment'),
    document.getElementById('address-phone'),
  ];
  console.log(fields);
  

  // Check if any field is empty
  const hasEmptyField = fields.some(field => !field.value.trim());

  if (hasEmptyField) {
    reminder.style.display = 'flex';
  } else {
    reminder.style.display = 'none';
  }
};