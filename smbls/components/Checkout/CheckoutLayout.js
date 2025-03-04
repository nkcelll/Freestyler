export const Checkout = {
  extend: 'Flex',
  props: {
    width: '100%',
    height: 'auto',
    justifyContent: 'center',
    
    '@tabletS': {
      flow: 'y',
      justifyContent: 'row-reverse',
      gap: '20px'
    }
  },
  PersonalInformation: {

  },
  Order: {
    
  },
};