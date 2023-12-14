// Get the input element
const inputField = document.querySelector('.feedback-form');

// Add an event listener for input changes
inputField.addEventListener('input', function (event) {
  // Get the current value of the input field
  const { email, message } = event.currentTarget;

  // Save the field value to local storage
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({ email: email.value, message: message.value })
  );
});

// On page load, retrieve the saved value from local storage and populate the input field
window.addEventListener('load', function () {
  // Retrieve the saved value from local storage
  const savedValue = JSON.parse(localStorage.getItem('feedback-form-state'));
  const { email, message } = inputField;
  // Check if a saved value exists and populate the input field
  if (savedValue) {
    email.value = savedValue.email;
    message.value = savedValue.message;
  }
});

inputField.addEventListener('submit', function (event) {
  event.preventDefault;
  localStorage.removeItem('feedback-form-state');
  event.currentTarget.reset();
});
