const form = document.getElementById("form");
const email = document.getElementById("email");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  validateEmail();
});

function validateEmail() {
  if (email.value.trim() === "" || email.value.trim() == null) {
    return errorMessage(email, "Email cannot be empty");
  } else if (isEmailValid(email.value)) {
    return setSuccess(email);
  } else {
    setError(email, "Provide a valid email");
  }
}

function errorMessage(element, errorMessage) {
  const parent = element.parentElement;
  parent.classList.add("error");
  const small = parent.querySelector("small");
  small.textContent = errorMessage;
}

function setSuccess(element) {
  const parent = element.parentElement;
  if (parent.classList.contains("error")) {
    parent.classList.remove("error");
  }
  parent.classList.add("success");
}

function isEmailValid(email) {
  const reg =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return reg.test(email);
}
