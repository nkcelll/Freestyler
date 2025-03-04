import { AccountLayout, Footer, MainHeader, ScrollbarStyles } from "../components";
export const account = {
  extend: 'AccountLayout',
  props: {
    flow: 'y',
  },
  MainHeader: {
    order: 0
  },
  Policy: {
    extend: 'Flex',
    props: {
      width: '100%',
      height: 'auto',
      order: '4',
      margin: '50px 0 0 0',
      justifyContent: 'space-between'
    },
    childExtend: {
      extend: 'Link',
      props: {
        cursor: 'pointer',
        color: 'black',
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