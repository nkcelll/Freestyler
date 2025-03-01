import { version } from "process";

const openSideMenuBox = (openMenu, openOverlay) => {
  const overlayBox = document.getElementById(openOverlay)
  const menuSide = document.getElementById(openMenu)
  
  if (!overlayBox || !menuSide) {
    console.error('Element not found:', { overlayBox, menuSide });
    return;
  }

  menuSide.style.transform = 'translateX(0)'

  overlayBox.style.visibility = 'visible' 
  overlayBox.style.opacity = '0.5'

  document.body.style.overflow = 'hidden';
}

const closeSideMenuBox = (closeMenu, closeOverlay) => {
  const overlayBox = document.getElementById(closeOverlay);
  const menuSide = document.getElementById(closeMenu);

  if (!overlayBox || !menuSide) {
    console.error('Element not found:', { overlayBox, menuSide });
    return;
  }

  setTimeout(() => {
    menuSide.style.transform = 'translateX(100%)';

    overlayBox.style.visibility = 'hidden';

    document.body.style.overflow = 'visible';
  }, 100);
};

export {openSideMenuBox, closeSideMenuBox}

