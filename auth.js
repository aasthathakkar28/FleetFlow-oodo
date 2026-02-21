function register() {
  localStorage.setItem("auth", "true");
  window.location.href = "dashboard.html";
}

function login() {
  window.location.href = "dashboard.html";
}

function logout() {
  localStorage.removeItem("auth");
  window.location.href = "index.html";
}