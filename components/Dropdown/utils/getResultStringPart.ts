import { WordForms } from '../Dropdown.model';
import { getCorrectWordForm } from './getCorrectWord';

export default function getResultStringPart(count: number, wordForms: WordForms): string {
  return count && `${count} ${getCorrectWordForm(count, wordForms)}`;
}
