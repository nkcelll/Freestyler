export const FilterSection = {
  extend: 'Flex',
  props: {
    height: '64px',
    width: '100dvw',
    position: 'relative', 
  },
  giffing: {
    img: {
      attr: {
        src: 'https://i.gifer.com/DSBZ.gif',
      },
      props: {
        width: '100dvw',
        height: '64px',
        position: 'relative', 
      },
    },
    filterContainer: {
      props: {
        display: 'flex',
        gap: 'A',
        position: 'absolute', 
        width: '480px',
        height: '64px',
        zIndex: '10',
        backgroundColor: '#BCB9B9',
        alignItems: 'center',
        justifyContent: 'center',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)', 
      },
      Button: {
        Img: {
          src: 'https://files-production-symbols-platform-development-en-d5-u3-p7x0.based.dev/fid4ee67d6/96460cb7-56ba-4250-98f5-420cddfadd13-86dbafa0-abc1-4c19-a0e7-adefcc84cdc9-9c2f4496-d93c-4e90-ac2d-eb124427669e.png',
        },
        props: {
          justifyContent: 'center',
          alignItems: 'center',
          border: 'none',
          backgroundColor: 'transparent',
          padding: '0'
        },
      },
      P: {
        text: 'FILTER'
      }
    },
  },
};
