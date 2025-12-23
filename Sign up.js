document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form-box");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop default submission until validation passes

    const username = document.getElementById("Username").value.trim();
    const email = document.getElementById("Email").value.trim();
    const password = document.getElementById("Password").value;
    const confirmPassword = document.getElementById("ConfirmPassword").value;
    const terms = document.querySelector(".checkbox input").checked;

    // Username validation
    if (username.length < 3) {
      alert("Username must be at least 3 characters long.");
      return;
    }

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

    // Confirm password validation
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Terms and conditions
    if (!terms) {
      alert("You must agree to the terms and conditions.");
      return;
    }

    // If all validations pass
    alert("Sign Up successful!");
    window.location.href = "Login.html"; // redirect after success
  });
});