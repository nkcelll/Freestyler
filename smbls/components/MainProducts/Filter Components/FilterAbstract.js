export const FilterAbstract = ({
  title,
  prefix,
  mainID,
  filterCategories,
}) => ({
  extend: ['Flex'],
  props: {
    flow: 'y',
  },
  attr: {
    id: mainID,
  },
  Category: {
    extend: 'Flex',
    attr: {
      id: `${prefix}-main-category-dropdown`,
    },
    props: {
      width: '100%',
      height: '60px',
      flow: 'x',
      borderBottom: '1px solid grey',
      backgroundColor: '#fff',
      justifyContent: 'space-between',
      align: 'center',
      padding: '0 20px',
    },
    P: {
      text: title,
      // fontSize: '16px'
    },
    IconArrowDown: {
      id: `${prefix}-main-top-icon`,
    },
  },
  on: {
    click: (e) => {
      const dropdown = document.getElementById(
        `${prefix}-main-category-dropdown`
      );
      const icon = document.getElementById(`${prefix}-main-top-icon`);
      if (dropdown.contains(e.target)) {
        filterCategories.forEach(({ id }) => {
          const topDropdown = document.getElementById(`${prefix}-${id}`);
          toggleDropdown(topDropdown);
        });
      }
      if (dropdown.contains(e.target)) {
        const currenIconTransform = icon.style.transform;
        currenIconTransform === 'rotate(180deg)'
          ? (icon.style.transform = 'rotate(0deg)')
          : (icon.style.transform = 'rotate(180deg)');
      }
    },
  },

  $filterCollection: () =>
    filterCategories.map((res) => inputSec({ ...res, prefix })),
});

const inputSec = ({ spanText, id, inputId, prefix }) => ({
  extend: 'Flex',
  attr: {
    id: `${prefix}-${id}`,
    'aria-expanded': 'false',
  },
  props: {
    padding: '0 20px',
    backgroundColor: '#fff',
    flow: 'x',
    gap: '20px',
    height: '42px',
    align: 'center',
    maxHeight: '0',
    opacity: '0',
    visibility: 'hidden',
  },
  Input: {
    attr: {
      type: 'checkbox',
      id: `${inputId}`,
      'data-inputCheck': 'false',
    },
    props: {
      cursor: 'pointer',
      outline: 'none',
      appearance: 'none',
      position: 'relative',
      backgroundColor: 'transparent',
      '::before': {
        content: '""',
        position: 'absolute',
        top: '0',
        left: '25%',
        width: '20px',
        height: '20px',
        backgroundColor: 'transparent',
        border: '1px solid black',
        borderRadius: '0',
        transition: 'background-color 0.2s ease, border-color 0.2s ease',
      },
      ':checked::before': {
        backgroundColor: 'black',
        border: '1px solid black',
        borderRadius: '0',
        transition: 'background-color 0.2s ease, border-color 0.2s ease',
      },
      '::after': {
        content: '""',
        position: 'absolute',
        top: '45%',
        left: '50%',
        width: '10px',
        height: '5px',
        borderLeft: '1px solid white',
        borderBottom: '1px solid white',
        transform: 'translate(-50%, -50%) rotate(-45deg)',
        opacity: '0',
        transition: 'opacity 0.2s ease',
      },

      ':checked::after': {
        opacity: '1',
      },
    },

    on: {
      click: (e) => {
        const isChecked = e.target.checked;
        e.target.setAttribute('data-inputCheck', isChecked ? 'true' : 'false');
      },
    },
  },

  Span: {
    text: spanText,
    props: {
      fontWeight: '400',
      fontSize: '13px',
      letterSpacing: '1.1px',
    },
    on: {
      click: () => {
        const checkBox = document.getElementById(inputId);
        if (checkBox) {
          checkBox.checked = !checkBox.checked;
          checkBox.setAttribute(
            'data-inputCheck',
            checkBox.checked ? 'true' : 'false'
          );
        }
      },
    },
  },
});

const toggleDropdown = (dropdown) => {
  const isExpanded = dropdown.getAttribute('aria-expanded') === 'false';

  dropdown.style.transition =
    'opacity 0.2s ease, max-height 0.5s ease, visibility 0.5s ease';

  if (isExpanded) {
    dropdown.style.maxHeight = dropdown.scrollHeight + '40px';
    dropdown.style.visibility = 'visible';
    dropdown.style.opacity = '1';
    dropdown.setAttribute('aria-expanded', 'true');
  } else {
    dropdown.style.opacity = '0';
    dropdown.style.visibility = 'hidden';
    dropdown.style.maxHeight = '0';
    dropdown.setAttribute('aria-expanded', 'false');
  }
};
