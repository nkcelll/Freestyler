export const Layout = {
  extend: 'Flex',
  props: {
    overflow: 'hidden auto',
  }, 
  NewListSidebar: {
  },
  NewHeader: {
  },  
  NewMenu: {
    width: '120px',
    height: 'calc(100dvh - 77px)',
    borderRight: '1px solid #A38A8A',
    top: '0',
    order: '1'
  },
  Content: {
    flex: '7',
    order: '2',
    // borderTop: '1px solid #A38A8A',
    extends: 'Flex',
    justifyContent: 'space-evenly',

    gap: '10px',
    backgroundColor: '#E4E2E2',
    // backgroundColor: '#141414',
    padding: '0 A 0 0',
    minHeight: '-webkit-fill-available',
    childExtends: 'NewProducts',
    childrenAs: 'state',
    children: (el, s) => Object.values(s.products.data),
  },
}







// export const Layout = {
//   extend: 'Flex',
//   props: {
//     // position: 'absolute',
//     // inset: '0',
//     align: 'stretch',
//     minHeight: '100dvh',
//     // overflow: 'hidden auto',
//     padding: 'B',
//     gap: 'B1',
//   },
//   ListSidebar: {
//   },
//   Menu: {
//     position: 'sticky',
//     height: '100%',
//     top: '0',
//     width: 'F',
//   },
//   MainVideo: {
//     position: 'sticky',
//     top: '0',
//     height: 'calc(100dvh - 40px)',
//     flex: 4,
//     ':after': {
//       content: '""',
//       transition: 'C1 ',
//       position: 'absolute',
//       inset: '0',
//       background: 'black .5',
//     },
//     Video: {
//       boxSize: '100% 100%',
//       muted: true,
//       controls: false,
//       autoplay: 'autoplay',
//       position: 'absolute',
//       inset: '0 0 0 0',
//       style: {
//         objectFit: 'cover',
//       },
//       MP4: {
//         src: 'https://files.symbo.ls/fi367a6b19/ad043a29-f086-4e91-b011-9da26fc0f503-7a61c94a-9881-47ca-82c9-f6fdb94fa5d2-fd893d2e-f302-4657-a108-02f0b97aeb36.mp4',
//       },
//       onLoadedmetadata: (ev, el) => {
//         const {
//           node
//         } = el
        
//         node.playbackRate = 0.35
//         node.volume = 0.2
//         node.loop = true
//         node.muted = true
//         node.play()
//       },
//     },
//     // ButtonPlay: {
//     //   tag: 'button',
//     //   text: 'play',
//     //   props: {
//     //     position: 'absolute',
//     //     opacity: '1',
//     //     zIndex: '10',
//     //   },
//     //   attr: {
//     //     id: 'playIt',
//     //   },
//     //   Audio: {
//     //     tag: 'audio',
//     //     attr: {
//     //       id: 'audio',
//     //       preload: 'auto',
//     //       controls: true
//     //     },
//     //     Source: {
//     //       attr: {
//     //         src: 'https://files-production-symbols-platform-development-en-d5-u3-p7x0.based.dev/fi3a5f4feb/643a1b81-b1a5-4d47-8ef2-1f1366c18556-ce501cc7-cd47-4151-afc6-7c91a1ee5d6d-d320a8e9-93a2-4afc-9cea-0610da298da8.mpga'
//     //       }
//     //     },
//     //   },
//     //   on: {
//     //     click: (ev, el) => {
//     //       const audio = document.getElementById('audio')
//     //       audio.muted = false
//     //       audio.play()
//     //       console.log(audio.play());
//     //     },
//     //   },
//     // },
//   },
//   Content: {
//     flex: 7,
//   },
//   // SectionLayout: {

//   // }
//   // SectionLayout: {
//   //   props: {
//   //     inset: "0",
//   //     minHeight: "100dvh",
//   //     padding: "B",
//   //     gap: "B1",
//   //   },
//   //   childExtend: {
//   //     Section: {
//   //       tag: "div",
//   //       text: "aeeeeeeeeeeeeeeeeeeeeee",
//   //     },
//   //   },
//   // },
// };

// export const SectionLayout = {
//   props: {
//     inset: "0",
//     minHeight: "100dvh",
//     padding: "B",
//     gap: "B1",
//   },
//   childElement: {
//     Section: {
//       tag: "div",
//       text: "aeee",
//     },
//   },
// };