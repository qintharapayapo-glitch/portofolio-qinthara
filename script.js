// 1. Mengambil tahun saat ini untuk ditampilkan pada footer
const currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear;

// 2. Mengatur gulir halus ketika menu navigasi diklik
const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function(link) {
  link.addEventListener("click", function(event) {
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      event.preventDefault();
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});
