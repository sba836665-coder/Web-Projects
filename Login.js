document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form-box");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop default submission until validation passes

    const email = document.getElementById("Email").value.trim();
    const password = document.getElementById("Password").value;

    // Email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
    if (!email.match(emailPattern)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Strong password validation
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!password.match(passwordPattern)) {
      alert(
        "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character."
      );
      return;
    }

    // If all validations pass
    alert("Login successful!");
    window.location.href = "index.html"; // redirect after success
  });
});