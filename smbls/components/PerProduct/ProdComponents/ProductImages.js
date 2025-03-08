export const ProductImages = {
  extend: 'Grid',
  props: {
    width: '70%',
    columns: 'repeat(2, 1fr)',
    rows: 'repeat(2, auto)',
    gap: '15px',
    '@tabletL<': {
      width: '70%',

      '& img': {
        maxWidth: '100%',
        maxHeight: '100%',
        objectFit: 'cover',
      },
    },
    '@tabletL': {
      width: '70%',
      '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      },
    },
    '@tabletL': {
      width: '70%',
      '& img': {
        width: '100%',
        height: '400px',
        objectFit: 'cover',
      },
    },
    '@mobileL': {
      display: 'flex',
      overflowX: 'auto',
      width: '100%',
      height: 'auto',
      scrollSnapType: 'x mandatory',
      '& img': {
        width: 'auto',
      },
    },
    '@mobileM': {
      '& img': {
        width: '350px',
      },
    },
    '@mobileS': {
      '& img': {
        width: '300px',
        height: 'auto',
      },
    },
  },
  $collection: () => [
    {
      Img: {
        attr: {
          src: 'https://bataleon.com/cdn/shop/files/surfer-786407.jpg?v=1740809018&width=823',
        },
        // props: {
        //   maxWidth: '100%',
        //   maxHeight: '100%',
        //   objectFit: 'cover',
        //   cursor: 'pointer',

        // },
      },
    },
    {
      Img: {
        attr: {
          src: 'https://bataleon.com/cdn/shop/files/surfer-786407.jpg?v=1740809018&width=823',
        },
        // props: {
        //   maxWidth: '100%',
        //   maxHeight: '100%',
        //   objectFit: 'cover',
        // },
      },
    },
    {
      Img: {
        attr: {
          src: 'https://bataleon.com/cdn/shop/files/surfer-786407.jpg?v=1740809018&width=823',
        },
        // props: {
        //   maxWidth: '100%',
        //   maxHeight: '100%',
        //   objectFit: 'cover',
        // },
      },
    },
    {
      Img: {
        attr: {
          src: 'https://bataleon.com/cdn/shop/files/surfer-786407.jpg?v=1740809018&width=823',
        },
        // props: {
        //   maxWidth: '100%',
        //   maxHeight: '100%',
        //   objectFit: 'cover',
        // },
      },
    },
  ],
};
