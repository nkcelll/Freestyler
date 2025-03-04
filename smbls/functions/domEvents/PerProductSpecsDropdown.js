const PerProductSpecsDropdown = (dropdown, downArrowIcon) => {
  if(!dropdown && !downArrowIcon) return 

  if (dropdown) {
    const isHidden = dropdown.style.opacity === '0' || dropdown.style.opacity === '';
    dropdown.style.opacity = isHidden ? '1' : '0';
    dropdown.style.maxHeight = isHidden ? dropdown.scrollHeight + 'px' : '0';
  }
  if (downArrowIcon) {
    const current = downArrowIcon.style.transform || 'rotate(0deg)';
    downArrowIcon.style.transform = current === 'rotate(0deg)' ? 'rotate(180deg)' : 'rotate(0deg)';
  }
}

export default PerProductSpecsDropdown