export const Features = {
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
      text: 'Features',
      props: {
        fontSize: '18px',
        fontWeight: '400',
        letterSpacing: '1.2px',
      },
    },
    IconArrowDown: {},
    on: {
      click: () => {
        const detailDrop = document.getElementById('feature-dropdown_toggle');
        if (detailDrop) {
          const isHidden = detailDrop.style.opacity === '0' || detailDrop.style.opacity === '';
          detailDrop.style.opacity = isHidden ? '1' : '0';
          detailDrop.style.maxHeight = isHidden ? detailDrop.scrollHeight + 'px' : '0';
        }
      },
    },
    
  },
  
  FeatureDropDown: {
    extend: 'Flex',
    attr: {
      id: 'feature-dropdown_toggle',
    },
    props: {
      display: 'flex', 
      flexWrap: 'wrap', 
      gap: '30px', 
      // justifyContent: 'space-between',
      wrap: 'row wrap',
      width: '100%', 
      maxHeight: '0', 
      opacity: '0', 
      overflow: 'hidden', 
      transition: 'max-height 0.5s ease, opacity 0.5s ease', 
      backgroundColor: '#E4E2E2',


    },
    $collection: () => [
      {
        div: features('Surfy Float', 'A Swallow Tail paired with a modest 5mm of taper delivers increased float and a surf-inspired ride for the deepest days.'),
      },
      {
        div: features('Powerful and Precise', 'Our Camber Bend encourages powerful turns and poppy precision.'),
      },
      {
        div: features('Lightweight and Full of Energy', 'The carbon-reinforced fiberglass core matrix creates a stiff, fine-tuned flex and feel thats loaded with energy.'),
      },
      {
        div: features('Directional Control', 'Its directional shape and flex keep you carving and slashing with total control.'),
      },
      {
        div: features('Surfy Float', 'A Swallow Tail paired with a modest 5mm of taper delivers increased float and a surf-inspired ride for the deepest days.'),
      },
      {
        div: features('Powerful and Precise', 'Our Camber Bend encourages powerful turns and poppy precision.'),
      },
      {
        div: features('Directional Control', 'Its directional shape and flex keep you carving and slashing with total control.'),
      },
      {
        div: features('Surfy Float', 'A Swallow Tail paired with a modest 5mm of taper delivers increased float and a surf-inspired ride for the deepest days.'),
      },
      {
        div: features('Powerful and Precise', 'Our Camber Bend encourages powerful turns and poppy precision.'),
      },
      {
        div: features('Directional Control', 'Its directional shape and flex keep you carving and slashing with total control.'),
      },
      {
        div: features('Surfy Float', 'A Swallow Tail paired with a modest 5mm of taper delivers increased float and a surf-inspired ride for the deepest days.'),
      },
      {
        div: features('Powerful and Precise', 'Our Camber Bend encourages powerful turns and poppy precision.'),
      },
      
      
    ],
  },
  
};

const features = (liSpec, pSpec) => ({
  extend: 'Flex',
  style: {
    paddingRight: '20px'

  },
  props: {
    display: 'flex',
    flexDirection: 'column', 
    width: '400px', 
    borderRight: '1px solid grey',
    margin: '20px 0',
    

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
