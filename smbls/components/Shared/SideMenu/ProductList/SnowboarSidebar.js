import { SideBarAbstaction } from '../SideBarAbstraction';

export const SnowboarSidebar = {
  Snowboards: SideBarAbstaction({
    title: 'Snowboarding',
    prefix: 'snowboard',
    mainID: 'snowboard-section',
    firstCategories: [
      {
        topCat: 'Snowboards',
        id: 's-snowboards',
        // url: '',
        subCategories: [
          { subCat: 'Man', url: '' },
          { subCat: 'Woman', url: '' },
          { subCat: 'Kids', url: '' },
        ],
      },
      {
        topCat: 'Snowboard Boots',
        id: 's-boots',
        // url: '',
        subCategories: [
          { subCat: 'Man', url: '' },
          { subCat: 'Woman', url: '' },
          { subCat: 'Kids', url: '' },
        ],
      },
      {
        topCat: 'Snowboard Bindings',
        id: 's-bindings',
        // url: '',
        subCategories: [
          { subCat: 'Man', url: '' },
          { subCat: 'Woman', url: '' },
          { subCat: 'Kids', url: '' },
        ],
      },
      {
        topCat: `Snowboards by Brand`,
        id: 's-brand',
        // url: '',
        subCategories: [
          { subCat: 'Bataleon', url: '' },
          { subCat: 'Burton', url: '' },
          { subCat: 'Rome SDS', url: '' },
          { subCat: 'Raven Snowboarding', url: '' },
        ],
      },
    ],
  }),
};
