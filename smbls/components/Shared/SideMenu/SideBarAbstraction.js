export const SideBarAbstaction = ({
  title,
  prefix,
  mainID,
  firstCategories,
}) => ({
  extend: ['Flex'],
  props: {
    flow: 'y',
  },
  attr: {
    id: mainID,
  },
  Category: {
    extend: ['Link', 'Flex'],
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
    },
    IconArrowDown: {
      id: `${prefix}-main-top-icon`,
    },
  },

  on: {
    click: (e) => {
      const mainDropdown = document.getElementById(
        `${prefix}-main-category-dropdown`
      );
      const icon = document.getElementById(`${prefix}-main-top-icon`);

      if (mainDropdown.contains(e.target)) {
        firstCategories.forEach(({ id }) => {
          const topDropdown = document.getElementById(`${prefix}-${id}`);
          toggleDropdown(topDropdown);
        });
      }
      if (mainDropdown.contains(e.target)) {
        const currentTransform = icon.style.transform;
        if (currentTransform === 'rotate(180deg)') {
          icon.style.transform = 'rotate(0deg)';
        } else {
          icon.style.transform = 'rotate(180deg)';
        }
      }
    },
  },

  $topCategoryCollection: () =>
    firstCategories.map((res) => category({ ...res, prefix })),
});

const category = ({ topCat, id, url, subCategories, prefix }) => ({
  extend: 'Flex',
  attr: {
    id: `${prefix}-${id}`,
    'aria-expanded': 'false',
  },
  props: {
    display: 'flex',
    padding: '0 20px',
    backgroundColor: '#fff',
    flow: 'y',
    maxHeight: '0',
    opacity: '0',
    visibility: 'hidden',
  },
  Items: {
    extend: ['Link', 'Flex'],
    props: {
      justifyContent: 'space-between',
      width: '100%',

      align: 'center',
      href: url,
    },
    P: {
      text: topCat,
      props: {
        fontWeight: '400',
      },
    },
    IconArrowDown: {
      class: 'sub-icon',
    },
  },
  on: {
    click: (e) => {
      const subList = document.getElementById(`${prefix}-${id}`);
      const SubCategoryListWrap = subList.querySelector(
        `.${prefix}-sub-category-dropdown`
      );
      const icon = subList.querySelector('.sub-icon');
      if (subList.contains(e.target)) {
        toggleDropdown(SubCategoryListWrap);
      }
      const isExpanded =
        SubCategoryListWrap.getAttribute('aria-expanded') === 'true';
      icon.style.transform = isExpanded ? 'rotate(180deg)' : 'rotate(0deg)';
    },
  },
  SubCategoryList: {
    extend: 'Flex',
    attr: {
      'aria-expanded': 'false',
    },
    props: {
      class: `${prefix}-sub-category-dropdown`,
      flexDirection: 'column',
      borderLeft: '1px solid grey',
      maxHeight: '0',
      opacity: '0',
      visibility: 'hidden',
    },
    $subCategoryCollection: () =>
      subCategories.map((subCat) =>
        subCategoriesComponent({ ...subCat, prefix })
      ),
  },
});

const subCategoriesComponent = ({ subCat, url }) => ({
  extend: ['Link', 'Flex'],
  props: {
    // justifyContent: 'flex-start',
    display: 'flex',
    gap: '100px',
    align: 'center',
    padding: '0 20px',
  },
  P: {
    text: subCat,
    props: {
      fontWeight: '200',
    },
  },
  attr: {
    href: url,
  },
});

const toggleDropdown = (dropdown) => {
  const isExpanded = dropdown.getAttribute('aria-expanded') === 'false';

  dropdown.style.transition =
    'opacity 0.2s ease, max-height 0.5s ease, visibility 0.5s ease';

  if (isExpanded) {
    // dropdown.style.maxHeight = dropdown.scrollHeight + 'px';
    dropdown.style.maxHeight = dropdown.scrollHeight;
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