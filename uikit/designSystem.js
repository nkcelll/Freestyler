export default {
  COLOR: {
    black: '#000',
    white: '#fff',
  },
  THEME: {
    document: {
      '@light': {
        color: 'black',
        background: 'white',
      },
      '@dark': {
        color: 'white',
        background: 'black',
      },
    },
    none: {
      color: 'none',
      background: 'none',
    },
    transparent: {
      color: 'currentColor',
      background: 'transparent',
    },
  },
  TYPOGRAPHY: {
    base: 16,
    ratio: 1.25,
    subSequence: true,
  },
  SPACING: {
    base: 16,
    ratio: 1.618,
    subSequence: true,
  },
  useReset: true,
  useVariable: true,
  useFontImport: true,
  useIconSprite: true,
  useSvgSprite: true,
  useDefaultConfig: true,
  useDocumentTheme: true,
  verbose: false,
};