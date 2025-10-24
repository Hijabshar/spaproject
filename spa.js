document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const successMsg = document.getElementById("successMsg");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    document.querySelectorAll(".error").forEach(el => el.textContent = "");
    successMsg.textContent = "";

    let isValid = true;

    if (name.value.trim() === "") {
      name.nextElementSibling.textContent = "It is necessary to enter your name.";
      isValid = false;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email.value.trim())) {
      email.nextElementSibling.textContent = "Please enter a valid email.";
      isValid = false;
    }

    if (message.value.trim().length < 10) {
      message.nextElementSibling.textContent = "Please write at least 10 characters in the message.";
      isValid = false;
    }

    if (isValid) {
      localStorage.setItem("formData", JSON.stringify({
        name: name.value.trim(),
        email: email.value.trim(),
        message: message.value.trim()
      }));

      window.location.href = "success.html";
    }
  });
});






