import { ScrollbarStyles } from "../components";
export const products = {
  
  extend: ['ProductsLayout', 'Flex'],
  props: {
    flow: 'row wrap',
    width: '100%'
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

