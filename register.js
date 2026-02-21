document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const role = document.getElementById("role").value;

  if (!name || !email || !password || !confirmPassword || !role) {
    alert("Please fill all fields");
    return;
  }

  if (!email.endsWith("@gmail.com")) {
    alert("Only @gmail.com email allowed");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  const user = { name, email, role };
  localStorage.setItem("registeredUser", JSON.stringify(user));

  alert("Registration successful!");
  window.location.href = "login.html";
});