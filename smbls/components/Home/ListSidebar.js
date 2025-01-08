export const NewListSidebar = {
  extend: "Flex",
  attr: {
    id: 'sideMenu'
  },
  props: {
    display: "none",
    align: "center",
    position: "absolute",
    width: "100dvw",
    height: "100dvh",
    inset: "0",
    backgroundColor: "#D9D9D9",
    zIndex: 10,
    

    // '.Visible': {
    //   opacity: '0.98',
    //   dispaly: 'flex',
    //   pointerEvents: 'auto'
    // },
    // '.!Visible': {
    //   display: 'none',
    //   pointerEvents: 'none'
    // }
  },
  BurgerMenuClose: {
    align: "center",
    backgroundColor: "transparent",
    border: "none",
    padding: "0 12px 0 12px",
    width: "120px",
    cursor: "pointer",
  },
  nav: {
    props: {
      display: "flex",
      justifyContent: "center",
      gap: "200px",
      alignItems: "center",
      margin: "auto",
      width: "auto",
      height: "100%",
      backgroundColor: "#D9D9D9",
      opacity: "0.8",

    },
    AllCategory: {
      extend: "Flex",
      tag: "ul",
      props: {
        flow: "y",
        borderRight: "1px solid #632E2E",
        height: "300px",
        padding: "B1 0 0 0",

      },
      H1: {
        text: "all products",
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
              text: "CLOTHES",
            },
            {
              href: "/1",
              text: "ACCESSORIES",
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
                  fontWeight: "600",
                  letterSpacing: "1.3px",
                  lineHeight: "25px",
                },
              },
            ],
          })),
      },
    },
    MenCategory: {
      extend: "Flex",
      tag: "ul",
      props: {
        flow: "y",
        borderRight: "1px solid #632E2E",
        height: "300px",
        padding: "B1 0 0 0",

      },
      H1: {
        text: "MEN",
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
          display: "flex",
          flexDirection: "column",
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
              href: "/1",
              text: "SNOWBOARD BINDINGS",
            },
            {
              href: "/1",
              text: "BOOTS",
            },
            {
              href: "/",
              text: "CLOTHES",
            },
            {
              href: "/1",
              text: "GLOVES",
            },
            {
              href: "/1",
              text: "BAGS",
            },
            {
              href: "/1",
              text: "ACCESSORY KITS",
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
                  fontWeight: "600",
                  letterSpacing: "1.3px",
                  lineHeight: "25px",
                },
              },
            ],
          })),
      },
    },
    WomenCategory: {
      extend: "Flex",
      tag: "ul",
      props: {
        flow: "y",
        // justifyContent: 'center',
        borderRight: "1px solid #632E2E",
        height: "300px",
        padding: "B1 0 0 0",
      },
      H1: {
        text: "WOMEN",
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
          display: "flex",
          flexDirection: "column",
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
              href: "/1",
              text: "SNOWBOARD BINDINGS",
            },
            {
              href: "/1",
              text: "BOOTS",
            },
            {
              href: "/",
              text: "CLOTHES",
            },
            {
              href: "/1",
              text: "GLOVES",
            },
            {
              href: "/1",
              text: "BAGS",
            },
            {
              href: "/1",
              text: "ACCESSORY KITS",
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
                extend: 'Link',
                attr: {
                  href: item.href,
                },
                props: {
                  text: item.text,
                  textAlign: "end",
                  textDecoration: "none",
                  color: "black",
                  cursor: "pointer",
                  fontWeight: "600",
                  letterSpacing: "1.3px",
                  lineHeight: "25px",
                },
              },
            ],
        })),
      },
    },
    AccessoriesCategory: {
      extend: "Flex",
      tag: "ul",
      props: {
        flow: "y",
        // justifyContent: 'center',
        borderRight: "1px solid #632E2E",
        height: "300px",
        padding: "B1 0 0 0",
      },
      H1: {
        text: "ACCESSORY / KITS",
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
          display: "flex",
          flexDirection: "column",
          textAlign: "end",
          padding: "B1 A 0 0",
        },
        $propsCollection: () =>
          [
            {
              href: "/",
              text: "WALLETS",
            },
            {
              href: "/",
              text: "WAXES",
            },
            {
              href: "/1",
              text: "SOCKS",
            },
            {
              href: "/1",
              text: "Torque Driver Multi-Tool",
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
                  text: item.text.toLocaleUpperCase(),
                  textAlign: "end",
                  textDecoration: "none",
                  color: "black",
                  cursor: "pointer",
                  fontWeight: "600",
                  letterSpacing: "1.3px",
                },
              },
            ],
          })),
      },
    },
  },
};