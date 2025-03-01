import { ScrollbarStyles, SignUp } from '../components';
export const signup = {
  props: {
    flow: 'row wrap',
    width: '100%',
  },
  MainHeader: {},
  SignUp: {},
  Footer: {},
};

document.head.appendChild(document.createElement('style')).textContent =
  ScrollbarStyles.textContent;
