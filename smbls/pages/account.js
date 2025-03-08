import { AccountLayout, Footer, MainHeader, ScrollbarStyles } from "../components";
export const account = {
  props: {
    flow: 'y',
    '@light': {
        color: 'black',
        background: '#E4E2E2',
      },
      '@dark': {
        color: 'white',
        background: '#1E201E',
      },
  },
  MainHeader: {
    order: 0
  },
  AccountLayout:{},
  Policy: {
    extend: 'Flex',
    props: {
      width: '100%',
      gap: '40px',
      height: 'auto',
      order: '2',
      margin: '50px 0 0 0',
      justifyContent: 'center'
    },
    childExtend: {
      extend: ['Link', 'Flex'],
      props: {
        
        cursor: 'pointer',
        fontWeight: '300',
        textDecoration: 'underline'
      }
    },
    $propsCollection: () => [
      {
        text: 'Refund Policy',
        href: '/'
      },
      {
        text: 'Shipping Policy',
        href: '/'
      },
      {
        text: 'Privacy policy',
        href: '/'
      },
      {
        text: 'Terms of service',
        href: '/'
      },
    ]
  },
  
}

document.head.appendChild(document.createElement('style')).textContent = ScrollbarStyles.textContent;
// import { AccountLayout, Footer, MainHeader, ScrollbarStyles } from "../components";
// export const account = {
//   extend: 'AccountLayout',
//   props: {
//     flow: 'y',
//     '@light': {
//         color: 'black',
//         background: '#E4E2E2',
//       },
//       '@dark': {
//         color: 'white',
//         background: '#1E201E',
//       },
//   },
//   // MainHeader: {
//   //   order: 0
//   // },
//   Policy: {
//     extend: 'Flex',
//     props: {
//       width: '100%',
//       gap: '40px',
//       height: 'auto',
//       order: '2',
//       margin: '50px 0 0 0',
//       justifyContent: 'center'
//     },
//     childExtend: {
//       extend: ['Link', 'Flex'],
//       props: {
        
//         cursor: 'pointer',
//         fontWeight: '300',
//         textDecoration: 'underline'
//       }
//     },
//     $propsCollection: () => [
//       {
//         text: 'Refund Policy',
//         href: '/'
//       },
//       {
//         text: 'Shipping Policy',
//         href: '/'
//       },
//       {
//         text: 'Privacy policy',
//         href: '/'
//       },
//       {
//         text: 'Terms of service',
//         href: '/'
//       },
//     ]
//   },
  
// }

// document.head.appendChild(document.createElement('style')).textContent = ScrollbarStyles.textContent;