const input = document.getElementById("password");
const strength = document.getElementById("strength");
const generateBtn = document.getElementById("generate");
const copyBtn = document.getElementById("copy");
const copiedMsg = document.getElementById("copied");

// элементы правил
const lengthLi = document.getElementById("length");
const upperLi = document.getElementById("upper");
const lowerLi = document.getElementById("lower");
const numberLi = document.getElementById("number");
const symbolLi = document.getElementById("symbol");

input.addEventListener("input", () => {
  const val = input.value;
  let score = 0;

  // Проверки
  if (val.length >= 12) {
    score++;
    lengthLi.textContent = "✅ At least 12 characters";
  } else {
    lengthLi.textContent = "❌ At least 12 characters";
  }

  if (/[A-Z]/.test(val)) {
    score++;
    upperLi.textContent = "✅ Uppercase letters (A-Z)";
  } else {
    upperLi.textContent = "❌ Uppercase letters (A-Z)";
  }

  if (/[a-z]/.test(val)) {
    score++;
    lowerLi.textContent = "✅ Lowercase letters (a-z)";
  } else {
    lowerLi.textContent = "❌ Lowercase letters (a-z)";
  }

  if (/\d/.test(val)) {
    score++;
    numberLi.textContent = "✅ Numbers (0-9)";
  } else {
    numberLi.textContent = "❌ Numbers (0-9)";
  }

  if (/[^A-Za-z0-9]/.test(val)) {
    score++;
    symbolLi.textContent = "✅ Special characters (!@#$...)";
  } else {
    symbolLi.textContent = "❌ Special characters (!@#$...)";
  }

  // Статус
  if (score <= 2) {
    strength.textContent = "Weak password";
    strength.className = "weak";
  } else if (score === 3 || score === 4) {
    strength.textContent = "Medium strength";
    strength.className = "medium";
  } else {
    strength.textContent = "Strong password!";
    strength.className = "strong";
  }
});

// генерация
generateBtn.addEventListener("click", () => {
  const length = 16;
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=~";
  let password = "";
  for (let i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  input.value = password;
  input.dispatchEvent(new Event("input"));
});

// копирование
copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(input.value).then(() => {
    copiedMsg.style.display = "block";
    setTimeout(() => {
      copiedMsg.style.display = "none";
    }, 2000);
  });
});
