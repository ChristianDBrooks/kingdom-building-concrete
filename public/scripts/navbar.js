function toggleNavbarMenu() {
  let mobileMenuIcon = document.getElementById("mobile-navbar-menu-icon");
  let navbarMenu = document.getElementById("mobile-navbar-menu");
  navbarMenu.classList.toggle('show');
  mobileMenuIcon.textContent = navbarMenu.classList.contains('show') ? 'clear' : 'menu';
}

function toggleMobileDropdown(targetId) {
  let targetDropdown = document.getElementById(targetId);
  let dropdownBtn = document.querySelector(`#${targetId} .expand-icon`);
  targetDropdown.classList.toggle('expanded');
  dropdownBtn.textContent = targetDropdown.classList.contains('expanded') ? 'expand_less' : 'expand_more';
}