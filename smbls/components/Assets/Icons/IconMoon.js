export const IconMoon = {
  Button: {
    props: {
      '@dark': {
        color: 'white'
      },
      '@light': {
        color: 'black'
      },
      padding: 0,
      background: 'transparent'
    },
    html: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`,
    // on:{
    //   click: () => {
    //     document.body.style.color = 'white'
    //     document.body.style.backgroundColor = '#1E201E'
    //   }
    // }
  },
}