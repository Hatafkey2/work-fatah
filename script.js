const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    formMessage.textContent = "Sending message...";

    emailjs
      .sendForm(
        "portfolio_service",
        "template_imr58u8",
        contactForm
      )
      .then(() => {
        formMessage.textContent =
          "✅ Message sent successfully!";
        contactForm.reset();
      })
      .catch(() => {
        formMessage.textContent =
          "❌ Failed to send message. Please try again.";
      });
  });
}