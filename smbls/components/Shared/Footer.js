import { IconEmailInfo } from '../Assets/Icons/IconEmailInfo';
import { IconFacebook } from '../Assets/Icons/IconFacebook';
import { IconInstagram } from '../Assets/Icons/IconInstagram';
import { IconLocation } from '../Assets/Icons/IconLocation';
import { IconPhone } from '../Assets/Icons/IconPhone';
import { ButtonSubmit } from './components/ButtonSubmit';
import { SocialsLink } from './SocialLinks';
export const Footer = {
  extend: 'Flex',
  props: {
    width: '100%',
    flow: 'y',
    gap: '5px',
    padding: '0 20px',

    borderTop: '1px solid grey',
    overflow: 'hidden',
    '@tabletS': {
      display: 'flex',
      flow: 'y',
      gap: '50px',
      width: '100%',
      height: 'auto',
    },
  },
  Section: {
    extend: 'Flex',
    props: {
      width: 'auto',
      height: '500px',
      // height: '345px',
      flex: 1,
      boxSizing: 'border-box',
      justifyContent: 'space-between',
      flow: 'x',
      '@tabletS': {
        display: 'flex',
        flow: 'y',
        gap: '20px',
        width: '100%',
        height: 'auto',
      },
    },

    // Freestyler: {
    //   extend: 'Flex',
    //   props: {
    //     width: 'auto',
    //     height: '100%',
    //     flow: 'y',
    //     gap: '20px',
    //     padding: '20px 0 0 0',
    //     '@tabletS' : {
    //     display: 'none'
    //   }
    //     // padding: '20px 42px 0 42px',
    //   },

    //   H1: {
    //     props: {
    //       text: 'Freestyler',
    //       fontSize: '16px',
    //       letterSpacing: '1.25px',
    //       fontWeight: '500',
    //       margin: '0',
    //       borderBottom: '1px solid grey',
    //     },
    //   },
    //   Flex: {
    //     extend: 'Flex',
    //     props: {
    //       flow: 'y',
    //       justifyContent: 'space-between',
    //       width: '100%',
    //       height: '100%',
    //     },
    //     Logo: {},
    //     SocialsLink: {
    //       extend: 'Grid',
    //       props: {
    //         columns: 'repeat(2, 60px)',
    //         height: '80px',
    //         justifyItems: 'center',
    //         textAlign: 'center',
    //         // margin: '100px 0'
    //       },
    //       P: {
    //         display: 'flex',
    //         justifyContent: 'center',
    //         alignItems: 'center',
    //         text: 'follow',
    //         fontSize: '16px',
    //         margin: '0',
    //         borderBottom: '1px solid black',
    //         borderRight: '1px solid black',
    //         width: '100%',
    //         height: '100%',
    //       },
    //       P2: {
    //         display: 'flex',
    //         justifyContent: 'center',
    //         alignItems: 'center',
    //         text: 'us',
    //         fontSize: '16px',
    //         margin: '0',
    //         borderBottom: '1px solid black',
    //         width: '100%',
    //         textAlign: 'center',
    //       },
    //       Fb: {
    //         extend: 'flex',
    //         props: {
    //           display: 'flex',
    //           justifyContent: 'center',
    //           alignItems: 'center',
    //           width: '100%',
    //           height: '100%',
    //           borderRight: '1px solid black',
    //           width: '100%',
    //           height: '100%',

    //           textAlign: 'center',
    //         },
    //         a: {
    //           attr: {
    //             href: 'https://www.facebook.com/FreeStylerShop',
    //           },
    //           Img: {
    //             src: 'https://files-production-symbols-platform-development-en-d5-u3-p7x0.based.dev/ficedd977b/8ea779c8-5857-4611-ae88-d015ae936e9a-03606ae3-21c8-4771-b62a-596aebd4b745-994c27f9-5bb4-48e3-8280-1e453f143db0.svg',
    //             alt: 'Facebook Logo',
    //           },
    //         },
    //       },
    //       Ig: {
    //         extend: 'flex',
    //         props: {
    //           display: 'flex',
    //           justifyContent: 'center',
    //           alignItems: 'center',
    //           width: '100%',
    //           height: '100%',
    //         },
    //         a: {
    //           attr: {
    //             href: 'https://www.instagram.com/freestylershop',
    //           },
    //           Img: {
    //             src: 'https://files-production-symbols-platform-development-en-d5-u3-p7x0.based.dev/fid618a2a0/eead73a4-316a-4300-b8aa-b6632e690ecd-49359f4d-9e6b-40d7-b1ae-b0f0dd778798-b21fcd26-1392-4f1e-89c4-5a1fe812e2e0.svg',
    //             alt: 'Instagram Logo',
    //           },
    //         },
    //       },
    //     },
    //   },
    // },
    FAQ: {
      extend: 'Flex',
      props: {
        flow: 'y',
        gap: '15px',
        padding: '20px 0 0 0',
        transition: 'max-height 0.5s ease, opacity 0.5s ease',
        '@tabletS': {
          gap: '20px',
          width: '100%',
          height: 'auto',
          padding: '0',
          margin: '30px 0 0 0',
        },
      },
      ContentDrop: {
        extend: 'Flex',
        props: {
          width: '100%',
          height: 'auto',
          flow: 'x',
          justifyContent: 'space-between',
          borderBottom: '1px solid grey',
        },
        H1: {
          props: {
            width: '100%',
            text: 'FAQ',
            fontSize: '16px',
            letterSpacing: '1.25px',
            fontWeight: '600',
            margin: '0',
          },
        },
        IconArrowDown: {
          attr: {
            id: 'faq-icon-rotate',
          },
          props: {
            // '@tabletS': {
            //   display: 'flex',
            // },
            '@tabletS<': {
              display: 'none',
            },
          },
        },
      },
      Links: {
        extend: 'Flex',
        attr: {
          id: 'faq',
          'aria-expanded': 'false',
        },
        props: {
          flow: 'y',
          gap: '10px',
          transition: 'max-height 0.5s ease, opacity 0.5s ease',
          '@tabletS': {
            maxHeight: '0',
            opacity: '0',
            pointerEvents: 'none',
            // transition: '0.5s ease',
            visibility: 'hidden',
          },
        },
        childExtend: {
          tag: 'a',
          style: {
            textDecoration: 'none',
          },
          props: {
            cursor: 'pointer',
            width: 'auto',
            fontSize: '14px',
            // color: 'black',
            color: 'currentColor',
          },
        },
        $propsCollection: () => [
          {
            href: '/',
            text: 'Size chart',
          },
          {
            href: '/',
            text: 'Shipping policy',
          },
          {
            href: '/',
            text: 'Terms and conditions',
          },
        ],
      },
      on: {
        click: (e) => {
          if (e.currentTarget) {
            const faq = document.getElementById('faq');
            const isExpanded = faq.getAttribute('aria-expanded') === 'false';
            const icon = document.getElementById('faq-icon-rotate');
            toggleDropdown(faq, isExpanded, icon);
          }
        },
      },
    },
    Policy: {
      extend: 'Flex',
      props: {
        width: 'auto',
        height: '100%',
        flow: 'y',
        gap: '15px',
        padding: '20px 0 0 0',
        '@tabletS': {
          gap: '20px',
          width: '100%',
          height: 'auto',
          padding: '0',
        },
      },
      ContentDrop: {
        extend: 'Flex',
        props: {
          width: '100%',
          height: 'auto',
          flow: 'x',
          justifyContent: 'space-between',
          borderBottom: '1px solid grey',
        },
        H1: {
          props: {
            width: '100%',
            text: 'Policy',
            fontSize: '16px',
            letterSpacing: '1.25px',
            fontWeight: '600',
            margin: '0',
          },
        },
        IconArrowDown: {
          attr: {
            id: 'policy-icon-rotate',
          },
          props: {
            '@tabletS<': {
              display: 'none',
            },
          },
        },
      },
      Links: {
        extend: 'Flex',
        attr: {
          id: 'policy',
          'aria-expanded': 'false',
        },
        props: {
          flow: 'y',
          gap: '10px',
          transition: 'max-height 0.5s ease, opacity 0.5s ease',
          '@tabletS': {
            maxHeight: '0',
            opacity: '0',
            pointerEvents: 'none',
            // transition: '0.5s ease',
            visibility: 'hidden',
          },
        },
        childExtend: {
          tag: 'a',
          props: {
            cursor: 'pointer',
            width: 'auto',
            fontSize: '14px',
            textDecoration: 'none',
            // color: 'black',
          },
        },
        $propsCollection: () => [
          {
            href: '/',
            text: 'Privacy and policy',
          },
          {
            href: '/',
            text: 'Shipping policy',
          },
          {
            href: '/',
            text: 'Terms and conditions',
          },
        ],
      },
      on: {
        click: (e) => {
          if (e.currentTarget) {
            const policy = document.getElementById('policy');
            const isExpanded = policy.getAttribute('aria-expanded') === 'false';
            const icon = document.getElementById('policy-icon-rotate');
            toggleDropdown(policy, isExpanded, icon);
          }
        },
      },
    },
    Contact: {
      extend: 'Flex',
      props: {
        width: 'auto',
        height: 'auto',
        flow: 'y',
        padding: '20px 0 0 0',
        transition: 'max-height 0.5s ease, opacity 0.5s ease',
        '@tabletS': {
          gap: '20px',
          width: '100%',
          height: 'auto',
          padding: '0',
        },
      },
      ContentDrop: {
        extend: 'Flex',
        props: {
          width: '100%',
          height: 'auto',
          flow: 'x',
          justifyContent: 'space-between',
          borderBottom: '1px solid grey',
        },
        H1: {
          props: {
            width: '100%',
            text: 'Contact',
            fontSize: '16px',
            letterSpacing: '1.25px',
            fontWeight: '600',
            margin: '0',
          },
        },
        IconArrowDown: {
          attr: {
            id: 'contact-icon-rotate',
          },
          props: {
            '@tabletS<': {
              display: 'none',
            },
          },
        },
      },
      Info: {
        attr: {
          id: 'contact',
          'aria-expanded': 'false',
        },
        extend: 'Flex',
        props: {
          flow: 'y',
          justifyContent: 'space-between',
          height: '100%',
          transition: 'max-height 0.5s ease, opacity 0.5s ease',
          '@tabletS': {
            maxHeight: '0',
            opacity: '0',
            pointerEvents: 'none',
            // transition: 'opacity 0.5s ease, max-height 0.5s ease, visibility 0.5s ease',
            visibility: 'hidden',
          },
        },
        LocInfo: {
          extend: 'Flex',
          props: {
            gap: '10px',
            align: 'center',
          },
          IconLocation:{},
          p: {
            text: ' Tbilisi, Didi Digomi, Mirian Mefis St. N17',
            props: {
              fontSize: '14px',
            },
          },
        },
        PhoneInfo: {
          extend: 'Flex',
          props: {
            gap: '10px',
            align: 'center'
          },
          IconPhone: {},
          p: {
            text: ': +995 511233001',
            props: {
              fontSize: '14px',
            },
          },
        },
        EmailInfo: {
          extend: 'Flex',
          props: {
            gap: '10px',
            align: 'center'
          },
          IconEmailInfo: {},
          p: {
            text: 'info@freestyler.ge',
            props: {
              fontSize: '14px',
            },
          },
        },
        Map: {
          props: {
            // width:'300px',
            // height: '300px',
            '@tabletS': {
              width: 'auto',
            },
          },
          Iframe: {
            background: 'gray .05',
            src: (el, s) =>
              `https://www.google.com/maps?q=${s.root.mapLocation.lat},${s.root.mapLocation.lng}&z=15&output=embed`,
            allowfullscreen: '',
            loading: 'lazy',
            referrerpolicy: 'no-referrer-when-downgrade',
            round: 'A',
            minWidth: '100%',
            minHeight: '100%',
            // minWidth: '100%',
            // minHeight: '200px',
            border: '0',
          },
        },
      },
      on: {
        click: (e) => {
          if (e.currentTarget) {
            const contact = document.getElementById('contact');
            const isExpanded =
              contact.getAttribute('aria-expanded') === 'false';
            const icon = document.getElementById('contact-icon-rotate');
            toggleDropdown(contact, isExpanded, icon);
          }
        },
      },
    },
    MailNotification: {
      extend: 'Flex',
      props: {
        height: '100%',
        width: '350px',
        flow: 'y',
        gap: '30px',
        padding: '20px 0 0 0',
        '@tabletS': {
          // order: 4,
          width: '50%',
        },
        '@mobileL': {
          width: '100%',
        },
      },
      H: {
        text: 'Add adventure to your inbox',
        letterSpacing: '1px',
        fontSize: '16px',
        fontWeight: '600',
        margin: '0',
        borderBottom: '1px solid grey',
      },
      MailInfo: {
        Form: {
          extend: 'Flex',
          attr: {
            method: 'POST',
          },
          props: {
            width: 'auto',
            height: 'auto',
            gap: '15px',
          },
          Input: {
            attr: {
              type: 'email',
              placeholder: 'Email address',
            },
            props: {
              borderRadius: '0',
            },
            style: {
              backgroundColor: 'transparent',
              border: '1px solid grey',
              width: '100%',
              padding: '10px',
              fontSize: '14px',
              ':focus': {
                outline: 'none',
              },
            },
          },
          ButtonSubmit: {
            style: {
              borderRadius: '0',
              '-webkit-tap-highlight-color': 'transparent',
            },
            props: {
              backgroundColor: 'white;',
              border: 'none',
              width: '100px',
              ':hover': {
                backgroundColor: 'none',
              },
            },
            Img: {
              src: 'https://files-production-symbols-platform-development-en-d5-u3-p7x0.based.dev/fi692710b8/c16e4fe8-3b80-45ad-bf28-d35abe23d410-debdd4b5-8a04-4607-aa3d-bd132d48ce52-6f7d43a4-8cce-4a56-bdb5-b047b7f8d961.svg',
            },
          },
        },
      },
    },
  },
  Copyright: {
    extend: 'Flex',
    props: {
      width: '100%',
      borderTop: '1px solid black',
      height: '50px',
      justifyContent: 'space-between',
      padding: '0 30px',
      '@tabletS': {
        padding: '0',
      },
    },
    P: {
      extend: 'Flex',
      props: {
        text: 'Copyright policy by Shopify 2025 / by nkcell',
        fontSize: '12px',
        fontWeight: '400',
        align: 'center',
      },
    },
    SocialsLinks:{}
  },
};

