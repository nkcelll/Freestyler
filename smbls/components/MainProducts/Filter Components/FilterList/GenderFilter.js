import { FilterAbstract } from "../FilterAbstract";
export const GenderFilter = {
  Gender: FilterAbstract({
     title: 'Gender',
     mainID: 'gender',
     prefix: 'gendera',
     filterCategories: [
      {spanText:'Male', id: 'male', inputId: 'input-male'},
      {spanText:'Female', id: 'female', inputId: 'input-female'},
     ]
   })
};


// export const GenderFilter = {
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
//       text: 'Gender',
//       margin: '0',
//       letterSpacing: '1px',
//     },
//     IconArrowDown: {},
//     on: {
//       click: () => {
//         const dropdown = document.getElementById('gender-dropdown_toggle');

//         if (dropdown) {
//           if (dropdown.style.opacity === '0' || dropdown.style.opacity === '') {
//             dropdown.style.opacity = '1'
//             dropdown.style.maxHeight = dropdown.scrollHeight + 'px'
//             console.log(
//               (dropdown.style.maxHeight = dropdown.scrollHeight + 'px')
//             );
//           } else {
//             dropdown.style.opacity = '0';
//             dropdown.style.maxHeight = '0';
//           }
//         }
//       },
//     },
//   },

//   GenderDropDown: {
//     extend: 'Flex',
//     attr: {
//       id: 'gender-dropdown_toggle',
//     },
//     props: {
//       width: '100%',
//       maxHeight: '0',
//       opacity: '0',
//       flow: 'y',
//       gap: '20px',
//       overflow: 'hidden',
//       backgroundcolor: 'zebra',
//       transition: 'max-height 0.5s ease, opacity 0.5s ease',
//     },
//     $collecion: () => [
//       {
//         Label: labelExtend('Male'),
//       },
//       {
//         Label: labelExtend('Female'),
//       },
//       {
//         Label: labelExtend('Kids'),
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
