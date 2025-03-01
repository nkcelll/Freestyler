import PerProductSpecsDropdown from '../../../functions/domEvents/PerProductSpecsDropdown';

export const TechSpecs = {
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
      backgroundColor: '#E4E2E2',
      padding: '15px 0',
    },
    H5: {
      text: 'Specs',
      props: {
        fontSize: '18px',
        fontWeight: '600',
        letterSpacing: '1.2px',
      },
    },
    IconArrowDown: {},
    on: {
      click: (e) => {
        const specs = document.getElementById('specs-dropdown_toggle');
        const icon = e.currentTarget.querySelector('.arrow-down-icon');
        PerProductSpecsDropdown(specs, icon);
      },
    },
  },

  SpecsDropDown: {
    extend: 'Flex',
    attr: {
      id: 'specs-dropdown_toggle',
    },
    props: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '15px',
      width: '100%',
      maxHeight: '0',
      opacity: '0',
      overflow: 'hidden',
      transition: 'max-height 0.5s ease, opacity 0.5s ease',
      backgroundColor: '#E4E2E2',
      '@mobileL': {
        justifyContent: 'flex-start',
      },
    },
    childExtend: {
      extend: 'Flex',
      props: {
        height: 'auto',
        width: 'auto',
      },
    },
    $collection: () => [
      {
        div: specs('Band', 'Purepop'),
      },
      {
        div: specs('Shape', 'Twin'),
      },
      {
        div: specs('Flex', 'Twin'),
      },
      {
        div: specs('Core', 'Super Fly II™ 700G Core with Dualzone™ EGD™'),
      },
      {
        div: specs('Fiberglass', 'Triax'),
      },
      {
        div: specs('Base', 'Sintered'),
      },
      {
        div: specs('Mounting', 'The Channel'),
      },
      {
        div: specs('Features', 'Scoop'),
      },
      {
        div: specs('Riding Level', 'Intermediate'),
      },
      {
        div: specs('Sustainability', 'Super Sap'),
      },
      {
        div: specs('Sustainability', 'Super Sap Super '),
      },
    ],
  },
};

const specs = (liSpec, pSpec) => ({
  extend: 'Flex',
  props: {
    display: 'flex',
    flexDirection: 'column',
    // width: '350px',
    width: '200px',
    margin: '20px 0',
    borderRight: '1px solid grey',
    '@mobileL': {
      width: '160px',
    },
  },
  li: {
    text: liSpec,
    style: {
      listStyle: 'inside',
    },
    props: {
      fontSize: '16px',
      fontWeight: '600',
      marginBottom: '5px', // Add space below the title
    },
  },
  p: {
    text: pSpec,
    props: {
      fontSize: '14px',
      wordWrap: 'break-word',
      lineHeight: '1.5', // Spacing for better readability
      fontWeight: '400',
      letterSpacing: '1.1px',
    },
  },
});
