export function generateRandomPassword(): string {
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const digits = "0123456789";
  const specialChars = "!@#$%^&*()_";

  // Helper function to get a random character from a string
  function getRandomChar(str: string): string {
    return str[Math.floor(Math.random() * str.length)];
  }

  let password = "";
  password += getRandomChar(lowercase);
  password += getRandomChar(lowercase);
  password += getRandomChar(lowercase);
  password += getRandomChar(specialChars);
  password += getRandomChar(uppercase);
  password += getRandomChar(digits);
  password += getRandomChar(lowercase);
  password += getRandomChar(uppercase);
  password += getRandomChar(lowercase);
  password += getRandomChar(digits);

  return password;
}

export function generateRandomEmail(): string {
  const userName = Math.random().toString(36).substring(7);
  return `${userName}@testdomain.com`;
}