function toggleDropdown(footerClass, isOpen, icon) {
  const responsive = window.matchMedia('(max-width: 1024px)');
  footerClass.style.transition = 'max-height 0.5s ease, opacity 0.5s ease';

  if (responsive.matches) {
    if (isOpen) {
      footerClass.style.maxHeight = footerClass.scrollHeight + 'px';
      footerClass.style.opacity = '1';
      footerClass.style.pointerEvents = 'auto';
      footerClass.style.visibility = 'visible';

      footerClass.setAttribute('aria-expanded', 'true');
      icon.style.transform = 'rotate(180deg)';
    } else {
      footerClass.style.maxHeight = '0';
      footerClass.style.opacity = '0';
      footerClass.style.pointerEvents = 'none';
      footerClass.style.visibility = 'hidden';

      footerClass.setAttribute('aria-expanded', 'false');
      icon.style.transform = 'rotate(0deg)';
    }
  }
}

function initFooterSize() {
  const faq = document.getElementById('faq');
  const policy = document.getElementById('policy');
  const contact = document.getElementById('contact');
  const icon1 = document.getElementById('faq-icon-rotate');
  const icon2 = document.getElementById('policy-icon-rotate');
  const icon3 = document.getElementById('contact-icon-rotate');

  function resetElementStyles(element) {
    if (!element) return;

    if (element) {
      element.style.maxHeight = '';
      element.style.opacity = '';
      element.style.pointerEvents = '';
      element.style.visibility = '';
      element.setAttribute('aria-expanded', 'false');
    }
  }

  resetElementStyles(faq);
  resetElementStyles(policy);
  resetElementStyles(contact);

  if (icon1) icon1.style.transform = '';
  if (icon2) icon2.style.transform = '';
  if (icon3) icon3.style.transform = '';
}

window.addEventListener('resize', initFooterSize);
