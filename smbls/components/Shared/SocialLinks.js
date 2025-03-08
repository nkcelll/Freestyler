export const SocialsLinks = {
  extend: 'Flex',
  props: {
    height: 'auto',
    justifyContent: 'center',
    align: 'center',
    gap: '16px',
    textAlign: 'center',
  },
  Fb: {
    extend: ['Link', 'Flex'],
    props: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      // width: '100%',
      // height: '100%',
      textAlign: 'center',
      href: 'https://www.facebook.com/FreeStylerShop',
      target: '_blank',
    },

    IconFacebook: {},
  },
  Ig: {
    extend: ['Link', 'Flex'],
    props: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      // width: '100%',
      // height: '100%',
      href: 'https://www.instagram.com/freestylershop',
      target: '_blank',
    },
    IconInstagram: {},
  },
};
