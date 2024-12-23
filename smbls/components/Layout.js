export const Layout = {
  extend: 'Flex',
  props: {
    position: 'absolute',
    inset: '0',
    minHeight: '100dvh',
    overflow: 'hidden auto',
    padding: 'B',
    gap: 'B1',
  },
  ListSidebar: {
  },
  Menu: {
    position: 'sticky',
    height: '100%',
    top: '0',
    width: 'F',
  },
  MainVideo: {
    position: 'sticky',
    top: '0',
    height: '100%',
    flex: 4,
    ':after': {
      content: '""',
      transition: 'C1 ',
      position: 'absolute',
      inset: '0',
      background: 'black .5',
    },
    Video: {
      boxSize: '100% 100%',
      muted: true,
      controls: false,
      autoplay: 'autoplay',
      position: 'absolute',
      inset: '0 0 0 0',
      style: {
        objectFit: 'cover',
      },
      MP4: {
        src: 'https://files.symbo.ls/fi367a6b19/ad043a29-f086-4e91-b011-9da26fc0f503-7a61c94a-9881-47ca-82c9-f6fdb94fa5d2-fd893d2e-f302-4657-a108-02f0b97aeb36.mp4',
      },
      onLoadedmetadata: (ev, el) => {
        console.log(el)
        const {
          node
        } = el
        
        node.playbackRate = 0.35
        node.volume = 0.2
        node.loop = true
        node.muted = true
        node.play()
      },
    },
    ButtonPlay: {
      tag: 'button',
      text: 'play',
      props: {
        position: 'absolute',
        opacity: '1',
        zIndex: '10',
      },
      attr: {
        id: 'playIt',
      },
      Audio: {
        tag: 'audio',
        attr: {
          id: 'audio',
          preload: 'auto',
          controls: true
        },
        Source: {
          attr: {
            src: './assets/audio/freestyler.mp3',
            type: 'audio/mpeg',
          }
        },
      },
      on: {
        click: (ev, el) => {
          
          const audio = document.getElementById('audio')
          
        },
      },
    },
  },
  Content: {
    flex: 7,
  },
};

