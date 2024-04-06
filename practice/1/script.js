const passwordInput = document.getElementById("password-input");
const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const securePassword = document.getElementById("secure-password");
  const averagePassword = document.getElementById("average-password");
  const insecurePassword = document.getElementById("insecure-password");
  const badPassword = document.getElementById("bad-password");

  securePassword.style.display = "none";
  averagePassword.style.display = "none";
  insecurePassword.style.display = "none";
  badPassword.style.display = "none";

  let counter = 0;
  if (/[a-z]/.test(passwordInput.value)) {
    counter++;
  }
  if (/[A-Z]/.test(passwordInput.value)) {
    counter++;
  }
  if (/[0-9]/.test(passwordInput.value)) {
    counter++;
  }
  if (/[\+\-\*\?\%\&\$]/.test(passwordInput.value)) {
    counter++;
  }
  switch (counter) {
    case 1:
      badPassword.style.display = "block";
      break;
    case 2:
      insecurePassword.style.display = "block";
      break;
    case 3:
      averagePassword.style.display = "block";
      break;
    case 4:
      securePassword.style.display = "block";
      break;
    default:
      break;
  }
});
