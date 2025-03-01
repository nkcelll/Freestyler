const showDropdown = (selector) => {
  const hoverBox = document.querySelector(selector);
  if (!hoverBox) return;

  if (hoverBox) {
    hoverBox.style.transition = 'opacity 0.2s ease, visibility 0.2s ease';
    hoverBox.style.visibility = 'visible';
    hoverBox.style.opacity = '1';
  }
};

const hideDropdown = (selector) => {
  const hoverBox = document.querySelector(selector);
  if (!hoverBox) return;

  if (hoverBox) {
    hoverBox.style.transition = 'opacity 0.2s ease, visibility 0.2s ease';
    hoverBox.style.visibility = 'hidden';
    hoverBox.style.opacity = '0';
  }
};

export { showDropdown, hideDropdown };
