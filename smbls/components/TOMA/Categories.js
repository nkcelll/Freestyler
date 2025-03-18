export const Categories = {
  extend: 'Flex',
  props: {
    flow: 'y',
  },
  Strong: {
    text: 'Listing.',
    fontSize: 'A2',
    margin: '- - A',
    fontWeight: '100',
    color: 'white',
    borderBottom: '1px solid white',
    borderRight: '1px solid white',
  },
  Flex: {
    props: {
      flow: 'y',
    },
    childExtend: {
      extend: [
        'Link',
      ],
      props: {
        fontSize: 'A',
        fontWeight: '300',
        lineHeight: '2',
        color: 'white',
        position: 'relative',
        ':hover': {
          textDecoration: 'none',
        },
        '::after': {
          content: '""',
          position: 'absolute',
          left: '0',
          bottom: '0',
          width: '100%',
          height: '1px',
          backgroundcolor: 'white',
          transform: 'scaleX(0)',
          transformOrigin: 'bottom right',
          transition: 'transform 0.7s ease',
        },
        ':hover::after': {
          transform: 'scaleX(1)',
          transformOrigin: 'bottom left'
        },
      },
    },
    $propsCollection: () => [{
          href: '/tech',
          text: 'MEN',
        }, {
          href: '/tech',
          text: 'WOMAN'
        }, {
          href: '/tech',
          text: 'KIDS'
        }, {
          href: '/tech',
          text: 'Accessories'
        }, {
          href: '/tech',
          text: 'Rental / Tuning',
        }],
  },
};