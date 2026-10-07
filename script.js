document.getElementById("year").textContent = new Date().getFullYear();

const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(contactForm);
    const name = data.get("name");
    const email = data.get("email");
    const subject = data.get("subject");
    const message = data.get("message");
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href = `mailto:sumon.sarkar@berkeley.edu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
