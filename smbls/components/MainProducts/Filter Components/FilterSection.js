export const FilterSection = {
  extend: 'Flex',
  props: {
    width: '100%',
    height: '60px',
    justifyContent: 'space-between',
    align: 'center',
    '@light': { background: '#CDCBCB' },
    '@dark': { background: '#343634' },
  },

  on: {
    render: (el, s) => {
      const updateGridColumns = () => {
        const stored = localStorage.getItem('grid-row');
        const gridContainer = document.getElementById(
          'products-grid-container'
        );

        if (!gridContainer) return;

        const columnsMap = {
          'grid-row-2': 'repeat(2, 1fr)',
          'grid-row-3': 'repeat(3, 1fr)',
          'grid-row-4': 'repeat(4, 1fr)',
        };

        const baseColumns = columnsMap[stored] || 'repeat(4, 1fr)';
        let windowWidth = window.innerWidth;

        if (baseColumns === 'repeat(4, 1fr)') {
          if (windowWidth > 1024) {
            gridContainer.style.gridTemplateColumns = 'repeat(4, 1fr)';
          } else if (windowWidth > 768 && windowWidth <= 1024) {
            gridContainer.style.gridTemplateColumns = 'repeat(3, 1fr)';
          } else if (windowWidth <= 768 && windowWidth > 480) {
            gridContainer.style.gridTemplateColumns = 'repeat(2, 1fr)';
          } else if (windowWidth <= 480) {
            gridContainer.style.gridTemplateColumns = 'repeat(1, 1fr)';
          }
        }

        if (baseColumns === 'repeat(3, 1fr)') {
          if (windowWidth > 768) {
            gridContainer.style.gridTemplateColumns = 'repeat(3, 1fr)';
          } else if (windowWidth <= 768 && windowWidth > 480) {
            gridContainer.style.gridTemplateColumns = 'repeat(2, 1fr)';
          } else if (windowWidth <= 480) {
            gridContainer.style.gridTemplateColumns = 'repeat(1, 1fr)';
          }
        }

        if (baseColumns === 'repeat(2, 1fr)') {
          if (windowWidth > 480) {
            gridContainer.style.gridTemplateColumns = 'repeat(2, 1fr)';
          } else if (windowWidth <= 480) {
            gridContainer.style.gridTemplateColumns = 'repeat(1, 1fr)';
          }
        }

        // console.log(gridContainer.style.gridTemplateColumns);
      };

      requestAnimationFrame(updateGridColumns);
      window.addEventListener('resize', updateGridColumns);
    },
  },

  P: {
    text: (el, s) => `${s.productsData.length ?? 0} Products`,
    props: {
      margin: '0 0 0 46px',
      letterSpacing: '1.2',
      fontSize: '16px',
      width: '126px',
      '@mobileL': { margin: '0 0 0 16px' },
    },
  },

  GridColumns: {
    extend: 'Flex',
    props: {
      width: 'auto',
      height: '50%',
      gap: '16px',
      '@tabletS': {
        display: 'none',
      },
    },

    childExtend: {
      extend: 'Button',
      props: {
        background: 'transparent',
        padding: 0,
      },
      on: {
        click: (ev, el, s) => {
          const id = ev.currentTarget.id;
          const gridContainer = document.getElementById(
            'products-grid-container'
          );

          if (gridContainer) {
            const columnsMap = {
              'grid-row-2': 'repeat(2, 1fr)',
              'grid-row-3': 'repeat(3, 1fr)',
              'grid-row-4': 'repeat(4, 1fr)',
            };
            gridContainer.style.gridTemplateColumns = columnsMap[id];
            localStorage.setItem('grid-row', id);
          }
        },
      },
    },

    $propsCollection: () => [
      { id: 'grid-row-2', IconGrid2: {} },
      { id: 'grid-row-3', IconGrid3: {} },
      { id: 'grid-row-4', IconGrid4: {} },
    ],
  },

  FilterMenu: {},
};