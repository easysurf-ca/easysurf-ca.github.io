function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.remove("hidden");
  } else {
    mobileMenu.classList.add("hidden");
  }
  const button = document.querySelector('button[aria-controls="mobile-menu"]');
  const isExpanded = button.getAttribute("aria-expanded") === "true";

  if (isExpanded) {
    button.setAttribute("aria-expanded", "false");
    button.classList.remove("active-link", "custom-hover-yellow");
    button.classList.add("bg-white", "custom-hover-white");
  } else {
    button.setAttribute("aria-expanded", "true");
    button.classList.add("active-link", "custom-hover-yellow");
    button.classList.remove("bg-white", "custom-hover-white");
  }
}
