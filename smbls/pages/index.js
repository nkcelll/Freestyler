import { main } from './main';
import { item } from './item';
import { products } from './products'
import { privacyAndPolicy } from './privacy-and-policy';
import { login } from './login';
import { product } from './product';
import { signup } from './sign-up';
import { checkout } from './checkout';
import { account } from './account';
export default {
  '/': main,
  '/item': item,
  '/products': products,
  '/login': login,
  '/signup': signup,
  '/privacy-and-policy': privacyAndPolicy,
  '/product': product,
  '/account': account,
  '/checkout': checkout
}