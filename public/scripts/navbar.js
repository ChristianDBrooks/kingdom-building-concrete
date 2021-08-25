function toggleNavbarTray() {
  let mobileMenuIcon = document.getElementById("mobile-nav-icon");
  let mobileNav = document.getElementById("mobile-nav");
  mobileNav.classList.toggle('show');
  mobileMenuIcon.textContent = mobileNav.classList.contains('show') ? 'clear' : 'menu';
}

function toggleMobileDropdown(targetId) {
  let targetDropdown = document.getElementById(targetId);
  let dropdownBtn = document.querySelector(`#${targetId} .expand-icon`);
  targetDropdown.classList.toggle('expanded');
  dropdownBtn.textContent = targetDropdown.classList.contains('expanded') ? 'expand_less' : 'expand_more';
}