export const Footer = {
  extend: 'Flex',
  props: {
    // width: '100vw',
    width: '100dvw',
    flow: 'y',
    gap: '5px',
    padding: '0 20px',
  },
  Section: {
    extend: 'Flex',
    props: {
      width: 'auto',
      height: '500px',
      flex: 1,
      boxSizing: 'border-box',
      justifyContent: 'space-between',
      // justifyContent: 'space-evenly',
      // padding: '0 20px',
      flow: 'x',
    },
    Freestyler: {
      extend: 'Flex',
      props: {
        width: 'auto',
        height: '100%',
        flow: 'y',
        gap: '20px',
        padding: '20px 0 0 0',
        // padding: '20px 42px 0 42px',
      },

      H1: {
        props: {
          text: 'Freestyler',
          fontSize: '16px',
          letterSpacing: '1.25px',
          fontWeight: '500',
          margin: '0',
          borderBottom: '1px solid grey',
        },
      },
      Flex: {
        extend: 'Flex',
        props: {
          flow: 'y',
          justifyContent: 'space-between',
          width: '100%',
          height: '100%',
        },
        Logo: {},
        SocialsLink: {
          extend: 'Grid',
          props: {
            columns: 'repeat(2, 60px)',
            height: '80px',
            justifyItems: 'center',
            textAlign: 'center',
            // margin: '100px 0'
          },
          P: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            text: 'follow',
            fontSize: '16px',
            margin: '0',
            borderBottom: '1px solid black',
            borderRight: '1px solid black',
            width: '100%',
            height: '100%',
          },
          P2: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            text: 'us',
            fontSize: '16px',
            margin: '0',
            borderBottom: '1px solid black',
            width: '100%',
            textAlign: 'center',
          },
          Fb: {
            extend: 'flex',
            props: {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '100%',
              borderRight: '1px solid black',
              width: '100%',
              height: '100%',

              textAlign: 'center',
            },
            a: {
              attr: {
                href: 'https://www.facebook.com/FreeStylerShop',
              },
              Img: {
                src: 'https://files-production-symbols-platform-development-en-d5-u3-p7x0.based.dev/ficedd977b/8ea779c8-5857-4611-ae88-d015ae936e9a-03606ae3-21c8-4771-b62a-596aebd4b745-994c27f9-5bb4-48e3-8280-1e453f143db0.svg',
                alt: 'Facebook Logo',
              },
            },
          },
          Ig: {
            extend: 'flex',
            props: {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '100%',
            },
            a: {
              attr: {
                href: 'https://www.instagram.com/freestylershop',
              },
              Img: {
                src: 'https://files-production-symbols-platform-development-en-d5-u3-p7x0.based.dev/fid618a2a0/eead73a4-316a-4300-b8aa-b6632e690ecd-49359f4d-9e6b-40d7-b1ae-b0f0dd778798-b21fcd26-1392-4f1e-89c4-5a1fe812e2e0.svg',
                alt: 'Instagram Logo',
              },
            },
          },
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
        // padding: '20px 42px 0 42px',
        padding: '20px 0 0 0',
      },
      H1: {
        props: {
          text: 'Policy',
          fontSize: '16px',
          letterSpacing: '1.25px',
          fontWeight: '500',
          margin: '0',
          borderBottom: '1px solid grey',
        },
      },
      Links: {
        extend: 'Flex',
        props: {
          flow: 'y',
          gap: '10px',
        },
        childExtend: {
          tag: 'a',
          props: {
            cursor: 'pointer',
            width: 'auto',
            fontSize: '14px',
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
    },
    Contact: {
      extend: 'Flex',
      props: {
        width: 'auto',
        height: 'auto',
        flow: 'y',
        padding: '20px 0 0 0',
        // justifyContent: 'space-between'
      },
      H1: {
        props: {
          text: 'Contact',
          fontSize: '16px',
          letterSpacing: '1.25px',
          fontWeight: '500',
          margin: '0',
          borderBottom: '1px solid grey',
        },
      },
      Info: {
        extend: 'Flex',
        props: {
          flow: 'y',
          justifyContent: 'space-between',
          height: '100%',
        },
        LocInfo: {
          extend: 'Flex',
          props: {
            gap: '10px',
          },
          Img: {
            src: 'https://files-production-symbols-platform-development-en-d5-u3-p7x0.based.dev/fib7c382eb/699decbf-c586-4ca9-9072-86f228ba77b8-0aee9e47-41ff-45a4-be2f-3ff9638659c5-6b646751-a245-43b1-934b-29ac40b62eb0.svg',
          },
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
          },
          Img: {
            src: 'https://files-production-symbols-platform-development-en-d5-u3-p7x0.based.dev/fifbb48117/c9090620-ee1f-4ef0-b66f-2643f27e5a5b-39de5e06-8675-4a0c-9ea2-a4ee33a1aa8e-24bea797-bb95-418b-99c4-bb2d9836e6c8.svg',
          },
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
          },
          Img: {
            src: 'https://files-production-symbols-platform-development-en-d5-u3-p7x0.based.dev/fi5437af5f/6e15b033-b346-433a-bc9f-ed1b5f6f587b-859fb9e7-7b72-480e-b272-b3df44715a30-e76c0844-ac65-48d9-89da-7e702028242a.svg',
          },
          p: {
            text: 'info@freestyler.ge',
            props: {
              fontSize: '14px',
            },
          },
        },
        Iframe: {
          background: 'gray .05',
          src: (el, s) =>
            `https://www.google.com/maps?q=${s.mapLocation.lat},${s.mapLocation.lng}&z=15&output=embed`,
          allowfullscreen: '',
          loading: 'lazy',
          referrerpolicy: 'no-referrer-when-downgrade',
          round: 'A',
          minWidth: '0',
          minHeight: '0',
          maxWidth: 'fit-content',
          border: '0',
          display: 'flex',
        },
      },
    },
    MailNotification: {
      extend: 'Flex',
      props: {
        height: '100%',
        width: 'auto',
        flow: 'y',
        gap: '30px',
        // padding: '20px 42px 0 0',
        padding: '20px 0 0 0',
      },
      H: {
        text: 'Add adventure to your inbox',
        letterSpacing: '1px',
        fontSize: '16px',
        fontWeight: '500',
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
            style: {
              backgroundColor: 'transparent',
              border: '1px solid grey',
              borderRadius: '0',
              width: '100%',
              padding: '10px',
            },
            props: {},
          },
          Button: {
            attr: {
              type: 'submit',
            },
            props: {
              backgroundColor: 'rgba(138, 84, 84, 0.5);',
              border: 'none',
              borderRadius: '0',
              width: '1px',
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
      height: '40px',
    },
    P: {
      extend: 'Flex',
      props: {
        text: 'Copyright policy by Shopify 2025 / by nkcell',
        fontSize: '12px',
        fontWeight: '400',
        margin: '0 50px',
        align: 'center',
      },
    },
  },
};
