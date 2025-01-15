export const MainFilterBox = {
  extend: 'Flex',
  attr: {
    id: 'main-filter_sidebar',
  },
  style: {
    marginRight: '20px',
  },
  props: {
    visibility: 'hidden',
    position: 'fixed',
    top: '77px',
    right: '0',
    width: '500px',
    height: '800px',
    flow: 'y',
    gap: '20px',
    // backgroundColor: 'rgb(207, 204, 204)',
    backgroundColor: 'red',
    // backgroundColor: 'rgb(228, 226, 226)',
    zIndex: '20',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '10px 0 0 0',
  },
  CloseListButton: {
    extend: 'Flex',

    props: {
      width: '100%',
      height: 'auto',
      color: 'white',
      border: 'none',
      justifyContent: 'flex-end',
      align: 'center',
    },
    Button: {
      extend: 'Flex',
      attr: {
        id: 'close-filter_list',
      },
      props: {
        border: 'none',
        borderRadius: '0',
        maxWidth: '10px',
        cursor: 'pointer',
      },
      IconClose: {},
    },
  },
  FilterWrap: {
    extend: 'Flex',
    props: {
      flow: 'y',
    },
    SortBy: {},
    GenterFilter: {},
  },
};

