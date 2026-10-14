// Institutional logos for Research Experience and Undergraduate Research Training.
// Uses the institution names already on the homepage; no text or dates are changed.
document.addEventListener('DOMContentLoaded', () => {
  const logos = [
    ['University of California, Berkeley, CA', 'uc-berkeley.svg', 'UC Berkeley'],
    ['Yale University, New Haven, CT', 'yale.jpeg', 'Yale University'],
    ['University of Texas at Dallas, Richardson, TX', 'ut-dallas.jpeg', 'UT Dallas'],
    ['University of Illinois Chicago, Chicago, IL', 'uic.svg', 'University of Illinois Chicago'],
    ['Indian Institute of Technology Kanpur, India', 'iit-kanpur.jpeg', 'IIT Kanpur'],
    ['Indian Association for the Cultivation of Science, India', 'iacs.png', 'IACS'],
    ['Indian Institute of Technology Guwahati, India', 'iit-guwahati.jpeg', 'IIT Guwahati']
  ];
  const section = [...document.querySelectorAll('.about-on-home section')].find(s => s.querySelector('.subhead')?.textContent.trim() === 'Research Experience');
  if (!section) return;
  for (const [name, filename, label] of logos) {
    const candidates = [...section.querySelectorAll('.experience-entry strong, .experience-entry > div:not(.date)')];
    const node = candidates.find(n => n.textContent.trim().startsWith(name) && (n.tagName === 'STRONG' || !n.querySelector('strong')));
    if (!node || node.querySelector('.institution-logo')) continue;
    const img = document.createElement('img');
    img.className = 'institution-logo';
    img.src = 'assets/institutions/' + filename;
    img.alt = label + ' logo';
    img.loading = 'lazy';
    if (node.tagName === 'STRONG') {
      node.prepend(img);
      node.classList.add('institution-with-logo');
    } else {
      node.prepend(img);
      node.classList.add('institution-with-logo-block');
    }
  }
});
