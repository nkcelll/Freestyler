import { SideBarAbstaction } from "./SideBarAbstraction";

export const AccessoriesSidebar = {
  Accessories: SideBarAbstaction ({
    title: 'Accessories',
    prefix:'accessory',
    mainID: 'accessories-section',
    firstCategories: [
      {
        topCat: 'Snow Accessories',
        id: 'snow-accessories',
        // url: '',
        subCategories: [
          { subCat: 'Goggles', url: '' },
          { subCat: 'Helmets', url: '' },
          { subCat: 'Gloves', url: '' },
          { subCat: 'Mask / Neck Warmers', url: '' },
        ],
      },
      {
        topCat: 'Bags',
        id: 'bag-accessories',
        // url: '',
        subCategories: [
          { subCat: 'Snow Bags', url: '' },
          { subCat: 'Backpacks', url: '' },
          { subCat: 'Gloves', url: '' },
          { subCat: 'Mask / Neck Warmers', url: '' },
        ],
      },
    ],
  })
}