import { FilterAbstract } from "../FilterAbstract";
export const SortBy = {
  Sort: FilterAbstract({
    title: 'Sort By',
    prefix: 'sort',
    mainID: 'sortBy',
    id: 'opar',
    filterCategories: [
      {spanText:'Recomennded', id: 'recommended', inputId: 'input-recommend'},
      {spanText:'Best Sellers', id: 'bestSeller', inputId: 'input-bestSeller'},
      {spanText:'A-Z', id: 'a-z', inputId: 'input-AZ'},
      {spanText:'Z-A', id: 'z-a', inputId: 'input-ZA'},
      {spanText:'Price: High - Low', id: 'high-low', inputId: 'input-high-low'},
      {spanText:'Price: Low - High', id: 'low-high', inputId: 'input-low-high'},
    ]
  })
};

// document.addEventListener('DOMContentLoaded', () => {
//   const b = SortBy.Sort.$filterCollection();
  
//   b.forEach((item) => {
//     console.log(item.attr.id[0]); 
//   });

//   console.log(b);
// });








// export const MenSidebar = {
//   Men: SideBarAbstaction({
//     title: 'Men',
//     prefix: 'men',
//     mainID: 'men-section',
//     firstCategories: [
//       {
//         topCat: 'Snowboarding',
//         id: 'snowboards',
//         // url: '',
//         subCategories: [
//           { subCat: 'Snowboards', url: '/kaci' },
//           { subCat: 'Snowboard Boots', url: '/kaci' },
//           { subCat: 'Snowboard Bindings', url: '' },
//           { subCat: 'Snowboard Bags', url: '' },
//           { subCat: 'Snowboard Tools', url: '' },
//         ],
//       },
//       {
//         topCat: 'Clothes',
//         id: 'clothes',
//         // url: '',
//         subCategories: [
//           { subCat: 'Jackets', url: '' },
//           { subCat: 'Pants', url: '' },
//           { subCat: 'Thermals', url: '' },
//           { subCat: 'Hoodies', url: '' },
//         ],
//       },
//       {
//         topCat: 'Accessories',
//         id: 'accessories',
//         // url: '',
//         subCategories: [
//           { subCat: 'Goggles', url: '' },
//           { subCat: 'Helmets', url: '' },
//           { subCat: 'Gloves', url: '' },
//           { subCat: 'Mask / Neck Warmers', url: '' },
//           { subCat: 'Hats', url: '' },
//           { subCat: 'Caps', url: '' },
//           { subCat: 'Boxer Shorts', url: '' },
//           { subCat: 'Socks', url: '' },
//           { subCat: 'Belts', url: '' },
//           { subCat: 'Wallets', url: '' },
//         ],
//       },
//     ],
//   }),
// };


















// export const SortBy = {
//   extend: 'Flex',
//   props: {
//     width: '100%',
//     height: 'auto',
//     flow: 'y',
//     borderBottom: '1px solid grey',
//   },
//   Button: {
//     extend: 'Flex',
//     props: {
//       style: {
//         justifyContent: 'space-between',
//       },
//       width: '100%',
//       height: '60px',
//       border: 'none',
//       borderRadius: '0',
//       gap: '15px',
//       padding: '0 30px',
//     },
//     P: {
//       text: 'Sort',
//       margin: '0',
//       letterSpacing: '1px',
//     },
//     IconArrowDown: {},
//     on: {
//       click: () => {
//         const dropdown = document.getElementById('sort-dropdown_toggle');

//         if (dropdown) {
//           if (dropdown.style.opacity === '0' || dropdown.style.opacity === '') {
//             dropdown.style.opacity = '1'
//             dropdown.style.maxHeight = dropdown.scrollHeight + 'px'
//             dropdown.style.pointerEvents = 'auto'

//           } else {
//             dropdown.style.opacity = '0'
//             dropdown.style.maxHeight = '0'
//             dropdown.style.pointerEvents = 'none'

//           }
//         }
//       },
//     },
//   },
//   SortDropDown: {
//     extend: 'Flex',
//     attr: {
//       id: 'sort-dropdown_toggle',
//     },
//     props: {
//       width: '100%',
//       maxHeight: '0',
//       flow: 'y',
//       gap: '20px',
//       overflow: 'hidden',
//       opacity: '0',
//       backgroundcolor: 'white',
//       transition: 'max-height 0.5s ease, opacity 0.5s ease',
//     },
//     $collecion: () => [
//       {
//         Label: labelExtend('Recomend', '1'),
//       },
//       {
//         Label: labelExtend('Best Sellers'),
//       },
//       {
//         Label: labelExtend('A-Z', 'A-Z'),
//       },
//       {
//         Label: labelExtend('Z-A'),
//       },
//       {
//         Label: labelExtend('Price: High - Low'),
//       },
//       {
//         Label: labelExtend('Price: Low - High'),
//       },
//     ],
//   },
// };
// const labelExtend = (labelText, id) => ({
//   extend: 'Flex',
//   props: {
//     width: '100%',
//     height: '60px',
//     flow: 'x',
//     gap: '15px',
//     padding: '0 30px',
//     align: 'center',
//   },
//   Input: {
//     attr: {
//       type: 'checkbox',
//       id: id,
//     },
//     props: {
//       borderRadius: '50px',
//       backgroundColor: 'red',
//       cursor: 'pointer',
//     },
//   },
//   Span: {
//     text: labelText,
//     props: {
//       fontWeight: '400',
//       fontSize: '16px',
//       letterSpacing: '1.1px',
//     },
//   },
// });

