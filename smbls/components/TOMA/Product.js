export const Product = {
  extend: [
    'Link',
    'Flex',
  ],
  props: (el, s) => ({
    // heightRange: 'H',
    scrollToTop: true,
    routerOptions: {
      scrollToTop: true,
    },
    position: 'relative',
    padding: 'A A 0',
    aspectRatio: '450 / 600',
    flow: 'y',
    fontWeight: '400',
    href: s.href || '/item/' + s.key,
    target: s.href && '_blank',
    transition: 'defaultBezier, all, B',
    '@light': {
      background: 'rgb(41, 41, 41);',
      ':hover': {
        background: 'rgb(117, 116, 116)',
      },
    },
    '@dark': {
      background: '#181818',
      ':hover': {
        background: '#080808',
      },
    },
    ':hover': {
      '& img': {
        transform: 'translate3d(-50%, -70%, 1px)',
      },
      '& button': {
        transform: 'translate3d(0, 0, 1px)',
        opacity: 1,
      },
      '& > p': {
        margin: 'A 0 A2',
        transform: 'translate3d(0, 0, 1px)',
        opacity: 1,
      }
    }
  }),
  Img: {
    state: 'posters/0',
    props: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate3d(-50%, -57.5%, 1px)',
      maxWidth: '65%',
      maxHeight: '65%',
      src: '{{ src }}',
      transition: 'B defaultBezier',
      transitionProperty: 'opacity, transform',
    },
  },
  Flex: {
    props: {
      align: 'start space-between',
      margin: 'auto - -',
    },
    Hgroup: {
      gap: 'X',
      '@light': {
        color: 'white',
      },
      '@dark': {
        color: 'white',
      },
      H: {
        tag: 'span',
        text: '{{ title }}',
        order: 2,
      },
      P: {
        fontSize: 'Y',
        // text: '{{ brand }} · {{ category }}',
      },
    },
    SquareButton: {
      theme: 'transparent',
      icon: 'plus',
      opacity: '0',
      transform: 'translate3d(0, 10%, 1px)',
      transition: 'C defaultBezier',
      transitionProperty: 'opacity, transform',
      onClick: (ev, el, s) => {
            ev.stopPropagation()
            ev.preventDefault()
            s.root.update({
              list: s.root.list,
              listSidebar: true
            })
          },
    },
  },
  P: {
    fontWeight: '300',
    margin: 'Z 0',
    transform: 'translate3d(0, 10%, 1px)',
    overflow: 'hidden',
    transition: 'B defaultBezier',
    transitionProperty: 'opacity, transform, margin, height',
    text: '{{ description }}',
    onRender: (el) => {
          setTimeout(() => {
            const height = el.node.getBoundingClientRect().height;
            el.setProps({
              height: '0'
            }, {
              preventUpdate: true
            })
            el.parent.setProps({
              ':hover': {
                '& > p': {
                  height: `calc(${height}px + 1em)`
                }
              }
            })
          })
        },
  },
};