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
    H1: {
      text: 'Specs',
      props: {
        fontSize: '18px',
        fontWeight: '400',
        letterSpacing: '1.2px',
      },
    },
    IconArrowDown: {},
    on: {
      click: () => {
        const detailDrop = document.getElementById('specs-dropdown_toggle');
        if (detailDrop) {
          const isHidden = detailDrop.style.opacity === '0' || detailDrop.style.opacity === '';
          detailDrop.style.opacity = isHidden ? '1' : '0';
          detailDrop.style.maxHeight = isHidden ? detailDrop.scrollHeight + 'px' : '0';
        }
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
    width: '350px', 
    borderRight: '1px solid grey',
    margin: '20px 0'

  },
  li: {
    text: liSpec,
    style: {
      listStyle: 'none'
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
