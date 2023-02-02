const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", function(event){  //or function(e)
  event.preventDefault();

  const loginFormData = new FormData(loginForm);
  console.log(loginFormData);
  const name = loginFormData.get("astronautName");  //name attribute value
  const email = loginFormData.get("astronautEmail");
  const password = loginFormData.get("astronautPassword");
  console.log(name, email, password);
})