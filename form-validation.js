const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const errorName = document.getElementById("error-name");
const errorEmail = document.getElementById("error-email");
const errorMessage = document.getElementById("error-message");

const toast = document.getElementById("toast");

function isValidName(nameInput) {
  const nameRegex = /^[A-Za-zÀ-ÿ ]+$/;
  return nameRegex.test(nameInput);
}

function isValidEmail(emailInput) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(emailInput);
}

function showToast(message, isSuccess = true) {
  toast.textContent = message;
  toast.style.backgroundColor = isSuccess ? "#2dd912f2" : "#cc2727f2";
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

function clearErrors() {
  [nameInput, emailInput, messageInput].forEach((input) =>
    input.classList.remove("input-error")
  );
  errorName.textContent = "";
  errorEmail.textContent = "";
  errorMessage.textContent = "";
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  clearErrors();
  let isValid = true;

  if (nameInput.value.trim() === "") {
    nameInput.classList.add("input-error");
    errorName.textContent = "O campo Nome é obrigatório.";
    isValid = false;
  } else if (!isValidName(nameInput.value.trim())) {
    nameInput.classList.add("input-error");
    errorName.textContent = "Insira um nome válido (somente letras e espaços).";
    isValid = false;
  }

  if (emailInput.value.trim() === "") {
    emailInput.classList.add("input-error");
    errorEmail.textContent = "Por favor, preencha o campo Email.";
    isValid = false;
  } else if (!isValidEmail(emailInput.value.trim())) {
    emailInput.classList.add("input-error");
    errorEmail.textContent = "Por favor, insira um email válido.";
    isValid = false;
  }

  if (messageInput.value.trim() === "") {
    messageInput.classList.add("input-error");
    errorMessage.textContent = "O campo Mensagem é obrigatório.";
    isValid = false;
  }

  if (isValid) {
    showToast("Formulário enviado com sucesso!");
    form.reset();
  } else {
    showToast("Por favor, corrija os erros no formulário.", false);
  }
});
