import PerProductSpecsDropdown from '../../../functions/domEvents/PerProductSpecsDropdown';

export const Detail = {
  extend: 'Flex',
  props: {
    width: '100%',
    height: 'auto',
    flow: 'y',
    borderBottom: '1px solid grey',
  },
  Button: {
    extend: 'Flex',
    style: {
      justifyContent: 'space-between',

    },
    props: {
      width: '100%',
      height: '60px',
      borderRadius: '1px',
      backgroundColor: 'transparent', ///////// to Theme
      
      padding: '15px 0',
    },
    H1: {
      text: 'Product Details',
      props: {
        fontSize: '18px',
        fontWeight: '600',
        letterSpacing: '1px',
      },
    },
    IconArrowDown: {},
    on: {
      click: (e) => {
        const icon = e.currentTarget.querySelector('.arrow-down-icon');
        const detail = document.getElementById('detail-dropdown_toggle');
        PerProductSpecsDropdown(detail, icon);
      },
    },
  },

  DetailDropDown: {
    extend: 'Flex',
    attr: {
      id: 'detail-dropdown_toggle',
    },
    props: {
      width: '100%',
      maxHeight: '0',
      flow: 'y',
      overflow: 'hidden',
      opacity: '0',
      maxHeight: '0',
      
      transition: 'max-height 0.5s ease, opacity 0.5s ease',
    },
    P: {
      text: 'The U28 2-layer bib is equipped with Dryplay 20K technology, keeping you dry even in the wettest conditions. Fully taped seams and a PFC-free Teflon Ecoelite™ water-repellent coating provide extra protection against moisture. Functionality is one of the strengths of the U28 bib, as evidenced by the snow gaiters, hand pockets, thigh pockets, and chest pocket. The fit and comfort have been meticulously designed. Adjustable straps at the waist and shoulders allow you to tailor the pants to your preference, layer clothing, and ensure the pants stay in place during intense hikes. This bib also features snap buttons at the lower hem, offering multiple adjustment',
      props: {
        fontSize: '14px',
        letterSpacing: '1.1px',
        lineHeight: '180%',
        padding: '10px',
        margin: '0px',
        maxHeight: '',
        // height: 'auto',
      },
    },
  },
};
