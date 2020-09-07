type TextForms = [string, string, string];

function getCorrectWordForm(count: number, textForms: TextForms) {
  const num = Math.abs(count) % 100;
  const n1 = num % 10;
  if (num > 10 && num < 20) {
    return textForms[2];
  }
  if (n1 > 1 && n1 < 5) {
    return textForms[1];
  }
  if (n1 === 1) {
    return textForms[0];
  }
  return textForms[2];
}

export { getCorrectWordForm, TextForms };
