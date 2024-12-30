export const MenMenu = {
  extend: 'Flex',
  li: {
    style: {
      listStyleType: 'none',
    },
    a: {
      text: 'MEN /',
      props: {
        fontSize: '20px',
        padding: '0',
        margin: '0',
      },
    },
    MenList: {
      props: {
        display:'flex',
        justifyContent: 'space-evenly',
        width: '100dvw',
        height: '60dvh',
        backgroundColor: 'red',
        position: 'absolute',
        inset: '0',
        top: '77px',
      },
      div:{
        extend: 'Flex',
        props: {
          justifyContent: 'center',
          gap: '200px',
          borderTop: '1px solid black',
          margin: '70px 0 0 0',
          width: '85%'
        },
        SnowboardCategory: {
          extend: "Flex",
          tag: "ul",
          props: {
            flow: "y",
            borderRight: "1px solid #632E2E",
            height: "350px",
            padding: "B1 0 0 0",
    
          },
          a: {
            text: "SNOWBOARDS",
            props: {
              margin: "0",
              fontSize: "20px",
              textAlign: "end",
              padding: "0 A 0 0",
              fontWeight: "200",
              textAlign: "end",
              textDecoration: "underline",
              color: "#131313",
              letterSpacing: "2.4px",
            },
          },
          li: {
            props: {
              display: "block",
              flexDirection: "column",
              // gap: '5px',
              textAlign: "end",
              padding: "B1 A 0 0",
            },
            $propsCollection: () =>
              [
                {
                  href: "/",
                  text: "SNOWBOARD",
                },
                {
                  href: "/",
                  text: "SNOWBOARD BINDINGS",
                },
                {
                  href: "/1",
                  text: "SNOWBOARD BAGS",
                },
                {
                  href: "/1",
                  text: "SNOWBOARDS BOOTS",
                },
                {
                  href: "/1",
                  text: "SNOWBOARDS ACCESSORIES",
                },
              ].map((item) => ({
                tag: "li",
                style: {
                  listStyleType: "none",
                },
                props: {
                  display: "flex",
                  flow: "y",
                  gap: "150px",
                },
                children: [
                  {
                    tag: "a",
                    attr: {
                      href: item.href,
                    },
                    props: {
                      text: item.text,
                      textAlign: "end",
                      textDecoration: "none",
                      color: "black",
                      cursor: "pointer",
                      fontWeight: "400",
                      letterSpacing: "1.3px",
                      lineHeight: "25px",
                    },
                  },
                ],
              })),
          },
        },
        Clothes: {
          extend: "Flex",
          tag: "ul",
          props: {
            flow: "y",
            borderRight: "1px solid #632E2E",
            height: "350px",
            padding: "B1 0 0 0",
    
          },
          a: {
            text: "CLOTHES",
            props: {
              margin: "0",
              fontSize: "20px",
              textAlign: "end",
              padding: "0 A 0 0",
              fontWeight: "200",
              textAlign: "end",
              textDecoration: "underline",
              color: "#131313",
              letterSpacing: "2.4px",
            },
          },
          li: {
            props: {
              display: "block",
              flexDirection: "column",
              // gap: '5px',
              textAlign: "end",
              padding: "B1 A 0 0",
            },
            $propsCollection: () =>
              [
                {
                  href: "/",
                  text: "Ski jacket",
                },
                {
                  href: "/",
                  text: "ski pants",
                },
                {
                  href: "/1",
                  text: "thermals",
                },
                {
                  href: "/1",
                  text: "hoods",
                },
              ].map((item) => ({
                tag: "li",
                style: {
                  listStyleType: "none",
                },
                props: {
                  display: "flex",
                  flow: "y",
                  gap: "150px",
                },
                children: [
                  {
                    tag: "a",
                    attr: {
                      href: item.href,
                    },
                    props: {
                      text: item.text.toUpperCase(),
                      textAlign: "end",
                      textDecoration: "none",
                      color: "black",
                      cursor: "pointer",
                      fontWeight: "400",
                      letterSpacing: "1.3px",
                      lineHeight: "25px",
                    },
                  },
                ],
              })),
          },
        },
        Accessories: {
          extend: "Flex",
          tag: "ul",
          props: {
            flow: "y",
            borderRight: "1px solid #632E2E",
            height: "350px",
            padding: "B1 0 0 0",
            width: 'auto'
    
          },
          a: {
            text: `MEN's ACCESSORIES`,
            props: {
              margin: "0",
              fontSize: "20px",
              textAlign: "end",
              padding: "0 A 0 0",
              fontWeight: "200",
              textAlign: "end",
              textDecoration: "underline",
              color: "#131313",
              letterSpacing: "2.4px",
            },
          },
          li: {
            props: {
              display: "block",
              flexDirection: "column",
              // gap: '5px',
              textAlign: "end",
              padding: "B1 A 0 0",
            },
            $propsCollection: () =>
              [
                {
                  href: "/",
                  text: "goggles",
                },
                {
                  href: "/",
                  text: "helmets",
                },
                {
                  href: "/1",
                  text: "gloves",
                },
                {
                  href: "/1",
                  text: "socks",
                },
                {
                  href: "/1",
                  text: "neckwarmers",
                },
                {
                  href: "/1",
                  text: "hoods",
                },
                {
                  href: "/1",
                  text: "caps",
                },
                {
                  href: "/1",
                  text: "shorts",
                },
                {
                  href: "/1",
                  text: "belts",
                },
                {
                  href: "/1",
                  text: "wallets",
                },
              ].map((item) => ({
                tag: "li",
                style: {
                  listStyleType: "none",
                },
                props: {
                  display: "flex",
                  flow: "y",
                  gap: "150px",
                },
                children: [
                  {
                    tag: "a",
                    attr: {
                      href: item.href,
                    },
                    props: {
                      text: item.text.toUpperCase(),
                      textAlign: "end",
                      textDecoration: "none",
                      color: "black",
                      cursor: "pointer",
                      fontWeight: "400",
                      letterSpacing: "1.3px",
                      lineHeight: "25px",
                    },
                  },
                ],
              })),
          },
        },
      },
      
      
    }
  }
}