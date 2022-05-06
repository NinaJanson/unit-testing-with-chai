function positiveMultiply(a, b) {
  // add your solution here
  const multiply = a * b;
  if (multiply < 0) {
    return -multiply;
  }

  return multiply;
}
