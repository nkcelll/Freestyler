export const ModalImage = {
  Modal: {
    extend: 'Flex',
    props: { 
      width: '100%',
      height: '100%', 
      backgroundColor: 'rgba(0, 0, 0, 0.8)', 
      position: 'relative',
      zIndex: '20',
      overflow: 'auto' 
    },
    IconClose:{},
    Container: {
      props: {
        width: '25%',
        height: '50%',
        backgroundColor: 'red',
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
      }
    }
  }
}