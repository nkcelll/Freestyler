import { SideBarAbstaction } from './SideBarAbstraction';

export const MenSidebar = {
  Men: SideBarAbstaction({
    title: 'Men',
    prefix: 'men',
    mainID: 'men-section',
    firstCategories: [
      {
        topCat: 'Snowboarding',
        id: 'snowboards',
        // url: '',
        subCategories: [
          { subCat: 'Snowboards', url: '/kaci' },
          { subCat: 'Snowboard Boots', url: '/kaci' },
          { subCat: 'Snowboard Bindings', url: '' },
          { subCat: 'Snowboard Bags', url: '' },
          { subCat: 'Snowboard Tools', url: '' },
        ],
      },
      {
        topCat: 'Clothes',
        id: 'clothes',
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
        id: 'accessories',
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
