document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const role = document.getElementById("role").value;

  // Empty check
  if (email === "" || password === "" || role === "") {
    alert("Please fill all fields");
    return;
  }

  // Email must end with @gmail.com
  if (!email.endsWith("@gmail.com")) {
    alert("Email must be a valid @gmail.com address");
    return;
  }

  // Password minimum 6 characters
  if (password.length < 6) {
    alert("Password must be at least 6 characters long");
    return;
  }

  // Dummy login success
  localStorage.setItem("loggedInUser", email);
  localStorage.setItem("userRole", role);

  // Role based redirect
  if (role === "manager") {
    window.location.href = "dashboard.html";
  } else if (role === "dispatcher") {
    window.location.href = "dispatcher-dashboard.html";
  }
});