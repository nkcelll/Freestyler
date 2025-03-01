import { ScrollbarStyles } from "../components";
export const product = {
  extend: 'PerProductLayout',

  props: {
    flow: 'row wrap',
    width: '100%'
  }

  // MainHeader: {

  // },
  // PerProducts : {

  // },
  // PerProductDetails: {

  // },
  // Footer: {

  // }
}

document.head.appendChild(document.createElement('style')).textContent = ScrollbarStyles.textContent;