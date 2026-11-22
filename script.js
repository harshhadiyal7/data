const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const name = data.get("name").trim();
  const email = data.get("email").trim();
  const company = data.get("company").trim();
  const message = data.get("message").trim();

  // Replace this address with your real business email before publishing.
  const recipient = "datanexus23@gmail.com";
  const subject = encodeURIComponent(`DataNexus enquiry from ${name}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\nRequirements:\n${message}`
  );

  document.getElementById("formStatus").textContent =
    "Opening your email app with the enquiry details…";
  window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
});
