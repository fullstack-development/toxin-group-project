import { WordForms } from '../Dropdown.model';

function getCorrectWordForm(count: number, wordForms: WordForms): string {
  const num = Math.abs(count) % 100;
  const n1 = num % 10;
  if (num > 10 && num < 20) return wordForms[2];
  if (n1 > 1 && n1 < 5) return wordForms[1];
  if (n1 === 1) return wordForms[0];
  return wordForms[2];
}

export { getCorrectWordForm };
