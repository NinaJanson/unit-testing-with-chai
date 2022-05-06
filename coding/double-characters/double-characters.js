function doubleCharacters(word) {
  let newWord = "";

  for (let i = 0; i <= word.length; i++) {
    newWord += word.charAt(i);
    newWord += word.charAt(i);
  }
  return newWord;
}
