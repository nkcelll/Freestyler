export const Pagination = {
  // extend: 'Flex',
  // props: {
  //   width: '100%',
  //   height: '80px',
  //   backgroundColor: 'rgba(255, 255, 254, 0.5)',
  //   justifyContent: 'center',
  //   align: 'center',
  // },
  // ul: {
  //   extend: ['Flex'],
  //   props: {
  //     width: '100px',
  //     height: '40px',
  //     justifyContent: 'center',
  //     align: 'center',
  //     gap: '25px',
  //     padding: '0',
  //     margin: '0',
  //   },
    
  //   $propsCollection: (el, s) => {
  //     const urlParams = new URLSearchParams(window.location.search);
  //     const currentPage = parseInt(urlParams.get('page')) || 1;
  //     const arrayProducts = Object.values(s.rawData.data).length
  //     const prodPerPage = s.productsAmountPerPage.amount
  //     const totalPages = Math.ceil(arrayProducts / prodPerPage)

  //     return {
  //       left: {
  //         tag: 'a',
  //         attr: {
  //           href: currentPage > 1 ? `?page=${currentPage - 1}` : null,
  //         },
  //         IconChevLeft: {
  //         },
  //         on:{
  //           click: (e) => {
  //             if(currentPage === 1) { 
  //               e.preventDefault()
  //             }
  //           }
  //         }
  //       },
        
  //       PaginationNumbers: {},

  //       right: {
  //         tag:'a',
  //         attr:{ 
  //           href: currentPage < totalPages ? `?page=${currentPage + 1}` : null,
  //         },
  //         IconChevRight: {},
  //         onClick: (e) => {
  //           if(currentPage === totalPages) {
  //             e.preventDefault()
  //           }
  //         }
  //       },
  //     };
  //   },
  // },
};
