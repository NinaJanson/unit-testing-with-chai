function analyzePassword(password) {
  let hasNumber = /\d/;
  let char = /[a-zA-Z]+/g;

  const pass = {
    length: password.length,
    hasNumbers: hasNumber.test(password),
    hasCharacters: char.test(password),
  };

  return pass;
}
