export const NewHeader = {
  props: {
    // gridRow: 'span 2',
    display: 'flex',
    flexFlow: 'row',
    // align: 'center space-between',
    justifyContent: 'space-between',
    backgroundColor: '#E4E2E2',
    padding: '1px 15px',
    width: '100dvw',
    height: '77px',
    gap: 'G 0',
    inset: '0',
    position: 'relative'
  },
  Logo: {
    props: {
      alignSelf: 'center', 
    }
  },
  SnowboardSvg: {
    extend: 'Flex',
    props: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    Img: {
      attr: {
        src: 'https://i.gifer.com/3Who.gif',
      },
      props: {
        maxHeight: '100%',
        position: 'absolute',
        left: '46%',    
        // transform: 'translatex(10%)'
      }
    },
  },
  DivFlexButtons:{
    extend: 'Flex',
    props: {
      justifyContent: 'space-between',
      padding: '0 A',
      gap: '14px',
    },
    SearchBox: {
      extend: 'Flex',
      props: {
        gap: '5px',
        ':hover': {
          '& input': {
            display: 'flex', 
            width: '1px', 
            backgroundColor: '#E4E2E2'
          }
        },
      },
      SearchButton: {
        tag: 'button',
        attr: {
          type: 'submit',
        },
        props: {
          border: 'none',
          backgroundColor: 'transparent',
          cursor: 'pointer',
        },
        Img: {
          src: 'https://files-production-symbols-platform-development-en-d5-u3-p7x0.based.dev/fi1cdb0162/cf1a1d28-df0d-4cd0-89a6-38a6171f3007-534866b3-4e0f-45ef-a802-219924fcca5c-b9e4e4c4-2309-4b14-903d-fc4b8c836caa.png',
        },
        on:{
          mouseover:(ev) => {
            const search = document.querySelector('.input-search_hidden')
            search.style.display = 'flex'
            search.style.width = '200px'
            search.style.backgroundColor = '#E4E2E2'
            search.style.border = '1px solid black'
            
            
          },
          click: (e) => {
            const search = document.querySelector('.input-search_hidden')
            
            if(search.value) {
              console.log(search.value)
            } else {
              e.preventDefault()
            }
          }
        },
      },
      Input: {
        attr: {
          placeholder: 'Search...',
          // type: 'hidden',
          class: 'input-search_hidden'
        },
        props: {
          height: '5px',
          alignSelf: 'center',
          display: 'none',

          outline: 'none',
          borderRadius: '5px',
          // width: '0',
          backgroundColor: '#E4E2E2',

          border: 'none',
          outlineWidth: '1px',
          transition: 'all 0.7s ease',
        },
        on: {
          keydown:(ev) => {
            const search = document.querySelector('.input-search_hidden')
            if(ev.key === 'Enter') {
              console.log(search.value)
            }
          }
        }
      },
    },
    UserButton: {
      tag: 'button',
      props: {
        border: 'none',
        backgroundColor: 'transparent',
        cursor: 'pointer',
      },
      Img: {
        src: 'https://files-production-symbols-platform-development-en-d5-u3-p7x0.based.dev/fif6ace512/62096263-8481-49e3-8ae0-571d3e81b277-4052fc36-93d8-4886-aa22-f601541b5479-03daedeb-4895-4f3d-8b7f-1f036f994d70.png',
      },
    },
    CartButton: {
      tag: 'button',
      props: {
        border: 'none',
        backgroundColor: 'transparent',
        cursor: 'pointer',
      },
      Img: {
        src: 'https://files-production-symbols-platform-development-en-d5-u3-p7x0.based.dev/fi2ef0b719/d0174c26-9efa-4300-9434-936317502425-defbf31c-3924-46ba-9d3f-322e0e87256b-d26a7ac4-a25f-40b7-80f7-66779d6fabe7.png',
      },
    },
  },
}