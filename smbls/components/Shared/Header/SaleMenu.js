export const SaleMenu = {
  extend: 'Flex',
  li: {
    style: {
      listStyleType: 'none',
    },
    a: {
      text: 'SALE ',
      attr: {
        id: 'aTag'
      },
      props: {
        display: 'flex',
        alignItems: 'center',
        height: '30px',
        fontSize: '16px',
        fontWeight: '300',
        padding: '0',
        margin: '0',
        cursor: 'pointer',
        height: '77px',
        
      },
    },
    // on: {
    //   mouseover: (e) => {
    //     const dropdown = document.getElementById('men-hover-collection');
    //     if (dropdown) {
    //       dropdown.style.transition = 'opacity 0.2s ease';
    //       dropdown.style.opacity = '1'; 
    //       dropdown.style.pointerEvents = 'auto'; 
    //     }
    //   },
    // }
  }
}