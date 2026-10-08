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

const themeButtons = document.querySelectorAll(".theme-filter");
const publicationEntries = document.querySelectorAll(".pub-entry[data-keywords]");
const filterCount = document.querySelector(".filter-count");

function applyPublicationFilter(keyword) {
  let visible = 0;
  publicationEntries.forEach((entry) => {
    const matches = keyword === "all" || entry.dataset.keywords.split("|").includes(keyword);
    entry.hidden = !matches;
    if (matches) visible += 1;
  });
  themeButtons.forEach((button) => {
    const active = button.dataset.filter === keyword;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  if (filterCount) {
    filterCount.textContent = keyword === "all"
      ? `Showing ${visible} publications`
      : `Showing ${visible} publication${visible === 1 ? "" : "s"} tagged “${keyword}”`;
  }
}

themeButtons.forEach((button) => {
  button.addEventListener("click", () => applyPublicationFilter(button.dataset.filter));
});
document.querySelectorAll(".pub-tag").forEach((tag) => {
  tag.addEventListener("click", () => applyPublicationFilter(tag.dataset.filter));
});

