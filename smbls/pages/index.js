import { main } from './main';
import { item } from './item';
import { products } from './products'
import { privacyAndPolicy } from './privacy-and-policy';
import { account } from './account';
import { product } from './product';
export default {
  '/': main,
  '/item': item,
  '/products': products,
  '/account': account,
  '/privacy-and-policy': privacyAndPolicy,
  '/product': product
}