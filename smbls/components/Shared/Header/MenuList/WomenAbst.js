import { NavMenuAbst } from '../NavMenuAbst';

export const WomenAbst = NavMenuAbst({
  prefix: 'women',
  categories: [
    {
      topCat: 'SNOWBOARDS',
      subCategory: [
        { subCat: 'SNOWBOARDS', url: '/' },
        { subCat: 'SNOWBOARD BINDINGS', url: '/' },
        { subCat: 'SNOWBOARD BAGS', url: '/' },
        { subCat: 'SNOWBOARDS BOOTS', url: '/' },
        { subCat: 'SNOWBOARDS ACCESSORIES', url: '/' },
      ],
    },
    {
      topCat: 'CLOTHES',
      subCategory: [
        { subCat: 'SKI JACKET', url: '/' },
        { subCat: 'SKI PANTS', url: '/' },
        { subCat: 'THERMALS', url: '/' },
        { subCat: 'HOODS', url: '/' },
      ],
    },
    {
      topCat: 'ACCESSORIES',
      subCategory: [
        { subCat: 'GOGGLES', url: '/' },
        { subCat: 'HELMETS', url: '/' },
        { subCat: 'GLOVES', url: '/' },
        { subCat: 'SOCKS', url: '/' },
        { subCat: 'NECKWARMERS', url: '/' },
        { subCat: 'HOODS', url: '/' },
      ],
    },
  ],
});
