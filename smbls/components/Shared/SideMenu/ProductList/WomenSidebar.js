import { SideBarAbstaction } from '../SideBarAbstraction';

export const WomenSidebar = {
  Women: SideBarAbstaction({
    title: 'Women',
    prefix: 'women',
    mainID: 'women-section',
    firstCategories: [
      {
        topCat: 'Snowboarding',
        id: 'women-snowboards',
        // url: '',
        subCategories: [
          { subCat: 'Snowboards', url: '/qali' },
          { subCat: 'Snowboard Boots', url: '/qali' },
          { subCat: 'Snowboard Bindings', url: '/vafshe tesloba' },
          { subCat: 'Snowboard Bags', url: '' },
          { subCat: 'Snowboard Tools', url: '' },
        ],
      },
      {
        topCat: 'Clothes',
        id: 'women-clothes',
        // url: '',
        subCategories: [
          { subCat: 'Jackets', url: '' },
          { subCat: 'Pants', url: '' },
          { subCat: 'Thermals', url: '' },
          { subCat: 'Hoodies', url: '' },
        ],
      },
      {
        topCat: 'Accessories',
        id: 'women-accessories',
        // url: '',
        subCategories: [
          { subCat: 'Goggles', url: '' },
          { subCat: 'Helmets', url: '' },
          { subCat: 'Gloves', url: '' },
          { subCat: 'Mask / Neck Warmers', url: '' },
          { subCat: 'Hats', url: '' },
          { subCat: 'Caps', url: '' },
          { subCat: 'Boxer Shorts', url: '' },
          { subCat: 'Socks', url: '' },
          { subCat: 'Belts', url: '' },
          { subCat: 'Wallets', url: '' },
        ],
      },
    ],
  }),
};
