import { WordForms } from '../Dropdown.model';
import { getCorrectWordForm } from './getCorrectWord';

function getResultStringPart(count: number, wordForms: WordForms): string {
  return count && `${count} ${getCorrectWordForm(count, wordForms)}`;
}

export { getResultStringPart };
