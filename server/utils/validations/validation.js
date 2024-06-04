// utils/validation.js

// Validate email format
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Validate phone number format (numbers only and 13 characters long)
const validatePhoneNumber = (phoneNumber) => {
  const phoneRegex = /^\d{13}$/;
  return phoneRegex.test(phoneNumber);
};

module.exports = {
  validateEmail,
  validatePhoneNumber,
};
