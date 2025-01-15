export const FilterSection = {
  extend: 'Flex',

  props: {
    width: '100dvw',
    height: '64px',
    backgroundColor: '#D8D5D5',
    justifyContent: 'space-between',
    align: 'center',
    padding: '12px 46px',
    // position: 'sticky',
    // top: '77px'
    
  },
  ProductMatch: {
    text: '45 Products',
  },
  Button: {
    extend: 'Flex',
    attr: {
      id: 'open-filter_list'
    },
    props: {
      gap: '10px',
      align: 'center',
      border: 'none',
      borderRadius: '0',
      padding: '0',
      backgroundColor: 'transparent',
    },
    IconFilter: {
    },
    P: {
      text: 'Filter & Sort',
      margin: '0',
    },
    
  },
    // on: {
  //   click: () => {
  //     const closeFilterList = document.getElementById('close-filter_list')
  //     const filterVisible = document.getElementById('main-filter_sidebar')
  //     console.log(closeFilterList);
  //     if(closeFilterList) {
  //       filterVisible.style.visibility = 'hidden'
  //     }
  //   }
  // },
  
  MainFilterBox: {}
  // MainFilterBox: {
  //   extend: 'Flex',
  //   attr: {
  //     id: 'main-filter_sidebar'
  //   },
  //   style: {
  //     marginRight: '20px', 
      

  //   },
  //   props: {
  //     visibility: 'hidden',
  //     position: 'fixed',
  //     top: '77px',          
  //     right: '0',  
  //     width: '500px',       
  //     height: '800px',      
  //     flow: 'y',            
  //     gap: '20px',
  //     // backgroundColor: 'rgb(207, 204, 204)', 
  //     backgroundColor: 'red', 
  //     // backgroundColor: 'rgb(228, 226, 226)', 
  //     zIndex: '20',         
  //     boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', 
  //     padding: '10px 0 0 0',      
  //   },
  //   CloseListButton: {
  //     extend: 'Flex',
      
  //     props: {
  //       width: '100%',
  //       height: 'auto',
  //       color: 'white',         
  //       border: 'none',
  //       justifyContent: 'flex-end',
  //       align: 'center'
     
  //     },
  //     Button: {
  //       extend: 'Flex',
  //       attr: {
  //         id: 'close-filter_list'
  //       },
  //       props: {
  //         border: 'none',
  //         borderRadius: '0',
  //         maxWidth: '10px',
  //         cursor: 'pointer',

  //       },
  //       IconClose:{

  //       }
  //     },
      
  //   },
  //   FilterWrap: {
  //     extend: 'Flex',
  //     props: {
  //       flow: 'y',
  //     },
  //     SortBy: {
  //     },
  //     GenterFilter: {
  //     }
  //   }
  // },
  // Overlay: {
  //   props: {
  //     position: 'absolute',
  //     width: '100dvw',
  //     height: '100dvh',
  //     backgroundColor: 'grey',
  //     inset: '0',
  //     top: '-220px',
  //     opacity: '0.8',
  //     zIndex: '-11'
  //   }
  // }


};









// const toggleFilterMenu = () => {
  
//     const openFilterList = document.getElementById('open-filter_list')
//     const closeFilterList = document.getElementById('close-filter_list');
//     const filterVisible = document.getElementById('main-filter_sidebar');

    
//       if(filterVisible.style.visibility === 'hidden' ||filterVisible.style.visibility === '')
//       filterVisible.style.visibility = 'visible'
   
//       filterVisible.style.visibility = 'hidden'
 
  
// }
// toggleFilterMenu()




// const toggleFilterMenu = () => {
//   // Create a MutationObserver to detect when elements are added to the DOM
//   const observer = new MutationObserver(() => {
//     const openFilterList = document.getElementById('open-filter_list')
//     const closeFilterList = document.getElementById('close-filter_list');
//     const filterVisible = document.getElementById('main-filter_sidebar');
    
//     openFilterList.addEventListener('click', () => {
//       filterVisible.style.visibility = 'visible'
//     })
//     closeFilterList.addEventListener('click', () => {
//       filterVisible.style.visibility = 'hidden';
//     });

//     observer.disconnect(); // Stop observing once the elements are found
    
//   });

//   // Observe changes in the body or a specific parent element
//   observer.observe(document.body, { childList: true, subtree: true });
// };

// toggleFilterMenu();