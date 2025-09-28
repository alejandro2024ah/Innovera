document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('status').innerText = "Thank you for contacting Innovera Digital Marketing! We'll get back to you soon.";
  this.reset();
});