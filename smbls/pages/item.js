export const item = {
  extend: [
    'Flex',
    'Layout',
  ],
  props: {
    width: '100%',
    flow: 'y',
  },
  ListSidebar: {
  },
  Flex_logo: {
    props: {
      gap: 'A',
    },
    Logo: {
    },
    I: {
      text: 'Fewer, better things.',
    },
  },
  Flex: {
    props: {
      flow: 'y',
      gap: 'C1',
    },
    state: el => {
          const id = location.pathname.split('item/')[1]
          if (!id) return
          return el.parent.state.root.products?.data[id]
        },
    Flex: {
      props: {
        padding: 'B2',
        gap: 'C1',
        '@tabletS': {
          flow: 'y',
        },
      },
      Pics: {
        extend: 'Flex',
        state: 'posters',
        props: {
          flex: 2,
          flow: 'y',
          gap: 'B2',
        },
        Figure: {
          state: '0',
          props: {
            '@dark': {
              background: '#181818',
            },
            '@light': {
              background: '#e8e8e8',
            },
            aspectRatio: '9 / 12',
            position: 'relative',
            margin: '0',
          },
          Img: {
            maxWidth: '100%',
            maxHeight: '100%',
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate3d(-50%, -50%, 1px)',
            src: '{{ src }}',
            opacity: 0,
            transition: 'C default',
            transitionProperty: 'opacity, transform',
            onLoad: (ev, el, s) => {
                  el.node.style.opacity = 1
                },
          },
        },
        Flex: {
          props: {
            gap: 'B',
          },
          childExtend: {
            props: {
              '@dark': {
                background: '#181818',
              },
              '@light': {
                background: '#e8e8e8',
              },
              position: 'relative',
              aspectRatio: '12 / 9',
              maxWidth: '30%',
              flex: 1,
            },
            Img: {
              maxWidth: '100%',
              maxHeight: '100%',
              src: '{{ src }}',
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate3d(-50%, -50%, 1px)',
              opacity: 0,
              transition: 'C default',
              transitionProperty: 'opacity, transform',
              onLoad: (ev, el, s) => {
                    el.node.style.opacity = 1
                  },
            },
          },
          $stateCollection: el => el.state.parse(),
        },
      },
      Info: {
        extend: 'Flex',
        props: {
          flow: 'y',
          gap: 'C3',
          padding: 'Z A2',
          flex: 5,
        },
        Hgroup: {
          props: {
          },
          H: {
            tag: 'h3',
            margin: '0',
            text: '{{ title }}',
          },
          P: {
            margin: '0',
            fontWeight: '400',
            text: ({
                  state
                }) => (state.root.lang === 'en' ? 'price: ' : 'ფასი: ') + '{{ price }}' + (state.root.lang === 'en' ? ' GEL' : ' ლარი'),
          },
        },
        Flex: {
          props: {
            gap: 'D1',
          },
          Hgroup_brand: {
            P: {
              order: -1,
              opacity: '.5',
              margin: '0',
              fontWeight: '400',
              text: ({
                    state
                  }) => state.root.lang === 'en' ? 'Brand' : 'ბრენდი',
            },
            H: {
              tag: 'p',
              fontWeight: '400',
              margin: '0',
              text: '{{ brand }}',
            },
          },
          Hgroup_category: {
            P: {
              order: -1,
              opacity: '.5',
              margin: '0',
              fontWeight: '400',
              text: ({
                    state
                  }) => state.root.lang === 'en' ? 'Category' : 'კატეგორია',
            },
            H: {
              tag: 'p',
              fontWeight: '400',
              margin: '0',
              href: '/{{ type }}',
              text: '{{ type }}',
            },
          },
        },
        Hgroup_description: {
          P: {
            order: -1,
            opacity: '.5',
            margin: '0',
            fontWeight: '400',
            text: ({
                  state
                }) => state.root.lang === 'en' ? 'Description' : 'აღწერა',
          },
          H: {
            tag: 'p',
            fontWeight: '400',
            margin: '0',
            text: '{{ meta }}',
          },
        },
        Clicks: {
          props: {
          },
          Link: {
            extend: 'Button',
            props: {
              theme: 'primary',
              padding: 'Z2 B2',
              href: '{{ meta }}',
              target: '_blank',
              fontWeight: '300',
              gap: 'X',
              icon: 'plus',
              text: ({
                    state
                  }) => state.root.lang === 'en' ? 'Buy now' : 'ყიდვა',
            },
          },
          Button_list: {
            theme: 'transparent',
            padding: 'Z2 B2',
            fontWeight: '300',
            gap: 'X',
            icon: 'plus',
            text: ({
                  state
                }) => state.root.lang === 'en' ? 'Add to list' : 'დაამატე',
            onClick: (ev, el, s) => s.root.update({
                  list: s.root.list,
                  listSidebar: true
                }),
          },
        },
        Available: {
          extend: 'Flex',
          props: {
            margin: 'C1 0',
          },
          Icon: {
            margin: 'W X2 - -',
            fontSize: 'C',
            color: 'green',
            name: 'check',
          },
          Hgroup: {
            gap: 'W',
            H: {
              tag: 'p',
              margin: '0',
              fontWeight: '400',
              text: ({
                    state
                  }) => state.root.lang === 'en' ? 'In stock at showroom' : 'ადგილზეა შოურუმში',
            },
            P: {
              opacity: '.5',
              text: ({
                    state
                  }) => state.root.lang === 'en' ? 'Pickup is available' : 'შესაძლებელია აღება',
            },
          },
        },
      },
    },
    Hr: {
      opacity: '.15',
      margin: '- - -A',
    },
    ProductRow: {
      props: {
        margin: '- - C1',
      },
      Strong: {
      },
      Grid: {
        props: {
          columns: 'repeat(5, 1fr)',
        },
        $stateCollection: el => {
              const data = Object.values(el.state.root.products?.data)
              return data.filter((v, k) => {
                return parseInt(location.pathname.split('item/')[1]) !== k
              }).filter((v, k) => k < 5)
            },
      },
    },
  },
  Menu: {
  },
};