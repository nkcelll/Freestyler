export const privacyAndPolicy = {
  extend: 'Layout',
  Menu: {
    position: 'sticky',
    top: '0',
    height: '100dvh',
    alignSelf: 'start',
  },
  Content: {
    props: {
      gridColumnStart: 'span 4',
    },
    Editorjs: {
      state: 'static/data/0/content',
    },
  },
};