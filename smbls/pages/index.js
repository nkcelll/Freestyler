import { main } from './main';
import { item } from './item';
import { products } from './products'
import { privacyAndPolicy } from './privacy-and-policy';
export default {
      '/': main,
'/item': item,
'/products': products,
'/privacy-and-policy': privacyAndPolicy,

    }