// 1. Get DOM elements
const passwordDisplay = document.getElementById('password');
const lengthInput = document.getElementById('length');
const lengthValue = document.getElementById('lengthValue');
const uppercaseCheck = document.getElementById('uppercase');
const lowercaseCheck = document.getElementById('lowercase');
const numbersCheck = document.getElementById('numbers');
const symbolsCheck = document.getElementById('symbols');

// 2. Character sets
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

// 3. Update length display
lengthInput.addEventListener('input', () => {
  lengthValue.textContent = lengthInput.value;
});

// 4. Function to generate password
function generatePassword() {
  const length = Number(lengthInput.value);
  let charPool = '';
  
  // 5. Build character pool based on selections
  if (uppercaseCheck.checked) charPool += uppercaseChars;
  if (lowercaseCheck.checked) charPool += lowercaseChars;
  if (numbersCheck.checked) charPool += numberChars;
  if (symbolsCheck.checked) charPool += symbolChars;
  
  // 6. Validate at least one option is selected
  if (charPool === '') {
    passwordDisplay.textContent = 'Select at least one option!';
    return;
  }
  
  // 7. Generate random password
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charPool.length);
    password += charPool[randomIndex];
  }
  
  passwordDisplay.textContent = password;
}

// 8. Function to copy password to clipboard
function copyPassword() {
  const password = passwordDisplay.textContent;
  if (password === 'Click Generate!' || password === 'Select at least one option!') {
    alert('Nothing to copy!');
    return;
  }
  
  navigator.clipboard.writeText(password)
    .then(() => alert('Password copied to clipboard!'))
    .catch(() => alert('Failed to copy password!'));
}