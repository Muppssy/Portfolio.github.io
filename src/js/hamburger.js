document.addEventListener("DOMContentLoaded", () => {
  
    const menuButton = document.querySelector("#menu-button");
    const rootElement = document.documentElement;
    const menuContainer = document.getElementById('menu-container');
    const menuLinks = document.querySelectorAll('#menu-container a');
  
    // Ouvrir/fermer le menu mobile
    menuButton.addEventListener("click", () => {
      const isOpen = rootElement.toggleAttribute("menu-open");
      menuButton.setAttribute('aria-expanded', isOpen);
      const newLabel = isOpen ? 'Fermer le menu' : 'Ouvrir le menu';
      menuButton.setAttribute('aria-label', newLabel);
    });
  
    // Fermer le menu lorsqu'un lien est cliqué
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        rootElement.removeAttribute('menu-open');
        menuButton.setAttribute('aria-expanded', 'false');
      });
    });
 
  
});
