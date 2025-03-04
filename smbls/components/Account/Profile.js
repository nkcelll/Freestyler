export const Profile = {
  extend: 'Flex',
  props: {
    width: '100%',
    height: '200px',
    justifyContent: 'center',
    align: 'center',
    backgroundColor: '#E4E2E2',
  },
  ProfileContainer: {
    extend: 'Flex',
    props: {
      width: '50%',
      height: 'auto',
      gap: '20px',
      flow: 'y',
      '@mobileL': {
        width: '80%'
      }
    },
    ProfileHeader: {
      extend: 'Flex',
      props: {
        width: '100%',
        height: 'auto',
        justifyContent: 'space-between'
      },
      H1: {
        text: 'Profile',
        props: {
          fontSize: '20px',
          margin: '0',
        },
      },
      a:{ 
        text: 'Log out',
        style: {
          textDecoration: 'underline',
          cursor: 'pointer'
        }
      }
    },
    ProfileDetailBox: {
      extend: 'Flex',
      props: {
        width: '100%',
        height: 'auto',
        flow: 'y',
        gap: '20px',
        padding: '20px 20px',
        border: '1px solid black',
      },
      NameSection: {
        extend: 'Flex',
        props: {
          width: '100',
          height: '25px',
          gap: '20px',
        },
        UserName: {
          tag: 'span',
          text: 'Name',
          props: {
            fontSize: '16px',
            fontWeight: '600',
            margin: '0',
            color: 'grey',
          },
        },
        Button: {
          extend: 'Flex',
          props: {
            width: 'auto',
            height: 'auto',
            padding: '0',
            backgroundColor: 'transparent',
          },
          IconEdit: {},
        },
      },
      EmailSection: {
        extend: 'Flex',
        props: {
          width: '100%',
          height: 'auto',
          flow: 'y',
          flexShrink: 1,
        },
        EmailText: {
          tag: 'span',
          text: 'Email',
          props: {
            fontSize: '16px',
            fontWeight: '600',

            color: 'grey',
          },
        },
        UserEmail: {
          tag: 'span',
          text: 'kartozianikoloz1@gmail.com',
        },
      },
    },
  },
};
