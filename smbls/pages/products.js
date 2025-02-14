import { ScrollbarStyles } from "../components";
export const products = {
  
  extend: 'ProductsLayout',
  props: {
    flow: 'row wrap',
  },
  
  // MainHeader: {
  // },
  // MarkingText: {
  // },
  // GifTop: {
  // },
  // FilterSection: {
  // },
  // GridContent:{
  // },
  // GifBottom: {
  // },
  // Pagination: {
  // },
  // Footer: {
  // }
  
}
document.head.appendChild(document.createElement('style')).textContent = ScrollbarStyles.textContent;

