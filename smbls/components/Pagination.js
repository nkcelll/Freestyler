export const Pagination = {
  extend: 'Flex',
  props: {
    width: '100dvw',
    height: '100px',
    backgroundColor: 'rgba(161, 157, 151, 0.5)',
  },
  ul: {
    extend: 'Flex',
    props: {
      width: '100%',
      padding: '0 65px 0 0',
      justifyContent: 'flex-end', 
      gap: '16px',
      align: 'center'
    },
    span: {
      tag: 'span',
      props: {
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        gap: '8px', 
      },
      Img: {
        src: 'https://files-production-symbols-platform-development-en-d5-u3-p7x0.based.dev/fi0dd65299/c75101b5-50f0-43bc-9061-32879cfb7f13-bba5ed5a-da6a-4701-b772-185f5135ad2d-b7983f41-1cd1-4130-87cc-f33e5ccf6a48.svg',
        
      },
      a: {
        props: {
          fontSize: '16px',
          fontWeight: '400'
        },
        text: 'Previous',
      },
    },
    
    li: {
      extend: 'Flex',
      props: {
        width: '36px',
        height: '36px',
        padding: '0 10px', 
        border: '1px solid black',
        borderRadius: '5px',
        align: 'center',
        justifyContent: 'center'

      },
      a: {
        href: '',
        text: '1',
        
      },
    },
    spana: {
      tag: 'span',
      props: {
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        gap: '8px', 
      },
      
      a: {
        props: {
          fontSize: '16px',
          fontWeight: '400'
        },
        text: 'Next',
      },
      Img: {
        src: 'https://files-production-symbols-platform-development-en-d5-u3-p7x0.based.dev/fi503bdf88/1f8c51e8-9b6a-4034-9f42-77bd3dd22215-03555ac0-40d9-4784-853f-b7f3642d3203-ca33fdec-8aa9-40f6-ba18-33cd550541b7.svg',
      },
    },
  },
};