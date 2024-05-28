const form = document.getElementById("form");
const fullNameInput = document.getElementById("full_name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const fullNameError = document.getElementById("full_name_error");
const emailError = document.getElementById("email_error");
const messageError = document.getElementById("message_error");
const errorContainer = document.getElementById("errors");
const errorList = errorContainer.querySelector("ul");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  clearErrors();

  let hasError = false;
  let firstErrorInput = null;

  if (!fullNameInput.value) {
    hasError = true;
    fullNameError.textContent = "Please enter your name.";
    createErrorLink(fullNameInput);
    firstErrorInput = firstErrorInput || fullNameInput;
  }

  if (!emailInput.value) {
    hasError = true;
    emailError.textContent = "Please enter your email address";
    createErrorLink(emailInput);
    firstErrorInput = firstErrorInput || emailInput;
  } else if (!emailRegex.test(emailInput.value)) {
    hasError = true;
    emailError.textContent = "Please enter a valid email address";
    createErrorLink(emailInput);
    firstErrorInput = firstErrorInput || emailInput;
  }

  if (!messageInput.value) {
    hasError = true;
    messageError.textContent = "Please enter a message.";
    createErrorLink(messageInput);
    firstErrorInput = firstErrorInput || messageInput;
  }

  if (hasError) {
    errorContainer.classList.remove("hidden");
    firstErrorInput.focus();
  } else {
    // Form is valid, submit the form
    const submitButton = document.getElementById("submit-button");
    submitButton.textContent = "Submitting..."
    form.submit();

    // Get the success message element
  
    // Clear any previous error messages
    clearErrors();

    // Display the success message
    // Move focus to the success message
    successMessage.focus();
  }
});

function clearErrors() {
  fullNameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  errorList.innerHTML = "";
  errorContainer.classList.add("hidden");
}

function createErrorLink(input) {
  const errorLink = document.createElement("li");
  const errorLinkAnchor = document.createElement("a");
  errorLinkAnchor.href = `#${input.id}`;
  errorLinkAnchor.textContent = `${input.labels[0].textContent}: ${input.nextElementSibling.textContent}`;
  errorLinkAnchor.classList.add("underline");
  errorLink.classList.add("mb-4");

  errorLink.appendChild(errorLinkAnchor);
  errorList.appendChild(errorLink);
}
